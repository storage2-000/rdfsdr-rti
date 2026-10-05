import dash_core_components as dcc
import dash_html_components as html

# isort: off
from maindash import spectrum_fig, waterfall_fig, web_interface

# isort: on

def get_spectrum_page_layout():
    return html.Div(
        [
            html.Div(
                [
                    html.Div("Signal Monitoring", className="page-kicker"),
                    html.H1("RF Spectrum", className="page-title"),
                    html.P(
                        "Real-time receiver spectrum and waterfall history.",
                        className="page-description",
                    ),
                ],
                className="page-heading",
            ),
            html.Div(
                [
                    html.Div(
                        [
                            html.Span("RF Spectrum", className="panel-title"),
                            html.Div(
                                [
                                    html.Div(
                                        [
                                            html.Span("CENTER [MHz]", className="spectrum-frequency-label"),
                                            dcc.Input(
                                                id="daq_center_freq",
                                                value=web_interface.module_receiver.daq_center_freq / 10**6,
                                                type="number",
                                                min=24,
                                                debounce=True,
                                                className="spectrum-frequency-input",
                                            ),
                                        ],
                                        className="spectrum-frequency-field",
                                    ),
                                    html.Button(
                                        "Update",
                                        id="btn-update_rx_param",
                                        className="spectrum-update-button",
                                    ),
                                    dcc.Input(
                                        id="daq_rx_gain",
                                        value=web_interface.module_receiver.daq_rx_gain,
                                        type="hidden",
                                    ),
                                    html.Div(id="agc_warning", style={"display": "none"}),
                                ],
                                className="spectrum-heading-controls",
                            ),
                        ],
                        className="panel-heading spectrum-panel-heading",
                    ),
                    dcc.Graph(
                        id="spectrum-graph",
                        className="spectrum-plot",
                        figure=spectrum_fig,
                    ),
                    dcc.Graph(
                        id="waterfall-graph",
                        className="waterfall-plot integrated-waterfall-plot",
                        figure=waterfall_fig,
                    ),
                ],
                className="monitor-panel spectrum-monitor-panel",
            ),
        ],
        className="page-frame spectrum-page monitor-stack",
    )


layout = get_spectrum_page_layout()
