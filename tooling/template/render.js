// Usage: node template/render.js <slides.json> <outDir>
// slides.json: { "id": "LCR-08R", "slides": [ { "type": "cover"|"stat"|"cta", ...fields } ] }
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const [, , dataPath, outDir] = process.argv;
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
fs.mkdirSync(outDir, { recursive: true });
const css = path.resolve(__dirname, 'slide.css');

const esc = (s = '') => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
const raw = (s = '') => String(s); // fields that intentionally carry <br>/<em>

function inner(s, i, n) {
  const foot = `
    ${s.foot ? `<p class="foot">${raw(s.foot)}</p>` : ''}
    <p class="handle">@caborentalapp</p>`;
  if (s.type === 'cover') return `
    <div class="body">
      <p class="kicker">${raw(s.kicker)}${s.kickerEs ? `<span class="es">${raw(s.kickerEs)}</span>` : ''}</p>
      <h1>${raw(s.head)}</h1>
      <p class="es-head">${raw(s.headEs)}</p>
      <p class="swipe">SWIPE · DESLIZA &nbsp;→</p>
    </div>${foot}`;
  if (s.type === 'stat') return `
    <div class="body">
      <p class="big">${raw(s.big)}</p>
      <p class="stat-en">${raw(s.en)}</p>
      <div class="mid-rule"></div>
      <p class="stat-es">${raw(s.es)}</p>
    </div>${foot}`;
  if (s.type === 'cta') return `
    <div class="body">
      <p class="kicker">${raw(s.kicker)}${s.kickerEs ? `<span class="es">${raw(s.kickerEs)}</span>` : ''}</p>
      <h1 style="font-size:70px">${raw(s.head)}</h1>
      <p class="es-head" style="font-size:38px">${raw(s.headEs)}</p>
      ${s.chips ? `<div class="chips">${s.chips.map(c => `<div class="chip">${esc(c[0])} <span>· ${esc(c[1])}</span></div>`).join('')}</div>` : ''}
      <div class="cta"><b>${raw(s.cta)}</b><span>${raw(s.ctaEs)}</span></div>
    </div>${foot}`;
  throw new Error('unknown slide type ' + s.type);
}

function page(s, i, n) {
  return `<!doctype html><html><head><meta charset="utf-8"><link rel="stylesheet" href="file://${css}"></head>
  <body>
    <div class="frame-outer"></div><div class="frame-inner"></div>
    <div class="wrap">
      <span class="count">${i + 1}/${n}</span>
      <p class="brand">LOS CABOS RENTAL</p>
      <div class="rule"></div>
      ${inner(s, i, n)}
    </div>
  </body></html>`;
}

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1080, height: 1350 }, deviceScaleFactor: 1 });
  const p = await ctx.newPage();
  const n = data.slides.length;
  for (let i = 0; i < n; i++) {
    const htmlPath = path.join(outDir, `${data.id}_slide${i + 1}.html`);
    fs.writeFileSync(htmlPath, page(data.slides[i], i, n));
    await p.goto('file://' + path.resolve(htmlPath));
    await p.evaluate(() => document.fonts.ready);
    // flag any text that overflows its slide
    const overflow = await p.evaluate(() => document.querySelector('.wrap').scrollHeight > document.querySelector('.wrap').clientHeight + 1);
    if (overflow) console.warn(`WARN overflow on slide ${i + 1}`);
    const out = path.join(outDir, `${data.id}_slide${i + 1}.jpg`);
    await p.screenshot({ path: out, type: 'jpeg', quality: 92 });
    fs.unlinkSync(htmlPath);
    console.log(out);
  }
  await browser.close();
})();
