# ESP32 Education Firmware v0.1.4

Target board: **ESP32-WROOM-32**

## Changes

- Restored OLED partial-area clear command:
  - `OLED:FILLBLACK:x,y,w,h`
- Keeps the USB + BLE common command architecture introduced in v0.1.3.
- Keeps BLE one-write-per-command handling.
- Keeps GPIO2 startup LED behavior.

## Verified

- Firmware compiled and written to ESP32-WROOM-32.
- USB connection confirmed.
- OLED partial-area clear confirmed over USB.
- BLE bidirectional communication, GPIO control/read, DHT11 read and OLED text display were verified in the v0.1.3 line and retained in v0.1.4.

## Firmware identification

`SYS:FW:USB_BLE_0.1.4`

## Browser installer

A Web Serial installer for ESP32-WROOM-32 is included. It writes the merged firmware image at offset `0x00000000`.

## Notes

- This release target is ESP32-WROOM-32 only.
- XIAO ESP32-C3 / ESP32-S3 are not included in this release target yet.
