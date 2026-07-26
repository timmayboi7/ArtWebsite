// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction
import { APP_PROGRESS } from 'public/progress.js';
import wixLocationFrontend from 'wix-location-frontend';

$w.onReady(function () {

    // ── Hero section buttons ───────────────────────────────────────────────
    const btnGallery = $w('#btnHeroGallery');
    if (btnGallery) {
        btnGallery.onClick(() => {
            wixLocationFrontend.to('/gallery');
        });
    }

    const btnApps = $w('#btnHeroApps');
    if (btnApps) {
        btnApps.onClick(() => {
            wixLocationFrontend.to('/apps');
        });
    }

    // ── App teaser section — progress bars ────────────────────────────────
    const progressPTR = $w('#progressPTR');
    if (progressPTR) {
        progressPTR.value = APP_PROGRESS.PTR;
    }

    const progressCWF = $w('#progressCWF');
    if (progressCWF) {
        progressCWF.value = APP_PROGRESS.CWF;
    }

    // ── App teaser section — card buttons ─────────────────────────────────
    const btnPTRDetails = $w('#btnPTRDetails');
    if (btnPTRDetails) {
        btnPTRDetails.onClick(() => {
            wixLocationFrontend.to('/personal-tarot-reader');
        });
    }

    const btnCWFDetails = $w('#btnCWFDetails');
    if (btnCWFDetails) {
        btnCWFDetails.onClick(() => {
            wixLocationFrontend.to('/coloring-with-friends');
        });
    }

    // ── All Apps button ───────────────────────────────────────────────────
    const btnAllApps = $w('#btnAllApps');
    if (btnAllApps) {
        btnAllApps.onClick(() => {
            wixLocationFrontend.to('/apps');
        });
    }

    // ── Gallery teaser button ─────────────────────────────────────────────
    const btnSeeGallery = $w('#btnSeeGallery');
    if (btnSeeGallery) {
        btnSeeGallery.onClick(() => {
            wixLocationFrontend.to('/gallery');
        });
    }

});
