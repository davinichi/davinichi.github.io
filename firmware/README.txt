ESP32 Education Firmware Installer v0.1.6

ESP32 Education Editor用の共通ファームウェアを
ESP32-WROOM-32へWebブラウザから書き込むためのWeb Installerです。

Web Installer:
https://davinichi.github.io/firmware/

対象:
ESP32-WROOM-32

正式ファームウェア:
ESP32 Education Firmware v0.1.6

主な機能:
- USB / Web Serial通信
- GPIO入出力
- DHT11 / DHT22
- SSD1306 OLED
- OLED指定範囲消去（FILLBLACK）
- ESP-NOW
  - Wi-Fiチャンネル1～13の切替
  - ブロードキャスト送信
  - MACアドレス指定送信
  - 受信
- サーボモーター制御
  - GPIOへの接続
  - 角度指定
  - 切断
- ESP-NOW経由のリモートサーボ制御

v0.1.6では、v0.1.5の安定したESP-NOW構成を基に、
ESP-NOWチャンネル切替とサーボモーター制御を追加しました。

起動時のESP-NOWチャンネルは1です。
チャンネル設定は再起動すると1へ戻ります。

BLE UARTはv0.1.6には含まれていません。

実機確認済み:
- USB / Web Serial
- GPIO
- DHT11 / DHT22
- OLED
- ESP-NOW送受信
- ESP-NOWチャンネル切替
- 異なるESP-NOWチャンネル間では受信しないこと
- サーボモーター直接制御
- ESP-NOW経由のリモートサーボ制御
- ESP32 Education Editor v0.5との統合動作

Firmware Release:
https://github.com/davinichi/ESP32-Education-Editor/releases/tag/firmware-v0.1.6

ESP32 Education Editor:
https://davinichi.github.io/

Source Repository:
https://github.com/davinichi/ESP32-Education-Editor