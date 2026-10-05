import numpy as np
import plotly.graph_objects as go
from variables import x, y

DOA_ACCENT = "#6be58c"
DOA_FILL = "rgba(107, 229, 140, 0.16)"
DOA_GRID = "rgba(151, 181, 164, 0.22)"
DOA_AXIS = "#60766a"
DOA_TEXT = "#dce9e1"


def polar_layout(rotation, direction="counterclockwise"):
    # Use one numeric azimuth scale for both Polar and Compass views. The
    # circle represents 0°–359°; 360° is intentionally omitted because it is
    # the same direction as 0°.
    tick_values = list(range(0, 360, 30))
    tick_text = [f"{angle}°" for angle in tick_values]
    return dict(
        bgcolor="rgba(3, 8, 6, 0.98)",
        radialaxis=dict(
            gridcolor=DOA_GRID,
            gridwidth=1,
            linecolor=DOA_AXIS,
            showline=False,
            tickfont=dict(size=10, color="#82968b"),
            ticks="",
            angle=45,
        ),
        angularaxis=dict(
            rotation=rotation,
            direction=direction,
            gridcolor=DOA_GRID,
            gridwidth=1,
            linecolor=DOA_AXIS,
            tickmode="array",
            tickvals=tick_values,
            ticktext=tick_text,
            tickfont=dict(size=13, color=DOA_TEXT, family="Segoe UI, Arial, sans-serif"),
            ticks="",
        ),
    )


def plot_doa(app, web_interface, doa_fig):
    if web_interface.reset_doa_graph_flag:
        doa_fig.data = []
        # Just generate with junk data initially, as the spectrum array may not
        # be ready yet if we have sqeulching active etc.
        if True:  # web_interface.doa_thetas is not None:
            # --- Linear plot ---
            if web_interface._doa_fig_type == "Linear":
                # Plot traces
                doa_fig.add_trace(
                    go.Scattergl(
                        x=x,  # web_interface.doa_thetas,
                        y=y,
                        mode="lines",
                        line=dict(color=DOA_ACCENT, width=2),
                        hovertemplate="Angle %{x:.1f}°<br>Response %{y:.2f}<extra></extra>",
                    )
                )

                doa_fig.update_xaxes(
                    title_text="Incident angle [deg]",
                    color=DOA_TEXT,
                    title_font_size=13,
                    tickfont_size=11,
                    gridcolor=DOA_GRID,
                    zeroline=False,
                    mirror=True,
                    ticks="outside",
                    showline=True,
                )
                doa_fig.update_yaxes(
                    title_text="Amplitude [dB]",
                    color=DOA_TEXT,
                    title_font_size=13,
                    tickfont_size=11,
                    gridcolor=DOA_GRID,
                    zeroline=False,
                    # range=[-5, 5],
                    mirror=True,
                    ticks="outside",
                    showline=True,
                )
            # --- Polar plot ---
            elif web_interface._doa_fig_type == "Polar":
                label = "DOA Angle"  # web_interface.doa_labels[i]
                doa_fig.add_trace(
                    go.Scatterpolargl(
                        theta=x,  # web_interface.doa_thetas,
                        r=y,  # doa_result,
                        name=label,
                        fill="toself",
                        fillcolor=DOA_FILL,
                        line=dict(color=DOA_ACCENT, width=2.5),
                        hovertemplate="Angle %{theta:.1f}°<br>Response %{r:.2f}<extra></extra>",
                    )
                )

                doa_fig.update_layout(
                    polar=polar_layout(90),
                    showlegend=False,
                    margin=go.layout.Margin(l=44, r=44, t=28, b=28),
                    font=dict(color=DOA_TEXT, family="Segoe UI, Arial, sans-serif"),
                )

            # --- Compass  ---
            elif web_interface._doa_fig_type == "Compass":
                doa_fig.update_layout(
                    polar=polar_layout(
                        90 + web_interface.compass_offset,
                        direction="clockwise",
                    ),
                    showlegend=False,
                    margin=go.layout.Margin(l=44, r=44, t=28, b=28),
                    font=dict(color=DOA_TEXT, family="Segoe UI, Arial, sans-serif"),
                )

                label = "DOA Angle"

                doa_fig.add_trace(
                    go.Scatterpolargl(
                        theta=x,  # (360-web_interface.doa_thetas+web_interface.compass_offset)%360,
                        r=y,  # doa_result,
                        name=label,
                        fill="toself",
                        fillcolor=DOA_FILL,
                        line=dict(color=DOA_ACCENT, width=2.5),
                        hovertemplate="Bearing %{theta:.1f}°<br>Response %{r:.2f}<extra></extra>",
                    )
                )

            doa_fig.update_layout(
                paper_bgcolor="rgba(0,0,0,0)",
                plot_bgcolor="rgba(0,0,0,0)",
                hoverlabel=dict(
                    bgcolor="#101d17",
                    bordercolor=DOA_ACCENT,
                    font=dict(color="#eef5f0", size=12),
                ),
            )

        web_interface.reset_doa_graph_flag = False
    else:
        update_data = []
        doa_max_str = ""
        if web_interface.doa_thetas is not None and web_interface.doa_results[0].size > 0:
            doa_angle = float(web_interface.doas[0]) % 360
            doa_max_str = f"{doa_angle:g}°"
            bearing_rotation = -doa_angle

            thetas = web_interface.doa_thetas
            result = web_interface.doa_results[0]

            update_data = dict(x=[thetas], y=[result])

            if web_interface._doa_fig_type == "Polar":
                thetas = np.append(web_interface.doa_thetas, web_interface.doa_thetas[0])
                result = np.append(web_interface.doa_results[0], web_interface.doa_results[0][0])
                update_data = dict(theta=[thetas], r=[result])
            elif web_interface._doa_fig_type == "Compass":
                thetas = np.append(web_interface.doa_thetas, web_interface.doa_thetas[0])
                result = np.append(web_interface.doa_results[0], web_interface.doa_results[0][0])
                compass_bearing = (360 - web_interface.doas[0] + web_interface.compass_offset) % 360
                doa_max_str = f"{compass_bearing:.1f}°"
                bearing_rotation = (compass_bearing - web_interface.compass_offset) % 360
                update_data = dict(theta=[(360 - thetas + web_interface.compass_offset) % 360], r=[result])

            app.push_mods(
                {
                    "doa-graph": {"extendData": [update_data, [0], len(thetas)]},
                    "body_doa_max": {"children": doa_max_str},
                    "doa-bearing-ray": {
                        "style": {
                            "display": "block" if web_interface._doa_fig_type in ("Polar", "Compass") else "none",
                            "transform": f"translateX(-50%) rotate({bearing_rotation:.2f}deg)",
                        }
                    },
                }
            )
