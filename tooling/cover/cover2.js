// Facebook cover v2: 1640x924 (16:9). Content kept in the center 960px and the top ~620px,
// so the mobile crop and the centered profile picture (bottom center) never cover it.
const { chromium } = require('playwright'); const fs = require('fs');
const F = p => 'file:///home/claude/lcr/node_modules/@fontsource/' + p;
const html = `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:Manrope;font-weight:700;src:url(${F('manrope/files/manrope-latin-700-normal.woff2')})}
@font-face{font-family:Manrope;font-weight:800;src:url(${F('manrope/files/manrope-latin-800-normal.woff2')})}
*{margin:0;box-sizing:border-box}html,body{width:1640px;height:924px;overflow:hidden;-webkit-font-smoothing:antialiased}
body{background:#3E5A45;color:#EFE6D8;font-family:Manrope;position:relative}
.c{position:absolute;left:340px;right:340px;top:185px;display:flex;flex-direction:column;align-items:center;text-align:center}
h1{font-weight:800;font-size:82px;line-height:1.04;letter-spacing:-.035em;margin-top:18px}
.es{font-weight:700;font-size:34px;color:#C9A77C;margin-top:20px;letter-spacing:-.01em}
.url{font-weight:700;font-size:30px;margin-top:22px;letter-spacing:.02em}
</style></head><body><div class="c">
<svg viewBox="0 0 140 70" width="190" height="95"><path d="M10 60 L70 12 L130 60" fill="none" stroke="#B5532F" stroke-width="15" stroke-linecap="round" stroke-linejoin="round"/></svg>
<h1>Long-term rentals<br>in Los Cabos</h1>
<p class="es">Rentas a largo plazo · Cabo San Lucas a San José</p>
<p class="url">caborentalapp.com</p></div></body></html>`;
(async()=>{fs.writeFileSync('/tmp/cv2.html',html);const b=await chromium.launch();const p=await b.newPage({viewport:{width:1640,height:924}});
await p.goto('file:///tmp/cv2.html');await p.evaluate(()=>document.fonts.ready);await p.screenshot({path:'/home/claude/lcr/cover/out/fb-cover-1640x924.png'});await b.close()})();
