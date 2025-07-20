/**
 * Service Worker for TrollOS PWA
 * Provides offline functionality and caching for maximum trolling potential
 */

const CACHE_NAME = 'trollos-v2.0.1';
const CACHE_ASSETS = [
    '/',
    '/index.html',
    '/styles.css',
    '/script.js',
    '/js/TrollEngine.js',
    '/js/TrollFeatures.js',
    '/js/AdvancedTrollFeatures.js',
    '/js/CompleteTrollFeatures.js',
    '/manifest.json'
];

// Install event - cache assets
self.addEventListener('install', event => {
    console.log('🔧 TrollOS Service Worker: Installing...');
    
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('📦 TrollOS Service Worker: Caching assets...');
                return cache.addAll(CACHE_ASSETS);
            })
            .then(() => {
                console.log('✅ TrollOS Service Worker: Installation complete!');
                return self.skipWaiting(); // Activate immediately
            })
            .catch(err => {
                console.error('❌ TrollOS Service Worker: Installation failed:', err);
            })
    );
});

// Activate event - clean old caches
self.addEventListener('activate', event => {
    console.log('🚀 TrollOS Service Worker: Activating...');
    
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('🗑️ TrollOS Service Worker: Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => {
            console.log('✅ TrollOS Service Worker: Activation complete!');
            return self.clients.claim(); // Take control immediately
        })
    );
});

// Fetch event - serve cached content with trolling
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Return cached version if available
                if (response) {
                    console.log('📁 TrollOS Service Worker: Serving from cache:', event.request.url);
                    return response;
                }
                
                // Otherwise fetch from network
                console.log('🌐 TrollOS Service Worker: Fetching from network:', event.request.url);
                return fetch(event.request)
                    .then(response => {
                        // Don't cache non-successful responses
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }
                        
                        // Clone response for cache
                        const responseToCache = response.clone();
                        
                        caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request, responseToCache);
                            });
                        
                        return response;
                    })
                    .catch(() => {
                        // Serve offline fallback with troll message
                        console.log('📴 TrollOS Service Worker: Serving offline fallback');
                        return new Response(
                            `
                            <!DOCTYPE html>
                            <html>
                            <head>
                                <title>TrollOS - Offline Mode</title>
                                <style>
                                    body { 
                                        font-family: Arial, sans-serif; 
                                        background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
                                        color: white; 
                                        text-align: center; 
                                        padding: 50px;
                                    }
                                    h1 { font-size: 3em; margin-bottom: 20px; }
                                    p { font-size: 1.2em; margin-bottom: 15px; }
                                    .emoji { font-size: 4em; margin: 20px 0; }
                                </style>
                            </head>
                            <body>
                                <h1>🌐 You're Offline!</h1>
                                <div class="emoji">📡❌</div>
                                <p>But don't worry, the trolling continues even without internet!</p>
                                <p>This is TrollOS - Advanced Psychological Warfare Platform</p>
                                <p>We cached everything for maximum offline trolling! 😈</p>
                                <p><button onclick="location.reload()">Try Again</button></p>
                            </body>
                            </html>
                            `,
                            {
                                headers: {
                                    'Content-Type': 'text/html'
                                }
                            }
                        );
                    });
            })
    );
});

// Push event - for troll notifications (if user enables)
self.addEventListener('push', event => {
    console.log('📮 TrollOS Service Worker: Push received');
    
    const options = {
        body: event.data ? event.data.text() : 'You\'ve been trolled by a push notification! 😈',
        vibrate: [200, 100, 200],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '1'
        },
        actions: [
            {
                action: 'explore',
                title: 'Get Trolled More'
            },
            {
                action: 'close',
                title: 'Stop (Won\'t Work)'
            }
        ]
    };
    
    event.waitUntil(
        self.registration.showNotification('TrollOS Update! 🎭', options)
    );
});

// Notification click event
self.addEventListener('notificationclick', event => {
    console.log('🔔 TrollOS Service Worker: Notification clicked');
    
    event.notification.close();
    
    if (event.action === 'explore') {
        event.waitUntil(
            clients.openWindow('/')
        );
    } else if (event.action === 'close') {
        // Troll: show another notification instead of closing
        setTimeout(() => {
            self.registration.showNotification('You can\'t escape that easily! 😈', {
                body: 'The trolling never stops!'
            });
        }, 2000);
    }
});

// Background sync for offline troll data collection
self.addEventListener('sync', event => {
    console.log('🔄 TrollOS Service Worker: Background sync triggered');
    
    if (event.tag === 'troll-data-sync') {
        event.waitUntil(
            // Sync troll statistics when back online
            syncTrollData()
        );
    }
});

async function syncTrollData() {
    try {
        // Get stored troll data from IndexedDB (if implemented)
        console.log('📊 TrollOS Service Worker: Syncing troll data...');
        
        // Send analytics about user's trolling experience
        const response = await fetch('/api/troll-analytics', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: 'User successfully trolled while offline!',
                timestamp: Date.now(),
                userAgent: navigator.userAgent
            })
        });
        
        console.log('📈 TrollOS Service Worker: Troll data synced successfully!');
    } catch (error) {
        console.log('❌ TrollOS Service Worker: Sync failed (probably fake endpoint anyway)');
    }
}

// Listen for messages from main thread
self.addEventListener('message', event => {
    console.log('💬 TrollOS Service Worker: Message received:', event.data);
    
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
    
    if (event.data && event.data.type === 'GET_VERSION') {
        event.ports[0].postMessage({
            version: CACHE_NAME,
            message: 'TrollOS Service Worker is running! 🤖'
        });
    }
});

console.log('🎭 TrollOS Service Worker: Loaded and ready for maximum trolling!');
