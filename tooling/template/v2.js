// Usage: node template/v2.js <post.json> <outDir>
// post.json: { id, lang, slides: [ { dark?, kicker, num?, head, body?:[], small?:[], btn? } ] }
// Text fields may contain <br> and <em>. Footer handle + "n / N" counter are added automatically.
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const [, , dataPath, outDir] = process.argv;
const post = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
fs.mkdirSync(outDir, { recursive: true });
const css = path.resolve(__dirname, 'v2.css');
const paras = (arr, cls = '') => (arr || []).map(t => `<p class="${t.startsWith('@gold ') ? 'gold' : ''}">${t.replace(/^@gold /, '')}</p>`).join('');

function page(s, i, n) {
  return `<!doctype html><html><head><meta charset="utf-8"><link rel="stylesheet" href="file://${css}"></head>
<body class="${s.dark ? 'dark' : ''}">
  <div class="bg"></div><div class="shade"></div>
  <div class="frame-outer"></div><div class="frame-inner"></div>
  <p class="brand">LOS CABOS RENTAL</p><div class="top-rule"></div>
  <div class="content${s.phone ? ' has-phone' : ''}">
    ${s.kicker ? `<p class="kicker">${s.kicker}</p>` : ''}
    ${s.num ? `<p class="num">${s.num}</p>` : ''}
    <h1 ${s.headSize ? `style="font-size:${s.headSize}px"` : ''}>${s.head}</h1>
    ${s.body || s.small ? '<div class="mid-rule"></div>' : ''}
    ${s.body ? `<div class="body">${paras(s.body)}</div>` : ''}
    ${s.small ? `<div class="body small">${paras(s.small)}</div>` : ''}
    ${s.sub ? `<p class="sub">${s.sub}</p>` : ''}
    ${s.phone ? `<div class="phone-wrap"><div class="phone"><img src="file://${path.resolve(__dirname, '..', s.phone)}"></div><span class="pill">${s.pill || 'Sample preview'}</span></div>` : ''}
    ${s.btn ? `<div class="btn">${s.btn}</div>` : ''}
  </div>
  <div class="foot"><p class="handle">@caborentalapp</p><p class="count">${i + 1} / ${n}</p></div>
</body></html>`;
}

(async () => {
  const browser = await chromium.launch();
  const p = await (await browser.newContext({ viewport: { width: 1080, height: 1350 } })).newPage();
  const n = post.slides.length;
  for (let i = 0; i < n; i++) {
    const html = path.join(outDir, `_tmp.html`);
    fs.writeFileSync(html, page(post.slides[i], i, n));
    await p.goto('file://' + path.resolve(html));
    await p.evaluate(() => document.fonts.ready); await p.waitForLoadState('load');
    const over = await p.evaluate(() => { const c = document.querySelector('.content'); return c.scrollHeight > c.clientHeight + 1; });
    if (over) console.warn(`WARN slide ${i + 1} overflows`);
    const out = path.join(outDir, `${post.id}_${post.lang}_slide${i + 1}.jpg`);
    await p.screenshot({ path: out, type: 'jpeg', quality: 92 });
    console.log(out);
  }
  fs.rmSync(path.join(outDir, '_tmp.html'), { force: true });
  await browser.close();
})();
