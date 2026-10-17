# ESP32 Education Editor Firmware v0.1.8

Release date: 2026-10-17

## Overview

Firmware v0.1.8 is a maintenance release for ESP32 Education Editor v0.6.

It keeps the features of Firmware v0.1.7 and fixes GPIO/PWM switching when the same GPIO alternates between digital HIGH/LOW output and general-purpose PWM.

## Fix

### GPIO / PWM Switching

Firmware v0.1.7 could lose PWM operation after a PWM-enabled GPIO was later used with a digital GPIO command.

A typical sequence was:

1. GPIO HIGH
2. wait
3. GPIO LOW
4. wait
5. PWM 90%
6. wait
7. PWM 10%
8. wait
9. repeat

The first run worked correctly, but PWM could stop responding on later runs until the ESP32 was reset or the USB cable was reconnected.

Firmware v0.1.8 fixes this by detaching the generic LEDC/PWM assignment before switching the pin back to GPIO mode. The internal PWM attachment state is updated at the same time, allowing PWM to attach again on the next PWM command.

The fix is applied to both:

- `GPIO:MODE`
- `GPIO:WRITE`

The existing serial command and response formats are unchanged.

## Verified Hardware Test

Verified on ESP32-WROOM-32 using GPIO23 with an LED.

Test sequence:

- HIGH for 1 second
- LOW for 1 second
- PWM 90% for 1 second
- PWM 10% for 1 second
- repeat 10 times

The sequence was run repeatedly and PWM continued to operate correctly without reconnecting USB or resetting the ESP32.

## Compatibility

Target board:

- ESP32-WROOM-32
- Arduino IDE board profile: ESP32 Dev Module

Supported Arduino-ESP32 environments:

- Arduino-ESP32 2.x
- Arduino-ESP32 3.x

Existing features from Firmware v0.1.7 remain available, including:

- USB / Web Serial communication
- GPIO digital input/output
- General-purpose PWM output
- DHT11 / DHT22
- SSD1306 OLED
- HC-SR04 ultrasonic distance measurement
- ESP-NOW
- Servo control
- ESP-NOW remote servo control
- ESP-NOW channel selection

BLE UART is not included.

## Firmware Binary

Planned file:

`firmware/esp32_education_editor_firmware_v0_1_8.ino.merged.bin`

SHA-256:

To be added after the final merged binary is built and verified.

## Notes

This firmware is intended for use with ESP32 Education Editor v0.6.
