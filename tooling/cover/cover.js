// Facebook cover options, 1640x624 (2x of 820x312). Key content kept inside the
// center 1280px (mobile crops the sides) and clear of the lower-left profile photo.
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const F = p => 'file:///home/claude/lcr/node_modules/@fontsource/' + p;
const LOCK = fs.readFileSync('/home/claude/lcr/brand/lcr-lockup.svg', 'utf8');
const LOCKD = fs.readFileSync('/home/claude/lcr/brand/lcr-lockup-dark.svg', 'utf8');
const css = `
@font-face{font-family:Manrope;font-weight:700;src:url(${F('manrope/files/manrope-latin-700-normal.woff2')})}
@font-face{font-family:Manrope;font-weight:800;src:url(${F('manrope/files/manrope-latin-800-normal.woff2')})}
@font-face{font-family:Inter;font-weight:500;src:url(${F('inter/files/inter-latin-500-normal.woff2')})}
*{margin:0;box-sizing:border-box}html,body{width:1640px;height:624px;overflow:hidden;-webkit-font-smoothing:antialiased}
body{font-family:Inter;position:relative}
h1{font-family:Manrope;font-weight:800;letter-spacing:-.035em;line-height:1.02}
u{text-decoration:none;background:linear-gradient(transparent 74%,#B5532F 74%,#B5532F 90%,transparent 90%)}
.es{font-family:Manrope;font-weight:700;letter-spacing:-.015em}
.url{font-family:Manrope;font-weight:700;font-size:30px;letter-spacing:.02em}
`;
const roof = (c, w = 14, op = 1) => `<svg viewBox="0 0 140 70" width="140" height="70" style="opacity:${op}"><path d="M10 60 L70 12 L130 60" fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const opts = {
  A: `<body style="background:#EFE6D8;color:#2A2320">
    <div style="position:absolute;left:430px;right:250px;top:140px">
      <h1 style="font-size:64px">Long-term rentals in Cabo,<br><u>minus</u> the Facebook chaos.</h1>
      <p class="es" style="font-size:32px;color:#3E5A45;margin-top:22px">Rentas a largo plazo en Los Cabos, sin el caos de Facebook.</p>
      <div style="display:flex;gap:22px;align-items:center;margin-top:34px"><span style="background:#B5532F;color:#fff;font-family:Manrope;font-weight:700;font-size:28px;padding:16px 30px;border-radius:999px">Free waitlist · caborentalapp.com</span></div>
    </div></body>`,
  B: `<body style="background:#2A2320;color:#EFE6D8">
    <div style="position:absolute;left:280px;top:90px;width:500px">
      <div style="display:flex;flex-direction:column;gap:16px;align-items:flex-start">
        <span style="background:#3E5A45;color:#fff;font-size:31px;padding:16px 26px;border-radius:26px 26px 26px 8px">info?</span>
        <span style="background:#3E5A45;color:#fff;font-size:31px;padding:16px 26px;border-radius:26px 26px 26px 8px">¿sigue disponible?</span>
        <span style="background:#3E5A45;color:#fff;font-size:31px;padding:16px 26px;border-radius:26px 26px 26px 8px">how long is the lease?</span>
        <span style="align-self:flex-end;background:#B5532F;color:#fff;font-size:31px;padding:16px 26px;border-radius:26px 26px 8px 26px;margin-right:40px">It's all in the listing.</span>
      </div></div>
    <div style="position:absolute;left:820px;right:260px;top:150px">
      <h1 style="font-size:62px">Long-term rentals in Los Cabos.</h1>
      <p class="es" style="font-size:30px;color:#C9A77C;margin-top:18px">Rentas a largo plazo, en un solo lugar.</p>
      <p class="url" style="margin-top:34px;color:#8FB39A">caborentalapp.com · free waitlist</p>
    </div></body>`,
  C: `<body style="background:#3E5A45;color:#EFE6D8">
    <div style="position:absolute;inset:0;display:grid;grid-template-columns:repeat(12,140px);grid-auto-rows:92px;justify-content:center;align-content:center;gap:0 0;opacity:.10">
      ${Array.from({ length: 84 }, (_, i) => `<div style="display:flex;justify-content:center;align-items:center;transform:translateX(${(Math.floor(i / 12) % 2) * 70}px)">${roof('#EFE6D8', 10)}</div>`).join('')}
    </div>
    <div style="position:absolute;left:0;right:0;top:0;bottom:0;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center">
      ${roof('#B5532F', 16).replace('width="140" height="70"', 'width="200" height="100"')}
      <h1 style="font-size:70px;margin-top:10px">Long-term rentals in Los Cabos</h1>
      <p class="es" style="font-size:36px;color:#C9A77C;margin-top:14px">Rentas a largo plazo · Cabo San Lucas a San José</p>
      <p class="url" style="margin-top:26px;color:#EFE6D8">caborentalapp.com</p>
    </div></body>`,
};
(async () => {
  const b = await chromium.launch();
  const p = await (await b.newContext({ viewport: { width: 1640, height: 624 } })).newPage();
  const out = '/home/claude/lcr/cover/out'; fs.mkdirSync(out, { recursive: true });
  for (const [k, body] of Object.entries(opts)) {
    fs.writeFileSync(`${out}/_t.html`, `<!doctype html><html><head><meta charset="utf-8"><style>${css}</style></head>${body}</html>`);
    await p.goto(`file://${out}/_t.html`); await p.evaluate(() => document.fonts.ready);
    await p.screenshot({ path: `${out}/fb-cover-${k}.png` });
  }
  await b.close();
})();
