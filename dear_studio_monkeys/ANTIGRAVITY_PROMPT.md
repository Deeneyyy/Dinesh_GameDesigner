# Antigravity Build Prompt: Dear Studio Monkeys

You are working inside an existing project for a standalone personal landing page called **Dear Studio Monkeys**, created by Dinesh A as a thoughtful introduction for potential employment, freelance work, or collaboration with the Monkeys team.

Your job is to refine the real HTML, CSS, and JavaScript files in this project. Do not return only advice, a design description, or a mockup. Inspect the project, implement the changes, run the page, test it at desktop and mobile sizes, and update the project files.

## 1. Start by inspecting the actual project

Inspect these files before editing:

- `index.html`
- `styles.css`
- `script.js`
- `dear-studio-monkeys.html`
- `ANTIGRAVITY_BRIEF.md`
- `reference/studio-monkeys-design-system.html`
- `reference/studio-monkeys-homepage-reference.jpeg`
- `assets/Dinesh_A_Resume.pdf`
- `assets/thumbnails/`

The original reference image may also be available on the user's machine at:

`D:\Projects\Studio Monkeys\1793301727710-3c76.jpeg`

Prefer the image copied into `reference/` if the absolute Windows path is not accessible.

Treat `reference/studio-monkeys-design-system.html` as the source of truth for design tokens, controls, spacing, colours, and component details. Use the homepage screenshot as the visual reference for the headline scale, editorial typography, use of yellow blocks, dotted-paper texture, small playful objects, horizontal ticker, and restrained motion. Do not copy the source site's actual navigation, footer, case studies, or content structure. The result is Dinesh's personal page, not a replica of the Studio Monkeys website.

Before finishing, check for broken file references. If a referenced script, stylesheet, font, image, resume PDF, or other asset is missing, either restore it or update the reference. Do not leave console errors or pretend an asset exists when it does not.

## 2. Core creative direction

The page title is **Dear Studio Monkeys**.

The personality should be warm, confident, slightly quirky, visual, human, and professionally considered. It should feel like a personal note from a multidisciplinary visual designer, not a standard corporate application, a long cover letter, or an AI-generated portfolio template.

The main pitch is branding and visual design first. Game design should be presented as a specialised contribution in the Adreno Monkeys section, not as Dinesh's entire identity.

The overall page should communicate:

- Branding and visual communication
- Graphic design, identity systems, campaign work, and thumbnails
- Animation, motion, and visual storytelling
- AI-assisted visual experimentation as one tool among many
- Work with Lights On Media Studios on integrating AI into a VFX workflow
- Interest in writing, research, technology, open source, and explaining complex topics
- Game design and gaming culture specifically for Adreno Monkeys
- Manga, anime, and animation interests for Otaku Monkeys
- A polite and honest introduction, without assuming there is an open job

Do not make AI sound like the only method Dinesh believes in. Do not frame the page as a blanket endorsement of generative AI. Emphasise that the method follows the idea, and that research, visual design, art direction, human judgement, iteration, and finishing matter.

## 3. Design system and visual language

Follow the included Studio Monkeys design system, including its CSS tokens and components. Preserve the supplied system's warm paper background, bold yellow, black ink, rust accents, restrained earth tones, fine borders, editorial grid, clear hierarchy, and simple geometric details.

Use the core palette from the reference system, keeping the existing token names wherever possible:

- Paper: `#FEFAF0`
- Warm paper: `#F3EEE3`
- Deeper paper: `#EFEADE`
- Ink: `#000000`
- Charcoal: `#414141`
- Grey: `#727272`
- Yellow: `#FFC82B`
- Deeper yellow: `#F3B915`
- Rust: `#C94001`
- Red: `#BE2326`
- Pale blue: `#DCE8FF`
- Pale rose: `#FFE9DF`
- Earth brown: `#322C23`

