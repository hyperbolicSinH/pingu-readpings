self.addEventListener('install', event => {
    event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});

// This enables background sync, but our scheduling is in main JS
self.addEventListener('sync', event => {
    if (event.tag === 'ping-sync') {
        // Future expansion if needed
    }
});
