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
        "activate": "Connect to ESP32 and install v0.1.7",
        "unsupported": "This browser does not support Web Serial. Open this page in Chrome or Edge.",
        "notAllowed": "This page must be opened over HTTPS or on localhost.",
        "verifyTitle": "After Installation",
        "verify": "Connect from ESP32 Education Editor and run <code>SYS:STATUS</code>. Check that the response includes <code>SYS:READY:OK</code>, the MAC address, and the current Wi-Fi channel.",
        "release": "Supports USB / Web Serial, GPIO, DHT11 / DHT22, OLED, clearing a selected OLED area, HC-SR04 ultrasonic distance sensors, ESP-NOW, and servo control. Version 0.1.7 adds general-purpose PWM output and HC-SR04 support, and fixes an issue in Arduino-ESP32 3.x where PWM output could not resume after being stopped. BLE UART is not included in this version.",
        "description": "ESP32 Education Firmware v0.1.7 installer for ESP32-WROOM-32",
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
        "activate": "ESP32に接続して v0.1.7 を書き込む",
        "unsupported": "このブラウザはWeb Serialに対応していません。ChromeまたはEdgeで開いてください。",
        "notAllowed": "このページはHTTPSまたはlocalhostで開く必要があります。",
        "verifyTitle": "書き込み後の確認",
        "verify": "ESP32 Education Editorから接続し、<code>SYS:STATUS</code> を実行して <code>SYS:READY:OK</code>、MACアドレス、現在のWi-Fiチャンネルが返ることを確認してください。",
        "release": "USB / Web Serial、GPIO、DHT11 / DHT22、OLED、OLED指定範囲消去、ESP-NOW、サーボモーター制御に対応しています。v0.1.7では、汎用PWM出力とHC-SR04超音波距離センサに対応し、Arduino-ESP32 3.x環境でPWM停止後に再度PWM出力できなくなる問題を修正しました。BLE UARTは本バージョンには含まれていません。",
        "description": "ESP32-WROOM-32 用 ESP32 Education Firmware v0.1.7 インストーラ",
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
