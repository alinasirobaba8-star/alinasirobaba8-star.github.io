(() => {
  const form = document.getElementById('inquiry-form');
  if (!form) return;
  const service = form.querySelector('#service');
  const contact = form.querySelector('#contact-method');
  const phone = form.querySelector('#phone');
  const locationField = form.querySelector('#location');
  const instagramField = form.querySelector('[data-instagram-field]');
  const instagram = form.querySelector('#instagram-handle');
  const requested = new URLSearchParams(location.search).get('service');
  if ([...service.options].some(option => option.value === requested)) service.value = requested;
  function update() {
    const event = !['Custom T-shirts', 'Personalized snacks', 'Stickers / party labels', 'Invitations'].includes(service.value) && Boolean(service.value);
    locationField.required = event;
    phone.required = ['Text message', 'Phone call'].includes(contact.value);
    instagramField.hidden = contact.value !== 'Instagram';
    instagram.disabled = contact.value !== 'Instagram';
    instagram.required = contact.value === 'Instagram';
  }
  service.addEventListener('change', update);
  contact.addEventListener('change', update);
  update();
})();
