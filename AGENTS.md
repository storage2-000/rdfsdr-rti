# Repository Guidelines

## Project Structure

This repository combines two components and top-level launch scripts. `heimdall_daq_fw/` contains the DAQ firmware, its Python/C implementation under `Firmware/`, and tests under `Firmware/_testing/`. `rdfsdr_doa/` contains the direction-finding DSP (`_sdr/`), web UI (`_ui/`), Node middleware (`_nodejs/`), and shared settings/assets (`_share/`). The root `rdf_doa_start.sh` and `rdf_doa_stop.sh` coordinate the DAQ and DoA services. Keep changes in the component that owns the behavior.

## Build, Test, and Development

- `cd heimdall_daq_fw/Firmware/_daq_core && make` builds the DAQ C programs for the host architecture.
- `cd heimdall_daq_fw/Firmware && ./unit_test.sh` runs the firmware test wrapper. It currently enables the decimator test and invokes it with `sudo`.
- `cd rdfsdr_doa && pre-commit run --all-files` runs the configured import sorting, formatting, and lint hooks.
- From the workspace root, `./rdf_doa_start.sh` starts the DAQ and DoA stack on a configured SDR host; `./rdf_doa_stop.sh` stops them. These are hardware/service commands, not a substitute for isolated development checks.

## Coding Style and Naming

For Python in `rdfsdr_doa`, use four-space indentation, PEP 8 names, isort, and Black with a 120-character line limit. Flake8 runs in CI with project-specific settings in `pyproject.toml`. Name firmware unit tests `test_*.py` and place them in `Firmware/_testing/unit_test/`. For JavaScript and shell, follow the surrounding file’s conventions; no dedicated formatter or linter is configured for those files.

## Testing Guidelines

The firmware test files live in `heimdall_daq_fw/Firmware/_testing/unit_test/`; several are not enabled by `unit_test.sh`, so run the relevant test directly when changing those modules. The DoA component’s CI checks formatting and lint, but does not define a Python unit-test command. For hardware-dependent changes, record the SDR model, configuration, and smoke-test result.

## Commits and Pull Requests

Recent component history uses short, direct subjects, often imperative, with issue or PR references when relevant (for example, `Properly start/stop KrakenToTAK.py (#154)`). Use concise commit subjects. In pull requests, summarize behavior and validation, link related issues, and include a screenshot for visible UI changes. Keep runtime logs, caches, and machine-specific settings out of code changes.