Use the design system's `Space Grotesk` and `DM Sans` families for interface labels, body text, supporting details, buttons, and compact headings. For the oversized hero statement and selected main editorial headings, use a high-contrast serif display treatment inspired by the supplied screenshot. Prefer a suitable web-safe serif fallback such as `Georgia` if an additional font is not available. The large serif display is a deliberate visual accent. Do not replace the whole design system with a generic serif template.

### Hero headline scale

The uploaded reference image is important for typography. Its main heading is oversized, serif, editorial, calm, and centred, not a bold geometric sans-serif. Create a similar sense of scale and confidence for the personal hero. Use responsive sizing, for example `clamp(3rem, 8vw, 7.5rem)`, with carefully controlled line height and letter spacing. Avoid clipping, awkward word breaks, and text extending beyond the viewport.

Keep supporting body copy much smaller and easy to read. Use compact uppercase metadata, generous negative space, fine divider rules, and occasional visual interruptions. Maintain the reference system's paper, yellow, ink, rust, and earth palette.

### Layout constraints

- Keep the page standalone.
- Do not add a standard website navbar, home navigation, or conventional global footer.
- A small top line with the page identity and a Resume action is fine.
- Keep the Resume action near the top and a collapsible resume section near the bottom.
- Use generous editorial whitespace but do not leave large empty sections that feel unfinished.
- Use the existing content-width, gutter, spacing, and responsive grid tokens in the design system.
- Use the dotted-paper background sparingly where it supports the visual rhythm.
- Use yellow as a strong section accent, not as a background for every section.
- Keep corners mostly square or lightly rounded, in accordance with the reference system.
- Avoid generic rounded dashboard cards and excessive shadows.

## 4. Opening section and personal voice

The first screen should quickly tell the reader who Dinesh is and why this page exists.

Suggested direction, refine naturally if needed:

**Vanakkam, I'm Dinesh.**

**Branding, visual design, and stories with a point of view.**

I work across identity, campaign graphics, thumbnails, motion, animation, and visual storytelling. I like finding the idea worth communicating and giving it a visual language.

Include a short supporting thought such as: **Branding is my centre of gravity. Curiosity takes me into other disciplines.**

Do not overexplain in the hero. Let the following sections do the detail work. Keep one clear primary action that scrolls to selected work, one link to the wider portfolio archive at `https://deens-archive.vercel.app/#/`, and the Resume action.

## 5. Real Instagram embeds must appear inside the webpage

The four supplied Instagram works must render as embeds inside the webpage, not only as buttons that open Instagram. Use Instagram's official public-post embed pattern for every post. Load `https://www.instagram.com/embed.js` only once. Preserve a visible direct link as a fallback.

Use these exact source URLs and titles:

1. **Pacha Perundhu**, Kaber Vasuki: `https://www.instagram.com/p/DUpXKaOD_Wz/`
2. **Firangipani**, Kaber Vasuki: `https://www.instagram.com/p/DUnQ8ayj1ZR/`
3. **Kusu Potangae**, Wilbur Sargunaraj: `https://www.instagram.com/p/DUtEDHdj8wT/`
4. **One Piece**: `https://www.instagram.com/p/DVl5SdAD6Vs/`

Implementation requirements:

- Use the Instagram embed blockquote structure with the correct `data-instgrm-permalink` URL and the original post link inside the blockquote.
- Include the official Instagram embed script once, not once per card.
- After the embed script loads, allow Instagram to process all post blocks. If cards are inserted or refreshed dynamically, call `window.instgrm.Embeds.process()` after insertion when the API is available.
- Make embed containers responsive. They must fit mobile screens and must not create horizontal scrolling. Respect the embed's real height and do not crop the embedded media to fit a fixed ratio.
- Do not place hover-tilt transforms directly on the actual Instagram iframe or its interactive content. The surrounding title or card frame may respond gently, while the playable post remains stable and easy to tap.
- Keep a clear direct Instagram link so the work can still be opened if Meta blocks the embed, the account disables embedding, consent settings block third-party scripts, or the post is no longer public.
- Do not replace the embeds with fake video previews, image placeholders, or generated copies.
- Explain in the README that Instagram embeds require network access and may not render when the HTML is opened directly through `file://`. Test via a local HTTP server and in the published environment.

