# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Project Overview

This is a **Marketo Guided Landing Page** template for a SAFe (Scaled Agile Framework) webinar lead generation page. Two HTML templates share the same page structure but use different branding:

- **`SAFe-safe-rewind-simplified.html`** (~1,430 lines) — SAFe branding (dark teal, cream, orange accents). Uses Noto Sans + Reenie Beanie fonts.
- **`AIN-safe-rewind-simplified.html`** (~1,350 lines) — AI-Native branding (deep purple/indigo). Uses Montserrat font.

There is no build process. Edit HTML and CSS directly.

## Marketo Template Architecture

### Meta Variable System
Both files declare configurable variables in `<meta>` tags at the top of the file. These power the Marketo editor UI and are referenced as `${variable-name}` tokens in CSS and body markup.

Variable types used:
- **`mktoBoolean`** — Show/hide toggles with `true_value` / `false_value` (e.g., `"block"` / `"none"`)
- **`mktoString`** — Free-text values (URLs, section order numbers, button labels)
- **`mktoColor`** — Color picker for background/text colors
- **`mktoText`** — Rich text editable regions in the page body
- **`mktoImg`** — Image picker for logos, banners, speaker photos

SAFe has ~113 meta variables; AIN has ~117.

### Section Ordering System
Every section has an `order-*` mktoString variable. CSS applies `order: ${variable}` via flexbox on the body container, enabling drag-and-drop section reordering in Marketo. Default order numbers:

| Section | SAFe Variable | AIN Variable | Default |
|---|---|---|---|
| Header | `order-header` | `order-header` | 1 |
| Banner 2 | `order-banner-2` | `order-banner-2` | 2 |
| Banner | `order-banner` | `order-banner` | 3 (SAFe) / 2 (AIN) |
| Hero Light | `order-hero-light` | `order-sec1` | 4 / 3 |
| Hero Dark | `order-hero-dark` | `order-hero-dark` | 5 / 4 |
| Value Props | `order-value-props` | `order-sec2` | 6 / 5 |
| Quote | `order-quote` | `order-sec2-quote` | 7 / 6 |
| Key Takeaways | `order-key-takeaways` | `order-sec3` | 8 / 7 |
| Title & Text | `order-text-only` | `order-sec3-text` | 9 / 8 |
| Speakers | `order-speakers` | `order-sec4` | 10 / 9 |
| Form | `order-form-cta` | `order-sec5` | 11 / 10 |
| Footer | `order-footer` | `order-footer` | 12 / 11 |

### Visibility Toggles
Each section has a show/hide boolean (e.g., `show-hero-light`, `show-form-sec`). The CSS applies the variable directly as `display: ${show-*}` with values `"block"` or `"none"`.

For takeaway items 5-10, the toggle values are `"flex!important"` / `"none!important"` because Bootstrap's `.d-flex` utility class already carries `!important`. CSS selectors use combined specificity (`.takeaway-item-N.d-flex`) to ensure the Marketo inline style wins.

## Page Sections (Body Order)

### 1. Header
- Logo via `mktoImg` (`header-logo`), configurable URL and width
- Logo centering controlled by `header-logo-position` boolean
- Background color and image configurable

### 2. Banner
- Full-width banner image via `mktoImg` (`banner-img`), clickable link
- Width configurable (default 100%)
- Background color configurable
- Wrapped in `banner-section` class

### 3. Banner 2 (Secondary Banner)
- Second full-width banner image via `mktoImg` (`banner-2-img`), clickable link
- Independent show/hide toggle
- Wrapped in `banner-section-2` class, separate ordering

### 4. Hero Light (`sec1-hero`)
- Event title, description, event details
- Badge text and CTA "Save My Seat" button (anchors to `#savemyseat`)
- Button color and size configurable
- Two-column layout (content left, form preview right)

### 5. Hero Dark (`sec-hero-dark`)
- Dark-themed alternative hero with same structure
- Separate show/hide from Hero Light
- Badge and CTA button with identical anchor behavior

### 6. Value Props (`sec2-value-props`)
- Three cards with colored left borders: Value (orange), Vision (green), Reveal (teal)
- Each card has a `mktoText` editable region

### 7. Quote (`sec2-quote`)
- Single quote text block
- Decorative quote mark graphics via `<img>` tags

### 8. Key Takeaways (`sec3-takeaways`)
- Title + 10 takeaway items in a 2-column grid
- Items 1-4 always visible; items 5-10 hidden by default
- Each item has icon + `mktoText` content
- Background image configurable (defaults to tree ring graphic)
- Items use `mb-4` for consistent spacing

### 9. Title & Text (`sec3-titletext`)
- Freeform rich text section with title

### 10. Featured Speakers (`sec4-speakers`)
- Two speaker profiles, each with `mktoImg` photo + `mktoText` info block
- Centered layout with profile images

### 11. Form (`sec5-form`, id `savemyseat`)
- `mktoForm` element (`mktoForm_0000`) — embeds a Marketo form at runtime
- Form title and special address text via `mktoText`
- Both Hero buttons anchor-scroll to this section

