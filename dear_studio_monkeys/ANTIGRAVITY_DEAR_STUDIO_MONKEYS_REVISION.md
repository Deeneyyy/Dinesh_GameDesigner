# Antigravity Prompt: Revise “Dear Studio Monkeys”

You are working inside my existing **Dear Studio Monkeys** website project. This is a personal introduction and work sampler that I want to share with the Studio Monkeys team as an open approach for a job, project, freelance opportunity, or conversation. It is not a generic agency portfolio and it should not read like a formal application written by an AI.

Your task is to revise the existing site, not start a completely new project. First inspect the current files, then make the visual and copy changes below, implement them, and test the finished page in a browser at desktop and mobile sizes.

## 1. First inspect the project and its files

1. The two HTML files I supplied, `index(1).html` and `dear-studio-monkeys(1).html`, are byte-for-byte duplicates. Treat one as the source of truth. Do not maintain two versions that can drift apart.
2. Inspect the real project folder and its existing CSS, JavaScript, fonts, assets, resume PDF, thumbnail folder and other media before editing.
3. The current HTML references `styles.css`, `script.js`, `assets/upsc-logo-study.jpg`, several files under `assets/thumbnails/`, and `assets/Dinesh_A_Resume.pdf`. Verify every one of these paths. Do not assume they exist just because the HTML references them.
4. Search the project folder recursively for the actual work images and thumbnail folder. My project folder is:
   `D:\Projects\Studio Monkeys\`
5. The visual reference screenshot is:
   `D:\Projects\Studio Monkeys\1793301727710-3c76.jpeg`
   Use this screenshot as the main reference for the visual style. It is not an instruction to copy the Studio Monkeys navigation, logo, client work, partner logos, testimonials or footer.
6. If a required asset is not present, do not create a fake client image, logo, thumbnail, quote or project. Either find the real asset in the project folder, use a restrained typographic treatment, or temporarily hide that specific visual card until the real asset is supplied.
7. Do not claim that QA passed unless you have actually run the page and checked it.

## 2. What this page should feel like

The page should feel like **Dinesh introducing himself in his own words**. It should be warm, slightly playful, visually confident and honest. A little rough around the edges is fine. Do not make it sound like an agency proposal, a corporate bio, a LinkedIn summary or an AI-generated personal-brand manifesto.

I want the voice to feel like I am saying:

> Vanakkam, I'm Dinesh. I studied Fine Arts, moved into multimedia and design, and ended up working across branding, graphics, animation, thumbnails and interactive work. I like getting into a subject, figuring out what it needs to say, and then working out how to show it.

Keep sentences clear and conversational. Use first person. Prefer everyday words. Avoid inflated claims, generic motivational language, neat three-part slogans and abstract phrases that sound impressive but do not say anything specific.

### Avoid these phrases and labels

Remove or rewrite all of the following wherever they appear:

- “Branding is my centre of gravity.”
- “Creative Technology” and “Creative Technologist”.
- “stories with a point of view” when used as a generic tagline.
- “curiosity takes me into other disciplines”.
- “a visual language” when repeated as a vague catch-all phrase.
- “the idea has to work in the world”.
- “thumbnails as posters” as a grand claim. A simple explanation is better.
- “the tool is one part, craft makes it work” if it becomes another AI-centric slogan.
- “core professional fit”.
- “genuine enthusiast curiosity”.
- “understand, explore, design, communicate” as a polished process mantra.
- “no assumptions about openings, just an introduction”.
- “I am not looking for a title as much as good problems to work on with interesting people”.
- “I can do everything” or any variation that makes me sound like I am pitching myself as an expert in every discipline.

Do not use em dashes anywhere in visible page copy. Use full stops, commas, colons or parentheses instead. Search the finished HTML and visible text for the Unicode em dash character `—` and remove every occurrence.

Do not keep repeating that I am curious, multidisciplinary, interested in many things or able to connect disciplines. Say it once in a natural way and let the actual work demonstrate it.

## 3. Visual direction: follow the supplied Studio Monkeys screenshot more closely

The current page is too much like a minimalist editorial portfolio with a left-aligned, two-column hero, large sans-serif headings, coloured typographic reel cards and long blocks of copy. That is not close enough to the screenshot.

Use the screenshot's visual language more directly, while keeping the page clearly about me:

### Top strip

- Use a full-width Studio Monkeys-style yellow strip at the top.
- Do not add a full navigation menu or home navigation. This is a standalone page, not a replacement for the Studio Monkeys website.
- Left side: a small outlined label reading `A note to the Monkeys team` or `Vanakkam, I'm Dinesh`.
- Right side: a compact outlined `Resume` button. A `Say hello` contact action may appear here only if it does not clutter the strip.
- Buttons should have a dark outline, a small bottom offset/shadow and a lightly rounded rectangular shape. Do not use oversized capsule/pill buttons everywhere.