Label the four pieces **independent AI-generated visual studies**. Do not imply they were commissioned by, endorsed by, or officially associated with the artists. The visual studies are one subset of Dinesh's work and should not dominate the entire portfolio.

## 6. Branding and visual design section

Branding and visual design should be one of the most prominent parts of the page, alongside the selected work.

Include these facts accurately:

- Dinesh studied Fine Arts at Government College of Fine Arts, Chennai.
- His design work includes logo exploration, concept development, typography, colour, visual hierarchy, campaign graphics, and communication design.
- He was part of the team behind UPSC logo work. Do not imply he alone designed or owns the official identity.
- He also worked on KVIC logo exploration and visual assets for national-level campaigns.
- Link UPSC to `https://www.upsc.gov.in/`.
- Link the wider portfolio archive to `https://deens-archive.vercel.app/#/`.

Use actual supplied images or assets if available. Do not invent official logos or fabricate client work. If visual files for these projects are not included, use a clean typographic panel with an honest description and links, then make it easy to replace that panel with real assets later.

The writing should show that Dinesh thinks of a brand as a visual language that must work across formats, not only as a logo. Mention how identity work can extend into campaigns, social graphics, presentations, motion, film, websites, and physical applications.

Do not mention or analyse Studio Monkeys' own client projects or case studies in the pitch. The reference screenshot is for design direction only, not a source of portfolio claims.

## 7. Thumbnails and other visual work

A separate folder containing Dinesh's designed YouTube thumbnails may be added to `assets/thumbnails/` later.

- Inspect the folder at build time.
- If real image files exist, build a responsive, art-directed thumbnail gallery using those exact files.
- Use descriptive alt text based on the filenames or supplied context.
- Preserve image aspect ratios and avoid excessive cropping.
- If the folder is empty, do not create fake thumbnails or sample client projects. Keep the page visually complete without displaying an empty gallery.
- Make adding future thumbnails simple and document the expected folder path in the README.

## 8. AI, VFX, and creative workflow

Create a balanced section about tools, technique, and art direction. Suggested heading:

**The tool is one part. Craft makes it work.**

The section must say that Dinesh uses a range of approaches and selects methods according to the brief. Generative AI is one tool for exploration, visual development, or specific production problems. It does not replace design fundamentals, drawing, visual research, art direction, animation, compositing, iteration, or finishing.

Mention that Dinesh has been working with **Lights On Media Studios** on integrating AI into a visual-effects workflow. Do not inflate the claim beyond workflow integration work and experimentation. Frame the interest as making useful tools work alongside artists and existing production processes.

The visual for this section can be a small animated process diagram, for example:

`IDEA -> RESEARCH -> DESIGN / TOOLS -> ART DIRECTION -> FINISH`

The diagram must communicate that human judgement and creative decisions remain involved throughout. Keep visual design and craft at the centre of the page, not AI hype.

## 9. Contributions across the Monkeys ecosystem

Keep the channels distinct and do not write as if the channels are all one brand. Use compact, scannable editorial rows or sections with clear labels.

### Studio Monkeys

Focus on branding, identity systems, campaign design, graphic design, visual development, pitch materials, social assets, thumbnails, motion support, AI-assisted visual exploration, and production-pipeline experimentation. This should be the main professional fit.

### Adreno Monkeys

This is the section where game design belongs. Explain that Dinesh has an M.Des in Game Design from NID Bengaluru and worked on a soccer mobile game and a combat racing game at Terrabyte Technologies. Mention interest in games, esports, systems, player behaviour, research, and visual explainers. Do not present him as a sports expert.

### Meta Monkeys

