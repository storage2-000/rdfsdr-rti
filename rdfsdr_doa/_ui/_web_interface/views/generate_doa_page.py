import dash_core_components as dcc
import dash_html_components as html
from variables import doa_fig

layout = html.Div(
    [
        html.Div(
            [
                html.Div("Direction Finding", className="page-kicker"),
                html.H1("Bearing Solution", className="page-title"),
                html.P(
                    "Spatial direction estimate derived from the coherent antenna array.",
                    className="page-description",
                ),
            ],
            className="page-heading",
        ),
        html.Div(
            [
                html.Div(
                    [
                        html.Div("PRIMARY BEARING", id="label_doa_max", className="bearing-label"),
                        html.Div("---°", id="body_doa_max", className="bearing-value"),
                        html.Div("ARRAY RELATIVE", className="bearing-meta"),
                    ],
                    className="bearing-primary",
                ),
                html.Div(
                    [
                        html.Div([html.Span("REFERENCE"), html.Strong("ARRAY")], className="bearing-detail-row"),
                        html.Div([html.Span("COVERAGE"), html.Strong("360°")], className="bearing-detail-row"),
                        html.Div(
                            [html.Span("DISPLAY"), html.Strong("REAL-TIME")],
                            className="bearing-detail-row",
                        ),
                    ],
                    className="bearing-details",
                ),
            ],
            className="bearing-readout",
        ),
        html.Div(
            [
                html.Div(
                    [
                        html.Span("Polar Bearing Map", className="panel-title"),
                        html.Span("0°–359° AZIMUTH / RESPONSE", className="panel-meta"),
                    ],
                    className="panel-heading",
                ),
                html.Div(
                    [
                        dcc.Graph(
                            id="doa-graph",
                            className="doa-chart",
                            figure=doa_fig,  # fig_dummy #doa_fig #fig_dummy
                        ),
                        html.Div(
                            id="doa-bearing-ray",
                            className="doa-bearing-ray",
                            style={"display": "none"},
                        ),
                    ],
                    className="doa-chart-stage",
                ),
                html.Div(
                    [
                        html.Span([html.I(className="legend-swatch legend-bearing"), "Primary bearing"]),
                        html.Span([html.I(className="legend-swatch legend-response"), "Response envelope"]),
                        html.Span([html.I(className="legend-swatch legend-grid"), "Azimuth reference"]),
                    ],
                    className="doa-chart-footer",
                ),
            ],
            className="monitor-panel doa-panel",
        ),
    ],
    className="page-frame doa-page",
)
