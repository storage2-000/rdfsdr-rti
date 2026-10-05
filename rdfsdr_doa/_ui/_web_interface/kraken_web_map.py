import math
import time

import plotly.graph_objects as go


MAP_RAY_LENGTH_KM = 25.0
DEFAULT_STATIC_LOCATION = {"lat": -6.932276, "lon": 107.660669}
DEFAULT_MAP_CENTER = DEFAULT_STATIC_LOCATION.copy()
_last_map_push = 0.0


def _destination_point(latitude, longitude, bearing, distance_km=MAP_RAY_LENGTH_KM):
    earth_radius_km = 6371.0088
    angular_distance = distance_km / earth_radius_km
    bearing_rad = math.radians(bearing)
    latitude_rad = math.radians(latitude)
    longitude_rad = math.radians(longitude)

    end_latitude = math.asin(
        math.sin(latitude_rad) * math.cos(angular_distance)
        + math.cos(latitude_rad) * math.sin(angular_distance) * math.cos(bearing_rad)
    )
    end_longitude = longitude_rad + math.atan2(
        math.sin(bearing_rad) * math.sin(angular_distance) * math.cos(latitude_rad),
        math.cos(angular_distance) - math.sin(latitude_rad) * math.sin(end_latitude),
    )
    return math.degrees(end_latitude), math.degrees(end_longitude)


def _map_state(web_interface):
    signal_processor = web_interface.module_signal_processor
    configured_latitude = float(signal_processor.latitude or 0.0)
    configured_longitude = float(signal_processor.longitude or 0.0)
    has_configured_location = (
        -90 <= configured_latitude <= 90
        and -180 <= configured_longitude <= 180
        and not (abs(configured_latitude) < 1e-9 and abs(configured_longitude) < 1e-9)
    )
    using_default_location = not has_configured_location
    latitude = DEFAULT_STATIC_LOCATION["lat"] if using_default_location else configured_latitude
    longitude = DEFAULT_STATIC_LOCATION["lon"] if using_default_location else configured_longitude

    bearing = None
    # Mirror the polar chart: whenever a valid DoA result is available, draw
    # the same bearing on the map. Do not depend on the configuration flag,
    # which can briefly lag behind the live result during page navigation.
    if web_interface.doas:
        raw_bearing = float(web_interface.doas[0]) % 360
        if web_interface._doa_fig_type == "Compass":
            bearing = (360 - raw_bearing + web_interface.compass_offset) % 360
        else:
            bearing = raw_bearing

    output_vfo = max(int(signal_processor.output_vfo), 0)
    try:
        frequency_hz = float(signal_processor.vfo_freq[output_vfo])
    except (IndexError, TypeError, ValueError):
        frequency_hz = float(web_interface.module_receiver.daq_center_freq)

    return {
        "latitude": latitude,
        "longitude": longitude,
        "has_location": True,
        "has_configured_location": has_configured_location,
        "using_default_location": using_default_location,
        "bearing": bearing,
        "frequency_mhz": frequency_hz / 1e6,
        "station_id": signal_processor.station_id,
    }


def build_map_figure(web_interface):
    state = _map_state(web_interface)
    figure = go.Figure()

    if state["has_location"]:
        latitude = state["latitude"]
        longitude = state["longitude"]
        figure.add_trace(
            go.Scattermapbox(
                lat=[latitude],
                lon=[longitude],
                mode="markers+text",
                marker=dict(size=15, color="#6be58c"),
                text=[state["station_id"]],
                textposition="top right",
                textfont=dict(color="#eef5f0", size=12),
                hovertemplate=(
                    "RDF Station<br>Lat %{lat:.6f}<br>Lon %{lon:.6f}<extra></extra>"
                ),
                name="RDF Station",
            )
        )

        if state["bearing"] is not None:
            end_latitude, end_longitude = _destination_point(
                latitude,
                longitude,
                state["bearing"],
            )
            figure.add_trace(
                go.Scattermapbox(
                    lat=[latitude, end_latitude],
                    lon=[longitude, end_longitude],
                    mode="lines",
                    line=dict(width=7, color="#ff9f2f"),
                    hoverinfo="skip",
                    name="DoA Bearing",
                )
            )
            figure.add_trace(
                go.Scattermapbox(
                    lat=[end_latitude],
                    lon=[end_longitude],
                    mode="markers",
                    marker=dict(size=11, color="#ff9f2f"),
                    hovertemplate=(
                        f"Bearing {state['bearing']:.1f}°<br>Direction guide only"
                        "<extra></extra>"
                    ),
                    name="Bearing Direction",
                )
            )

        map_center = {"lat": latitude, "lon": longitude}
        map_zoom = 9.5
    else:
        map_center = DEFAULT_MAP_CENTER
        map_zoom = 3.8
        figure.add_trace(
            go.Scattermapbox(
                lat=[map_center["lat"]],
                lon=[map_center["lon"]],
                mode="markers",
                marker=dict(size=1, color="rgba(0,0,0,0)"),
                hoverinfo="skip",
                showlegend=False,
            )
        )

    figure.update_layout(
        mapbox=dict(style="open-street-map", center=map_center, zoom=map_zoom),
        margin=dict(l=0, r=0, t=0, b=0),
        paper_bgcolor="#030806",
        plot_bgcolor="#030806",
        showlegend=False,
        hoverlabel=dict(
            bgcolor="#101d17",
            bordercolor="#6be58c",
            font=dict(color="#eef5f0", size=12),
        ),
        uirevision="rdf-operational-map",
    )
    return figure, state


def map_display_values(state):
    if state["has_location"]:
        position = f"{state['latitude']:.6f}, {state['longitude']:.6f}"
        location_status = "DEFAULT STATIC" if state["using_default_location"] else "POSITION READY"
    else:
        position = "---"
        location_status = "LOCATION NOT CONFIGURED"

    bearing = "---°" if state["bearing"] is None else f"{state['bearing']:.1f}°"
    frequency = f"{state['frequency_mhz']:.3f} MHz"
    return {
        "position": position,
        "location_status": location_status,
        "bearing": bearing,
        "frequency": frequency,
    }


def refresh_map(app, web_interface, force=False):
    global _last_map_push
    now = time.monotonic()
    if not force and now - _last_map_push < 0.25:
        return

    figure, state = build_map_figure(web_interface)
    values = map_display_values(state)
    app.push_mods(
        {
            "rdf-map-graph": {"figure": figure},
            "map-location-status": {"children": values["location_status"]},
            "map-bearing-value": {"children": values["bearing"]},
            "map-frequency-value": {"children": values["frequency"]},
        }
    )
    _last_map_push = now
