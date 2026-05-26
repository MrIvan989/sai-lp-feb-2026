# Changelog

## [Unreleased] — 2026-05-26

### Added

#### 1. Banner Section (both templates)
- **New `#banner-section`** inserted between the header and hero sections. Allows the client to upload a banner graphic via Marketo's `mktoImg` image selector.
- **Two sizing modes** controlled by the `Banner Full Width?` boolean toggle:
  - **Fixed (640px):** Image is constrained to the banner's native 640px width, centered in the container.
  - **Full Width (100%):** Image spans the full viewport width.
- **Responsive:** On mobile (≤767px), the banner always goes full-width for best viewing.
- **New Marketo meta variables:**
  - `show-banner` (mktoBoolean) — Show/Hide the banner section
  - `banner-full-width` (mktoBoolean) — Toggle between Fixed (640px) and Full Width (100%)
  - `banner-bgColor` (mktoColor) — Background color for the banner section
  - `banner-bgImage` (mktoString) — Optional background image behind the banner graphic
  - `order-banner` (mktoString) — Section ordering (default: 2)

#### 2. Background Image on Any Section (both templates)
- Every section now supports an optional background image via a new `mktoString` variable per section.
- When the variable is left blank (default), no background image is rendered and the section behaves as before.
- When a URL is provided, the image is applied with `background-size: cover; background-position: center center` so it fills the section cleanly.
- **Sections receiving background image support:**
  - Body (`body-bgImage`)
  - Header (`header-bgImage`)
  - Banner (`banner-bgImage`)
  - Hero Light (`hero-light-bgImage`)
  - Hero Dark (`hero-dark-bgImage`)
  - Value Props (`value-props-bgImage`)
  - Quote (`sec-quote-bgImage`)
  - Key Takeaways (`key-takeaways-bgImage`) — defaults to the existing tree ring graphic
  - Title & Text (`text-only-sec-bgImage` / `textOnly-sec-bgImage` in AIN)
  - Featured Speakers (`featured-speakers-bgImage`)
  - Form Section (`form-sec-bgImage`)
  - Footer (`footer-bgImage`)

#### 3. Key Takeaways Expanded to 10 Items (both templates)
- Added **takeaway items 5 through 10** with placeholder content.
- Each new takeaway has its own `mktoBoolean` visibility toggle (all default to **hidden**):
  - `show-takeaway5` through `show-takeaway10`
- Each has its own `mktoText` editable region in Marketo:
  - `sec3-takeaway5` through `sec3-takeaway10`
- When toggled on, the items appear inline with the existing 4 takeaways in the same styled layout (icon + heading + description).
- CSS display classes (`.takeaway-item-5` through `.takeaway-item-10`) control visibility via Marketo boolean output.

### Changed

#### Section Order Variables Shifted (both templates)
- All section order defaults incremented by +1 to accommodate the new banner section at position 2:
  - Header: 1 (unchanged)
  - **Banner: 2 (new)**
  - Hero Light: 2 → 3
  - Hero Dark: 3 → 4
  - Value Props: 4 → 5
  - Quote: 5 → 6
  - Key Takeaways: 6 → 7
  - Title & Text: 7 → 8
  - Speakers: 8 → 9
  - Form: 9 → 10
  - Footer: 10 → 11

#### Key Takeaways Background Image (both templates)
- The previously hardcoded tree ring background image on the Key Takeaways section (`url('https://go.scaledagile.com/rs/983-XYR-522/images/SAI_treering_green.png?version=0')`) is now configurable via the `key-takeaways-bgImage` meta variable while keeping the same default value.

### Files Modified
- `SAFe-safe-rewind-simplified.html` — SAFe-branded template
- `AIN-safe-rewind-simplified.html` — AI-Native-branded template

---

### Marketo Variable Reference (New Additions)

| Variable ID | Type | Marketo Label | Default |
|---|---|---|---|
| `show-banner` | mktoBoolean | Show Banner? | Hide |
| `banner-full-width` | mktoBoolean | Banner Full Width? | Fixed (640px) |
| `banner-bgColor` | mktoColor | Banner BG Color | `#ffffff` (SAFe) / `#eeeeff` (AIN) |
| `banner-bgImage` | mktoString | Banner BG Image URL | *(empty)* |
| `order-banner` | mktoString | Banner Order | `2` |
| `body-bgImage` | mktoString | Body BG Image URL | *(empty)* |
| `header-bgImage` | mktoString | Header BG Image URL | *(empty)* |
| `hero-light-bgImage` | mktoString | Hero Light BG Image URL | *(empty)* |
| `hero-dark-bgImage` | mktoString | Hero Dark BG Image URL | *(empty)* |
| `value-props-bgImage` | mktoString | Value Props BG Image URL | *(empty)* |
| `sec-quote-bgImage` | mktoString | Quote BG Image URL | *(empty)* |
| `key-takeaways-bgImage` | mktoString | Key Takeaways BG Image URL | tree ring graphic |
| `text-only-sec-bgImage` | mktoString | Title and Text BG Image URL | *(empty)* |
| `featured-speakers-bgImage` | mktoString | Speakers BG Image URL | *(empty)* |
| `form-sec-bgImage` | mktoString | Form Section BG Image URL | *(empty)* |
| `footer-bgImage` | mktoString | Footer BG Image URL | *(empty)* |
| `show-takeaway5` | mktoBoolean | Show Takeaway 5? | Hide |
| `show-takeaway6` | mktoBoolean | Show Takeaway 6? | Hide |
| `show-takeaway7` | mktoBoolean | Show Takeaway 7? | Hide |
| `show-takeaway8` | mktoBoolean | Show Takeaway 8? | Hide |
| `show-takeaway9` | mktoBoolean | Show Takeaway 9? | Hide |
| `show-takeaway10` | mktoBoolean | Show Takeaway 10? | Hide |

---

### Notes for Marketo Editor Users
- **To add a banner:** Enable "Show Banner?" and use the Banner Image (`mktoImg`) picker to upload a graphic. Choose "Fixed (640px)" or "Full Width" depending on the desired look.
- **To add a background image to any section:** Paste the full image URL into the section's "BG Image URL" field. Leave blank for no image. The background color still shows underneath/behind the image.
- **To add more key takeaways:** Toggle "Show Takeaway N?" to "Show" and edit the content in the corresponding `Key Takeaways - Takeaway N` rich text field.
