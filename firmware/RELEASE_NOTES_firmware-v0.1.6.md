# ESP32 Education Firmware v0.1.6

ESP32 Education Editor用 共通ファームウェア v0.1.6です。

v0.1.5の安定したESP-NOW構成を基に、
ESP-NOWチャンネル切替とサーボモーター制御を追加しました。

## 対象

- ESP32-WROOM-32

## 主な機能

- Web SerialによるUSB通信
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

## v0.1.6での変更

- ESP-NOWのWi-Fiチャンネル1～13を選択可能にしました
- 再起動時はESP-NOWチャンネル1から開始します
- SG90などのサーボモーターをESP32から直接制御できるようにしました
- ESP-NOW経由で別のESP32に接続されたサーボモーターを制御できるようにしました
- リモートサーボ制御では `REMOTE:SERVO:ANGLE:` コマンドのみを実行対象としています
- BLE UARTは引き続き本バージョンには含まれていません
- Web Installer用merged binaryをv0.1.6へ更新しました

## 実機確認

ESP32-WROOM-32で以下を確認済みです。

- USB / Web Serial接続
- GPIO
- DHT11 / DHT22
- OLED
- ESP-NOW送受信
- 同一チャンネル間のESP-NOW通信
- 異なるチャンネル間では受信しないこと
- サーボモーター直接制御
- ESP-NOW経由のリモートサーボ制御
- ESP32 Education Editor v0.5との統合動作

## Firmware binary

`esp32_education_editor_firmware_v0_1_6.ino.merged.bin`

SHA-256:

`2021c2a3c1fff0e6deb73283ef4f6c4d1b5430d025bff078de84226af4d15c6b`

## Firmware Release

https://github.com/davinichi/ESP32-Education-Editor/releases/tag/firmware-v0.1.6