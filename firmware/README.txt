ESP32 Education Firmware Installer v0.1.8

ESP32 Education Editor用の共通ファームウェアを
ESP32-WROOM-32へWebブラウザから書き込むためのWeb Installerです。

Web Installer:
https://davinichi.github.io/firmware/

対象:
ESP32-WROOM-32

正式ファームウェア:
ESP32 Education Firmware v0.1.8

主な機能:
- USB / Web Serial通信
- GPIOデジタル入出力
- GPIO汎用PWM出力
  - 0～100%
  - 5 kHz / 8-bit
  - PWM停止
- DHT11 / DHT22
- SSD1306 OLED
- OLED指定範囲消去（FILLBLACK）
- HC-SR04超音波距離センサ
  - TRIG / ECHO GPIO指定
  - 距離測定（cm）
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

v0.1.8では、v0.1.7の機能を維持したまま、
同じGPIOでHIGH/LOWのデジタル出力とPWMを交互に使用した場合の
GPIOとLEDCの切り替え処理を修正しました。

これにより、デジタル出力へ切り替えた後でも、
次回PWM出力時にLEDCを再AttachしてPWMを再開できます。

起動時のESP-NOWチャンネルは1です。
チャンネル設定は再起動すると1へ戻ります。

HC-SR04のECHO端子は約5Vのため、
ESP32へ接続する場合は抵抗分圧などで3.3V以下にしてください。

BLE UARTはv0.1.8には含まれていません。

実機確認済み:
- USB / Web Serial
- GPIOデジタル入出力
- GPIO PWM 0 / 25 / 50 / 75 / 100%
- PWM停止後の再開
- GPIO HIGH/LOW → PWMの繰り返し切替（実機確認済み）
- DHT11 / DHT22
- OLED
- HC-SR04距離測定
- ESP-NOW送受信
- ESP-NOWチャンネル切替
- 異なるESP-NOWチャンネル間では受信しないこと
- サーボモーター直接制御
- ESP-NOW経由のリモートサーボ制御
- ESP32 Education Editor v0.6との統合動作

Firmware Release:
https://github.com/davinichi/ESP32-Education-Editor/releases/tag/firmware-v0.1.8

ESP32 Education Editor:
https://davinichi.github.io/

Source Repository:
https://github.com/davinichi/ESP32-Education-Editor