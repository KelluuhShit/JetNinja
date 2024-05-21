if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/scripts/service-worker.js').then(function(registration) {
        console.log('Service worker registered:', registration);
      }).catch(function(error) {
        console.error('Service worker registration failed:', error);
      });
    });
  }