Mention self-hosting, de-Googling, open-source tools, Obsidian, personal technology experiments, following developments in AI and the creative technology industry, and an interest in researching and writing about these subjects. He can help turn complicated technical subjects into approachable stories with visuals.

### Otaku Monkeys

Mention the genuine interest in ongoing manga, anime, animation, character design, visual storytelling, pacing, and adaptation. This should sound like a real enthusiast with a visual design background, not a forced professional pitch.

### Temple Monkeys

Position the contribution around graphic design, visual concepts, visual development, motion, storyboarding support, and storytelling. Do not claim professional filmmaker or comedian experience.

A subtle note may mention that Dinesh is interested in music-led visual storytelling and would welcome the possibility of contributing to work around artists such as Kaber Vasuki at some point. Keep it understated. Do not imply a relationship, endorsement, or existing collaboration that has not been established.

## 10. Resume and contact

Keep a Resume action near the top. It should scroll smoothly to and open an expandable resume/details section near the bottom. Make sure the `<details>` open state works on keyboard and touch.

Include accurate, concise selected experience:

- **M.Des, Game Design**, National Institute of Design, Bengaluru
- **BFA, Fine Arts**, Government College of Fine Arts, Chennai
- **Diploma, Multimedia**, Image Institute
- **Terrabyte Technologies**: soccer mobile game and combat racing game, game design and gameplay support
- **Eduzo**: graphic and visual design, UI, UX flows, icons, and assets for a learning-focused game
- **KVIC and UPSC-related work**: logos, visual communication, campaign and publication assets, with the UPSC logo work described as a team contribution
- **Lights On Media Studios**: AI integration in a VFX workflow

Use the PDF at `assets/Dinesh_A_Resume.pdf` if it exists. Verify that the file really exists and the link opens. If it is not present, place the provided resume PDF in that location or update the link to a valid local path. Never leave a broken PDF link.

The contact CTA should be polite and low-pressure. Dinesh does not know whether there is an opening. He is introducing himself and is open to a relevant role, project, freelance collaboration, or conversation.

Wider portfolio archive: `https://deens-archive.vercel.app/#/`

## 11. Motion and interaction direction

Add polished, light motion throughout the page. The target is a tactile, editorial creative portfolio, not a flashy motion demo. The reference screenshot suggests playful moving objects and a lively but restrained page.

Implement the following:

1. **Hero entrance:** Stagger the greeting, oversized name, supporting sentence, buttons, and decorative objects. Use short opacity and translate animations. The page must still be readable if animations do not run.
2. **Floating objects:** Use CSS shapes, fine orbit lines, small star/spark shapes, and paper-like geometric objects near the hero. Give a few objects slow floating, tilting, or rotating animations with slightly different timings. Keep them subtle and do not obstruct text.
3. **Moving ticker:** Add a thin horizontal ticker inspired by the reference site's message strip. Use short phrases about design, craft, curiosity, and storytelling. Make the loop seamless, avoid jumps, and pause it on hover or keyboard focus where appropriate.
4. **Scroll reveal:** Use `IntersectionObserver` to reveal section headings, selected work, brand cards, process elements, and channel rows as they enter the viewport. Use a restrained opacity and vertical movement transition. Trigger once per element rather than replaying constantly.
5. **Hover lift and tilt:** Non-embedded work cards may lift a few pixels and tilt gently, no more than about 3 to 4 degrees. Use a small perspective effect and reset smoothly on pointer leave. Buttons may lift slightly and change background or underline. Do not make every element move at once.
6. **Pointer interaction:** If a pointer-following tilt is implemented, keep it subtle, support mouse and trackpad, disable it for coarse pointers and small screens, and do not interfere with links or embedded Instagram controls.
7. **Section accents:** Use very restrained parallax or drift for decorative details only. Do not make the main reading column move or reduce readability.
8. **Focus behavior:** Keyboard focus must remain visible. Hover effects must have equivalent focus states for keyboard users.
9. **Reduced motion:** Add a `prefers-reduced-motion: reduce` mode that removes parallax, tilt, ticker movement, and scroll/entrance motion or reduces them to near-zero. Do not trap focus or delay access to content.
10. **Performance:** Prefer CSS transforms and opacity. Do not add a large animation framework for these small effects. Avoid layout thrashing and continuous heavy scroll handlers.