### Hero

- Rebuild the hero as a centred, spacious composition on the warm cream background.
- The main headline must be a large editorial serif, inspired by the screenshot. Use the existing Playfair Display font if available, with Georgia as a fallback. Do not use Space Grotesk as the main hero display font.
- Use Space Grotesk for compact UI labels and DM Sans for body text.
- Use a responsive serif headline scale, for example `clamp(2.5rem, 7vw, 5.6rem)`, and adjust it carefully for small screens.
- Keep the headline centred, with natural line breaks and no clipped letters.
- Keep the supporting paragraph much smaller and centred, with a restrained line length.
- Add a few small floating decorative elements around the hero, inspired by the screenshot's orbit, loose marks and small illustrated object. They should be subtle and should not compete with the text. Use actual existing assets if available. If not, use a few simple CSS or inline SVG doodles. Do not use a large generic “MAKE MEAN SOMETHING” graphic or invent a mascot.
- Keep the hero height and whitespace intentional. Do not let the top half become mostly empty.

### Ticker

- Add a very narrow, full-width moving ticker below the hero, like the small ticker in the screenshot.
- Use short, real subjects from my work: `Branding`, `Graphic design`, `Campaigns`, `Thumbnails`, `Animation`, `Motion`, `Games`, `Manga`, `Open source`.
- Do not include `Creative Technologist` or make `Game Designer` part of my general identity. Mention my game-design qualification and experience in the Adreno section and in the expandable resume only.
- Keep the ticker readable and slow. Pause it on hover and respect `prefers-reduced-motion`.

### Yellow capability section

- Follow the reference's full-width yellow band with a centred serif heading, one compact paragraph and three or four small outlined buttons/chips.
- Use a natural heading such as `A few things I can help with`.
- Suggested copy:

  “I can help with identity and logo work, campaign graphics, social posts, thumbnails, presentations, visual research and motion support. Some projects need a complete visual system. Others need someone to get stuck into the details and make the pieces come together.”

- Suggested chips: `Branding`, `Campaigns`, `Visual design`, `Motion & graphics`.
- These should link down to the relevant sections if practical. Do not call this “Core Services” because this is not an agency services page.

### Work section

- Use a pale cream or warm paper background with the subtle dotted pattern from the reference.
- Centre the section title in serif type.
- Use actual images and video embeds as the main content. The current coloured cards that only display oversized words are not a substitute for the work itself.
- Use a two-column image-led grid for normal work images at desktop and, where space permits, at the screenshot's narrow layout. For Instagram embeds, use a single column on narrow mobile screens if two columns would make the embeds too cramped.
- Use 16:9 or source-native image ratios for thumbnails and visual assets. Do not crop important text, artwork or faces.
- Keep captions small and factual. A work title can use the serif display type.

### Other sections

