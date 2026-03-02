// Token fallback values for local preview outside Marketo.
// When Marketo compiles the template it replaces ${token-name} in the CSS.
// This script does the same thing client-side so the Marketo version can be previewed directly in a browser without maintaining a separate Local Copy file.
//
// To show/hide a section locally, change its "show-*" value to "block" or "none".
// To change a background color, update the value here and refresh.

const tokenDefaults = {
    // ── Page ─────────────────────────────────────────────────────────────────
    'bodyBGcolor':          'var(--sai-white)',

    // ── Header ───────────────────────────────────────────────────────────────
    'show-header':          'block',
    'header-bgColor':       'var(--sai-cream)',

    // ── Section 1 – Hero ─────────────────────────────────────────────────────
    'show-sec1':            'block',
    'sec1-bgColor':         'var(--sai-light-blue)',

    // ── Section 2 – Value Props ───────────────────────────────────────────────
    'show-sec2':            'block',
    'sec2-bgColor':         'var(--sai-cream)',

    // ── Section 2-5 – Quote ───────────────────────────────────────────────────
    'show-sec2-quote':      'block',
    'sec2-quote-bgColor':   'var(--sai-light-blue)',

    // ── Section 3 – Key Takeaways ─────────────────────────────────────────────
    'show-sec3':            'block',
    'sec3-bgColor':         'var(--sai-cream)',

    // ── Section 4 – Featured Speakers ────────────────────────────────────────
    'show-sec4':            'block',
    'sec4-bgColor':         'var(--sai-light-blue)',

    // ── Section 5 – Form ──────────────────────────────────────────────────────
    'show-sec5':            'block',
    'sec5-bgColor':         'var(--sai-cream)',
    'sec5-form-bg':         'var(--sai-white)',

    // ── Section 8 – Related Content / Carousel ───────────────────────────────
    'show-sec8':            'block',
    'sec8-bgColor':         'var(--sai-light-blue)',

    // ── Footer ────────────────────────────────────────────────────────────────
    'show-footer':          'block',
    'footer-bgColor':       'var(--sai-dark)',
    'footer-textColor':     'var(--sai-cream)',
};

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('style').forEach(styleEl => {
        styleEl.textContent = styleEl.textContent.replace(
            /\$\{([\w-]+)\}/g,
            (match, tokenName) => tokenDefaults[tokenName] ?? match
        );
    });
});