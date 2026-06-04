# Changelog

## [Released] — 2026-06-03

### Added

#### Optional Speakers 3–5
- **Three additional speaker slots** added to the Featured Speakers section, hidden by default. Two speakers remain the default; speakers 3–5 can be toggled on individually via Marketo booleans.
- Each extra speaker card mirrors the existing structure: `mktoImg` photo picker, `mktoText` editable bio block, and `col-md-3` grid column.
- Default placeholder images reuse the existing Andrew (`speaker 3`, `5`) and Beth (`speaker 4`) profile photos — no new assets required.
- **New meta variables:**
  - `show-speaker-3` (mktoBoolean) — Show/Hide Speaker 3 (default: Hide)
  - `show-speaker-4` (mktoBoolean) — Show/Hide Speaker 4 (default: Hide)
  - `show-speaker-5` (mktoBoolean) — Show/Hide Speaker 5 (default: Hide)
- **New CSS classes:** `.speaker-3-col`, `.speaker-4-col`, `.speaker-5-col` — each bound to its corresponding `${show-speaker-N}` variable to toggle the entire column.

#### Second Virtual Event Extra Content
- **Additional badge and button** added inside the existing virtual event card, hidden by default. The extra content appears below the primary badge/button within the same card wrapper — no separate card is created.
- The second badge and button use the same styling as the primary ones and are independently editable via `mktoText` regions:
  - Hero Light: `sec1-badge-2` (Event Badge 2) + `sec1-btnText-2` (Button Text 2, default: "Register Now")
  - Hero Dark: `sec-dark-hero-badge-2` (Event Badge 2) + `sec-dark-hero-btnText-2` (Button Text 2, default: "Register Now")
- Both extra elements are wrapped in a `<div class="virtual-event-card-2">` inside the existing card; the class is bound to `${show-event-card-2}` for toggle control.
- **New meta variable:**
  - `show-event-card-2` (mktoBoolean) — Show/Hide Second Virtual Event Extra Content (default: Hide)

### Files Modified
- `SAFe-safe-rewind-simplified.html` — SAFe-branded template (1,581 lines)
- `AIN-safe-rewind-simplified.html` — AI-Native-branded template (1,504 lines)
- `parse-tokens.js` — Fallback defaults for `show-event-card-2`, `show-speaker-3/4/5`
- `parse-tokens-ain.js` — Fallback defaults for `show-event-card-2`, `show-speaker-3/4/5`

---

## [Released] — 2026-05-27

### Changed

#### Banner Roles Swapped
- **Banner 1** (was constrained 640px) → now **full-width** edge-to-edge using `width:100vw; overflow:hidden` approach. Occupies the `banner-section` class.
- **Banner 2** (was full-width 100vw) → now **container-constrained** (1080px max). Occupies the `banner-section-2` class.
- Banner 2 CSS simplified — removed complex `banner-container-2`, `banner-img-wrapper-2`, and `:has(+ *)` selector logic. Now uses simple `display`, `order`, `background-color`, and `img {width:100%}`.
- Both files updated consistently.

#### Card Styling Refined (Both Files)
- Value props and speaker cards: `border-radius` increased from `8px` to `10px`.
- Card padding increased: `60px 30px` → `75px 38px`.
- Card box-shadow darkened: `0 2px 8px rgba(0,0,0,0.06)` → `0 3px 10px rgba(0,0,0,0.06)`.
- Card title font sizes increased (AIN: `1.35rem` → `1.45rem` and `1.15rem` → `1.45rem`).

#### Section Orders Re-baselined
- Banner split into two independently-orderable sections (Banner at position 2, Banner 2 at position 3).
- All downstream sections shifted +1 from the 2026-05-26 baseline:

| Section | 05-26 Default | 05-27 Default |
|---|---|---|
| Header | 1 | 1 |
| Banner | 2 | 2 |
| **Banner 2** | *(not separate)* | **3** |
| Hero Light | 3 | 4 |
| Hero Dark | 4 | 5 |
| Value Props | 5 | 6 |
| Quote | 6 | 7 |
| Key Takeaways | 7 | 8 |
| Title & Text | 8 | 9 |
| Speakers | 9 | 10 |
| Form | 10 | 11 |
| Footer | 11 | 12 |

### Added

- **`banner2-bgColor`** (mktoColor) — Banner 2 background color. Defaults: `#ffffff` (SAFe), `#eeeeff` (AIN).
- **`banner-bg-img`** (mktoString) — Banner 1 background image URL (token only; no meta declaration).

### Removed

#### Meta Variables Cleaned Up
Several Marketo editor variables were removed to reduce editor clutter. The underlying `${variable-name}` tokens remain in CSS/HTML so values can still be set via direct code edits or programmatically:

