// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction
import { APP_PROGRESS } from 'public/progress.js';
import wixLocationFrontend from 'wix-location-frontend';

$w.onReady(function () {

    // ── Progress bars ─────────────────────────────────────────────────────
    try { $w('#appsProgressPTR').value = APP_PROGRESS.PTR; } catch(_) {}
    try { $w('#appsProgressCWF').value = APP_PROGRESS.CWF; } catch(_) {}

    // ── App card nav buttons ──────────────────────────────────────────────
    try { $w('#appsBtnPTR').onClick(() => wixLocationFrontend.to('/personal-tarot-reader')); } catch(_) {}
    try { $w('#appsBtnCWF').onClick(() => wixLocationFrontend.to('/coloring-with-friends')); } catch(_) {}

    // ── "All Apps" / "See All" buttons ───────────────────────────────────
    try { $w('#btnAllApps').onClick(() => wixLocationFrontend.to('/apps')); } catch(_) {}
    try { $w('#btnBackHome').onClick(() => wixLocationFrontend.to('/')); } catch(_) {}

});
