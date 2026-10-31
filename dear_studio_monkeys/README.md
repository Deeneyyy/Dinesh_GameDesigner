# Dear Studio Monkeys

A standalone personal landing page created by Dinesh A as an introduction for potential collaboration, freelance design, or employment with the Studio Monkeys team.

The site is designed following the Studio Monkeys visual language: warm paper backgrounds, high-contrast serif headlines, bold yellow accents, ink black typography, dotted-paper textures, restrained motion, and a tactile editorial sensibility.

---

## Quick Start (Run Locally)

Due to browser security policies regarding third-party scripts, Instagram embeds require an active internet connection and must be served over HTTP/HTTPS rather than opened directly via the `file://` protocol.

### Option 1: Python HTTP Server (Recommended)

Run the following command from the project root:

```bash
python -m http.server 8080
```

Then open your browser at:
[http://localhost:8080](http://localhost:8080)

### Option 2: Node.js (npx serve)

```bash
npx serve . -p 8080
```

---

## Key Features & Structure

1. **Topline Strip (Studio Monkeys Yellow)**:
   - Full-width bold yellow strip (`#FFC82B`) at the very top.
   - Outlined label badge: `A note to the Monkeys team`.
   - Compact outlined action cluster on the right: SVG icon buttons for **LinkedIn**, **GitHub**, **Behance**, and **Self-Hosted Blog**, alongside an outlined **Resume** jump button with 2px offset shadow.

2. **Editorial Serif Hero**:
   - Centred composition with generous whitespace and subtle dotted paper background.
   - Large serif display headline (`Playfair Display`, `Georgia`): *Vanakkam, I'm Dinesh.*
   - Subheading: *I work across branding, visual design, film visuals and storytelling.*
   - Floating playful geometric accents (CSS 3D cube, dashed orbit, rotating spark, paper badge).
   - Direct action buttons: *See selected work*, *My archive*, and *Resume*.

3. **Ticker & Adjacent Quick-Access Strip**:
   - Narrow, full-width moving marquee ticker with real subjects: `Branding ✦ Films & series ✦ Graphic design ✦ Campaigns ✦ Thumbnails ✦ Animation ✦ Motion ✦ Games ✦ Manga ✦ Open source`. Pauses on hover and respects `prefers-reduced-motion`.
   - Dedicated small utility strip docked directly next to the banner: Quick-access outlined chips for LinkedIn, GitHub, Behance, Self-Hosted Blog, and Resume PDF.

4. **Full-Width Yellow Capability Section**:
   - Studio Monkeys reference pattern band (*A few things I can help with*).
   - Grounded copy explaining identity systems, campaign graphics, thumbnails, film and series visuals, presentations, visual research, and motion support.
   - Outlined filter chips linking directly to relevant portfolio areas: `Branding`, `Films & series`, `Visual experiments`, `Thumbnails`, and `VFX workflows`.

5. **Short Introduction**:
   - Conversational, human voice tracing Dinesh's journey from Fine Arts through multimedia, graphic design, animation, UX, and game design.
   - Emphasis on understanding what the project needs and selecting tools accordingly.

6. **Selected Visual Experiments (Compact Showcase)**:
   - 4 official in-page Instagram embeds representing independent personal visual studies:
     - *Pacha Perundhu* (Kaber Vasuki)
     - *Firangipani* (Kaber Vasuki)
     - *Kusu Potangae* (Wilbur Sargunaraj)
     - *One Piece* (Fandom / homage study)
   - Accurately positioned as a compact showcase of personal experiments rather than the full extent of Dinesh's animation or visual work.
   - Factual metadata and visible direct links (*Open original post*) for seamless fallbacks.

7. **Beyond the Frame (Film & Series Work)**:
   - Dedicated section highlighting involvement in live-action films, realistic visual storytelling, and cinematic production projects:
     - **Kara** (Feature film / screen project)
     - **Death Railway** (Upcoming series / feature)
     - **Dark Heaven** (Series project in development)
     - **Buried** (Upcoming feature project)
     - Additional narrative explorations (title treatments, concept pitch frames, visual research).
   - Widescreen 2.39:1 anamorphic film slate cards with neutral project involvement descriptions.

8. **Branding & Visual Communication**:
   - Union Public Service Commission (UPSC) logo breakdown study (team contribution with official asset).
   - Khadi and Village Industries Commission (KVIC) visual assets exploration presented in an honest, restrained editorial typographic specimen card (no fabricated client marks).
   - Direct link to Dinesh's wider archive.

9. **Curated Thumbnail Gallery**:
   - Handcrafted YouTube thumbnail posters designed for Kaber Vasuki's releases (*Oozhi: The Short Film*, *Frangipani*, and *Unakkum Enna Pudichirka: Raw Tapes 02*).
   - Process and layout iteration variations strip.

10. **VFX Production Workflows (Lights On Media Studios)**:
    - Expanded discussion of practical AI integration into existing VFX pipelines.
    - Specific focus on:
      - **ComfyUI**: Node-based workflows and repeatable procedural setups.
      - **Higgsfield**: Motion studies and cinematic visual exploration.
      - **Magnific**: High-fidelity texture, resolution, and detail refinement.
    - Interactive process flow diagram emphasizing human judgement and finishing: `IDEA -> RESEARCH -> DESIGN / TOOLS -> ART DIRECTION -> FINISH`.

11. **Monkeys Ecosystem Alignment**:
    - Tailored, distinct contribution perspectives for **Studio Monkeys**, **Adreno Monkeys** (M.Des Game Design from NID Bengaluru, Terrabyte Technologies), **Meta Monkeys** (self-hosting, open-source, Obsidian, blog archive), **Otaku Monkeys** (manga, animation, character design), and **Temple Monkeys** (visual storytelling, storyboards, details).

12. **Personal Section (Rabbit Holes)**:
    - Honest, relatable look at Dinesh's curiosity and self-directed learning.

13. **Expandable Resume & Archive Links**:
    - Collapsed by default via semantic HTML5 `<details id="resume-details">` for a clean reading experience.
    - Top and hero Resume buttons automatically scroll to and expand the resume disclosure.
    - Valid local PDF resume link (`assets/Dinesh_A_Resume.pdf`).

14. **Closing & Contact Section**:
    - Bold yellow closing panel with conversational sign-off (*Anyway, that's a bit about me*).
    - Direct actions: *Say hello* (mailto) and *See more of my work*.
    - Social profile pills: LinkedIn, GitHub, Behance, Blog & Archive.

---

## Adding Future Thumbnails & Film Projects

To add new projects:
1. For thumbnails: Place the 16:9 image file into `assets/thumbnails/` and add a new card inside `.thumbnail-gallery-grid`.
2. For film/series work: Add a new `<article class="film-card">` inside `.film-grid` with project tags, cinematic slate, and neutral description.

---

## Quality & Compliance Notes

- **Zero Em Dashes**: The entire website content, metadata, links, CSS, and script strings strictly avoid the Unicode em dash character (U+2014) and any encoded sequences (`%E2%80%94`), using hyphens, colons, commas, or parentheses instead.
- **Accessibility**: Semantic HTML5 markup, visible focus outlines (`--sm-rust`), ARIA labels, and full `prefers-reduced-motion: reduce` support.
- **Responsive Design**: Tested and verified across desktop (1440px), tablet (768px-992px), and mobile viewports (390px-504px).
