"""Build standalone LCR logo SVGs with Manrope text converted to outlines."""
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
import os

FONT = '/home/claude/lcr/node_modules/@fontsource/manrope/files/manrope-latin-700-normal.woff2'
f = TTFont(FONT)
gs = f.getGlyphSet()
cmap = f.getBestCmap()
upm = f['head'].unitsPerEm
OUT = os.path.dirname(os.path.abspath(__file__))

GREEN, CLAY, CANTERA, MESQUITE, AGAVE, DUNE = '#3E5A45', '#B5532F', '#EFE6D8', '#2A2320', '#8FB39A', '#C9A77C'


def text_path(s, x, y, size, tracking=0.0):
    """Return (svg path d, advance width) for string s with baseline at y."""
    sc = size / upm
    pen = SVGPathPen(gs)
    cx = x
    for ch in s:
        g = cmap[ord(ch)]
        tp = TransformPen(pen, (sc, 0, 0, -sc, cx, y))
        gs[g].draw(tp)
        cx += gs[g].width * sc + tracking * size
    return pen.getCommands(), cx - x


def roof(x0, x1, ytop, ybase, w, color):
    mid = (x0 + x1) / 2
    return (f'<path d="M{x0} {ybase} L{mid} {ytop} L{x1} {ybase}" fill="none" stroke="{color}" '
            f'stroke-width="{w}" stroke-linecap="round" stroke-linejoin="round"/>')


def icon(bg=None, dot=CLAY, lcr=GREEN, size=1080):
    # matches the supplied icon: roof above, "lcr" with a dot, on Cantera
    d, wid = text_path('lcr', 0, 0, 380, -0.02)
    x = (size - wid - 60) / 2
    d, wid = text_path('lcr', x, 845, 380, -0.02)
    parts = [f'<rect width="{size}" height="{size}" fill="{bg}"/>' if bg else '',
             roof(270, 765, 300, 445, 108, CLAY),
             f'<path d="{d}" fill="{lcr}"/>',
             f'<circle cx="{x + wid + 50}" cy="815" r="36" fill="{dot}"/>']
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {size} {size}">{"".join(parts)}</svg>'


def lockup(dark=False):
    lcr_c = CANTERA if dark else GREEN
    top_c = CANTERA if dark else GREEN
    bot_c = DUNE if dark else CLAY
    d1, w1 = text_path('lcr', 14, 116, 84, -0.03)
    d2, w2 = text_path('los cabos', 158, 66, 54, -0.02)
    d3, w3 = text_path('rental', 158, 120, 54, -0.02)
    W = int(158 + max(w2, w3) + 6)
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} 128">'
            + roof(16, 128, 12, 48, 15, CLAY)
            + f'<path d="{d1}" fill="{lcr_c}"/><circle cx="{14 + w1 + 9}" cy="108" r="8.5" fill="{AGAVE}"/>'
            + f'<path d="{d2}" fill="{top_c}"/><path d="{d3}" fill="{bot_c}"/></svg>')


files = {
    'lcr-icon.svg': icon(bg=CANTERA),
    'lcr-icon-transparent.svg': icon(),
    'favicon.svg': icon(bg=CANTERA).replace('viewBox="0 0 1080 1080"', 'viewBox="120 120 840 840"'),
    'lcr-lockup.svg': lockup(False),
    'lcr-lockup-dark.svg': lockup(True),
}
for name, svg in files.items():
    open(os.path.join(OUT, name), 'w').write(svg)
print('wrote', list(files))
