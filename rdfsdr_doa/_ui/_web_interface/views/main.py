import dash_core_components as dcc
import dash_html_components as html
from variables import tak_folder_exists

layout = html.Div(
    [
        dcc.Location(id="url", children="/config", refresh=True),
        html.Div(
            [
                html.Div(
                    [
                        html.Div(
                            html.Img(
                                src="/assets/logo.png",
                                alt="Radio Direction Finder insignia",
                                className="brand-logo",
                            ),
                            className="brand-logo-frame",
                        ),
                        html.Div(
                            [
                                html.Div("TACTICAL RF OPERATIONS", className="brand-eyebrow"),
                                html.H1("RADIO DIRECTION FINDER", className="brand-title"),
                                html.Div("PUSJIANSTRALITBANG TNI", className="brand-subtitle"),
                            ],
                            className="brand-copy",
                        ),
                    ],
                    className="brand-lockup",
                ),
                html.Div(
                    [
                        html.Div([html.Span(className="status-dot"), "SYSTEM ACTIVE"], className="system-chip"),
                        html.Div(
                            [
                                html.Span("LANGUAGE", className="language-label"),
                                html.Div(
                                    [
                                        html.Button("EN", id="language-en", className="language-option is-active", n_clicks=0),
                                        html.Button("ID", id="language-id", className="language-option", n_clicks=0),
                                    ],
                                    className="language-options",
                                ),
                            ],
                            className="language-control",
                        ),
                    ],
                    className="header-status",
                ),
            ],
            className="command-header",
        ),
        html.Div(
            [
                html.A("Configuration", className="header_active", id="header_config", href="/config"),
                html.A("RF Spectrum", className="header_inactive", id="header_spectrum", href="/spectrum"),
                html.A("Direction Finding", className="header_inactive", id="header_doa", href="/doa"),
                html.A("Map", className="header_inactive", id="header_map", href="/map"),
                html.Div(
                    [
                        html.A("TAK", className="header_inactive", id="header_tak", href="#", n_clicks=0),
                    ],
                    id="tak_container",
                    style={"display": "contents"} if tak_folder_exists else {"display": "none"},
                ),
                html.Div(id="header_tak_dummy", style={"display": "none"}),  # Hidden div for callback output
            ],
            className="header",
        ),
        dcc.Interval(id="settings-refresh-timer", interval=500, n_intervals=0),
        html.Div(id="placeholder_start", style={"display": "none"}),
        html.Div(id="placeholder_stop", style={"display": "none"}),
        html.Div(id="placeholder_save", style={"display": "none"}),
        html.Div(id="placeholder_update_rx", style={"display": "none"}),
        html.Div(id="placeholder_recofnig_daq", style={"display": "none"}),
        html.Div(id="placeholder_update_daq_ini_params", style={"display": "none"}),
        html.Div(id="placeholder_update_freq", style={"display": "none"}),
        html.Div(id="placeholder_update_dsp", style={"display": "none"}),
        html.Div(id="placeholder_config_page_upd", style={"display": "none"}),
        html.Div(id="placeholder_spectrum_page_upd", style={"display": "none"}),
        html.Div(id="placeholder_doa_page_upd", style={"display": "none"}),
        html.Div(id="dummy_output", style={"display": "none"}),
        html.Main(html.Div(id="page-content"), className="workspace"),
        html.Div(
            [
                html.Span("RDF / OPERATIONAL CONSOLE"),
                html.Span("LOCAL SECURE INTERFACE"),
            ],
            className="command-footer",
        ),
    ],
    className="app-shell",
)
