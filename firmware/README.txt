ESP32 Education Firmware Installer v1.0.0

ESP32-WROOM-32 / ESP32 Dev Module専用。公開時はmanifest.jsonのversionとmerged.binを同時に更新します。

Firmware v1.0.0はGPIO/PWM、DHT11/DHT22、OLED、HC-SR04、ESP-NOW、サーボ制御を継承し、I2C Scanner・BME280・INA219とFirmwareバージョン取得を追加します。AE-BME280は3.3V給電、I2C用J3接続、0x76用SDO→GND接続が必要です。BLE UARTは含みません。

本体電源とI2C信号は基板仕様に従ってください。今回のBME280/INA219は本体3.3V。測定用Vin+/Vin−とは別です。

インストール後にEditorへ接続し、Firmwareバージョン1.0.0とI2Cスキャンを確認してください。
SHA256SUMS.txtで配布ファイルの一致を確認できます。

実機確認: 3機器併用で600回診断完了、USB復帰、従来機能の基本回帰（ユーザー報告）。精度校正・背面表示中の一定周期動作は未確認です。

日英PDFはサイトのmanuals/へ同梱します。
