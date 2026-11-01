// Renders 3 style options x 3 slides each for review.
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');
const F = p => 'file://' + path.resolve(__dirname, '../node_modules/@fontsource', p);
const fonts = `
@font-face{font-family:Outfit;font-weight:400;src:url(${F('outfit/files/outfit-latin-400-normal.woff2')})}
@font-face{font-family:Outfit;font-weight:500;src:url(${F('outfit/files/outfit-latin-500-normal.woff2')})}
@font-face{font-family:Outfit;font-weight:600;src:url(${F('outfit/files/outfit-latin-600-normal.woff2')})}
@font-face{font-family:Outfit;font-weight:700;src:url(${F('outfit/files/outfit-latin-700-normal.woff2')})}
@font-face{font-family:Outfit;font-weight:800;src:url(${F('outfit/files/outfit-latin-800-normal.woff2')})}
@font-face{font-family:Caveat;font-weight:700;src:url(${F('caveat/files/caveat-latin-700-normal.woff2')})}
@font-face{font-family:Marker;font-weight:400;src:url(${F('permanent-marker/files/permanent-marker-latin-400-normal.woff2')})}
@font-face{font-family:Inter;font-weight:400;src:url(${F('inter/files/inter-latin-400-normal.woff2')})}
@font-face{font-family:Inter;font-weight:500;src:url(${F('inter/files/inter-latin-500-normal.woff2')})}
@font-face{font-family:Inter;font-weight:600;src:url(${F('inter/files/inter-latin-600-normal.woff2')})}
*{box-sizing:border-box;margin:0;padding:0}html,body{width:1080px;height:1350px;overflow:hidden;-webkit-font-smoothing:antialiased}
`;
const items = [
  ['Monthly rent', 'and whether it’s pesos or dollars'],
  ['Lease length', '6 months? 12? It should say'],
  ['Move-in date', 'so you know it fits your timing'],
  ['Deposit', 'how much, before you go see it'],
  ['Who’s behind it', 'the owner, or an agent for them'],
];

/* ---------- A: Bold Editorial ---------- */
const A_css = `
body{font-family:Outfit;background:#f3eee4;color:#14213d;position:relative}
body.dk{background:#14213d;color:#f3eee4}
.top{position:absolute;left:84px;right:84px;top:76px;display:flex;justify-content:space-between;font-weight:600;font-size:24px;letter-spacing:.22em}
.top .n{color:#e8384f;letter-spacing:.1em}
.bot{position:absolute;left:84px;right:84px;bottom:76px;border-top:2px solid currentColor;padding-top:26px;display:flex;justify-content:space-between;font-weight:500;font-size:28px}
.wrap{position:absolute;left:84px;right:84px;top:200px;bottom:200px;display:flex;flex-direction:column;justify-content:center}
.kick{font-weight:600;font-size:32px;color:#e8384f;letter-spacing:.04em;text-transform:uppercase}
h1{font-weight:800;font-size:132px;line-height:.98;letter-spacing:-.035em;margin-top:30px}
h1 u{text-decoration:none;background:linear-gradient(transparent 72%,#e8384f 72%,#e8384f 90%,transparent 90%)}
.lede{font-weight:400;font-size:38px;line-height:1.35;margin-top:40px;max-width:820px;opacity:.85}
.row{display:flex;gap:36px;align-items:baseline;border-top:2px solid rgba(20,33,61,.18);padding:26px 0}
.row:last-child{border-bottom:2px solid rgba(20,33,61,.18)}
.row .k{font-weight:800;font-size:64px;color:transparent;-webkit-text-stroke:2px #e8384f;width:90px;line-height:1}
.row b{display:block;font-weight:700;font-size:46px;letter-spacing:-.02em}
.row span{display:block;font-size:30px;opacity:.7;margin-top:4px}
.dk .lede{opacity:.8}
.pill{display:inline-block;margin-top:56px;background:#e8384f;color:#fff;font-weight:600;font-size:36px;padding:26px 48px;border-radius:999px}
`;
const A = [
  `<body><div class="top"><span>LOS CABOS RENTAL</span><span class="n">01 / 07</span></div>
   <div class="wrap"><p class="kick">Before you message</p><h1>What a <u>complete</u> listing tells you</h1>
   <p class="lede">Five things to look for before you type “info?”</p></div>
   <div class="bot"><span>@caborentalapp</span><span>Swipe →</span></div></body>`,
  `<body><div class="top"><span>LOS CABOS RENTAL</span><span class="n">02 / 07</span></div>
   <div class="wrap" style="top:170px">${items.map((it, i) => `<div class="row"><span class="k">${i + 1}</span><div><b>${it[0]}</b><span>${it[1]}</span></div></div>`).join('')}</div>
   <div class="bot"><span>@caborentalapp</span><span>→</span></div></body>`,
  `<body class="dk"><div class="top"><span>LOS CABOS RENTAL</span><span class="n">07 / 07</span></div>
   <div class="wrap"><p class="kick">If it’s missing</p><h1 style="font-size:118px">Ask before you go see it.</h1>
   <p class="lede">Los Cabos Rental is long-term rentals only, Cabo San Lucas to San José. The waitlist is free.</p>
   <div><span class="pill">Join the waitlist · link in bio</span></div></div>
   <div class="bot"><span>@caborentalapp</span><span>caborentalapp.com</span></div></body>`,
];