- Use a strong yellow section for a short “Where I could fit” / channel contribution summary if it helps the overall rhythm.
- A dark full-width panel may be used for the Lights On Media Studios VFX workflow note or personal experiments, but do not add a fake testimonial or copy the Studio Monkeys Playground content.
- Do not reproduce the reference site's partner strip or Kaber Vasuki testimonial. That testimonial is not about me.
- Keep a simple closing contact area. I previously asked for no conventional global footer, so do not add a full footer with navigation links.

### Components and styling

- Warm cream: `#FEFAF0`.
- Warm paper: `#F3EEE3`.
- Yellow: `#FFC82B`.
- Black: `#000000`.
- Charcoal: `#414141`.
- Rust accent: `#C94001`.
- Pale rose: `#FFE9DF`.
- Pale blue: `#DCE8FF`.
- Keep borders fine and dark. Use the dotted texture sparingly.
- Main section headings should be serif and have a similar scale and restraint to the screenshot. Supporting text should be compact, not tiny.
- Buttons should use a dark 1 to 1.5px outline and a subtle 2 to 3px offset shadow, with a small corner radius.
- Avoid dashboard-style cards, large rounded pills, heavy shadows and too many competing colours.

## 4. Use this revised copy as the starting point

Please use the following copy or make only small edits for fit. Do not replace it with generic agency language.

### Hero

Eyebrow:
`A PERSONAL NOTE FROM CHENNAI`

Main heading:
`Vanakkam, I'm Dinesh.`

Second line / subheading:
`I work across branding, visual design and visual storytelling.`

Supporting copy:
`I studied Fine Arts, moved into multimedia and design, and have worked across identity, graphics, thumbnails, animation, UX and interactive work. I like getting into a brief, understanding what it needs to say, and figuring out how to show it clearly.`

Buttons:
- `See some work` -> selected work section.
- `My archive` -> `https://deens-archive.vercel.app/#/`.
- `Resume` -> expandable resume section.

Do not add the phrase “branding is my centre of gravity”.

### Short introduction

Heading:
`A little about what I do`

Copy:
`My background started in Fine Arts and took me through multimedia, graphic design, animation, UX and game design. I enjoy working with images, type, layout and motion, and I am happy moving between a bigger concept and the small details that make it work.`

`That can mean a logo, a campaign, a thumbnail, a presentation, an animation or a visual explanation of something technical. I don't have one fixed process for all of them. I work out what the project needs and choose the tools accordingly.`

### Visual experiments / Instagram reels

Heading:
`Some visual experiments`

Intro copy:
`I've been making a few music and fandom-led reels using generative AI as part of the visual process. They are personal experiments, not commissioned or official artist collaborations. I enjoy testing what these tools can do, but they are only one part of my practice. The rest of my work also includes branding, graphic design, thumbnails, animation and plenty of hands-on visual work.`

Use these exact post URLs and titles:

1. `Pacha Perundhu` by Kaber Vasuki: `https://www.instagram.com/p/DUpXKaOD_Wz/`
2. `Firangipani` by Kaber Vasuki: `https://www.instagram.com/p/DUnQ8ayj1ZR/`
3. `Kusu Potangae` by Wilbur Sargunaraj: `https://www.instagram.com/p/DUtEDHdj8wT/`
4. `One Piece`: `https://www.instagram.com/p/DVl5SdAD6Vs/`

For each card:
- Show the title clearly.
- Show the artist / subject as small metadata.
- Embed the actual Instagram post inside the page using the official Instagram embed pattern.
- Add a visible `Open original post` link to the same URL.
- Do not repeat `AI-generated visual study` four times. Put the AI context in the intro paragraph and, if needed, one small label for the group.

Add this short note after the reels:
`These are personal experiments rather than official artist collaborations. I enjoy working with music-led visuals and would be happy to explore more of that space, especially around Tamil independent music.`

It is acceptable to mention Kaber Vasuki as an artist whose work interests me. Do not imply that I have worked with him, that he commissioned these visuals, or that there is an existing collaboration.

### Branding and visual communication

Heading:
`Some of the design work I've been part of`

