// Background Image  
  document.getElementById('bgSelect').addEventListener('change', function () {
    const val = this.value;
    if (val === 'blue') {
      document.body.style.backgroundImage = "url('images/lightblue.jpg')";
    } else if (val === 'gold') {
      document.body.style.backgroundImage = "url('images/lightgold.jpg')";
    } else {
      document.body.style.backgroundImage = 'none';
    }
  });
  
// Local Storage  
  const nameInput = document.getElementById('nameInput');
  const greeting  = document.getElementById('greeting');
  
  // Name Check
  const savedName = localStorage.getItem('name');
  if (savedName) {
    nameInput.value = savedName;
    greeting.textContent = 'Hi, ' + savedName + '! Glad to see you here.';
  } else {
    greeting.textContent = 'Hi, there! Glad to see you here.';
  }
  
  // Name Input
  nameInput.addEventListener('blur', function () {
    const typed = this.value.trim();
    if (typed !== '') {
        localStorage.setItem('name', typed);
      greeting.textContent = 'Hi, ' + localStorage.getItem('name') + '! Glad to see you here.';
    }
  });

// Service Worker registration  
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js')
      .then(reg => console.log('Service Worker registered. Scope:', reg.scope))
      .catch(err => console.log('Service Worker registration failed:', err));
  }
  
