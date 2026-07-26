// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction
import wixLocationFrontend from 'wix-location-frontend';

$w.onReady(function () {
    // Personal Tarot Reader app page
    // Buttons to App Store / back to Apps
    const btnAppStore = $w('#btnAppStore');
    if (btnAppStore) {
        btnAppStore.onClick(() => {
            wixLocationFrontend.to('/apps');
        });
    }

    const btnBackToApps = $w('#btnBackToApps');
    if (btnBackToApps) {
        btnBackToApps.onClick(() => {
            wixLocationFrontend.to('/apps');
        });
    }
});
