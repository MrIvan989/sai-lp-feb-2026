// Token fallback values for local preview outside Marketo.
// When Marketo compiles the template it replaces ${token-name} in the CSS.
// This script does the same thing client-side so the Marketo version can be previewed directly in a browser without maintaining a separate Local Copy file.
//
// To show/hide a section locally, change its "show-*" value to "block" or "none".
// To change a background color, update the value here and refresh.

const tokenDefaults = {
    // ── Page ──────────────────────────────────────────────────────────────────
    'bodyBGcolor':             'var(--sai-white)',

    // ── Header ────────────────────────────────────────────────────────────────
    'show-header':             'block',
    'header-bgColor':          'var(--sai-cream)',
    'header-logo-position':    '0 auto',
    
    // ── Section 1 – Hero ──────────────────────────────────────────────────────
    'show-sec1':               'none',
    'hero-col-full-width':     '58.333%',
    'sec1-bgColor':            'var(--sai-light-blue)',
    'show-event-card':         'block',
    'show-event-card-2':       'none',

    // ── Section 1 – Hero Dark ─────────────────────────────────────────────────
    'show-hero-dark':          'none',
    'hero-dark-bgColor':       'var(--sai-dark)',
    
    // ── Section 2 – Value Props ───────────────────────────────────────────────
    'show-sec2':               'none',
    'sec2-bgColor':            'var(--sai-cream)',

    // ── Section 2-5 – Quote ───────────────────────────────────────────────────
    'show-sec2-quote':         'none',
    'sec2-quote-bgColor':      'var(--sai-light-blue)',

    // ── Section 3 – Key Takeaways ─────────────────────────────────────────────
    'show-sec3':               'none',
    'sec3-bgColor':            'var(--sai-cream)',

    // ── Section 3.5 - Title and Text ──────────────────────────────────────────
    'show-sec3-text':          'none',
    'sec3-text-bgColor':       'var(--sai-light-blue)',

    // ── Section 4 – Featured Speakers ─────────────────────────────────────────
    'show-sec4':               'none',
    'sec4-bgColor':            'var(--sai-light-blue)',
    'show-speaker-3':          'none',
    'show-speaker-4':          'none',
    'show-speaker-5':          'none',

    // ── Section 5 – Form ──────────────────────────────────────────────────────
    'show-sec5':               'block',
    'sec5-bgColor':            'var(--sai-cream)',
    'sec5-form-bg':            'var(--sai-cream)',

    // ── Section 8 – Related Content / Carousel ────────────────────────────────
    'show-sec8':               'block',
    'sec8-bgColor':            'var(--sai-light-blue)',

    // ── Footer ────────────────────────────────────────────────────────────────
    'show-footer':             'block',
    'footer-bgColor':          'var(--sai-dark)',
    'footer-textColor':        'var(--sai-cream)',
};

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('style').forEach(styleEl => {
        styleEl.textContent = styleEl.textContent.replace(
            /\$\{([\w-]+)\}/g,
            (match, tokenName) => tokenDefaults[tokenName] ?? match
        );
    });
});