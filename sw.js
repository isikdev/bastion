self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open("pwa-app").then((cache) => {
            cache.addAll([
                "./index.html",
                "./manifest/manifest.webmanifest",
                "./manifest/icon-192x192.png",
                "./manifest/icon-256x256.png",
                "./manifest/icon-384x384.png",
                "./manifest/icon-512x512.png",
            ]);
        })
    );
});

self.addEventListener("fetch", (event) => {
    if (event.request.url.startsWith("/")) {
        event.respondWith(caches.match(event.request));
    }
});