- **`page-title`** (mktoString) — meta declaration removed; token still used in `<title>` and OG meta tags.
- **`page-desc`** (mktoString) — meta declaration removed; token still used in OG description tag.
- **`body-bgImage`** (mktoString) — meta declaration removed; token still referenced in CSS `background-image`.
- **`header-bgImage`** (mktoString) — fully removed from AIN (CSS hardcoded to `background-image: none`). Never existed in SAFe.
- **`banner-width`** (mktoString) — meta declaration removed; token still referenced in CSS `max-width`.
- **`banner-link-label`** and **`banner-link-url`** (both mktoString) — fully removed (meta + body markup); banner link text feature below banner image is gone.

### Renamed

| Old ID | New ID | Notes |
|---|---|---|
| `show-banner-2` | `show-banner2` | mktoname unchanged: "Show Banner 2?" |
| *(none; was `banner-bgImage`)* | `banner-bg-img` | Renamed in CSS; no meta declaration yet |
| `mktoname="Banner Image Link URL"` | `mktoname="Banner 1 Image Link"` | Same `id="banner-image-link"` |
| `mktoname="Banner 2 Image Link URL"` | `mktoname="Banner 2 Image Link"` | Same `id="banner-2-image-link"` |

### Fixed
- AIN header `background-image` was set to `${header-bgImage}` but the variable referenced a non-existent meta; hardcoded to `none`.
- Banner 2 image source changed from hardcoded `https://placehold.co/640x200` placeholder to Marketo variable `${banner-2-image-url}` (fixes AIN; SAFe already used the variable).

### Files Modified
- `SAFe-safe-rewind-simplified.html` — SAFe-branded template
- `AIN-safe-rewind-simplified.html` — AI-Native-branded template

---

## [2026-05-26]

### Added

#### Banner Image Section
- **New `#banner-section`** inserted between the header and hero sections. Clients can upload a banner graphic via Marketo's `mktoImg` image picker.
- **Two sizing modes** controlled by the `Banner Full Width?` boolean:
  - **Fixed (640px):** Image constrained to 640px max-width, centered in the container.
  - **Full Width (100%):** Image spans the full viewport width.
- **Responsive:** On mobile (≤767px), the banner always forces full-width.
- Default placeholder uses `https://placehold.co/640x200` with an empty `alt=""` attribute (decorative image for accessibility).
- **New Marketo meta variables:**
  - `show-banner` (mktoBoolean) — Show/Hide the banner section
  - `banner-full-width` (mktoBoolean) — Toggle Fixed (640px) vs Full Width (100%)
  - `banner-bgColor` (mktoColor) — Section background color (default: `#ffffff` SAFe / `#eeeeff` AIN)
  - `banner-bgImage` (mktoString) — Optional background image behind the banner (default: empty SAFe / `https://placehold.co/1920x1080` AIN)
  - `order-banner` (mktoString) — Section ordering (default: `2`)

#### Background Image Support on All Sections
- Every section now supports an optional background image URL via a `mktoString` variable.
- Set the variable to a URL to enable; leave blank for no background image.
- Images apply with `background-size: cover; background-position: center center`.
- **Sections with new background image variables:**
  - Body (`body-bgImage`)
  - Header (`header-bgImage`)
  - Banner (`banner-bgImage`)
  - Hero Light (`hero-light-bgImage`)
  - Hero Dark (`hero-dark-bgImage`)
  - Value Props (`value-props-bgImage`)
  - Quote (`sec-quote-bgImage`)
  - Key Takeaways (`key-takeaways-bgImage`) — defaults to existing tree ring graphic
  - Title & Text (`text-only-sec-bgImage` SAFe / `textOnly-sec-bgImage` AIN)
  - Featured Speakers (`featured-speakers-bgImage`)
  - Form Section (`form-sec-bgImage`)
  - Footer (`footer-bgImage`)

#### Key Takeaways Expanded to 10 Items
- Added takeaway items 5–10, each hidden by default.
- Each item has:
  - A `mktoBoolean` visibility toggle (`show-takeaway5` through `show-takeaway10`) defaulting to **Hide**.
  - A `mktoText` editable region (`sec3-takeaway5` through `sec3-takeaway10`) with placeholder content.
  - Consistent `mb-4` spacing matching items 1–4.
- Visibility toggles use `!important` boolean values (`flex!important` / `none!important`) to reliably override Bootstrap's `.d-flex` class when rendered inside Marketo.
- CSS selectors use combined specificity (e.g., `.takeaway-item-5.d-flex`) so the display toggle wins over Bootstrap's utility class.

### Changed

