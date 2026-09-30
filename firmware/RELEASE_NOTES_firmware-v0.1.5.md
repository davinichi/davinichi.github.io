# ESP32 Education Firmware v0.1.5

ESP32 Education Editor用 共通ファームウェア v0.1.5です。

v0.1.4でESP-NOW通信の問題が確認されたため、
v0.1.5ではESP-NOWの安定動作を優先し、
実機で動作確認済みの安定構成へ戻しました。

## 対象

- ESP32-WROOM-32

## 主な機能

- Web SerialによるUSB通信
- GPIO入出力
- DHT11 / DHT22
- SSD1306 OLED
- OLED指定範囲消去（FILLBLACK）
- ESP-NOW
  - Wi-Fiチャンネル1
  - ブロードキャスト送信
  - MACアドレス指定送信
  - 受信

## v0.1.5での変更

- ESP-NOWの安定動作を優先した構成へ変更
- BLE UARTを一時的に除外
- Web Installerをv0.1.5のmerged binaryへ更新

## 実機確認

ESP32-WROOM-32で以下を確認済みです。

- 公開Web Installerからの書き込み
- USB / Web Serial接続
- GPIO
- DHT11 / DHT22
- OLED
- ESP-NOW
- merged binaryから書き込んだ状態でのESP-NOW通信

## Firmware Release

https://github.com/davinichi/ESP32-Education-Editor/releases/tag/firmware-v0.1.5
