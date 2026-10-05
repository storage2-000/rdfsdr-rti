# rdfsdr-rti

Combined workspace for the RDF SDR direction-finding application and its DAQ firmware.

## Components

- `heimdall_daq_fw/` — HeIMDALL DAQ firmware, configuration examples, and firmware tests.
- `rdfsdr_doa/` — KrakenSDR DoA DSP, Dash web interface, and Node.js middleware.

The root `rdf_doa_start.sh` and `rdf_doa_stop.sh` scripts coordinate startup and shutdown on a configured SDR host. For installation and hardware requirements, follow the README files in each component. Their original license files are retained in their respective directories.
