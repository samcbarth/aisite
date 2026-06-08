(function () {
  'use strict';
  var SHEETS_URL = 'https://script.google.com/macros/s/AKfycbxDBkDGUwhzBF0556X97OuiBb29hfzDN-VMm5VoUvSbRts_za_orLbykiE5ztpwRnQP/exec';

  var btn = document.getElementById('post-like-btn');
  if (!btn) return;
  var postId = btn.dataset.id;
  var count = null;

  function hasLiked() { return localStorage.getItem('liked_' + postId) === 'true'; }

  function fmtCount(n) {
    if (n >= 1000) return (n / 1000).toFixed(n % 1000 >= 100 ? 1 : 0).replace(/\.0$/, '') + 'k';
    return String(n);
  }

  function render() {
    var label = count != null ? fmtCount(count) : '';
    btn.textContent = '♥' + (label ? ' ' + label : '');
    btn.classList.toggle('liked', hasLiked());
  }

  fetch(SHEETS_URL + '?action=counts')
    .then(function (r) { return r.json(); })
    .then(function (data) {
      if (data[postId] != null) { count = data[postId]; render(); }
    })
    .catch(function () {});

  render();

  btn.addEventListener('click', function () {
    localStorage.setItem('liked_' + postId, 'true');
    count = (count || 0) + 1;
    render();
    fetch(SHEETS_URL + '?action=like&id=' + encodeURIComponent(postId))
      .then(function (r) { return r.json(); })
      .then(function (data) { if (typeof data.count === 'number') { count = data.count; render(); } })
      .catch(function () {});
  });
})();
