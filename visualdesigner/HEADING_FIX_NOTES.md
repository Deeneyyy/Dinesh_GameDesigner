# Display heading overlap fix

The previous stylesheet set multiple large display headings to `line-height: .9`. The thumbnail headline also used an inline highlighted span with vertical padding. Inline vertical padding does not reliably expand the parent line box, so the yellow highlight could visually collide with the preceding/following line.

The stylesheet now:
- Gives all major display headings a line-height of 1.08, increasing to 1.1 at narrow widths.
- Makes highlighted heading spans inline-block so their padding contributes to the line box.
- Adds controlled vertical padding and baseline alignment to the highlighted phrase.
- Preserves the existing typeface, scale, yellow highlight and overall Ting design direction.
- Applies the same breathing-room rule to the hero and closing display headings.

This is a CSS-only layout fix. No content, links, project imagery, carousel behavior or résumé details were changed.
