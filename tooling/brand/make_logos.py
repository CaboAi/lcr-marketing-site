"""Build standalone LCR logo SVGs with Manrope text converted to outlines.

Centering rules (match Grok's "v2 r4" fix):
- The roof apex sits over the visual center of "lcr." (text ink plus the dot).
- The whole mark (roof + lcr.) is centered on the canvas both ways.
"""
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.boundsPen import BoundsPen
import os

FONT = '/home/claude/lcr/node_modules/@fontsource/manrope/files/manrope-latin-700-normal.woff2'
f = TTFont(FONT)
gs = f.getGlyphSet()
cmap = f.getBestCmap()
upm = f['head'].unitsPerEm
OUT = os.path.dirname(os.path.abspath(__file__))
GREEN, CLAY, CANTERA, MESQUITE, AGAVE, DUNE = '#3E5A45', '#B5532F', '#EFE6D8', '#2A2320', '#8FB39A', '#C9A77C'


def text(s, x, y, size, tracking=0.0):
    """Outlined text. Returns (path d, ink left, ink right, ink top, advance)."""
    sc = size / upm
    pen = SVGPathPen(gs)
    cx = x
    inkL = inkR = inkT = None
    for ch in s:
        g = gs[cmap[ord(ch)]]
        g.draw(TransformPen(pen, (sc, 0, 0, -sc, cx, y)))
        bp = BoundsPen(gs); g.draw(bp)
        if bp.bounds:
            l, b, r, t = bp.bounds
            inkL = cx + l * sc if inkL is None else inkL
            inkR = cx + r * sc
            inkT = y - t * sc if inkT is None else min(inkT, y - t * sc)
        cx += g.width * sc + tracking * size
    return pen.getCommands(), inkL, inkR, inkT, cx - x


def mark(size, lcr_c, dot_c, scale=1.0):
    """The roof + lcr. mark at a given text size, local coords, baseline y=0.
    Returns (svg parts, bbox)."""
    ts = 380 * scale
    d, L, R, T, adv = text('lcr', 0, 0, ts, -0.02)
    dot_r = 36 * scale
    dot_cx = R + 34 * scale + dot_r          # dot just after the r
    dot_cy = -dot_r                          # sits on the baseline
    groupL, groupR = L, dot_cx + dot_r
    cx = (groupL + groupR) / 2               # roof apex goes here
    half = 247 * scale                       # half roof width (centerline)
    sw = 108 * scale                         # roof stroke
    apex_y = T - 145 * scale - 145 * scale   # roof sits above the ascender
    base_y = apex_y + 145 * scale
    roof_d = f'M{cx - half} {base_y} L{cx} {apex_y} L{cx + half} {base_y}'
    parts = [f'<path d="{roof_d}" fill="none" stroke="{CLAY}" stroke-width="{sw}" stroke-linecap="round" stroke-linejoin="round"/>',
             f'<path d="{d}" fill="{lcr_c}"/>',
             f'<circle cx="{dot_cx}" cy="{dot_cy}" r="{dot_r}" fill="{dot_c}"/>']
    bbox = (min(cx - half - sw / 2, groupL), apex_y - sw / 2 * 1.2, max(cx + half + sw / 2, groupR), 0)
    return parts, bbox


def icon(bg=None, circle=False, size=1080, fill=0.62, lcr_c=GREEN, dot_c=CLAY):
    parts, (x0, y0, x1, y1) = mark(size, lcr_c, dot_c)
    w, h = x1 - x0, y1 - y0
    s = size * fill / max(w, h)
    tx = size / 2 - (x0 + w / 2) * s
    ty = size / 2 - (y0 + h / 2) * s
    bgsvg = ''
    if bg and circle:
        bgsvg = f'<circle cx="{size/2}" cy="{size/2}" r="{size/2}" fill="{bg}"/>'
    elif bg:
        bgsvg = f'<rect width="{size}" height="{size}" fill="{bg}"/>'
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {size} {size}">{bgsvg}'
            f'<g transform="translate({tx:.2f} {ty:.2f}) scale({s:.5f})">{"".join(parts)}</g></svg>')


def lockup(dark=False):
    lcr_c = CANTERA if dark else GREEN
    bot_c = DUNE if dark else CLAY
    parts, (x0, y0, x1, y1) = mark(1080, lcr_c, AGAVE)
    s = 112 / (y1 - y0)                      # mark height 112 in a 128-tall lockup
    tx = 8 - x0 * s
    ty = 120 - y1 * s
    mark_w = (x1 - x0) * s
    tx2 = 8 + mark_w + 26
    d2, *_ , w2 = text('los cabos', tx2, 66, 54, -0.02)
    d3, *_ , w3 = text('rental', tx2, 120, 54, -0.02)
    W = int(tx2 + max(w2, w3) + 8)
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} 128">'
            f'<g transform="translate({tx:.2f} {ty:.2f}) scale({s:.5f})">{"".join(parts)}</g>'
            f'<path d="{d2}" fill="{lcr_c}"/><path d="{d3}" fill="{bot_c}"/></svg>')


files = {
    'lcr-icon.svg': icon(bg=CANTERA),
    'lcr-icon-circle.svg': icon(bg=CANTERA, circle=True, fill=0.58),
    'lcr-icon-transparent.svg': icon(),
    'favicon.svg': icon(bg=CANTERA, fill=0.80),
    'lcr-lockup.svg': lockup(False),
    'lcr-lockup-dark.svg': lockup(True),
}
for name, svg in files.items():
    open(os.path.join(OUT, name), 'w').write(svg)
print('wrote', list(files))
