// Cactus & Clay slide template. Layout A ("Bold Editorial") and B ("In the Feed").
// Usage: node template/v3.js <post.json> <outDir>
// post.json: { id, slides: [ { layout: "a"|"b", dark?: bool, type, ...fields } ] }
// Text fields may contain <u> (clay underline in A, clay text in B), <em>, <br>.
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const ROOT = path.resolve(__dirname, '..');
const F = p => 'file://' + path.join(ROOT, 'node_modules/@fontsource', p);
const LOGO = fs.readFileSync(path.join(ROOT, 'brand/lcr-lockup.svg'), 'utf8');
const LOGO_DK = fs.readFileSync(path.join(ROOT, 'brand/lcr-lockup-dark.svg'), 'utf8');

const css = `
@font-face{font-family:Manrope;font-weight:600;src:url(${F('manrope/files/manrope-latin-600-normal.woff2')})}
@font-face{font-family:Manrope;font-weight:700;src:url(${F('manrope/files/manrope-latin-700-normal.woff2')})}
@font-face{font-family:Manrope;font-weight:800;src:url(${F('manrope/files/manrope-latin-800-normal.woff2')})}
@font-face{font-family:Inter;font-weight:400;src:url(${F('inter/files/inter-latin-400-normal.woff2')})}
@font-face{font-family:Inter;font-weight:500;src:url(${F('inter/files/inter-latin-500-normal.woff2')})}
@font-face{font-family:Inter;font-weight:600;src:url(${F('inter/files/inter-latin-600-normal.woff2')})}
:root{--green:#3E5A45;--clay:#B5532F;--cantera:#EFE6D8;--mesq:#2A2320;--agave:#8FB39A;--dune:#C9A77C}
*{box-sizing:border-box;margin:0;padding:0}
html,body{width:1080px;height:1350px;overflow:hidden;-webkit-font-smoothing:antialiased}
body{font-family:Inter;background:var(--cantera);color:var(--mesq);position:relative}
body.dk{background:var(--mesq);color:var(--cantera)}
.logo{position:absolute;left:80px;top:66px;height:80px}.logo svg{height:80px;width:auto;display:block}
.cnt{position:absolute;right:80px;top:92px;font-family:Manrope;font-weight:700;font-size:24px;letter-spacing:.1em;color:var(--clay)}
.dk .cnt{color:var(--dune)}
.foot{position:absolute;left:80px;right:80px;bottom:72px;display:flex;justify-content:space-between;font-family:Manrope;font-weight:600;font-size:27px}
.a .foot{border-top:2px solid currentColor;padding-top:24px}
.b .foot{color:#7a6e64;font-weight:600}.b.dk .foot{color:#b8aa98}

/* ---------- A: Bold Editorial ---------- */
.a .wrap{position:absolute;left:80px;right:80px;top:200px;bottom:190px;display:flex;flex-direction:column;justify-content:center}
.kick{font-family:Manrope;font-weight:800;font-size:30px;letter-spacing:.06em;text-transform:uppercase;color:var(--green)}
.dk .kick{color:var(--agave)}
.a h1{font-family:Manrope;font-weight:800;font-size:112px;line-height:1.0;letter-spacing:-.035em;margin-top:28px}
.a h1 u,.a .big u{text-decoration:none;background:linear-gradient(transparent 74%,var(--clay) 74%,var(--clay) 90%,transparent 90%)}
.a .big{font-family:Manrope;font-weight:800;font-size:190px;line-height:.95;letter-spacing:-.04em;color:var(--clay);margin-top:20px}
.a .big + h1{margin-top:22px;font-size:84px}
.lede{font-size:38px;line-height:1.4;margin-top:36px;max-width:860px;opacity:.86}
.note{font-size:26px;margin-top:26px;opacity:.6}
.rows{margin-top:10px}
.row{display:flex;gap:34px;align-items:baseline;border-top:2px solid rgba(42,35,32,.16);padding:28px 0}
.row:last-child{border-bottom:2px solid rgba(42,35,32,.16)}
.row .k{font-family:Manrope;font-weight:800;font-size:66px;color:transparent;-webkit-text-stroke:2px var(--clay);width:96px;line-height:1;flex:0 0 96px}
.row b{display:block;font-family:Manrope;font-weight:800;font-size:48px;letter-spacing:-.02em;line-height:1.1}
.row span{display:block;font-size:31px;opacity:.72;margin-top:8px;line-height:1.35}
.pill{display:inline-block;margin-top:52px;background:var(--clay);color:#fff;font-family:Manrope;font-weight:700;font-size:34px;padding:26px 46px;border-radius:999px}
.phone-row{display:flex;gap:56px;align-items:center;margin-top:34px}
.phone{flex:0 0 330px;height:700px;border:16px solid var(--mesq);border-radius:48px;overflow:hidden;background:#fff;box-shadow:0 24px 50px rgba(42,35,32,.22);position:relative}
.phone img{width:100%;display:block}
.tag{display:inline-block;margin-top:22px;background:#fff;border:2px solid var(--dune);border-radius:999px;padding:8px 20px;font-size:22px;font-weight:600}

/* ---------- B: In the Feed ---------- */
.b .t2{position:absolute;left:80px;right:80px;top:190px;font-family:Manrope;font-weight:800;font-size:64px;line-height:1.06;letter-spacing:-.03em}
.b .t2 u,.b h1 u{text-decoration:none;color:var(--clay)}
.b.dk .t2 u,.b.dk h1 u{color:#d9764f}
.card{background:#fff;color:var(--mesq);border-radius:30px;box-shadow:0 0 0 1px rgba(0,0,0,.04),0 6px 16px rgba(0,0,0,.08),0 14px 34px rgba(0,0,0,.12)}
.post{position:absolute;left:80px;right:80px;top:190px;padding:36px}
.ph{display:flex;gap:18px;align-items:center}.av{width:66px;height:66px;border-radius:50%;background:#d8cfc2}
.ph b{font-family:Manrope;font-size:29px;font-weight:700;display:block}.ph small{font-size:22px;color:#7a6e64}
.pt{font-size:32px;margin:22px 0 18px}
.img{height:330px;border-radius:20px;background:linear-gradient(160deg,#c9d8cd,#8FB39A 35%,#C9A77C 75%,#e7d6bd)}
.bub{display:inline-block;background:#efe6d8;border-radius:24px;padding:14px 24px;font-size:28px;margin:14px 10px 0 0}
.bub b{font-weight:600;margin-right:8px}
.b h1{position:absolute;left:80px;right:80px;bottom:170px;font-family:Manrope;font-weight:800;font-size:88px;line-height:1.03;letter-spacing:-.035em}
.lst{position:absolute;left:80px;right:80px;padding:40px 46px}
.lst h2{font-family:Manrope;font-weight:800;font-size:40px;letter-spacing:-.02em}
.lst .chip{display:inline-block;font-size:21px;font-weight:600;background:#dfe9e1;color:var(--green);padding:6px 16px;border-radius:999px;margin-left:12px;vertical-align:middle}
.f{display:flex;justify-content:space-between;align-items:center;border-top:1px solid #ece4d8;padding:24px 0;font-size:32px}
.f:first-of-type{margin-top:24px}
.f span{color:#7a6e64}.f b{font-weight:600;display:flex;align-items:center}
.ok{width:36px;height:36px;border-radius:50%;background:var(--green);color:#fff;font-size:22px;display:inline-flex;align-items:center;justify-content:center;margin-left:16px}
.bnote{position:absolute;left:80px;right:80px;font-size:24px;color:#7a6e64}
.b.dk .bnote{color:#b8aa98}
.chat{position:absolute;left:80px;right:80px;top:380px}
.me,.them{display:inline-block;clear:both;margin-top:20px;padding:26px 36px;font-size:42px;line-height:1.25;max-width:780px}
.me{float:right;background:var(--clay);color:#fff;border-radius:30px 30px 8px 30px}
.them{float:left;background:var(--green);color:#fff;border-radius:30px 30px 30px 8px}
.b.light .them{background:#fff;color:var(--mesq);box-shadow:0 4px 14px rgba(0,0,0,.08)}
.bbody{position:absolute;left:80px;right:80px;font-size:36px;line-height:1.42;opacity:.88}
.btn{display:inline-block;margin-top:38px;background:var(--clay);color:#fff;font-family:Manrope;font-weight:700;font-size:34px;padding:26px 44px;border-radius:18px}
.opt{display:flex;align-items:center;gap:22px;border:2px solid #e4dccf;border-radius:22px;padding:26px 28px;margin-top:18px;font-size:33px;line-height:1.25}
.opt i{flex:0 0 38px;height:38px;border-radius:50%;border:3px solid var(--clay)}
`;

