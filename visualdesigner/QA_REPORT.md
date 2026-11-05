# QA Report — Universal Visual Designer Portfolio

## Design update
- Applied a complementary modern palette: royal blue, warm amber/orange, soft blue and warm neutral surfaces.
- Harmonised section backgrounds, card treatments, buttons, typography accents and borders.
- Preserved the existing content, project ordering, external links, embedded media and supplied assets.
- Refined the product carousel geometry so the track has no vertical padding and the slide frame height is the viewport height.

## Carousel checks
- 14 original product/detail/material slides present in the markup.
- All referenced local assets exist.
- JavaScript carousel initializer selector matches the HTML.
- Continuous movement, pause/resume, wheel/trackpad movement, pointer drag, touch support and keyboard arrows are wired.
- Loop width uses the measured original group plus the inter-group gap; cloned slide widths are synchronised.
- Reduced-motion preference disables automatic movement.
- Image dimensions are measured from natural aspect ratios, with width clamped to keep cards usable.

## Validation
- HTML parsed successfully with Python HTMLParser.
- JavaScript syntax check passed with Node.js.
- All local `src` and `href` references checked: no missing local paths.
- ZIP integrity checked after packaging.

## Visual/browser test limitation
A browser automation runtime was not available in this environment, so live screenshot-based visual regression and real pointer/wheel interaction testing could not be performed here. The website should be opened locally in a browser for final visual confirmation before publishing.