/* ---------- B: In the Feed (UI-native, site colors) ---------- */
const B_css = `
body{font-family:Outfit;background:#f6f6f6;color:#1a1a1a;position:relative}
body.dk{background:#1a1a1a;color:#fff}
.brand{position:absolute;left:72px;top:64px;display:flex;align-items:center;gap:14px;font-weight:700;font-size:28px}
.brand i{width:40px;height:40px;border-radius:12px;background:#e8384f;display:inline-block}
.cnt{position:absolute;right:72px;top:70px;font-size:24px;font-weight:500;color:#717171}
.card{background:#fff;border-radius:28px;box-shadow:0 0 0 1px rgba(0,0,0,.04),0 6px 16px rgba(0,0,0,.06),0 12px 28px rgba(0,0,0,.08)}
.post{position:absolute;left:72px;right:72px;top:150px;padding:34px}
.ph{display:flex;gap:18px;align-items:center}.av{width:64px;height:64px;border-radius:50%;background:#d9d9d9}
.ph b{font-size:28px;font-weight:600;display:block}.ph small{font-size:22px;color:#717171}
.pt{font-size:32px;margin:22px 0 18px}
.img{height:400px;border-radius:18px;background:linear-gradient(160deg,#dfe7ee,#c9d6df 55%,#e9e2d4)}
.bub{display:inline-block;background:#f0f0f0;border-radius:24px;padding:14px 24px;font-size:28px;margin:12px 10px 0 0}
.bub b{font-weight:600;margin-right:8px}
h1{position:absolute;left:72px;right:72px;bottom:150px;font-weight:700;font-size:96px;line-height:1.02;letter-spacing:-.03em}
h1 em{font-style:normal;color:#e8384f}
.foot{position:absolute;left:72px;right:72px;bottom:70px;display:flex;justify-content:space-between;font-size:26px;color:#717171;font-weight:500}
.dk .foot{color:#bdbdbd}
.lst{position:absolute;left:72px;right:72px;top:290px;padding:40px 44px}
.lst h2{font-weight:700;font-size:40px;letter-spacing:-.02em}
.lst .tag{display:inline-block;font-size:20px;font-weight:600;background:#fff1f3;color:#e8384f;padding:6px 14px;border-radius:999px;margin-left:12px;vertical-align:middle}
.f{display:flex;justify-content:space-between;align-items:center;border-top:1px solid #ececec;padding:24px 0;font-size:32px}
.f:first-of-type{margin-top:26px}
.f span{color:#717171}.f b{font-weight:600}
.f .ok{width:34px;height:34px;border-radius:50%;background:#e8384f;color:#fff;font-size:22px;display:inline-flex;align-items:center;justify-content:center;margin-left:14px}
.t2{position:absolute;left:72px;right:72px;top:150px;font-weight:700;font-size:58px;letter-spacing:-.025em;line-height:1.05}
.note{position:absolute;left:72px;right:72px;bottom:150px;font-size:26px;color:#717171}
.chat{position:absolute;left:72px;right:72px;top:210px}
.me{background:#e8384f;color:#fff;border-radius:28px 28px 8px 28px;padding:26px 36px;font-size:44px;display:inline-block;float:right;clear:both;margin-top:18px}
.them{background:#333;color:#fff;border-radius:28px 28px 28px 8px;padding:26px 36px;font-size:44px;display:inline-block;float:left;clear:both;margin-top:18px}
.cta{position:absolute;left:72px;right:72px;bottom:170px}
.cta h1{position:static;font-size:88px}
.btn{display:inline-block;margin-top:40px;background:#e8384f;color:#fff;font-weight:600;font-size:34px;padding:26px 46px;border-radius:16px}
`;
const B = [
  `<body><div class="brand"><i></i>Los Cabos Rental</div><div class="cnt">1/7</div>
   <div class="post card"><div class="ph"><div class="av"></div><div><b>Rentas Los Cabos</b><small>Facebook group · 2h</small></div></div>
   <p class="pt">Rento depa 2 recámaras, bonita vista 🏡</p><div class="img"></div>
   <div><span class="bub"><b>Ana</b>info?</span><span class="bub"><b>Luis</b>info</span><span class="bub"><b>Kate</b>still available?</span><span class="bub"><b>José</b>¿precio?</span></div></div>
   <h1>Before you type <em>“info?”</em></h1>
   <div class="foot"><span>@caborentalapp</span><span>Swipe →</span></div></body>`,
  `<body><div class="brand"><i></i>Los Cabos Rental</div><div class="cnt">2/7</div>
   <p class="t2">A complete listing answers these first</p>
   <div class="lst card"><h2>Example listing <span class="tag">Long-term</span></h2>
   ${[['Monthly rent', 'MX$28,000'], ['Lease length', '12 months'], ['Move-in date', 'Dec 1'], ['Deposit', '1 month'], ['Listed by', 'Owner']].map(r => `<div class="f"><span>${r[0]}</span><b>${r[1]}<i class="ok">✓</i></b></div>`).join('')}
   </div><p class="note">Sample values for illustration.</p>
   <div class="foot"><span>@caborentalapp</span><span>→</span></div></body>`,
  `<body class="dk"><div class="brand"><i></i>Los Cabos Rental</div><div class="cnt" style="color:#bdbdbd">7/7</div>
   <div class="chat"><span class="me">info?</span><span class="them">Hola! Sí, sigue disponible 🙂</span><span class="me">¿Cuánto y por cuánto tiempo?</span></div>
   <div class="cta"><h1>Skip the back-and-forth.</h1><div class="btn">Join the waitlist · link in bio</div></div>
   <div class="foot"><span>@caborentalapp</span><span>Long-term rentals only</span></div></body>`,
];

