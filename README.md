# social-assets

Slide images for Los Cabos Rental social posts. Buffer pulls them from raw GitHub links.
This branch holds images only. The website lives on `main`.

`tooling/` has the slide template (HTML + Playwright), the post data files and the backgrounds.
Render: `cd tooling && npm i && node template/v2.js posts/<id>.json out/`
