# Dinesh A (Deen) Portfolio - Structure, Flow, and Hierarchy Map

Welcome to Dinesh A's (Deen) professional portfolio project. This website is a fully functional, static portfolio mirrored from Adobe Portfolio.

This mapping document defines how the pages link and interface with one another.

---

## 📂 Project Directory Structure

Now organized in a clean flat hierarchy directly under the root domain (`https://deendesigns.in/`):

- **`index.html`** / **`home.html`** (Root): The main landing/homepage of the portfolio displaying featured projects.
- **`work.html`**: Gallery and index for **Game Design** projects.
- **`visual-design.html`**: Gallery and index for **Visual Design** projects.
- **`resume.html`**: Professional resume and contact page.
- **`sitemap.json`**: Machine-readable JSON representation of the flow, internal links, and page categories.
- **`sitemap.xml`**: Standard crawler/bot sitemap representing all page URLs.
- **`cdn.myportfolio.com/`**: Storage for all media resources, design sheets, fonts, and styles.
- **`use.typekit.net/`**: Custom fonts and typography resources.
- **`dist/`** & **`site/`**: Styling modules, scripts, and local web assets.

---

## 🗺️ Website Flow and Connection Diagram

The hierarchy of links and navigation transitions operates in a clear parent-child structure:

```mermaid
graph TD
    %% Base Redirect
    Root[index.html (Root)] --- Home[home.html]
    
    %% Primary Navigation Hubs
    Home --> NavResume[resume.html]
    Home --> NavGame[work.html]
    Home --> NavVisual[visual-design.html]
    
    %% Main Gallery Links
    subgraph Game Design Gallery (work.html)
        NavGame --> GD1[pro-football.html]
        NavGame --> GD2[death-race.html]
        NavGame --> GD3[toyland-tussle.html]
        NavGame --> GD4[edge-runner.html]
        NavGame --> GD5[edge-runner-20.html]
        NavGame --> GD6[octophase.html]
        NavGame --> GD7[pothole-project.html]
        NavGame --> GD8[skip-conquer.html]
        NavGame --> GD9[zombie-crossing.html]
        NavGame --> GD10[de-dust-2-map-analysis-and-custom-map.html]
        NavGame --> GD11[marvel-snap-deconstruction.html]
        NavGame --> GD12[solace-in-solitude.html]
        NavGame --> GD13[unearthed-secrets.html]
        NavGame --> GD14[ancient-recall.html]
    end

    subgraph Visual Design Gallery (visual-design.html)
        NavVisual --> VD1[octapuss.html]
        NavVisual --> VD2[thawn.html]
        NavVisual --> VD3[thadaaladi-crew-1.html]
        NavVisual --> VD4[three-robots-cats.html]
        NavVisual --> VD5[dhee.html]
        NavVisual --> VD6[gloomsmile.html]
        NavVisual --> VD7[sightrail.html]
        NavVisual --> VD8[mukti.html]
        NavVisual --> VD9[astra-veil.html]
    end

    %% Project-to-Project Flows (Cross-linking)
    GD9 -->|Links To| GD5
    GD9 -->|Links To| GD4
    GD9 -->|Links To| GD6
    GD9 -->|Links To| GD13
    GD9 -->|Links To| GD8
    GD9 -->|Links To| GD11
    GD9 -->|Links To| GD2
    GD9 -->|Links To| GD12
    GD9 -->|Links To| GD1
    GD9 -->|Links To| GD3

    %% Styling
    style Root fill:#f9f,stroke:#333,stroke-width:2px
    style Home fill:#bbf,stroke:#333,stroke-width:2px
    style NavResume fill:#dfd,stroke:#333,stroke-width:1px
    style NavGame fill:#fdd,stroke:#333,stroke-width:1px
    style NavVisual fill:#ffd,stroke:#333,stroke-width:1px
```

---

## 🤖 Guide for AI Assistants Parsing this Project

If you are an AI assistant processing or analyzing this workspace:
1. **Sitemap Metadata**: Read [sitemap.json](file:///e:/AI/portfolio/sitemap.json) at the root to immediately get a structured map of all page titles, classifications (`Game Design Project`, `Visual Design Gallery`, etc.), and active cross-links.
2. **URLs**: Standard site paths are registered inside [sitemap.xml](file:///e:/AI/portfolio/sitemap.xml).
3. **Flat Hierarchy**: All pages load directly under the main host domain, and all assets resolve locally via `./cdn.myportfolio.com/` and other root-relative paths.
