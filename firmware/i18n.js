(() => {
    'use strict';
    const messages = {
    "en": {
        "board": "Target board",
        "firmware": "Firmware",
        "method": "Installation method",
        "browser": "Required browser",
        "browserValue": "A browser with Web Serial support, such as Chrome or Edge",
        "intro": "Install prebuilt firmware directly from your browser without setting up Arduino IDE or additional libraries.",
        "warning": "<strong>For ESP32-WROOM-32 only.</strong> Do not install this firmware on XIAO ESP32-C3, ESP32-S3, or other boards.<br>Disconnect Arduino IDE’s Serial Monitor or ESP32 Education Editor first if either is using the ESP32 USB port.",
        "install": "Install Firmware",
        "step1": "Connect your ESP32-WROOM-32 to a PC or Chromebook via USB.",
        "step2": "Click the button below.",
        "step3": "Select the ESP32 USB serial port from the list.",
        "step4": "Follow the on-screen instructions to start installation.",
        "activate": "Connect to ESP32 and install v1.0.0",
        "unsupported": "This browser does not support Web Serial. Open this page in Chrome or Edge.",
        "notAllowed": "This page must be opened over HTTPS or on localhost.",
        "verifyTitle": "After Installation",
        "verify": "Disconnect the Installer after installation, and close its tab if needed to release the USB port. Open <a href=\"https://davinichi.github.io/\">ESP32 Education Editor v1.0</a> in Chrome or Edge, add the <strong>ESP32 Connection</strong> extension, and run the <strong>connect to ESP32</strong> block. Select your ESP32 USB serial port and grant access.<br>Click <strong>ESP32 Firmware version</strong>, or select its checkbox to show a monitor, and confirm <code>1.0.0</code>. Also click <strong>ESP32 status</strong>, or show its monitor, and confirm <code>OK</code>. The version is retrieved automatically on connection; <strong>refresh ESP32 status</strong> retrieves it again.<br>If the version is older or shows <strong>Unknown (Firmware v1.0.0 recommended)</strong>, disconnect the Editor, install v1.0.0 with the Installer, and reconnect to check again. No manual SYS command entry is needed.",
        "release": "Firmware v1.0.0 retains GPIO/PWM, DHT11/DHT22, OLED, HC-SR04, ESP-NOW and servo control, and adds I2C Scanner, BME280, INA219 and automatic firmware version reporting. AE-BME280 requires 3.3V, J3 bridged for I2C and SDO grounded for address 0x76. BLE UART is not included.",
        "description": "ESP32 Education Firmware v1.0.0 installer for ESP32-WROOM-32",
        "language": "Language"
    },
    "ja": {
        "board": "対象ボード",
        "firmware": "ファームウェア",
        "method": "書き込み方式",
        "browser": "必要ブラウザ",
        "browserValue": "Chrome / Edge などのWeb Serial対応ブラウザ",
        "intro": "Arduino IDEや追加ライブラリを利用者側で準備せず、完成済みファームウェアをブラウザから書き込むためのページです。",
        "warning": "<strong>ESP32-WROOM-32専用です。</strong> XIAO ESP32-C3 / ESP32-S3 などには書き込まないでください。<br>\n      Arduino IDEのシリアルモニターやESP32 Education EditorがESP32のUSBポートを使用中の場合は、先に切断してください。",
        "install": "書き込み",
        "step1": "ESP32-WROOM-32をUSBでPCまたはChromebookへ接続します。",
        "step2": "下のボタンを押します。",
        "step3": "表示された一覧からESP32のUSBシリアルポートを選びます。",
        "step4": "画面の案内に従って書き込みを開始します。",
        "activate": "ESP32に接続して v1.0.0 を書き込む",
        "unsupported": "このブラウザはWeb Serialに対応していません。ChromeまたはEdgeで開いてください。",
        "notAllowed": "このページはHTTPSまたはlocalhostで開く必要があります。",
        "verifyTitle": "書き込み後の確認",
        "verify": "書き込みが完了したらInstallerを切断し、必要ならタブを閉じてUSBポートを解放します。ChromeまたはEdgeで<a href=\"https://davinichi.github.io/\">ESP32 Education Editor v1.0</a>を開き、<strong>ESP32 Connection</strong>拡張を追加して「<strong>ESP32に接続</strong>」ブロックを実行します。ESP32のUSBシリアルポートを選び、接続を許可してください。<br>「<strong>ESP32のFirmwareバージョン</strong>」をクリックするか、チェックを入れてモニター表示し、<code>1.0.0</code>であることを確認します。「<strong>ESP32の状態</strong>」もクリックするかモニター表示し、<code>OK</code>であることを確認してください。バージョンは接続時に自動取得され、「<strong>ESP32の状態を更新</strong>」でも再取得できます。<br>「<strong>不明（Firmware v1.0.0を推奨）</strong>」や古いバージョンが表示される場合は、Editorを切断し、Installerでv1.0.0を書き込んでから再接続して確認します。SYSコマンドを手入力する必要はありません。",
        "release": "Firmware v1.0.0はGPIO/PWM、DHT11/DHT22、OLED、HC-SR04、ESP-NOW、サーボ制御を継承し、I2C Scanner・BME280・INA219とFirmwareバージョン取得を追加します。AE-BME280は3.3V給電、I2C用J3接続、0x76用SDO→GND接続が必要です。BLE UARTは含みません。",
        "description": "ESP32-WROOM-32 用 ESP32 Education Firmware v1.0.0 インストーラ",
        "language": "表示言語"
    }
};

    const setLanguage = language => {
        const translations = messages[language];
        document.documentElement.lang = language;
        document.querySelector('.language-switch').setAttribute('aria-label', translations.language);
        document.querySelectorAll('[data-i18n]').forEach(node => {
            node.textContent = translations[node.dataset.i18n];
        });
        // Rich text comes only from this page's static translation dictionary.
        document.querySelectorAll('[data-i18n-html]').forEach(node => {
            node.innerHTML = translations[node.dataset.i18nHtml];
        });
        document.querySelectorAll('[data-i18n-content]').forEach(node => {
            node.setAttribute('content', translations[node.dataset.i18nContent]);
        });
        document.querySelectorAll('[data-lang]').forEach(button => {
            button.setAttribute('aria-pressed', String(button.dataset.lang === language));
        });
    };
    const requested = new URLSearchParams(location.search).get('lang');
    const initial = requested === 'ja' || requested === 'en' ? requested :
        (navigator.language.startsWith('ja') ? 'ja' : 'en');
    setLanguage(initial);
    document.querySelectorAll('[data-lang]').forEach(button => {
        button.addEventListener('click', () => {
            const language = button.dataset.lang;
            setLanguage(language);
            const url = new URL(location.href);
            url.searchParams.set('lang', language);
            history.replaceState(null, '', url);
        });
    });
})();