const L = (s, dk) => `<div class="logo">${dk ? LOGO_DK : LOGO}</div>`;
const foot = (s, i, n) => `<div class="foot"><span>@caborentalapp</span><span>${s.footR || (i === 0 ? (s.swipe || 'Swipe →') : i === n - 1 ? 'caborentalapp.com' : '→')}</span></div>`;

function A(s, i, n) {
  const dk = !!s.dark;
  let body = '';
  if (s.type === 'cover' || s.type === 'statement' || s.type === 'cta') {
    body = `<div class="wrap">${s.kicker ? `<p class="kick">${s.kicker}</p>` : ''}${s.big ? `<p class="big">${s.big}</p>` : ''}
      <h1 ${s.size ? `style="font-size:${s.size}px"` : ''}>${s.head}</h1>${s.lede ? `<p class="lede">${s.lede}</p>` : ''}
      ${s.note ? `<p class="note">${s.note}</p>` : ''}${s.pill ? `<div><span class="pill">${s.pill}</span></div>` : ''}</div>`;
  } else if (s.type === 'rows') {
    body = `<div class="wrap">${s.kicker ? `<p class="kick" style="margin-bottom:26px">${s.kicker}</p>` : ''}<div class="rows">${s.rows.map((r, k) => `<div class="row"><span class="k">${r.n || k + 1}</span><div><b>${r[0]}</b><span>${r[1]}</span></div></div>`).join('')}</div></div>`;
  } else if (s.type === 'phone') {
    body = `<div class="wrap" style="justify-content:flex-start;top:190px">${s.kicker ? `<p class="kick">${s.kicker}</p>` : ''}
      <h1 style="font-size:${s.size || 76}px">${s.head}</h1>
      <div class="phone-row"><div class="phone"><img src="file://${path.join(ROOT, s.phone)}"></div>
      <div><p class="lede" style="margin-top:0;font-size:36px">${s.lede}</p><span class="tag">${s.tag || 'Sample preview'}</span></div></div></div>`;
  }
  return `<body class="a ${dk ? 'dk' : ''}">${L(s, dk)}<div class="cnt">${String(i + 1).padStart(2, '0')} / ${String(n).padStart(2, '0')}</div>${body}${foot(s, i, n)}</body>`;
}

