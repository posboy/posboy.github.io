'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "955c6be660f16df1bb46c262948a41b1",
"index.html": "4781ec93f03a55c774a9b6155b563b04",
"/": "4781ec93f03a55c774a9b6155b563b04",
"main.dart.js": "706a3c2ac4abefbcb49efa95896c2bfb",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "70e76db2a901c48358fa17641e53df7e",
"assets/AssetManifest.json": "e26e1e98fa71f54e4718956a62fde6fc",
"assets/NOTICES": "27efa0771fc0a2c9f62e7186d8f9f7a7",
"assets/FontManifest.json": "0fdedce3492e8f438703c302ef7d9651",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "f2337185ee5ac6679bf9f88f4dd92b4d",
"assets/fonts/Roboto-Medium.ttf": "68ea4734cf86bd544650aee05137d7bb",
"assets/fonts/SCDream3.otf": "8be5836258dabb5c226e34e53a4c2c37",
"assets/fonts/SCDream7.otf": "3bd0c8cad0d8fa056ff66afb70c53b69",
"assets/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/fonts/Roboto-Bold.ttf": "b8e42971dec8d49207a8c8e2b919a6ac",
"assets/fonts/Roboto-Black.ttf": "d6a6f8878adb0d8e69f9fa2e0b622924",
"assets/assets/ico_circle_pre.png": "bf8a4bcd187a458bfdce6a771e1eca92",
"assets/assets/ico_arrow_down.png": "c8f4360ad99afc4032a49a2fa932005b",
"assets/assets/2.0x/ico_circle_pre.png": "dedcefc221454d14d783a034de178f93",
"assets/assets/2.0x/ico_arrow_down.png": "7f369476e9a7e5cecbaf0b2faacbba71",
"assets/assets/2.0x/ico_circle_next.png": "3568d7c9048725e6c9396b06f23fa4ce",
"assets/assets/2.0x/ico_tab_graph.png": "63d97838f29af682bd6ff3b00c5848b9",
"assets/assets/2.0x/ico_tab_report.png": "3692d13c91aa6165e79338dc4339d321",
"assets/assets/2.0x/logo_posboy.png": "e4388dfe786e146fa593aaac5e51dc76",
"assets/assets/2.0x/ico_tab_home.png": "db13999cdbd961a6ddaefc0416f34372",
"assets/assets/2.0x/ico_tab_user.png": "75b8f523163ad8df13076ceeac794b0a",
"assets/assets/2.0x/ico_tab_list.png": "7b8a83f5f1e1f837299b854603ea7db4",
"assets/assets/2.0x/ic_logo.png": "baf9a439feceb66cb357d284a91bd3e2",
"assets/assets/2.0x/ico_arrow_left.png": "fe380f77bfd6d7abda80bbd4b85f1b7c",
"assets/assets/2.0x/splash_logo.png": "c2713a04aa5d54d595db6d0fc005140b",
"assets/assets/2.0x/ico_circle_delete.png": "2b60a18da5f18eecd4a52c138901735b",
"assets/assets/ico_circle_next.png": "515d2da26fa0882634b0a25a20501e7d",
"assets/assets/ico_tab_graph.png": "3f56e1ae22afabb9b51014baa290651c",
"assets/assets/ico_tab_report.png": "c46c551271005c7d1037f2cfa148a822",
"assets/assets/3.0x/ico_circle_pre.png": "a516efac4e68ff0071477676b20b42c0",
"assets/assets/3.0x/ico_arrow_down.png": "9f7eaa5f6cf2f6f22566fce420754da5",
"assets/assets/3.0x/ico_circle_next.png": "991868ae4daea98bb28aa18b583f94f1",
"assets/assets/3.0x/ico_tab_graph.png": "00e9076a95528c44614892a0fb4ce832",
"assets/assets/3.0x/ico_tab_report.png": "6f0e459df6573470ace475dfbc506b38",
"assets/assets/3.0x/logo_posboy.png": "ecea784e58b26236af3046b565d2bc86",
"assets/assets/3.0x/ico_tab_home.png": "5dec84825bddeaa69cf7e6cc7f21ec9e",
"assets/assets/3.0x/ico_tab_user.png": "c8736750dbd253aa8f33ba02d58fe573",
"assets/assets/3.0x/ico_tab_list.png": "7eec7c5dabf16124abb8378007a68e18",
"assets/assets/3.0x/ic_logo.png": "9f29c97642e1075bfdd3a7ce94b4b067",
"assets/assets/3.0x/ico_arrow_left.png": "20bcf215bf981c270fda2445be92181e",
"assets/assets/3.0x/splash_logo.png": "859f8316b960b0d7900ef14c085de7e5",
"assets/assets/3.0x/ico_circle_delete.png": "4f840bd06f97fd5ddbc662445dff0968",
"assets/assets/logo_posboy.png": "1bfb9b70497d2e2609303fbe47b6bd67",
"assets/assets/ico_tab_home.png": "1b5fe17e598a7ec9b0178412ace38fa7",
"assets/assets/ico_tab_user.png": "d89ea34640480ebb7fcdd3193dbe276a",
"assets/assets/ico_tab_list.png": "98e791e1322c7179ddc5a0bbf2944bd3",
"assets/assets/ic_logo.png": "cf7f9c947740b2a16b8eb534d3419d25",
"assets/assets/ico_arrow_left.png": "1552a08cd9d3e31bc3f276785f3b0d0a",
"assets/assets/splash_logo.png": "5020194ac940b7d209faf370c7212210",
"assets/assets/ico_circle_delete.png": "9e84a9d9ba2d1dd2f2c76acf2b2ae54f",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
