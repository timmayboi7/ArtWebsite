// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction
import { APP_PROGRESS } from 'public/progress.js';
import wixLocationFrontend from 'wix-location-frontend';

$w.onReady(function () {

    // ── Progress bars ─────────────────────────────────────────────────────
    const appsProgressPTR = $w('#appsProgressPTR');
    if (appsProgressPTR) {
        appsProgressPTR.value = APP_PROGRESS.PTR;
    }

    const appsProgressCWF = $w('#appsProgressCWF');
    if (appsProgressCWF) {
        appsProgressCWF.value = APP_PROGRESS.CWF;
    }

    // ── App card nav buttons ──────────────────────────────────────────────
    const appsBtnPTR = $w('#appsBtnPTR');
    if (appsBtnPTR) {
        appsBtnPTR.onClick(() => {
            wixLocationFrontend.to('/personal-tarot-reader');
        });
    }

    const appsBtnCWF = $w('#appsBtnCWF');
    if (appsBtnCWF) {
        appsBtnCWF.onClick(() => {
            wixLocationFrontend.to('/coloring-with-friends');
        });
    }

});
