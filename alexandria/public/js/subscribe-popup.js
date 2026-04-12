// public/js/subscribe-popup.js
(function () {
  'use strict';

  const STORAGE_KEY = 'alexandria-sub-dismissed';
  if (localStorage.getItem(STORAGE_KEY)) return;

  const overlay    = document.getElementById('subPopupOverlay');
  const closeBtn   = document.getElementById('subPopupClose');
  const dismissBtn = document.getElementById('subPopupDismiss');
  const form       = document.getElementById('subPopupForm');
  const success    = document.getElementById('subPopupSuccess');

  if (!overlay) return;

  function openPopup() {
    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    document.getElementById('subPopupEmail').focus();
  }

  function closePopup(permanent) {
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
    if (permanent) localStorage.setItem(STORAGE_KEY, '1');
  }

  setTimeout(openPopup, 8000);

  closeBtn.addEventListener('click',   () => closePopup(false));
  dismissBtn.addEventListener('click', () => closePopup(true));
  overlay.addEventListener('click',    (e) => { if (e.target === overlay) closePopup(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && overlay.classList.contains('active')) closePopup(false); });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!document.getElementById('subPopupEmail').value.trim()) return;
    form.hidden    = true;
    success.hidden = false;
    setTimeout(() => closePopup(true), 2500);
  });
})();
