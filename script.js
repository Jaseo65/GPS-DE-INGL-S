document.querySelectorAll('.purchase').forEach(button => {
  if (window.GPS_CHECKOUT_URL) {
    button.removeAttribute('aria-disabled');
    button.addEventListener('click', () => window.location.assign(window.GPS_CHECKOUT_URL));
  }
});
