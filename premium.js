(function () {
  'use strict';

  const endpoint = 'https://script.google.com/macros/s/AKfycbxDBkDGUwhzBF0556X97OuiBb29hfzDN-VMm5VoUvSbRts_za_orLbykiE5ztpwRnQP/exec';
  const form = document.getElementById('access-form');
  const status = document.getElementById('access-status');
  const requestBtn = document.getElementById('request-btn');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const params = new URLSearchParams({
        action: 'requestAccess',
        name: fd.get('name') || '',
        email: fd.get('email') || '',
        offer: fd.get('offer') || 'private access',
        notes: fd.get('notes') || '',
        source: 'premium-page'
      });

      status.textContent = 'Sending request...';
      requestBtn.disabled = true;

      try {
        const res = await fetch(endpoint + '?' + params.toString());
        if (!res.ok) throw new Error('Request failed');
        status.textContent = 'Request received. I will follow up with access details.';
        form.reset();
      } catch (err) {
        status.textContent = 'Could not send the request. Use the email link above and I will handle it manually.';
      } finally {
        requestBtn.disabled = false;
      }
    });
  }
})();
