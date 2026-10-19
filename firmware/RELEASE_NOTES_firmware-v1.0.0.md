# Editor v1.0 / Firmware v1.0.0 — 2026-10-20

## 変更内容

- I2C Scanner、BME280、INA219を追加。OLEDを含む共通WireはSDA=GPIO21、SCL=GPIO22。
- 日英12カテゴリー・公開64ブロック。既存ID・通信プロトコル・v0.1.8ソースを保持。
- 接続時にFirmwareバージョンを自動取得。旧Firmwareでは接続を維持してバージョン不明を表示。
- BME280は実際の送受信成否を確認し、失敗時は空欄とREAD_ERROR、次回成功で復帰。過去値で置き換えない。
- INA219を公開対象に含め、拡張一覧に表示。

## 実機確認済みの範囲

- [x] 接続・バージョン・I2Cスキャン（0x3C、0x40、0x76）。
- [x] INA219の初期化、LED点灯・消灯に伴う電圧・電流・電力と状態OK。
- [x] BME280のREAD_ERROR後、RESET・再初期化なしで次回読み取りがOKへ復帰。
- [x] 両センサー本体3.3V、AE-BME280のJ3接続・SDO→GNDの条件で、3機器併用診断600回を完了。
- [x] USB切断・手動再接続後の復帰（ユーザー報告）。
- [x] 従来機能の実機回帰（2026-10-20ユーザー報告）。個別条件の新たな測定記録とは区別。

600回診断はINA219電圧・電流・電力、BME280温度・湿度の各状態とOLED応答を確認します。BME280気圧の連続記録、基準計器との精度比較、シャント電圧単独測定、別アドレス・全エラー条件の実機試験は含みません。測定精度を保証する校正済み計測器としては案内しません。

AE-BME280の電源は1.71～3.6V。ESP32では3.3Vを使用し、J3だけでなくSDOもGND（0x76）または3.3V（0x77）へ固定します。5Vを接続しないでください。INA219の本体VCCと測定端子Vin+/Vin−は別です。

## 確認条件と既知の制限

連続試験はEditor前面表示・PC非スリープの条件です。背面表示で一定周期を保つことは未確認です。配線修正前の応答停止はRESETで復旧しましたが、電気的原因は断定していません。配線修正後は当該600回試験を完走しています。

数値モニターのチェックが外れてもステージに残る事象の報告があります。ステージ側を右クリックして隠す方法を案内済みで、再現プロジェクトによる原因特定は未完了です。OLEDブロックの完了だけでは画面更新成功を保証せず、診断では応答も確認します。

## 配布情報

- Editor: https://davinichi.github.io/
- Firmware Installer: https://davinichi.github.io/firmware/
- Firmware v1.0.0: ESP32-WROOM-32 / ESP32 Dev Module用、merged.binをoffset 0へ書き込み。
- SHA256: 7eeb0088ea8cb27d4a1d8c8874f68f9260c3282292e42b374065cf15fbe167da
- [日本語マニュアル](../manuals/ESP32_Education_Editor_v1.0_JA.pdf) / [English manual](../manuals/ESP32_Education_Editor_v1.0_EN.pdf)
- [ソースと検証記録](https://github.com/davinichi/ESP32-Education-Editor/tree/63dc35b6cfe6adf5b6f5edb881d04ccc2f697b51)
