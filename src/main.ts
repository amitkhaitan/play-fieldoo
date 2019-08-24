import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).then(() => {
  if ('serviceWorker' in navigator && environment.production) {
    navigator.serviceWorker.register('ngsw-worker.js');
  }
}).catch(err => console.log(err));

// for Service Worker work on reload
// addEventListener('message', messageEvent => {
//   if (messageEvent.data === 'skipWaiting') return skipWaiting();
// });

// addEventListener('fetch', event => {
//   event.respondWith((async () => {
//     if (event.request.mode === "navigate" &&
//       event.request.method === "GET" &&
//       registration.waiting &&
//       (await clients.matchAll()).length < 2
//     ) {
//       registration.waiting.postMessage('skipWaiting');
//       return new Response("", {headers: {"Refresh": "0"}});
//     }
//     return await caches.match(event.request) ||
//       fetch(event.request);
//   })());
// });



function listenForWaitingServiceWorker(reg, callback) {
  function awaitStateChange() {
    reg.installing.addEventListener('statechange', function() {
      if (this.state === 'installed') callback(reg);
    });
  }
  if (!reg) return;
  if (reg.waiting) return callback(reg);
  if (reg.installing) awaitStateChange();
  reg.addEventListener('updatefound', awaitStateChange);
}

// reload once when the new Service Worker starts activating
var refreshing;
navigator.serviceWorker.addEventListener('controllerchange',
  function() {
    if (refreshing) return;
    refreshing = true;
    window.location.reload();
  }
);
function promptUserToRefresh(reg) {
  // this is just an example
  // don't use window.confirm in real life; it's terrible
  if (window.confirm("New version available! OK to refresh?")) {
    reg.waiting.postMessage('skipWaiting');
  }
listenForWaitingServiceWorker(reg, promptUserToRefresh);

}

