window.addEventListener('DOMContentLoaded', () => {
  fetch('/people/geonwoo.html')
    .then(res => res.text())
    .then(data => document.getElementById('geonwoo-placeholder').innerHTML = data);
  fetch('/people/dongho.html')
    .then(res => res.text())
    .then(data => document.getElementById('dongho-placeholder').innerHTML = data);
  fetch('/people/sarang.html')
    .then(res => res.text())
    .then(data => document.getElementById('sarang-placeholder').innerHTML = data);
  fetch('/people/minsik.html')
    .then(res => res.text())
    .then(data => document.getElementById('minsik-placeholder').innerHTML = data);
  fetch('/people/eunseo.html')
    .then(res => res.text())
    .then(data => document.getElementById('eunseo-placeholder').innerHTML = data);
  fetch('/people/minju.html')
    .then(res => res.text())
    .then(data => document.getElementById('minju-placeholder').innerHTML = data);
});