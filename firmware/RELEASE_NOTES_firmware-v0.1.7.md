# ESP32 Education Editor Firmware v0.1.7

Release date: 2026-10-04

## Overview

Firmware v0.1.7 adds generic PWM output support and HC-SR04 ultrasonic distance sensor support for ESP32 Education Editor v0.6.

This release also fixes a PWM restart issue that occurred after stopping PWM output on Arduino-ESP32 3.x.

## New Features

### Generic PWM Output

Added generic PWM output support for GPIO pins.

Supported commands:

- `PWM:WRITE:<pin>,<percent>`
- `PWM:STOP:<pin>`

PWM specifications:

- Frequency: 5 kHz
- Resolution: 8-bit
- User input range: 0-100%

Supported GPIO pins:

- 13
- 14
- 16
- 17
- 18
- 19
- 21
- 22
- 23
- 25
- 26
- 27
- 32
- 33

PWM output has been tested with LED brightness control at:

- 0%
- 25%
- 50%
- 75%
- 100%

PWM restart after stop has also been verified.

### HC-SR04 Ultrasonic Sensor

Added support for the HC-SR04 ultrasonic distance sensor.

Supported commands:

- `HCSR04:ATTACH:<trig>,<echo>`
- `HCSR04:DISTANCE?`

Distance response:

- `HCSR04:DISTANCE:<cm>`

If no valid echo is detected:

- `HCSR04:DISTANCE:-1`

Tested configuration:

- TRIG: GPIO26
- ECHO: GPIO34

The HC-SR04 ECHO signal is approximately 5 V and must not be connected directly to the ESP32 GPIO.

A voltage divider is required, for example:

- HC-SR04 ECHO -> 1 kΩ -> ESP32 ECHO GPIO
- ESP32 ECHO GPIO -> 2 kΩ -> GND

## Fixes

### PWM Restart After Stop

Fixed an issue on Arduino-ESP32 3.x where PWM output could fail with:

`PWM:ERROR:WRITE`

after executing `PWM:STOP`.

The firmware now correctly clears the internal LEDC attachment state when PWM output is stopped.

Verified sequence:

1. PWM 50%
2. PWM STOP
3. PWM 50%

The PWM output resumes correctly without resetting the ESP32.

## Compatibility

Target board:

- ESP32-WROOM-32

Supported Arduino-ESP32 environments:

- Arduino-ESP32 2.x
- Arduino-ESP32 3.x

Existing features from Firmware v0.1.6 remain available, including:

- Web Serial USB communication
- GPIO digital input/output
- DHT11 / DHT22
- SSD1306 OLED
- ESP-NOW
- Servo control
- ESP-NOW remote Servo control
- ESP-NOW channel selection

## Firmware Binary

File:

`firmware/esp32_education_editor_firmware_v0_1_7.ino.merged.bin`

SHA-256:

`53255551385ac31a10b2c1b7e3f5bfd0350e8907ea7fb4c0cdd43fbffc07f4b1`

## Notes

This firmware is intended for use with ESP32 Education Editor v0.6.