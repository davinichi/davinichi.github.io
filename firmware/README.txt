ESP32 Education Firmware Installer v0.1.5

ESP32 Education Editor用の共通ファームウェアを
ESP32-WROOM-32へWebブラウザから書き込むためのWeb Installerです。

Web Installer:
https://davinichi.github.io/firmware/

対象:
ESP32-WROOM-32

正式ファームウェア:
ESP32 Education Firmware v0.1.5

主な機能:
- USB / Web Serial通信
- GPIO入出力
- DHT11 / DHT22
- SSD1306 OLED
- OLED指定範囲消去（FILLBLACK）
- ESP-NOW
  - Wi-Fiチャンネル1
  - ブロードキャスト送信
  - MACアドレス指定送信
  - 受信

v0.1.5ではESP-NOWの安定動作を優先し、
実機で確認済みの安定構成を採用しています。

BLE UARTはv0.1.5には含まれていません。

実機確認済み:
- 公開Web Installerからの書き込み
- USB / Web Serial
- GPIO
- DHT11 / DHT22
- OLED
- ESP-NOW
- merged binaryから書き込んだ状態でのESP-NOW通信

Firmware Release:
https://github.com/davinichi/ESP32-Education-Editor/releases/tag/firmware-v0.1.5

ESP32 Education Editor:
https://davinichi.github.io/

Source Repository:
https://github.com/davinichi/ESP32-Education-Editor
