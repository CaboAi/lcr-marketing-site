# LCR Marketing Site

Marketing landing page for **Los Cabos Rental** — a long-term rental platform for Baja California Sur. Single-page site with email waitlist capture, EN/ES i18n, and Airbnb-inspired design.

## Stack

- Vite 7
- Tailwind CSS 3.4 (prebuilt to `css/site.css`, no runtime CDN)
- Vanilla HTML + JS
- Web3Forms (waitlist signups and contact form, emailed to the inbox)
- Deployed on Vercel

## Design System

See [DESIGN.md](./DESIGN.md) — Airbnb-inspired design tokens (Rausch Red, Inter font, three-layer card shadows, generous border-radius).

## Develop

```bash
npm install
npm run dev   # http://localhost:5173
```

## Styles and icons

- Styles are prebuilt. After changing Tailwind classes in any `.html` or `js/` file, run `npm run build:css` and commit `css/site.css`. Classes that aren't in the build won't render.
- The icon font only includes the icons the site uses (`icon_names=` in each page's Material Symbols link). When you add a new icon, add its name to that list on every page, keeping it in alphabetical order.