function B(s, i, n) {
  const dk = s.dark !== false;
  let body = '';
  if (s.type === 'fbpost') {
    body = `<div class="post card"><div class="ph"><div class="av"></div><div><b>${s.group}</b><small>${s.meta}</small></div></div>
      <p class="pt">${s.postText}</p><div class="img"></div>
      <div>${s.comments.map(c => `<span class="bub"><b>${c[0]}</b>${c[1]}</span>`).join('')}</div></div>
      <h1 style="font-size:${s.size || 88}px">${s.head}</h1>`;
  } else if (s.type === 'chat') {
    body = `<p class="t2">${s.head}</p><div class="chat" style="top:${s.chatTop || 400}px">${s.msgs.map(m => `<span class="${m[0]}">${m[1]}</span>`).join('')}</div>
      ${s.body ? `<p class="bbody" style="bottom:190px">${s.body}</p>` : ''}`;
  } else if (s.type === 'card') {
    body = `<p class="t2">${s.head}</p><div class="lst card" style="top:${s.cardTop || 380}px"><h2>${s.cardTitle}${s.chip ? `<span class="chip">${s.chip}</span>` : ''}</h2>
      ${s.fields.map(r => `<div class="f"><span>${r[0]}</span><b>${r[1]}<i class="ok">✓</i></b></div>`).join('')}</div>
      ${s.body ? `<p class="bbody" style="bottom:230px">${s.body}</p>` : ''}${s.note ? `<p class="bnote" style="bottom:150px">${s.note}</p>` : ''}`;
  } else if (s.type === 'options') {
    body = `<p class="t2" style="font-size:${s.size || 64}px">${s.head}</p><div class="lst card" style="top:${s.cardTop || 560}px;padding:28px 34px">
      ${s.options.map(o => `<div class="opt"><i></i>${o}</div>`).join('')}</div>`;
  } else if (s.type === 'text' || s.type === 'cta') {
    body = `<div style="position:absolute;left:80px;right:80px;top:190px;bottom:190px;display:flex;flex-direction:column;justify-content:center">
      ${s.kicker ? `<p class="kick">${s.kicker}</p>` : ''}<p class="t2" style="position:static;margin-top:24px;font-size:${s.size || 88}px">${s.head}</p>
      ${s.body ? `<p class="bbody" style="position:static;margin-top:34px">${s.body}</p>` : ''}${s.btn ? `<div><span class="btn">${s.btn}</span></div>` : ''}</div>`;
  }
  return `<body class="b ${dk ? 'dk' : 'light'}">${L(s, dk)}<div class="cnt">${i + 1}/${n}</div>${body}${foot(s, i, n)}</body>`;
}

(async () => {
  const [, , dataPath, outDir] = process.argv;
  const post = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  fs.mkdirSync(outDir, { recursive: true });
  const b = await chromium.launch();
  const p = await (await b.newContext({ viewport: { width: 1080, height: 1350 } })).newPage();
  const n = post.slides.length;
  for (let i = 0; i < n; i++) {
    const s = post.slides[i];
    const html = `<!doctype html><html><head><meta charset="utf-8"><style>${css}</style></head>${(s.layout || post.layout) === 'b' ? B(s, i, n) : A(s, i, n)}</html>`;
    const tmp = path.resolve(outDir, '_t.html'); fs.writeFileSync(tmp, html);
    await p.goto('file://' + tmp); await p.evaluate(() => document.fonts.ready); await p.waitForLoadState('load');
    const over = await p.evaluate(() => [...document.querySelectorAll('.wrap,.t2,.lst,.bbody,h1')].some(e => { const r = e.getBoundingClientRect(); return r.bottom > 1190 && !e.closest('.foot'); }));
    if (over) console.warn(`WARN ${post.id} slide ${i + 1} may run into the footer`);
    const out = path.join(outDir, `${post.id}_slide${i + 1}.jpg`);
    await p.screenshot({ path: out, type: 'jpeg', quality: 92 });
    console.log(out);
  }
  fs.rmSync(path.resolve(outDir, '_t.html'), { force: true });
  await b.close();
})();