Intro copy:
`I've worked on logo development, visual identity, typography, colour, campaign graphics and other communication materials. A couple of these projects were for organisations with a very wide public presence, so the work had to be clear and usable beyond a single presentation.`

UPSC card title:
`Union Public Service Commission`

UPSC card copy:
`I was part of the team behind the UPSC logo work, along with other visual communication and publication assets. My contribution was part of a wider team effort.`

Link:
`https://www.upsc.gov.in/`

Link label:
`Visit the official UPSC website`

KVIC card title:
`Khadi and Village Industries Commission`

KVIC card copy:
`I worked on multiple logo explorations and visual assets for national-level campaigns. The work involved concept development, typography, colour and refining different directions.`

Important:
- Keep the UPSC contribution accurately described as team work. Do not claim I alone designed the official logo or imply that UPSC endorses me.
- Use real project images if available. Do not make a fake UPSC identity graphic or a generic yellow `K` and present it as the KVIC logo.
- If the real work samples are not found, make a restrained typographic card and label the contribution honestly. Do not create fabricated mockups.

### Thumbnails

Heading:
`A few thumbnails I've worked on`

Copy:
`I also design YouTube thumbnails and promotional artwork. I like treating a thumbnail as a small poster. It needs to catch someone's eye, but it still has to tell them what they are about to watch. I've worked with different tones, from music and short films to gaming content.`

Asset discovery:
- Search `D:\Projects\Studio Monkeys\` recursively for the thumbnail folder and actual image files.
- Use the actual files. Do not recreate, redraw or invent the thumbnail designs.
- Preserve their aspect ratios, especially 16:9 images.
- Make each image open in a simple lightbox or link to its source only if a real source URL exists.
- Use the real project title if it is present in the filename or accompanying note. Do not invent credits or client relationships.
- If there are many images, show a thoughtful selection and a `See more` link to my archive.

### Lights On Media Studios / VFX workflow

Heading:
`A bit of work around VFX workflows`

Copy:
`I've also been working with Lights On Media Studios on integrating AI tools into parts of their visual-effects workflow. I'm interested in where these tools are actually useful in production and how they can fit alongside the artists, software and processes already in place. The tools matter, but so do the decisions, the visual judgement and the finishing.`

Do not call me a “Creative Technologist”. Do not describe this as a full-time role, formal employment or a completed studio-wide transformation unless the source files clearly support that. Do not invent measurable results.

### Contributions across the Monkeys

Heading:
`And a few other things I get excited about`

Intro:
`The different channels have their own subjects and audiences. These are the places where my work or personal interests overlap with them. I would be happy to contribute where it makes sense.`

**Studio Monkeys**

`This is where most of my visual design experience fits. I can help with branding, logo work, campaign graphics, social posts, presentations, thumbnails, visual research and design support for motion or video projects. I am comfortable working on both the main idea and the smaller design details around it.`

**Adreno Monkeys**

`This is where my game design background comes in. I have an M.Des in Game Design from NID Bengaluru and worked on a soccer mobile game and a combat racing game at Terrabyte Technologies. I'd enjoy researching and writing about games, game design, esports and gaming communities in India. I can also help explain game systems, mechanics and player behaviour visually.`

Mention game design qualifications and job experience only in this Adreno section and in the expandable resume. Do not use “Game Designer” as the hero title or as a general ticker identity.

**Meta Monkeys**

`I spend a lot of time self-hosting services, trying open-source alternatives, de-Googling as much as I can and using Obsidian for notes, writing and keeping a personal archive. I also follow what is happening with AI in the creative industry, including what is useful, what is changing and what artists should be thinking about. I enjoy researching and writing about this kind of thing, and would be interested in contributing as a writer or researcher, as well as helping with the visuals.`

Link `Obsidian / personal archive` or `My archive` to `https://deens-archive.vercel.app/#/`.

**Otaku Monkeys**

`I read a lot of manga, keep up with ongoing series and watch plenty of anime. Since I come from an art and animation background, I also enjoy looking at character design, panel composition, movement, pacing and how a story changes when it moves from manga to animation. I'd be happy to help with research, writing, visuals or just a good conversation about a series.`

