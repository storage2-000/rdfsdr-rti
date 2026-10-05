(function () {
  "use strict";

  const STORAGE_KEY = "rdf-ui-language";
  const translations = Object.freeze({
    // Header, navigation, and shared interface
    "TACTICAL RF OPERATIONS": "OPERASI RF TAKTIS",
    "MULTI-CHANNEL ACQUISITION / BEARING ANALYSIS": "AKUISISI MULTIKANAL / ANALISIS ARAH",
    "CENTER [MHz]": "TENGAH [MHz]",
    "Radio Direction Finder insignia": "Lambang Radio Direction Finder",
    "SYSTEM ACTIVE": "SISTEM AKTIF",
    "LANGUAGE": "BAHASA",
    "Configuration": "Konfigurasi",
    "RF Spectrum": "Spektrum RF",
    "Direction Finding": "Penentuan Arah",
    "Map": "Peta",
    "RDF / OPERATIONAL CONSOLE": "RDF / KONSOL OPERASIONAL",
    "LOCAL SECURE INTERFACE": "ANTARMUKA LOKAL AMAN",

    // Page headings
    "Control / Settings": "Kontrol / Pengaturan",
    "System Configuration": "Konfigurasi Sistem",
    "Configure the receiver, processing chain, antenna geometry, and output channels.": "Atur penerima, rantai pemrosesan, geometri antena, dan kanal keluaran.",
    "Signal Monitoring": "Pemantauan Sinyal",
    "Real-time receiver spectrum and waterfall history.": "Spektrum penerima dan riwayat waterfall secara waktu nyata.",
    "Signal Waterfall": "Waterfall Sinyal",
    "POWER / FREQUENCY": "DAYA / FREKUENSI",
    "TIME / INTENSITY": "WAKTU / INTENSITAS",
    "Bearing Solution": "Solusi Arah",
    "Spatial direction estimate derived from the coherent antenna array.": "Estimasi arah spasial yang dihasilkan dari larik antena koheren.",
    "PRIMARY BEARING": "ARAH UTAMA",
    "ARRAY RELATIVE": "RELATIF TERHADAP LARIK",
    "REFERENCE": "REFERENSI",
    "ARRAY": "LARIK",
    "COVERAGE": "CAKUPAN",
    "DISPLAY": "TAMPILAN",
    "REAL-TIME": "WAKTU NYATA",
    "Polar Bearing Map": "Peta Arah Polar",
    "0°–359° AZIMUTH / RESPONSE": "AZIMUTH 0°–359° / RESPONS",
    "Response envelope": "Selubung respons",
    "Primary bearing": "Arah utama",
    "Azimuth reference": "Referensi azimuth",
    "Bearing Map": "Peta Bearing",
    "Station location and live DoA bearing overlaid on an operational map.": "Lokasi stasiun dan bearing DoA langsung pada peta operasional.",
    "STATION POSITION": "POSISI STASIUN",
    "STATION LOCATION": "LOKASI STASIUN",
    "LATITUDE": "LINTANG",
    "LONGITUDE": "BUJUR",
    "Apply Static Location": "Terapkan Lokasi Statis",
    "DEFAULT STATIC": "STATIS DEFAULT",
    "POSITION READY": "POSISI SIAP",
    "LOCATION NOT CONFIGURED": "LOKASI BELUM DIATUR",
    "DOA BEARING": "BEARING DOA",
    "LIVE DIRECTION": "ARAH LANGSUNG",
    "SOURCE FREQUENCY": "FREKUENSI SUMBER",
    "ACTIVE VFO": "VFO AKTIF",
    "Operational Map": "Peta Operasional",
    "LIVE STATION / BEARING OVERLAY": "OVERLAY STASIUN / BEARING LANGSUNG",
    "RDF station": "Stasiun RDF",
    "DoA bearing ray": "Garis bearing DoA",
    "Direction guide only — not target distance": "Panduan arah saja — bukan jarak target",

    // Main actions and sections
    "Operation Control": "Kontrol Operasi",
    "Start Processing": "Mulai Pemrosesan",
    "Stop Processing": "Hentikan Pemrosesan",
    "System Status": "Status Sistem",
    "RF Receiver Configuration": "Konfigurasi Penerima RF",
    "Basic DAQ Configuration": "Konfigurasi Dasar DAQ",
    "Basic Custom DAQ Configuration": "Konfigurasi Kustom Dasar DAQ",
    "Advanced Custom DAQ Configuration": "Konfigurasi Kustom Lanjutan DAQ",
    "DAQ Subsystem Reconfiguration": "Konfigurasi Ulang Subsistem DAQ",
    "Preconfigured DAQ Files": "Berkas DAQ Prakonfigurasi",
    "Select Configuration File": "Pilih Berkas Konfigurasi",
    "Update Receiver Parameters": "Perbarui Parameter Penerima",
    "Update": "Perbarui",
    "Reconfigure & Restart DAQ chain": "Konfigurasi Ulang & Mulai Ulang Rantai DAQ",
    "Pre Processing": "Prapemrosesan",
    "Calibration": "Kalibrasi",
    "DoA Configuration": "Konfigurasi DoA",
    "Display Options": "Opsi Tampilan",
    "VFO Configuration": "Konfigurasi VFO",
    "Station Information": "Informasi Stasiun",
    "Local Data Recording": "Perekaman Data Lokal",
    "System Control": "Kontrol Sistem",

    // DAQ and status labels
    "Update Rate:": "Laju Pembaruan:",
    "Latency:": "Latensi:",
    "Frame Index:": "Indeks Frame:",
    "Frame Type:": "Tipe Frame:",
    "Frame Sync:": "Sinkronisasi Frame:",
    "Power Level:": "Level Daya:",
    "Connection Status:": "Status Koneksi:",
    "Sample Delay Sync:": "Sinkronisasi Tunda Sampel:",
    "IQ Sync:": "Sinkronisasi IQ:",
    "Noise Source State:": "Status Sumber Derau:",
    "Center Frequecy [MHz]:": "Frekuensi Tengah [MHz]:",
    "Sampling Frequency [MHz]:": "Frekuensi Sampling [MHz]:",
    "DSP Decimated BW [MHz]:": "Lebar Pita DSP Terdesimasi [MHz]:",
    "VFO Range [MHz]:": "Rentang VFO [MHz]:",
    "Data Block Length [ms]:": "Panjang Blok Data [ms]:",
    "RF Gains [dB]:": "Penguatan RF [dB]:",
    "VFO-0 Power [dB]:": "Daya VFO-0 [dB]:",
    "Connected": "Terhubung",
    "Disconnected": "Terputus",
    "Reconfiguration..": "Konfigurasi ulang..",
    "Restarting..": "Memulai ulang..",
    "Enabled": "Aktif",
    "Disabled": "Nonaktif",
    "Overdrive": "Daya Berlebih",
    "LOSS": "HILANG",
    "Error": "Galat",
    "Data": "Data",
    "Dummy": "Dummy",
    "Trigger wait": "Menunggu pemicu",

    // Receiver and DAQ configuration
    "Active Configuration:": "Konfigurasi Aktif:",
    "Current": "Saat Ini",
    "# RX Channels:": "Jumlah Kanal RX:",
    "Center Frequency [MHz]:": "Frekuensi Tengah [MHz]:",
    "Receiver Gain:": "Penguatan Penerima:",
    "Bias Tee Control:": "Kontrol Bias Tee:",
    "Enable Noise Source Control:": "Aktifkan Kontrol Sumber Derau:",
    "Recalibration Interval [mins]:": "Interval Kalibrasi Ulang [menit]:",
    "DAQ Buffer Size:": "Ukuran Buffer DAQ:",
    "Sample Rate [MHz]:": "Laju Sampling [MHz]:",
    "CPI Size [sample]:": "Ukuran CPI [sampel]:",
    "Decimation Ratio:": "Rasio Desimasi:",
    "FIR Relative Bandwidth:": "Lebar Pita Relatif FIR:",
    "FIR Tap Size:": "Ukuran Tap FIR:",
    "FIR Window:": "Jendela FIR:",
    "Enable Filter Reset:": "Aktifkan Reset Filter:",
    "Correlation Size [sample]:": "Ukuran Korelasi [sampel]:",
    "Standard Channel Index:": "Indeks Kanal Referensi:",
    "Enable IQ Calibration:": "Aktifkan Kalibrasi IQ:",
    "Gain Lock Interval [frame]:": "Interval Kunci Penguatan [frame]:",
    "Require Track Lock Intervention (For Kerberos):": "Perlu Intervensi Kunci Pelacakan (Kompatibilitas Lama):",
    "Amplitude Calibration Mode :": "Mode Kalibrasi Amplitudo:",
    "Calibration Track Mode:": "Mode Pelacakan Kalibrasi:",
    "Calibration Frame Interval:": "Interval Frame Kalibrasi:",
    "Calibration Frame Burst Size:": "Ukuran Burst Frame Kalibrasi:",
    "Amplitude Tolerance [dB]:": "Toleransi Amplitudo [dB]:",
    "Phase Tolerance [deg]:": "Toleransi Fase [derajat]:",
    "Maximum Sync Fails:": "Maksimum Kegagalan Sinkronisasi:",
    "IQ Adjustment Source :": "Sumber Penyesuaian IQ:",
    "IQ Adjust Amplitude :": "Penyesuaian Amplitudo IQ:",
    "IQ Adjust Time Delay (ns) :": "Penyesuaian Tunda Waktu IQ (ns):",

    // DoA, display, and VFO configuration
    "Enable DoA Estimation:": "Aktifkan Estimasi DoA:",
    "Array Configuration:": "Konfigurasi Larik:",
    "Custom X [m]:": "X Kustom [m]:",
    "Custom Y [m]:": "Y Kustom [m]:",
    "[meter]:": "[meter]:",
    "Wavelength Multiplier:": "Pengali Panjang Gelombang:",
    "DoA Algorithm:": "Algoritma DoA:",
    "Decorrelation:": "Dekorelasi:",
    "Expected number of RF sources:": "Perkiraan jumlah sumber RF:",
    "Array Offset:": "Offset Larik:",
    "ULA Output Direction:": "Arah Keluaran ULA:",
    "Forward": "Depan",
    "Backward": "Belakang",
    "Both": "Keduanya",
    "Custom": "Kustom",
    "DoA Graph Type:": "Tipe Grafik DoA:",
    "Compass": "Kompas",
    "Compass Offset [deg]:": "Offset Kompas [derajat]:",
    "Spectrum Peak Hold:": "Tahan Puncak Spektrum:",
    "Active VFOs:": "VFO Aktif:",
    "Output VFO:": "VFO Keluaran:",
    "DSP Side Decimation:": "Desimasi Sisi DSP:",
    "Spectrum Calculation:": "Perhitungan Spektrum:",
    "Optimize Short Bursts:": "Optimalkan Burst Pendek:",
    "VFO Mode:": "Mode VFO:",
    "VFO Default Squelch Mode:": "Mode Squelch Bawaan VFO:",
    "VFO Default Demod:": "Demodulasi Bawaan VFO:",
    "VFO Default IQ Channel:": "Kanal IQ Bawaan VFO:",
    "Maximum Demod Time [s]:": "Waktu Demodulasi Maksimum [d]:",
    "Frequency [MHz]:": "Frekuensi [MHz]:",
    "Bandwidth [Hz]:": "Lebar Pita [Hz]:",
    "Squelch [dB] :": "Squelch [dB]:",
    "Squelch Mode:": "Mode Squelch:",
    "FIR Order Factor:": "Faktor Orde FIR:",
    "Demod:": "Demodulasi:",
    "IQ Channel:": "Kanal IQ:",
    "Auto": "Otomatis",
    "Auto Channel": "Kanal Otomatis",
    "Default": "Bawaan",
    "False": "Tidak Aktif",
    "True": "Aktif",
    "None": "Tidak Ada",
    "All": "Semua",
    "ALL": "SEMUA",
    "Single": "Tunggal",
    "Single Ch": "Kanal Tunggal",
    "All Ch (TEST ONLY)": "Semua Kanal (HANYA UJI)",
    "Standard": "Standar",
    "VFO-0 Auto Max": "VFO-0 Maksimum Otomatis",

    // Station, recording, and system controls
    "Station ID:": "ID Stasiun:",
    "DOA Data Format:": "Format Data DOA:",
    "Location Source:": "Sumber Lokasi:",
    "Static": "Statis",
    "Latitude:": "Lintang:",
    "Longitude:": "Bujur:",
    "GPS:": "GPS:",
    "Heading:": "Arah Hadap:",
    "Fixed Heading": "Arah Hadap Tetap",
    "Use Fixed Heading": "Gunakan Arah Hadap Tetap",
    "Fixed Heading:": "Arah Hadap Tetap:",
    "Min speed for heading [m/s]:": "Kecepatan minimum untuk arah [m/s]:",
    "Min speed duration for heading [s]": "Durasi kecepatan minimum untuk arah [d]",
    "RDF Mapper / Generic Server URL:": "URL RDF Mapper / Server Umum:",
    "RDF Remote Key:": "Kunci RDF Jarak Jauh:",
    "Enable Local Data Recording:": "Aktifkan Perekaman Data Lokal:",
    "Filename:": "Nama Berkas:",
    "Data Format:": "Format Data:",
    "Write Interval (s):": "Interval Penulisan (d):",
    "File Size (MB):": "Ukuran Berkas (MB):",
    "Download File": "Unduh Berkas",
    "Enable Beta Features": "Aktifkan Fitur Beta",
    "Reset Configuration": "Reset Konfigurasi",
    "Restart Software": "Mulai Ulang Perangkat Lunak",
    "Restart System": "Mulai Ulang Sistem",
    "Shutdown System": "Matikan Sistem",
    "Clear Cache and Restart": "Bersihkan Cache dan Mulai Ulang",

    // Plot labels and hover vocabulary
    "Incident angle [deg]": "Sudut datang [derajat]",
    "Amplitude [dB]": "Amplitudo [dB]",
    "Peak Hold": "Tahan Puncak",
    "DOA Angle": "Sudut DOA",
    "Angle": "Sudut",
    "Bearing": "Arah",
    "Response": "Respons",

    // Tooltips
    "ULA - Uniform Linear Array": "ULA - Larik Linear Seragam",
    "UCA - Uniform Circular Array": "UCA - Larik Melingkar Seragam",
    "Custom - Custom Array": "Kustom - Larik Kustom",
    "Antenna elements placed on a line with equal distances between each other. Cannot determine if the source is behind or in front of array without additional information.": "Elemen antena ditempatkan segaris dengan jarak yang sama. Tanpa informasi tambahan, sistem tidak dapat menentukan apakah sumber berada di depan atau belakang larik.",
    "Antenna elements are placed on a circle equaly distributed at some radius around 360°. UCA is the most common array.": "Elemen antena ditempatkan merata pada lingkaran dengan radius tertentu sepanjang 360°. UCA adalah bentuk larik yang paling umum.",
    "Input custom array coordinates in meters as comma seperated values. Useful for irregular arrays.": "Masukkan koordinat larik kustom dalam meter, dipisahkan dengan koma. Berguna untuk susunan larik tidak beraturan.",
    "Spacing of the array specified in meters. For ULA the interelement spacing. For UCA the radius.": "Jarak larik dinyatakan dalam meter. Untuk ULA merupakan jarak antarelemen, sedangkan untuk UCA merupakan radius.",
    "Calculation of the array spacing in wavelength. Depends on frequency and array size.": "Perhitungan jarak larik dalam satuan panjang gelombang, bergantung pada frekuensi dan ukuran larik.",
    "This must be kept under 0.5 to avoid ambiguities (more than one valid bearing). Closer to 0.5 results in better angular resolution.": "Nilai harus di bawah 0,5 untuk menghindari ambiguitas lebih dari satu arah. Nilai yang mendekati 0,5 memberikan resolusi sudut lebih baik.",
    "DoA Algorithms. MUSIC works the best in almost all situations.": "Algoritma DoA. MUSIC memberikan hasil terbaik pada hampir semua kondisi.",
    "The number of active VFO channels available to use in the active spectrum.": "Jumlah kanal VFO aktif yang tersedia pada spektrum aktif.",
    "Choose which VFO channel is output to the DOA graphs and data stream. In the spectrum graph this chooses what VFO channel click to tune will move.": "Pilih kanal VFO yang dikirim ke grafik DOA dan aliran data. Pada grafik spektrum, pilihan ini menentukan kanal VFO yang dipindahkan oleh klik untuk tuning.",
    "ALL - Outputs data from all active VFOs to the RDF App / RDF Pro output stream for simultaneous channel monitoring.": "SEMUA - Mengirim data dari seluruh VFO aktif ke aliran keluaran RDF App / RDF Pro untuk pemantauan kanal secara bersamaan.",
    "Decimate the spectrum. Reduces spectrum bandwidth for zooming in on signals. If you will always decimate, it is more efficient to apply decimation in the DAQ settings.": "Desimasi spektrum mengurangi lebar pita untuk memperbesar sinyal. Jika selalu digunakan, lebih efisien menerapkannya pada pengaturan DAQ.",
    "Enhance squelcher detection of very narrow bandwidth and short bursty signals with pulse lengths 50ms or less.": "Meningkatkan deteksi squelch untuk sinyal berpita sangat sempit dan burst pendek dengan panjang pulsa 50 ms atau kurang.",
    "Linear - A simple line plot of the DoA data.": "Linear - Grafik garis sederhana untuk data DoA.",
    "Polar - A circular plot in polar form.": "Polar - Grafik melingkar dalam bentuk polar.",
    "Compass - The same as the polar plot, but axis in the compass convention with 90 degrees clockwise from zero. Can be offset by some degrees in order to align the graph with the array heading.": "Kompas - Grafik polar dengan sumbu searah jarum jam dari nol. Offset sudut dapat digunakan untuk menyelaraskan grafik dengan arah larik.",
    "Add a peak hold plot to the spectrum. Only works in 'Single Ch' spectrum calculation mode.": "Tambahkan grafik penahan puncak ke spektrum. Hanya bekerja pada mode perhitungan spektrum 'Kanal Tunggal'.",
    "Single Ch - Normal use. You must use this for intermittant signal squelching to work correctly.": "Kanal Tunggal - Penggunaan normal. Mode ini diperlukan agar squelch sinyal terputus-putus bekerja dengan benar.",
    "All Ch - Only ever use this to test your antenna array connections. This mode will allow you to view all channels in the spectrum graph. Will NOT work with intermittant signals.": "Semua Kanal - Gunakan hanya untuk menguji koneksi larik antena. Mode ini menampilkan semua kanal pada grafik spektrum dan tidak bekerja untuk sinyal terputus-putus.",
    "Manual - vfo_squelch should be provided manually": "Manual - Nilai vfo_squelch ditentukan secara manual",
    "Auto - automatically calculated value for all vfo_squelch based average level of noise": "Otomatis - Nilai seluruh vfo_squelch dihitung berdasarkan tingkat derau rata-rata",
    "Auto Channel - automatically calculated value for each vfo_squelch based average level of noise near concrete vfo": "Kanal Otomatis - Nilai vfo_squelch setiap kanal dihitung berdasarkan derau di sekitar VFO tersebut",
    "Standard - VFOs are set manually.": "Standar - VFO diatur secara manual.",
    "VFO-0 Auto Max - VFO-0 will auto tune to the strongest signal in the spectrum. Only supports a single VFO.": "VFO-0 Maksimum Otomatis - VFO-0 otomatis menala sinyal terkuat pada spektrum. Hanya mendukung satu VFO.",
    "Decorrelation methods that might improve performance of DoA estimation in multipath and (or) low SNR environments.": "Metode dekorelasi dapat meningkatkan estimasi DoA pada lingkungan multipath dan/atau SNR rendah.",
    "If the 0 degree direction of the array is not in-line with the heading of the vehicle, use this to offset the array.": "Jika arah 0 derajat larik tidak sejajar dengan arah kendaraan, gunakan nilai ini untuk menggeser orientasi larik.",
    "DoA methods that separate noise and signal subspaces, such as MUSIC, require a priori knowledge of number of signal sources.": "Metode DoA yang memisahkan subruang derau dan sinyal, seperti MUSIC, memerlukan perkiraan jumlah sumber sinyal.",
    "Setting this to larger than expected number of rf sources might give misleading results.": "Nilai yang lebih besar daripada jumlah sumber RF sebenarnya dapat memberikan hasil yang menyesatkan.",
    "Linear arrays cannot differentiate between a signal in front or behind the array. If you have prior knowledge about the signal source location, choose if the signal is in front or behind the array.": "Larik linear tidak dapat membedakan sinyal di depan dan belakang larik. Jika posisi sumber diketahui, pilih sisi sumber terhadap larik.",
    "Enter the filename for the recording.": "Masukkan nama berkas untuk perekaman.",
    "The data output format for file recording. Currently only RDF App is available.": "Format keluaran data untuk perekaman berkas. Saat ini hanya RDF App yang tersedia.",
    "How often data to the file will be written. If you are making very long recordings, increase to avoid the filesize becoming too large.": "Interval penulisan data ke berkas. Untuk perekaman panjang, tingkatkan interval agar ukuran berkas tidak terlalu besar.",
    "Enable writing data to local file.": "Aktifkan penulisan data ke berkas lokal.",
    "Please ensure that there is sufficient space on your device for the data file.": "Pastikan tersedia ruang penyimpanan yang cukup untuk berkas data.",
    "How long it takes to compute. Should be faster than the data block length, so that no frames are dropped.": "Waktu yang diperlukan untuk komputasi. Harus lebih cepat daripada panjang blok data agar tidak ada frame yang terlewat.",
    "Time taken from signal entry to data output.": "Waktu dari sinyal masuk hingga data keluar.",
    "If OK, we are receiving frames successfully.": "Jika OK, frame diterima dengan benar.",
    "Are we connected to the DAQ.": "Menunjukkan apakah sistem terhubung ke DAQ.",
    "Do we have sample level coherent sync.": "Menunjukkan sinkronisasi koheren pada tingkat sampel.",
    "Do we have phase level coherent sync.": "Menunjukkan sinkronisasi koheren pada tingkat fase.",
    "The noise source will automatically enable during calibration.": "Sumber derau akan aktif secara otomatis selama kalibrasi.",
    "The currently tuned center frequency. Change in the RF Receiver Configuration card.": "Frekuensi tengah yang sedang digunakan. Ubah melalui panel Konfigurasi Penerima RF.",
    "Total RF bandwidth from the DAQ.": "Total lebar pita RF dari DAQ.",
    "Total bandwidth after DSP side decimation.": "Total lebar pita setelah desimasi sisi DSP.",
    "Minimum and maximum possible VFO frequencies in available bandwidth.": "Frekuensi minimum dan maksimum VFO pada lebar pita yang tersedia.",
    "Signal power of VFO-0 in dB.": "Daya sinyal VFO-0 dalam dB.",
    "Edit DAQ settings. For most users these settings should never be touched.": "Ubah pengaturan DAQ. Umumnya pengaturan ini tidak perlu diubah.",
    "Length of IQ data collection time for each frame. Modifies the CPI size in advanced settings.": "Durasi pengumpulan data IQ setiap frame. Mengubah ukuran CPI pada pengaturan lanjutan.",
    "Choose a sampling bandwidth. Can only be an integer division of the RTL-SDR sampling rate.": "Pilih lebar pita sampling. Nilainya harus berupa pembagian bulat dari laju sampling RTL-SDR.",
    "Buffer size of the realtek driver": "Ukuran buffer driver Realtek",
    "Raw - ADC sampling frequency of the realtek chip": "Raw - Frekuensi sampling ADC cip Realtek",
    "Enables the utilization of the built-in noise source for calibration": "Mengaktifkan sumber derau internal untuk kalibrasi",
    "Length of the Coherent Processing Interval (CPI) after decimation": "Panjang Coherent Processing Interval (CPI) setelah desimasi",
    "Decimation factor": "Faktor desimasi",
    "Anti-aliasing filter bandwith after decimation": "Lebar pita filter anti-aliasing setelah desimasi",
    "Window function type for designing the anti-aliasing FIR filter": "Jenis fungsi jendela untuk merancang filter FIR anti-aliasing",
    "Number of samples used for the calibration procedure (sample delay and IQ compensation)": "Jumlah sampel untuk prosedur kalibrasi tunda sampel dan kompensasi IQ",
    "The selected channel is used as a reference for the IQ compensation": "Kanal yang dipilih digunakan sebagai referensi kompensasi IQ",
    "Enables to compensate the amplitude and phase differences of the receiver channels": "Mengaktifkan kompensasi perbedaan amplitudo dan fase antar kanal penerima",
    "Minimum number of stable frames before terminating the gain tuning procedure": "Jumlah minimum frame stabil sebelum proses penalaan penguatan dihentikan",
    "Maximum allowed amplitude difference between the receiver channels": "Perbedaan amplitudo maksimum yang diizinkan antar kanal penerima",
    "Maximum allowed phase difference between the receiver channels": "Perbedaan fase maksimum yang diizinkan antar kanal penerima",
    "Maximum allowed consecutive IQ difference check failures before initiating a recalibration": "Jumlah maksimum kegagalan pemeriksaan perbedaan IQ berturut-turut sebelum kalibrasi ulang",
    "Apply an IQ amplitude adjustment to each channel if required.": "Terapkan penyesuaian amplitudo IQ pada setiap kanal jika diperlukan.",
    "A useful name for your station.": "Nama yang mudah dikenali untuk stasiun Anda.",
    "Station ID": "ID Stasiun",
    "DOA Data Format": "Format Data DOA",
    "Location Source": "Sumber Lokasi",
    "None: Don't use location data, use this if you're only using the android app.": "Tidak Ada: Jangan gunakan data lokasi; pilih ini jika hanya menggunakan aplikasi Android.",
    "Static: A fixed location for a stationary receiver.": "Statis: Lokasi tetap untuk penerima yang tidak bergerak.",
    "Fixed Heading": "Arah Hadap Tetap",
    "GPS Heading information is only reliable when you're moving.": "Informasi arah GPS hanya dapat diandalkan saat perangkat bergerak.",
    "Filter out unreliable heading": "Saring arah yang tidak dapat diandalkan",
    "Most consumer-grade GPS modules require it to move to estimate heading.": "Sebagian besar modul GPS konsumen harus bergerak untuk memperkirakan arah.",
    "Typically those measurements are not reliable when speed is too low.": "Pengukuran tersebut umumnya tidak andal saat kecepatan terlalu rendah.",
    "0 means no timeout is applied": "Nilai 0 berarti batas waktu tidak diterapkan",
    "Allows Alpha-Numberic Characters and Hyphens (-).": "Mengizinkan karakter alfanumerik dan tanda hubung (-).",
    "All other chacters are replaced by hyphens.": "Karakter lainnya akan diganti dengan tanda hubung.",
    "Amplitude difference compensation method applied as part of the IQ compensation": "Metode kompensasi perbedaan amplitudo yang diterapkan sebagai bagian dari kompensasi IQ",
    "Anti-aliasing FIR filter tap size - Do not set too large, or CPU utilization will be 100%": "Ukuran tap filter FIR anti-aliasing. Jangan terlalu besar karena penggunaan CPU dapat mencapai 100%",
    "Apply an optional calibration on any phase differences in cables. Measurements need to be taken with a VNA.": "Terapkan kalibrasi opsional untuk perbedaan fase kabel. Pengukuran perlu dilakukan menggunakan VNA.",
    "Currently set RF gains on each channel. Set in RF Receiver Configuration settings.": "Penguatan RF yang sedang diterapkan pada setiap kanal. Atur melalui Konfigurasi Penerima RF.",
    "DF Aggregator: Use for DF Aggregator": "DF Aggregator: Gunakan untuk keluaran DF Aggregator",
    "E.g.: ADC sampling frequency: 1 MHz (IQ!) , Decimation ratio: 2, FIR relative bandwith:0.25": "Contoh: frekuensi sampling ADC 1 MHz (IQ), rasio desimasi 2, lebar pita relatif FIR 0,25",
    "FM - frequency demodulation": "FM - demodulasi frekuensi",
    "False/True - disable/enable writing IQ samples to file": "Tidak Aktif/Aktif - menonaktifkan atau mengaktifkan penulisan sampel IQ ke berkas",
    "For example, if you are using a linear array with the broadside not facing the front of the car.": "Contohnya saat sisi broadside larik linear tidak menghadap ke depan kendaraan.",
    "Frame counter. Each frame contains one block of sampled IQ data. If it's incrementing by more than one each time, then we're dropping frames.": "Penghitung frame. Setiap frame berisi satu blok data IQ. Jika bertambah lebih dari satu, terdapat frame yang terlewat.",
    "Frame type indicates if the frame contains data, or is used for calibration, or a dummy frame for flushing buffers.": "Tipe frame menunjukkan apakah frame berisi data, digunakan untuk kalibrasi, atau merupakan frame dummy untuk membersihkan buffer.",
    "GPS: Uses gpsd and a USB gps. If this is greyed out, the gpsd python library is not installed": "GPS: Menggunakan gpsd dan GPS USB. Jika opsi berwarna abu-abu, pustaka Python gpsd belum terpasang.",
    "How often should the system check on coherence calibration. Checks take a few seconds, and a reasonable time is every 5-10 minutes.": "Interval pemeriksaan kalibrasi koherensi. Pemeriksaan membutuhkan beberapa detik; interval yang wajar adalah setiap 5–10 menit.",
    "If Overdrive, the signal strength may be too strong. Try reducing the gain. Operating in overdrive is fine in most situations.": "Jika daya berlebih, sinyal mungkin terlalu kuat. Coba kurangi penguatan. Kondisi ini masih dapat digunakan pada sebagian besar situasi.",
    "If enabled, the memory of the anti-aliasing FIR filter is reseted at the begining of every new CPI": "Jika aktif, memori filter FIR anti-aliasing direset pada awal setiap CPI baru",
    "If you're getting location from a GPS, but aren't moving, use this to set a static heading.": "Jika lokasi berasal dari GPS tetapi perangkat tidak bergerak, gunakan opsi ini untuk menetapkan arah hadap statis.",
    "Length of time IQ data is collected for in each frame. Longer results in more processing gain, but slower update rates. Also affects computation time.": "Durasi pengumpulan data IQ pada setiap frame. Durasi lebih panjang meningkatkan processing gain, tetapi memperlambat pembaruan dan menambah waktu komputasi.",
    "Maximum Demod Time allows to disable writing signal on disk if it exceeded some timeout": "Waktu Demodulasi Maksimum menghentikan penulisan sinyal ke penyimpanan setelah batas waktu terlampaui",
    "Note that outputting more than 3 active VFOs on a Pi 4 may result in slow computation, resulting in intermittant signal squelch misses. To get around this, you can apply decimation to make computation more efficient.": "Mengeluarkan lebih dari 3 VFO aktif pada Pi 4 dapat memperlambat komputasi dan menyebabkan squelch sinyal sesaat terlewat. Terapkan desimasi agar komputasi lebih efisien.",
    "Number of calibration frames generated in the periodic calibration mode": "Jumlah frame kalibrasi yang dibuat pada mode kalibrasi periodik",
    "Number of data frames between two consecutive calibration burst. Used when periodic calibration mode is selected": "Jumlah frame data di antara dua burst kalibrasi berurutan pada mode kalibrasi periodik",
    "Please set minimum speed and its minumum duration to filter out bogus heading readings.": "Atur kecepatan minimum dan durasinya untuk menyaring pembacaan arah yang tidak valid.",
    "Note that u-blox GPS modules might implement these logic internally, but it needs to be configured and activated.If you did so, then feel free to disable this filter by setting zero values.": "Modul GPS u-blox mungkin telah menerapkan logika ini secara internal, tetapi perlu dikonfigurasi dan diaktifkan. Jika sudah, filter ini dapat dinonaktifkan dengan mengisi nilai nol.",
    "RDF App / RDF Pro: Select the RDF-compatible local or remote output. Kerberos App remains available for legacy compatibility.": "RDF App / RDF Pro: Pilih keluaran lokal atau jarak jauh yang kompatibel dengan RDF. Kerberos App tetap tersedia untuk kompatibilitas lama.",
    "RDF Mapper: Upload directly to an RDF Mapper server": "RDF Mapper: Unggah langsung ke server RDF Mapper",
    "Relative time delays to use with the explicit-time-delay mode. NOTE: The time delays are in ns and RELATIVE to the measurement made at CH0. (delta = CH_0 - CH_X)": "Tunda waktu relatif untuk mode explicit-time-delay. CATATAN: nilai dalam ns dan relatif terhadap pengukuran CH0 (delta = CH_0 - CH_X)",
    "Resulting passband bandwidth: 125 kHz": "Lebar pita passband yang dihasilkan: 125 kHz",
    "Should be greater than the decimation ratio": "Harus lebih besar daripada rasio desimasi",
    "Should be used only for hardave version 1.0": "Hanya digunakan untuk perangkat keras versi 1.0",
    "Should take values on range: (0, 1]": "Nilai harus berada pada rentang (0, 1]",
    "VFO Default Demodulation that could be either None or FM": "Demodulasi bawaan VFO dapat berupa Tidak Ada atau FM",
    "VFO Default IQ writing mode": "Mode penulisan IQ bawaan VFO",
    "When enabled the DAQ firmware waits for manual intervention during the calibraiton procedure": "Saat aktif, firmware DAQ menunggu intervensi manual selama prosedur kalibrasi",
    "When periodic calibration track mode is selected the firmware regularly turn on the noise source for a short burst to check whether the IQ calibration is still valid or not. In case the calibrated state is lost, the firmware automatically initiates a reclaibration procedure": "Saat mode pelacakan kalibrasi periodik dipilih, firmware mengaktifkan sumber derau secara berkala untuk memeriksa validitas kalibrasi IQ. Jika status kalibrasi hilang, firmware memulai kalibrasi ulang secara otomatis.",
    "channel_power: Ampltiude compensation is set in a way to achieve equal channel powers": "channel_power: Kompensasi amplitudo diatur untuk menghasilkan daya yang sama pada setiap kanal",
    "default: Amplitude differences are estimated by calculating the cross-correlations of the channels": "default: Perbedaan amplitudo diperkirakan melalui korelasi silang antar kanal",
    "disabled: Amplitude differences are not compensated": "disabled: Perbedaan amplitudo tidak dikompensasi",
    "explicit-time-delay: Apply a constant time delay.": "explicit-time-delay: Terapkan tunda waktu konstan.",
    "touchstone: Add 5 Touchstone .s1p format files to the heimdall _calibration folder with filnames cable_ch0.s1p, cable_ch1.s1p and so on. Make sure the file covers the frequency range of interest.": "touchstone: Tambahkan 5 berkas Touchstone .s1p ke folder _calibration dengan nama cable_ch0.s1p, cable_ch1.s1p, dan seterusnya. Pastikan berkas mencakup rentang frekuensi yang digunakan.",
    "disabled": "nonaktif"
  });

  const dynamicRules = [
    [/^VFO-(\d+) Channel$/, "Kanal VFO-$1"],
    [/^Channel (\d+)$/, "Kanal $1"],
    [/^Default \((.+)\)$/, "Bawaan ($1)"],
    [/^Version (.+)$/, "Versi $1"]
  ];

  const originalText = new WeakMap();
  const originalAttributes = new WeakMap();
  let currentLanguage = "en";

  function storedLanguage() {
    try {
      return window.localStorage.getItem(STORAGE_KEY) === "id" ? "id" : "en";
    } catch (error) {
      return "en";
    }
  }

  function indonesianText(englishText) {
    if (Object.prototype.hasOwnProperty.call(translations, englishText)) {
      return translations[englishText];
    }
    for (const rule of dynamicRules) {
      if (rule[0].test(englishText)) {
        return englishText.replace(rule[0], rule[1]);
      }
    }
    return englishText;
  }

  function splitWhitespace(value) {
    const match = value.match(/^(\s*)([\s\S]*?)(\s*)$/);
    return match || [value, "", value, ""];
  }

  function translateTextNode(node) {
    if (!node || !node.parentElement || ["SCRIPT", "STYLE", "NOSCRIPT"].includes(node.parentElement.tagName)) {
      return;
    }
    const parts = splitWhitespace(node.nodeValue || "");
    const text = parts[2];
    if (!text) return;

    if (currentLanguage === "id") {
      const translated = indonesianText(text);
      if (translated !== text) {
        originalText.set(node, text);
        node.nodeValue = parts[1] + translated + parts[3];
      }
    } else if (originalText.has(node) && text !== originalText.get(node)) {
      node.nodeValue = parts[1] + originalText.get(node) + parts[3];
    }
  }

  function translateAttributes(element) {
    if (!(element instanceof Element)) return;
    const names = ["title", "placeholder", "aria-label", "alt"];
    let originals = originalAttributes.get(element);

    names.forEach(function (name) {
      if (!element.hasAttribute(name)) return;
      const value = element.getAttribute(name);
      if (currentLanguage === "id") {
        const translated = indonesianText(value);
        if (translated !== value) {
          originals = originals || {};
          originals[name] = value;
          element.setAttribute(name, translated);
        }
      } else if (originals && originals[name] && value !== originals[name]) {
        element.setAttribute(name, originals[name]);
      }
    });

    if (originals) originalAttributes.set(element, originals);
  }

  function translateTree(root) {
    if (!root) return;
    if (root.nodeType === Node.TEXT_NODE) {
      translateTextNode(root);
      return;
    }
    if (root.nodeType !== Node.ELEMENT_NODE && root.nodeType !== Node.DOCUMENT_NODE) return;

    if (root.nodeType === Node.ELEMENT_NODE) translateAttributes(root);
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (node.nodeType === Node.TEXT_NODE) translateTextNode(node);
      else translateAttributes(node);
    }
  }

  function updateControls() {
    document.documentElement.lang = currentLanguage;
    const english = document.getElementById("language-en");
    const indonesian = document.getElementById("language-id");
    if (english) {
      english.classList.toggle("is-active", currentLanguage === "en");
      english.setAttribute("aria-pressed", currentLanguage === "en" ? "true" : "false");
      english.setAttribute("title", currentLanguage === "id" ? "Gunakan bahasa Inggris" : "Use English");
    }
    if (indonesian) {
      indonesian.classList.toggle("is-active", currentLanguage === "id");
      indonesian.setAttribute("aria-pressed", currentLanguage === "id" ? "true" : "false");
      indonesian.setAttribute("title", currentLanguage === "id" ? "Gunakan bahasa Indonesia" : "Use Indonesian");
    }
  }

  function setLanguage(language) {
    currentLanguage = language === "id" ? "id" : "en";
    try {
      window.localStorage.setItem(STORAGE_KEY, currentLanguage);
    } catch (error) {
      // Storage may be disabled; the language still works for this page.
    }
    document.documentElement.lang = currentLanguage;
    translateTree(document.body);
    updateControls();
  }

  document.addEventListener("click", function (event) {
    const button = event.target.closest && event.target.closest("#language-en, #language-id");
    if (!button) return;
    event.preventDefault();
    setLanguage(button.id === "language-id" ? "id" : "en");
  });

  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.type === "characterData") translateTextNode(mutation.target);
      mutation.addedNodes.forEach(translateTree);
    });
    updateControls();
  });

  function initialize() {
    currentLanguage = storedLanguage();
    document.documentElement.lang = currentLanguage;
    translateTree(document.body);
    updateControls();
    observer.observe(document.body, {childList: true, characterData: true, subtree: true});
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize, {once: true});
  } else {
    initialize();
  }
})();