## 12. Typography and motion should work together

The hero should use a very large serif line similar in attitude to the uploaded screenshot. Other headings should maintain clear editorial hierarchy. Place small labels or short lines of information around the main headline, not long paragraphs in the hero.

Use font sizes that scale with the viewport. Check at widths of 320px, 375px, 768px, 1024px, and 1440px. No clipped characters, overlapping decoration, or horizontal page scrolling.

The page may use a small number of intentional graphic interruptions, such as a small orbiting circle, angular cutout, moving sticker, or tiny illustrated object. Do not make the page feel like an unrelated generic portfolio template. Keep the existing brand tokens.

## 13. No em dashes anywhere in the website

This is a hard requirement.

Do not use the Unicode em dash character U+2014 in any visible website content or metadata. Audit and remove it from:

- Headings and paragraph text
- HTML title and meta description
- Button labels and link labels
- Image alt text and ARIA labels
- Resume content
- Mailto subject strings
- JavaScript-generated copy
- Text embedded in CSS content properties

Also replace URL-encoded em dash sequences such as `%E2%80%94` where they appear in the page's own links. Use commas, periods, colons, parentheses, or a plain hyphen instead. Preserve standard hyphenated terms when appropriate.

After implementation, search every project text file used by the page for the literal character and search URLs for its encoded form. Report that both checks are clear. Do not leave a note in the page saying that em dashes were removed.

## 14. Technical and accessibility requirements

- Keep HTML semantic and valid.
- Use one main H1 and maintain ordered heading levels.
- Keep external links using `target="_blank"` paired with `rel="noreferrer noopener"` when appropriate.
- Use meaningful alt text for supplied images and empty alt text for purely decorative imagery.
- Make buttons and links keyboard accessible.
- Ensure visible focus states and adequate colour contrast.
- Check that no missing CSS or JavaScript reference remains.
- Do not duplicate the Instagram embed script.
- Do not build fake embedded video players.
- Avoid layout shifts where practical. Reserve reasonable space around embeds without cropping them.
- Do not collect or send visitor data.
- Keep third-party Instagram embedding limited to the supplied posts and explain that the embeds depend on Instagram and network access.

## 15. QA checklist before finishing

Actually launch and inspect the built page. Do not claim a test passed unless you ran it.

Verify:

- The page opens locally through an HTTP server.
- All four Instagram posts are represented by real in-page embeds and have working direct-link fallbacks.
- Embeds are responsive and do not cause horizontal overflow.
- The hero headline resembles the uploaded reference in scale and editorial serif character.
- Main colours, controls, spacing, and typography match `reference/studio-monkeys-design-system.html`.
- Animations are visible but restrained, and keyboard interactions work.
- Reduced-motion preferences are respected.
- Resume disclosure opens and closes, and the PDF link resolves.
- The portfolio archive and UPSC links work.
- No broken image, font, script, stylesheet, or local asset reference remains.
- No console errors are present during page load and basic interaction.
- No visible text contains an em dash U+2014 and no page-owned URL contains `%E2%80%94`.
- Desktop and mobile screenshots are produced after the final changes.

Update `README.md` with the run instructions and the Instagram embed limitation. Keep this prompt as `ANTIGRAVITY_PROMPT.md` in the project so it can be reused.

## Final instruction

Make the changes directly in the existing project. Prioritise a strong visual result, a working page, honest content, and polished details. Do not invent work samples, do not imply endorsements or commissions, and do not turn this into an AI-only portfolio. The finished page should feel like Dinesh wrote it, designed it, and cared about the details.
