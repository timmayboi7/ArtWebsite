// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction
import { APP_PROGRESS } from 'public/progress.js';
import wixLocationFrontend from 'wix-location-frontend';

$w.onReady(function () {

    // ── Hero section buttons ───────────────────────────────────────────────
    try { $w('#btnHeroGallery').onClick(() => wixLocationFrontend.to('/gallery')); } catch(_) {}
    try { $w('#btnHeroApps').onClick(() => wixLocationFrontend.to('/apps')); } catch(_) {}

    // ── App teaser section — progress bars ────────────────────────────────
    try { $w('#progressPTR').value = APP_PROGRESS.PTR; } catch(_) {}
    try { $w('#progressCWF').value = APP_PROGRESS.CWF; } catch(_) {}

    // ── App teaser section — card buttons ─────────────────────────────────
    try { $w('#btnPTRDetails').onClick(() => wixLocationFrontend.to('/personal-tarot-reader')); } catch(_) {}
    try { $w('#btnCWFDetails').onClick(() => wixLocationFrontend.to('/coloring-with-friends')); } catch(_) {}

    // ── All Apps button ───────────────────────────────────────────────────
    try { $w('#btnAllApps').onClick(() => wixLocationFrontend.to('/apps')); } catch(_) {}

    // ── Gallery teaser "See Full Gallery" button ──────────────────────────
    // Note: use the element's actual #ID from the editor if the below doesn't match
    try { $w('#btnSeeGallery').onClick(() => wixLocationFrontend.to('/gallery')); } catch(_) {}
    try { $w('#btnGallery').onClick(() => wixLocationFrontend.to('/gallery')); } catch(_) {}
    try { $w('#button4').onClick(() => wixLocationFrontend.to('/gallery')); } catch(_) {}

});