**Temple Monkeys**

`I enjoy film and visual storytelling, and I understand the visual and technical side of how a film is put together. I have not worked as a full-time filmmaker, so I won't pretend otherwise. I can still help with visual concepts, graphics, storyboards, thumbnails, motion ideas and the design details that support a production.`

Do not make all five channel descriptions sound identical. Keep the distinctions clear and conversational.

### A short personal section

Heading:
`I tend to go down rabbit holes`

Copy:
`I can get very absorbed in a subject. Sometimes that means pulling apart a visual system; sometimes it means spending an evening figuring out how to host an app myself or understanding why a game mechanic works. One thing often leads to another, and every now and then it turns into something useful. That's a pretty good description of how I learn.`

Do not place an unassessed ADHD or neurodivergence statement in the main public pitch. It is personal and does not need to carry the application. If I later decide I want to share it, keep it as a separate optional personal note, not as a claimed diagnosis.

### Closing

Heading:
`Anyway, that's a bit about me.`

Copy:
`I don't know whether there is an opening that fits this mix of work, and that's alright. I wanted to introduce myself properly instead of sending a generic application. If there is a role, project or freelance opportunity where I could be useful, I'd be glad to have a conversation. Even if the timing isn't right, thank you for taking a look.`

Buttons:
- `Say hello` -> `mailto:deen.dinesh.mail@gmail.com?subject=Hello%20Dinesh`
- `See more of my work` -> `https://deens-archive.vercel.app/#/`

Keep the sign-off simple:
`Dinesh A` and `Chennai, India`.

## 5. Bold text and link treatment

Use bold selectively. Do not bold whole paragraphs or every other phrase.

### Make these terms bold where they first appear

- **Fine Arts**
- **branding**
- **graphic design**
- **animation**
- **UPSC logo work** (in the sentence that says I was part of the team)
- **Khadi and Village Industries Commission**
- **Lights On Media Studios**
- **M.Des in Game Design** (Adreno section only)
- **Terrabyte Technologies** (Adreno section only)
- **open-source**
- **self-hosting**
- **Obsidian**

Use headings for project titles and channel names. Use small uppercase labels only for metadata such as `TEAM CONTRIBUTION`, `PERSONAL VISUAL EXPERIMENT` or `THUMBNAIL DESIGN`.

### Links that should be present

| Visible link text | Destination | Placement |
|---|---|---|
| Resume | `#resume` | Top strip |
| See some work | `#work` | Hero |
| My archive | `https://deens-archive.vercel.app/#/` | Hero and relevant Meta section |
| Pacha Perundhu / Open original post | `https://www.instagram.com/p/DUpXKaOD_Wz/` | Reel card |
| Firangipani / Open original post | `https://www.instagram.com/p/DUnQ8ayj1ZR/` | Reel card |
| Kusu Potangae / Open original post | `https://www.instagram.com/p/DUtEDHdj8wT/` | Reel card |
| One Piece / Open original post | `https://www.instagram.com/p/DVl5SdAD6Vs/` | Reel card |
| Visit the official UPSC website | `https://www.upsc.gov.in/` | UPSC card |
| Open PDF resume | `assets/Dinesh_A_Resume.pdf` or the verified actual resume path | Expandable resume |
| LinkedIn | Keep the existing URL only after testing it | Contact area |
| GitHub | `https://github.com/Deeneyyy` | Contact area |
| Behance | Keep the existing URL only after testing it | Contact area |
| Say hello | `mailto:deen.dinesh.mail@gmail.com?subject=Hello%20Dinesh` | Closing |

Do not invent a website URL for Lights On Media Studios or KVIC. Only link them if a confirmed URL exists in my source files or I provide one. Do not add unverified social profiles for Kaber Vasuki or Wilbur Sargunaraj. The Instagram cards should link to the exact posts above.

## 6. Resume behaviour

