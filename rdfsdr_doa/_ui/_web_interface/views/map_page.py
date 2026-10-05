import dash_core_components as dcc
import dash_html_components as html

from kraken_web_map import map_display_values


def get_map_page_layout(map_figure, map_state):
    values = map_display_values(map_state)
    return html.Div(
        [
            html.Div(
                [
                    html.Div("Direction Finding", className="page-kicker"),
                    html.H1("Bearing Map", className="page-title"),
                    html.P(
                        "Station location and live DoA bearing overlaid on an operational map.",
                        className="page-description",
                    ),
                ],
                className="page-heading",
            ),
            html.Div(
                [
                    html.Div(
                        [
                            html.Span("STATION LOCATION", className="map-stat-label"),
                            html.Div(
                                [
                                    html.Label(
                                        [
                                            html.Span("LATITUDE"),
                                            dcc.Input(
                                                id="map-latitude-input",
                                                type="number",
                                                value=round(float(map_state["latitude"]), 6),
                                                step=0.000001,
                                                className="map-coordinate-input",
                                            ),
                                        ],
                                        className="map-coordinate-field",
                                    ),
                                    html.Label(
                                        [
                                            html.Span("LONGITUDE"),
                                            dcc.Input(
                                                id="map-longitude-input",
                                                type="number",
                                                value=round(float(map_state["longitude"]), 6),
                                                step=0.000001,
                                                className="map-coordinate-input",
                                            ),
                                        ],
                                        className="map-coordinate-field",
                                    ),
                                    html.Button(
                                        "Apply Static Location",
                                        id="btn-map-location",
                                        className="btn map-location-button",
                                        n_clicks=0,
                                    ),
                                ],
                                className="map-coordinate-controls",
                            ),
                            html.Small(
                                values["location_status"],
                                id="map-location-status",
                                className="map-stat-meta",
                            ),
                        ],
                        className="map-stat map-location-stat",
                    ),
                    html.Div(
                        [
                            html.Span("DOA BEARING", className="map-stat-label"),
                            html.Strong(values["bearing"], id="map-bearing-value", className="map-stat-value map-bearing"),
                            html.Small("LIVE DIRECTION", className="map-stat-meta"),
                        ],
                        className="map-stat",
                    ),
                    html.Div(
                        [
                            html.Span("SOURCE FREQUENCY", className="map-stat-label"),
                            html.Strong(values["frequency"], id="map-frequency-value", className="map-stat-value"),
                            html.Small("ACTIVE VFO", className="map-stat-meta"),
                        ],
                        className="map-stat",
                    ),
                ],
                className="map-status-strip",
            ),
            html.Div(
                [
                    html.Div(
                        [
                            html.Span("Operational Map", className="panel-title"),
                            html.Span("LIVE STATION / BEARING OVERLAY", className="panel-meta"),
                        ],
                        className="panel-heading",
                    ),
                    dcc.Graph(
                        id="rdf-map-graph",
                        className="rdf-map-graph",
                        figure=map_figure,
                        config={
                            "displaylogo": False,
                            "scrollZoom": True,
                            "modeBarButtonsToRemove": ["select2d", "lasso2d"],
                        },
                    ),
                    html.Div(
                        [
                            html.Span([html.I(className="legend-swatch legend-station"), "RDF station"]),
                            html.Span([html.I(className="legend-swatch legend-bearing"), "DoA bearing ray"]),
                            html.Span("Direction guide only — not target distance", className="map-range-note"),
                        ],
                        className="doa-chart-footer map-footer",
                    ),
                ],
                className="monitor-panel map-panel",
            ),
        ],
        className="page-frame map-page",
    )
