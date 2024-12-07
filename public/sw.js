const CACHE_NAME = "version-1";
const urlList = ["index.html", "offline.html"];

// Install Service Workers:
self.addEventListener("install", (e)=> {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache)=>{
            console.log("Cache Opened");

            return cache.addAll(urlList);
        }).catch((err)=> console.log(err))
    )
})

// Fetch requests:
self.addEventListener('fetch', (event)=> {
    event.respondWith(
        caches.match(event.request).then(()=> {
            return fetch(event.request).catch(()=> caches.match("offline.html"))
        })
    )
})

// Activate the SW:
self.addEventListener("activate", (event) => {
    const whitelistCaches = [CACHE_NAME];
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (!whitelistCaches.includes(cacheName)) {
              console.log("Deleting old cache:", cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });
  