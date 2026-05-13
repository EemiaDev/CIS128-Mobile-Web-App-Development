// Service Worker registration  
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js')
      .then(reg => console.log('Service Worker registered. Scope:', reg.scope))
      .catch(err => console.log('Service Worker registration failed:', err));
  }