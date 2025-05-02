window.addEventListener('DOMContentLoaded', () => {
  fetch('/people/geonwoo.html')
    .then(res => res.text())
    .then(data => document.getElementById('geonwoo-placeholder').innerHTML = data);
});