/* ---------- C: Field Notes (founder's notebook) ---------- */
const noise = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.35  0 0 0 0 0.28  0 0 0 0 0.18  0 0 0 .10 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")`;
const C_css = `
body{font-family:Inter;background:${noise},radial-gradient(circle,#c9b996 1.6px,transparent 1.8px) 0 0/44px 44px,#f1e8d6;color:#14213d;position:relative}
body.dk{background:${noise},#1d2b4a;color:#f1e8d6}
.tape{position:absolute;width:190px;height:54px;background:rgba(232,214,160,.75);top:46px;left:445px;transform:rotate(-3deg);box-shadow:0 1px 2px rgba(0,0,0,.08)}
.hdr{position:absolute;left:90px;top:130px;font-weight:600;font-size:24px;letter-spacing:.24em}
.pg{position:absolute;right:90px;top:124px;font-family:Caveat;font-weight:700;font-size:40px;color:#c4532f}
h1{position:absolute;left:90px;right:90px;top:280px;font-family:Marker;font-size:122px;line-height:1.1}
.hl{background:linear-gradient(transparent 55%,rgba(246,200,80,.75) 55%,rgba(246,200,80,.75) 92%,transparent 92%);padding:0 6px}
.dk .hl{background:linear-gradient(transparent 55%,rgba(196,83,47,.85) 55%,rgba(196,83,47,.85) 92%,transparent 92%)}
.hand{font-family:Caveat;font-weight:700;color:#c4532f;font-size:54px;line-height:1.1}
.n1{position:absolute;left:160px;top:930px;transform:rotate(-2deg)}
.arrow{position:absolute;left:96px;top:860px}
.stamp{position:absolute;right:100px;bottom:200px;border:5px solid #c4532f;color:#c4532f;font-weight:600;font-size:30px;letter-spacing:.14em;padding:16px 26px;transform:rotate(-8deg);border-radius:10px;opacity:.85}
.foot{position:absolute;left:90px;bottom:90px;font-weight:500;font-size:26px;letter-spacing:.06em}
.list{position:absolute;left:90px;right:90px;top:300px}
.li{display:flex;gap:34px;align-items:flex-start;margin-bottom:58px}
.box{flex:0 0 68px;height:68px;position:relative}
.li b{font-weight:600;font-size:54px;display:block}
.li span{font-family:Caveat;font-weight:700;font-size:48px;color:#c4532f}
.t{position:absolute;left:90px;right:90px;top:190px;font-family:Marker;font-size:64px}
.big{position:absolute;left:90px;right:90px;top:300px;font-family:Caveat;font-weight:700;font-size:124px;line-height:1.02}
.sub{position:absolute;left:90px;right:120px;top:820px;font-size:40px;line-height:1.45;opacity:.9}
.dk .stamp{border-color:#f1e8d6;color:#f1e8d6}
`;
const box = (tick) => `<svg class="box" viewBox="0 0 58 58"><path d="M6 8 Q4 30 7 52 Q30 55 52 51 Q55 28 51 6 Q28 3 6 8Z" fill="none" stroke="#14213d" stroke-width="3.5"/>${tick ? '<path d="M12 30 L25 44 L54 6" fill="none" stroke="#c4532f" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>' : ''}</svg>`;
const C = [
  `<body><div class="tape"></div><div class="hdr">LOS CABOS RENTAL</div><div class="pg">1/7</div>
   <h1>What a <span class="hl">complete</span> listing tells you</h1>
   <svg class="arrow" width="70" height="80" viewBox="0 0 70 80"><path d="M10 5 Q5 45 50 62" fill="none" stroke="#c4532f" stroke-width="5" stroke-linecap="round"/><path d="M36 50 L52 63 L34 72" fill="none" stroke="#c4532f" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>
   <p class="hand n1">read this before you<br>comment “info?”</p>
   <div class="stamp">LONG-TERM ONLY</div><div class="foot">@caborentalapp</div></body>`,
  `<body><div class="tape" style="left:120px;transform:rotate(4deg)"></div><div class="hdr" style="top:120px;left:auto;right:90px">LOS CABOS RENTAL</div>
   <div class="list" style="top:250px">${items.map((it, i) => `<div class="li">${box(true)}<div><b>${it[0]}</b><span>${it[1]}</span></div></div>`).join('')}</div>
   <div class="foot">@caborentalapp</div><div class="pg" style="top:auto;bottom:80px">2/7</div></body>`,
  `<body class="dk"><div class="tape"></div><div class="hdr">LOS CABOS RENTAL</div><div class="pg" style="color:#f1e8d6">7/7</div>
   <p class="big">Missing any of these?<br><span class="hl">Ask first.</span></p>
   <p class="sub">I’m building Los Cabos Rental so long-term listings in Cabo come complete. Join the free waitlist, link in bio.</p>
   <div class="stamp">WAITLIST OPEN</div><div class="foot">@caborentalapp</div></body>`,
];

(async () => {
  const b = await chromium.launch();
  const p = await (await b.newContext({ viewport: { width: 1080, height: 1350 } })).newPage();
  const out = path.join(__dirname, 'out'); fs.mkdirSync(out, { recursive: true });
  for (const [name, css, slides] of [['A', A_css, A], ['B', B_css, B], ['C', C_css, C]]) {
    for (let i = 0; i < slides.length; i++) {
      const f = path.join(out, '_t.html'); fs.writeFileSync(f, `<!doctype html><html><head><meta charset="utf-8"><style>${fonts}${css}</style></head>${slides[i]}</html>`); await p.goto('file://' + f);
      await p.evaluate(() => document.fonts.ready);
      await p.screenshot({ path: path.join(out, `opt${name}_${i + 1}.jpg`), type: 'jpeg', quality: 92 });
    }
  }
  await b.close();
})();