#### Takeaway Spacing Normalized
- Takeaway items 1–4 now use Bootstrap's `mb-4` class for consistent bottom margin (previously the last item had `mb-0` and the CSS `.takeaway-item` rule set `margin-bottom: 30px`).
- Removed the `margin-bottom` declaration from the `.takeaway-item` CSS rule — spacing is now handled entirely by the Bootstrap utility class.

#### Key Takeaways Background Image Configurable
- The previously hardcoded tree ring background image is now driven by the `key-takeaways-bgImage` variable, preserving the same tree ring URL as the default value so existing pages are unaffected.

#### Section Order Variables Shifted
- All section order defaults incremented by +1 to accommodate the new banner at position 2:

| Section | Old Default | New Default |
|---|---|---|
| Header | 1 | 1 |
| **Banner** | *(new)* | **2** |
| Hero Light | 2 | 3 |
| Hero Dark | 3 | 4 |
| Value Props | 4 | 5 |
| Quote | 5 | 6 |
| Key Takeaways | 6 | 7 |
| Title & Text | 7 | 8 |
| Speakers | 8 | 9 |
| Form | 9 | 10 |
| Footer | 10 | 11 |

### Marketo-Specific Implementation Notes

#### `!important` on Takeaway Visibility Booleans
Bootstrap's `.d-flex` utility class carries `!important` in its compiled CSS. Without `!important` on the Marketo variable output, the hidden takeaway items would still appear as flex containers. The boolean values `flex!important` and `none!important` ensure the Marketo-rendered inline style overrides Bootstrap.

#### Higher-Specificity CSS Selectors
The CSS rules `.takeaway-item-N.d-flex` combine a custom class with Bootstrap's utility class to increase selector specificity, ensuring the Marketo `display` value wins regardless of rule ordering.

### Files Modified
- `SAFe-safe-rewind-simplified.html` — SAFe-branded template
- `AIN-safe-rewind-simplified.html` — AI-Native-branded template

---

### New Marketo Variable Reference

| Variable ID | Type | Marketo Label | Default (SAFe) | Default (AIN) |
|---|---|---|---|---|
| `show-banner` | mktoBoolean | Show Banner? | Hide | Hide |
| `banner-full-width` | mktoBoolean | Banner Full Width? | Fixed (640px) | Fixed (640px) |
| `banner-bgColor` | mktoColor | Banner BG Color | `#ffffff` | `#eeeeff` |
| `banner-bgImage` | mktoString | Banner BG Image URL | *(empty)* | `https://placehold.co/1920x1080` |
| `order-banner` | mktoString | Banner Order | `2` | `2` |
| `body-bgImage` | mktoString | Body BG Image URL | *(empty)* | *(empty)* |
| `header-bgImage` | mktoString | Header BG Image URL | *(empty)* | *(empty)* |
| `hero-light-bgImage` | mktoString | Hero Light BG Image URL | *(empty)* | *(empty)* |
| `hero-dark-bgImage` | mktoString | Hero Dark BG Image URL | *(empty)* | *(empty)* |
| `value-props-bgImage` | mktoString | Value Props BG Image URL | *(empty)* | *(empty)* |
| `sec-quote-bgImage` | mktoString | Quote BG Image URL | *(empty)* | *(empty)* |
| `key-takeaways-bgImage` | mktoString | Key Takeaways BG Image URL | tree ring | tree ring |
| `text-only-sec-bgImage` | mktoString | Title and Text BG Image URL | *(empty)* | *(empty)* |
| `featured-speakers-bgImage` | mktoString | Speakers BG Image URL | *(empty)* | *(empty)* |
| `form-sec-bgImage` | mktoString | Form Section BG Image URL | *(empty)* | *(empty)* |
| `footer-bgImage` | mktoString | Footer BG Image URL | *(empty)* | *(empty)* |
| `show-takeaway5` | mktoBoolean | Show Takeaway 5? | Hide | Hide |
| `show-takeaway6` | mktoBoolean | Show Takeaway 6? | Hide | Hide |
| `show-takeaway7` | mktoBoolean | Show Takeaway 7? | Hide | Hide |
| `show-takeaway8` | mktoBoolean | Show Takeaway 8? | Hide | Hide |
| `show-takeaway9` | mktoBoolean | Show Takeaway 9? | Hide | Hide |
| `show-takeaway10` | mktoBoolean | Show Takeaway 10? | Hide | Hide |

---

### Editor Quick Reference
- **Adding a banner:** Enable "Show Banner?" and use the Banner Image picker to upload a 640×200px graphic. Toggle "Banner Full Width?" to stretch it edge-to-edge.
- **Adding a background image:** Paste a full image URL into any section's "BG Image URL" field. Leave blank to keep the solid background color.
- **Adding more takeaways:** Toggle "Show Takeaway N?" to Show, then edit content in the corresponding rich text field.
