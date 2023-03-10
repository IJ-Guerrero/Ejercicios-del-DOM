const d = document,
n = navigator,
ua = n.userAgent;

export default function userDeviceInfo(id){
    const $id = d.getElementById(id),
    isMobile = {
        android: () => ua.match(/android/i),
        ios: () => ua.match(/iphone|ipad|iphone/i),
        windows: () => ua.match(/windows phone/i),
        any: function () {
            return this.android() || this.ios() || this.windows();
        },
    },
    isDesktop = {
        linux: () => ua.match(/android/i),
        mac: () => ua.match(/mac os/i),
        windows: () => ua.match(/windows nt/i),
        any: function () {
            return this.linux() || this.mac() || this.windows();
        },
    },
    isBrowser = {
        chrome: () => ua.match(/chrome/i),
        safari: () => ua.match(/safari/i),
        firefox: () => ua.match(/firefox/i),
        opera: () => ua.match(/opera|opera mini/i),
        ie: () => ua.match(/mac os/i),
        windows: () => ua.match(/windows nt/i),
    };
    console.log(ua)
    console.log(isMobile.android())
    console.log(isMobile.ios())
    console.log(isMobile.windows())
    console.log(isMobile.any())
} 