- The resume section must be collapsed by default. Remove the `open` attribute from the `<details>` element.
- The top Resume button should scroll to the resume section and expand it.
- Keep the summary keyboard accessible and visibly indicate open/closed state.
- Use the actual resume PDF if present. Verify the path and that the PDF opens.
- Use dates, education titles, employers and project descriptions exactly as shown in my resume. Do not invent promotions, job titles, dates, outcomes or metrics.
- Keep the resume details below the main work and channel sections. It should support the pitch, not dominate the first screen.

## 7. Instagram embeds

The reels must be embedded in the page itself, not represented only by a link or by a fake thumbnail.

- Use Instagram's official blockquote embed pattern.
- Load `https://www.instagram.com/embed.js` once.
- Keep one visible direct link per reel as fallback.
- Do not give the embed a fixed height that crops the video or its controls.
- Do not use `overflow:hidden` on a parent that clips the iframe.
- Do not put a CSS hover tilt or transform on the Instagram iframe or its interactive area.
- Instagram may block embeds depending on login, privacy, browser protection or network conditions. Make the fallback obvious, and test via a local HTTP server and the deployed URL.

## 8. Animation and interactions

The reference page has small, playful decorative motion. Add motion in a restrained way:

- Hero headline and supporting copy: gentle fade/slide entrance, staggered slightly.
- Small decorative marks: slow float or orbit. No constant fast spinning.
- Ticker: seamless horizontal movement, slow speed, pause on hover.
- Sections: subtle scroll reveal using `IntersectionObserver`.
- Buttons: small lift and slight shadow change on hover/focus.
- Work cards: subtle image zoom and optional tiny card tilt on hover. Keep titles and text stable.
- Channel rows: underline or small colour shift on hover, not big movement.
- Do not apply hover transformations to embedded Instagram posts, their iframe wrappers, or keyboard focus targets.
- On touch screens, do not rely on hover to reveal information.
- Respect `prefers-reduced-motion: reduce`. When reduced motion is requested, disable floating, ticker movement, tilt and scroll animation.
- Avoid over-animation. It should feel like a lively design page, not a motion demo.

## 9. Layout and responsive checks

Test at minimum:

- Mobile: 390px wide.
- Mobile: 450px wide, matching the supplied screenshot proportions.
- Tablet: 768px wide.
- Desktop: 1440px wide.

Check:

- No horizontal scrolling.
- Hero headline does not clip or produce awkward orphan words.
- Yellow panels span the viewport cleanly.
- Text widths are comfortable and body text is not too tiny.
- Work images retain their correct aspect ratios.
- Instagram embeds fit the viewport and keep their controls visible.
- Cards do not become too narrow.
- No giant empty gaps between sections.
- The page does not become a long uninterrupted wall of text.
- The page still works when Instagram embeds are unavailable.

## 10. Technical checks and deliverables

After implementation:

1. Validate the HTML structure.
2. Check for duplicate IDs.
3. Check every internal anchor and every image/PDF path.
4. Check that the Resume button actually expands the resume section.
5. Check that all Instagram URLs are correct and each card has its own matching URL.
6. Check that no visible copy contains an em dash.
7. Check there are no JavaScript errors in the browser console.
8. Check there are no broken images or empty project cards.
9. Capture updated desktop and mobile screenshots.
10. Update the README with how to run the page locally and any external dependencies.

Deliver the revised `index.html`, CSS, JavaScript (if separate), real assets folder, the resume PDF if present, and updated desktop/mobile previews. Do not overwrite or delete the original source without keeping a backup.

## Final instruction

Do not turn me into an AI specialist, a “creative technologist”, a brand strategist, a filmmaker or a game designer as my only identity. I am a visual designer and artist with a Fine Arts background and experience across branding, graphic design, animation, thumbnails, UX and interactive work. My game design background belongs in the Adreno section. My AI and VFX work is one part of what I do. Keep the page specific, honest, conversational and unmistakably human.
