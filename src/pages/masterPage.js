// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// masterPage.js — runs on every page

$w.onReady(function () {
    // Transparent-on-top → solid-on-scroll header behaviour
    // Requires the header strip element to have ID: #header
    // If the element doesn't exist or the API isn't available, this silently no-ops.
    try {
        import('wix-window-frontend').then((wixWindowModule) => {
            const wixWindow = wixWindowModule.default || wixWindowModule;

            const SOLID_BG   = 'rgba(18, 18, 18, 0.97)';
            const CLEAR_BG   = 'rgba(0, 0, 0, 0)';
            const THRESHOLD  = 50; // px from top before going solid

            function applyHeaderStyle(scrollY) {
                try {
                    const header = $w('#header');
                    if (!header) return;
                    header.style.backgroundColor = scrollY > THRESHOLD ? SOLID_BG : CLEAR_BG;
                } catch (_) { /* element not found or style locked */ }
            }

            // Listen for scroll position updates (Wix Window Frontend API)
            if (typeof wixWindow.onScrollUpdate === 'function') {
                wixWindow.onScrollUpdate((position) => {
                    applyHeaderStyle(position.y || 0);
                });
            }

            // Also read initial scroll position
            if (typeof wixWindow.getBoundingRect === 'function') {
                wixWindow.getBoundingRect().then((rect) => {
                    applyHeaderStyle(rect.scroll ? rect.scroll.y : 0);
                }).catch(() => {});
            }
        }).catch(() => { /* wix-window-frontend not available */ });
    } catch (_) { /* silent fail */ }
});