### 12. Footer
- Contact info, links, social icons (Font Awesome)
- Background color and text color configurable

### JS-Driven Carousel
Both files include a vanilla JS carousel that renders 6 cards dynamically. Uses Marketo token variables (`${card1-img}`, `${card1-title}`, `${card1-desc}`, `${card1-link}`, etc.) with fallback placeholders for local preview.

## Design System

### SAFe Brand (`SAFe-safe-rewind-simplified.html`)
CSS custom properties in `:root`:
```css
--sai-dark: #053947;
--sai-teal: #8ACBCE;
--sai-teal-hover: #0A83A0;
--sai-light-blue: #F4F9FA;
--sai-cream: #FFFBF4;
--sai-white: #ffffff;
--sai-border: #e0e0e0;
--sai-text: #343333;
--sai-text-light: #666666;
--sai-orange: #CB9349;
--sai-card-border-value: #CB9349;
--sai-card-border-vision: #1A6137;
--sai-card-border-reveal: #0A83A0;
```

### AIN Brand (`AIN-safe-rewind-simplified.html`)
CSS custom properties in `:root`:
```css
--sai-dark: #3f3f3f;
--sai-teal: #54d1ca;
--sai-light-blue: #eeeeff;
--sai-cream: #eeeeff;
--sai-white: #ffffff;
--sai-border: #e0e0e0;
--sai-text: #3f3f3f;
--sai-text-light: #666666;
--sai-orange: #c3c2ff;
--sai-card-border-value: #c3c2ff;
--sai-card-border-vision: #288c89;
--sai-card-border-reveal: #54d1ca;
```

### Responsive Breakpoint
Both files use a single mobile breakpoint: `@media (max-width: 767px)`. Desktop layout uses flexbox with ordering; mobile collapses to single-column stack.

### CDN Dependencies (no local install)
- Bootstrap 5.3.3 (CSS + JS bundle)
- Font Awesome 6.5.1
- Google Fonts: Noto Sans + Reenie Beanie (SAFe) / Montserrat (AIN)
- Google Tag Manager (GTM-MQJSCGJ) — noscript fallback present

## Form Handling

### Production (Marketo)
The `<div class="mktoForm" id="mktoForm_0000">` placeholder is replaced at runtime by Marketo with a live form. The AIN variant has additional JS that strips Marketo's default stylesheet to let custom styles take over.

### Form Styling
- **AIN**: Form styles live in external `ain-style-form.css` (loaded via `<link>` in the HTML head). Overrides Marketo's default form appearance with custom borders, rounded corners, and Montserrat font.
- **SAFe**: Form styles are inline within the `<style>` block. Includes `.sec5-form` background rules and responsive adjustments at the 767px breakpoint.

## Supporting Files

### `parse-tokens.js` / `parse-tokens-ain.js`
Token fallback maps for local preview outside of Marketo. When Marketo hasn't compiled the template, `${variable-name}` tokens appear as literal strings. These scripts define default values so the page renders correctly when opened directly in a browser. Both files serve as reference documentation for all available Marketo variables and their default values.

### `ain-style-form.css`
External stylesheet specific to the AIN template. Contains Marketo form overrides — font family, input styling, radio/checkbox customizations, and responsive form rules. Loaded only by `AIN-safe-rewind-simplified.html`.

### `CHANGELOG.md`
Documents recent feature additions: banner image section with two sizing modes, background image support on all sections, key takeaways expanded to 10 items, and section order renumbering.

### `assets/`
Static images: logos, speaker profile photos, quote decorations, carousel placeholder, and the tree ring background graphic.

### `src/`
Source design files (AI-Native logo source AI file and featured JPG).

## Naming Convention Differences Between Files

| Element | SAFe Variable Prefix | AIN Variable Prefix |
|---|---|---|
| Hero Light order | `order-hero-light` | `order-sec1` |
| Value Props order | `order-value-props` | `order-sec2` |
| Quote order | `order-quote` | `order-sec2-quote` |
| Key Takeaways order | `order-key-takeaways` | `order-sec3` |
| Title & Text order | `order-text-only` | `order-sec3-text` |
| Speakers order | `order-speakers` | `order-sec4` |
| Form order | `order-form-cta` | `order-sec5` |
| Form toggle | `show-form-sec` | `show-sec5` |
| Form title mktoname | "Form Section Title" | "Form Title" |
| Hero Light title mktoname | "Hero Light Content" | "Hero Light Title" |

## Editing Guidance

- All CSS is inline in `<style>` blocks within each HTML file. Do not externalize without understanding Marketo's compilation pipeline.
- When adding new sections, add corresponding `order-*`, `show-*`, `*-bgColor`, and `*-bgImage` meta variables to maintain feature parity.
- When adding visibility toggles for elements using Bootstrap flex utilities, use `!important` values (`flex!important` / `none!important`) and combined-selector CSS rules to override Bootstrap's specificity.
- Keep both files in sync structurally. Changes to one should be mirrored in the other with appropriate branding differences.
- Token variables use the syntax `${variable-name}` — Marketo replaces these at compile time. The `parse-tokens.js` files exist purely for local preview convenience.
