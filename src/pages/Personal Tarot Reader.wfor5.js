// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction
import wixLocationFrontend from 'wix-location-frontend';

$w.onReady(function () {
    // ── Navigation buttons ────────────────────────────────────────────────
    try { $w('#btnAppStore').onClick(() => wixLocationFrontend.to('/apps')); } catch(_) {}
    try { $w('#btnBackToApps').onClick(() => wixLocationFrontend.to('/apps')); } catch(_) {}
    try { $w('#btnHome').onClick(() => wixLocationFrontend.to('/')); } catch(_) {}
});
