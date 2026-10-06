const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {runInNewContext} = require('node:vm');
const {execFileSync} = require('node:child_process');
const {JSDOM} = require('jsdom');
const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'firmware/index.html'), 'utf8');
const scriptPath = path.join(root, 'firmware/i18n.js');
const setup = (query, language = 'en-US') => {
    const dom = new JSDOM(html, {url: 'https://davinichi.github.io/firmware/' + query});
    Object.defineProperty(dom.window.navigator, 'language', {value: language});
    if (fs.existsSync(scriptPath)) {
        runInNewContext(fs.readFileSync(scriptPath, 'utf8'), {
            document: dom.window.document, navigator: dom.window.navigator,
            location: dom.window.location, history: dom.window.history, URL, URLSearchParams
        });
    }
    return dom;
};
for (const lang of ['ja', 'en']) {
    test('explicit lang=' + lang + ' overrides browser language', () => {
        const dom = setup('?lang=' + lang, lang === 'en' ? 'ja-JP' : 'en-US');
        const doc = dom.window.document;
        assert.equal(doc.documentElement.lang, lang);
        assert.equal(doc.querySelector('button[slot="activate"]').textContent,
            lang === 'ja' ? 'ESP32に接続して v0.1.7 を書き込む' : 'Connect to ESP32 and install v0.1.7');
        assert.equal(doc.querySelectorAll('[data-i18n], [data-i18n-html]').length, 18);
        if (lang === 'en') {
            const copy = doc.querySelector('main').cloneNode(true);
            copy.querySelector('.language-switch').remove();
            assert.doesNotMatch(copy.textContent, /[\u3040-\u9fff]/);
        }
        dom.window.close();
    });
}
for (const [query, browser, expected] of [
    ['', 'ja-JP', 'ja'], ['', 'en-US', 'en'], ['?lang=invalid', 'fr-FR', 'en']
]) {
    test('browser language: ' + browser + query, () => {
        const dom = setup(query, browser);
        assert.equal(dom.window.document.documentElement.lang, expected);
        dom.window.close();
    });
}
test('ja -> en -> ja preserves installer nodes and manifest, module, and command references', () => {
    const dom = setup('?lang=ja&other=keep');
    const doc = dom.window.document;
    const installer = doc.querySelector('esp-web-install-button');
    const activate = installer.querySelector('[slot="activate"]');
    const originalJa = doc.querySelector('main').textContent;
    for (const lang of ['en', 'ja']) {
        doc.querySelector('[data-lang="' + lang + '"]').click();
        assert.equal(doc.documentElement.lang, lang);
        assert.equal(new URL(dom.window.location.href).searchParams.get('lang'), lang);
        assert.equal(new URL(dom.window.location.href).searchParams.get('other'), 'keep');
        assert.equal(doc.querySelector('[data-lang="' + lang + '"]').getAttribute('aria-pressed'), 'true');
        assert.equal(doc.querySelector('esp-web-install-button'), installer);
        assert.equal(installer.querySelector('[slot="activate"]'), activate);
        assert.equal(installer.getAttribute('manifest'), 'manifest.json');
        assert.equal(doc.querySelector('script[type="module"]').getAttribute('src'),
            'https://unpkg.com/esp-web-tools@10/dist/web/install-button.js?module');
        assert.deepEqual(Array.from(installer.children, node => node.getAttribute('slot')),
            ['activate', 'unsupported', 'not-allowed']);
        assert.deepEqual(Array.from(doc.querySelectorAll('code'), node => node.textContent),
            ['SYS:STATUS', 'SYS:READY:OK']);
    }
    assert.equal(doc.querySelector('main').textContent, originalJa);
    const manifestPath = path.join(root, 'firmware/manifest.json');
    assert.deepEqual(fs.readFileSync(manifestPath),
        execFileSync('git', ['-c', 'safe.directory=' + root.replace(/\\/g, '/'), '-C', root,
            'show', 'HEAD:firmware/manifest.json']));
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    assert.equal(manifest.version, '0.1.7');
    for (const build of manifest.builds) {
        for (const part of build.parts) {
            assert.ok(fs.existsSync(path.resolve(path.dirname(manifestPath), part.path)));
        }
    }
    dom.window.close();
});

test('installer HTML parses without errors and local scripts exist', () => {
    const errors = [];
    require('parse5').parse(html, {onParseError: error => errors.push(error)});
    assert.deepEqual(errors, []);
    const dom = setup('?lang=en');
    for (const script of dom.window.document.querySelectorAll('script[src]')) {
        const src = script.getAttribute('src');
        if (!src.startsWith('https://')) {
            assert.ok(fs.existsSync(path.join(root, 'firmware', src)));
        }
    }
    dom.window.close();
});
