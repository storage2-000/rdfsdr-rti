import dash_core_components as dcc
import dash_html_components as html

# isort: off
from maindash import web_interface

# isort: on
from variables import SOFTWARE_GIT_SHORT_HASH, SOFTWARE_VERSION, option


def get_system_control_card_layout():
    return html.Div(
        [
            html.H2("System Control", id="system_control_title"),
            html.Div(
                [
                    html.Div(
                        [html.Button("Start Processing", id="btn-start_proc", className="btn_start", n_clicks=0)],
                        className="ctr_toolbar_item",
                    ),
                    html.Div(
                        [html.Button("Stop Processing", id="btn-stop_proc", className="btn_stop", n_clicks=0)],
                        className="ctr_toolbar_item",
                    ),
                ],
                className="system-control-primary",
            ),
            html.Div(
                [
                    html.Div(
                        [html.Button("Reset Configuration", id="btn-save_cfg", className="btn_save_cfg", n_clicks=0)],
                        className="ctr_toolbar_item",
                    ),
                    html.Div(
                        [html.Button("Restart Software", id="btn-restart_sw", className="btn-restart_sw", n_clicks=0)],
                        className="field",
                    ),
                    html.Div(
                        [
                            html.Button(
                                "Restart System", id="btn-restart_system", className="btn-restart_system", n_clicks=0
                            )
                        ],
                        className="field",
                    ),
                    html.Div(
                        [
                            html.Button(
                                "Shutdown System", id="btn-shtudown_system", className="btn-shtudown_system", n_clicks=0
                            )
                        ],
                        className="field",
                    ),
                    html.Div(
                        [
                            html.Button(
                                "Clear Cache and Restart", id="btn-clear_cache", className="btn-clear_cache", n_clicks=0
                            )
                        ],
                        className="field",
                    ),
                    html.Div(
                        [
                            html.Div("Enable Beta Features", id="label_en_beta_features", className="field-label"),
                            dcc.Checklist(
                                options=option,
                                id="en_beta_features",
                                className="field-body",
                                value=web_interface.en_beta_features,
                            ),
                        ],
                        className="field",
                    ),
                    html.Div(f"Version {SOFTWARE_VERSION}+git.{SOFTWARE_GIT_SHORT_HASH}"),
                ],
                id="system_control_container",
                className="system-control-actions",
            ),
        ],
        className="card",
    )
