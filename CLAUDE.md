# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Marketo Guided Landing Page** template for a SAFe (Scaled Agile Framework) webinar lead generation page. There are two HTML files that must stay in sync:

- **`SAI-MLP-Seven-Local-Copy.html`** — Local preview version with hardcoded values for browser testing
- **`SAI-MLP-Seven-Marketo-Version.html`** — Production version with Marketo `${variable-name}` placeholders for dynamic content

There is no build process. Edit HTML/CSS directly.

## Marketo Template Architecture

### Meta Variable System
Both files declare configurable variables in `<meta>` tags at the top (class names like `mktoString`, `mktoBoolean`, `mktoText`, `mktoImg`). These power the Marketo editor UI. The Marketo version uses `${variable-name}` tokens throughout the HTML body; the Local Copy substitutes concrete values.

Key variable categories:
- **Visibility toggles** (`mktoBoolean`): show/hide header, sections, footer
- **Background colors** per section
- **Button text/links**
- **Section order** (CSS flex `order` property — allows drag-and-drop reordering in Marketo)

### Form Handling
- `mktoForm` class embeds a live Marketo form by ID
- A fallback static HTML form (hidden in production) exists for local preview — look for the `#fallback-form` element

### Page Sections (in DOM order)
1. `#header` — Logo branding
2. `#section-1` — Hero: event title, description, CTA button
3. `#section-2` — Value props (3 cards)
4. `#section-3` — Key takeaways (4 items with icons)
5. `#section-4` — Speaker profiles
6. `#section-5` — Lead capture form
7. `#footer` — Contact, links, social

### Design System
CSS custom properties are defined in `:root`:
- `--sai-dark`, `--sai-teal`, `--sai-orange`, `--sai-light`, etc.
- Mobile breakpoint: `max-width: 767px`
- Layout: Flexbox with CSS `order` for section reordering

### Dependencies (CDN, no local install)
- Bootstrap 5.3.3
- Font Awesome 6.5.1
- Google Fonts (Inter)

## Workflow Notes

- When making content or style changes, apply them to **both files** simultaneously — the Local Copy gets literal values, the Marketo version keeps `${...}` tokens.
- To preview locally, open `SAI-MLP-Seven-Local-Copy.html` directly in a browser.
- The Marketo version will not render correctly in a browser (tokens are unresolved); always use the Local Copy for visual verification.
