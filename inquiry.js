(() => {
  const form = document.getElementById('inquiry-form');
  if (!form) return;
  const service = form.querySelector('#service');
  const contact = form.querySelector('#contact-method');
  const products = ['Custom T-shirts','Personalized snacks','Stickers / party labels','Invitations'];
  function showFields(selector, show) {
    form.querySelectorAll(selector).forEach(field => {
      field.hidden = !show;
      field.querySelectorAll('input,select,textarea').forEach(input => { input.disabled = !show; });
    });
  }
  function update() {
    const product = products.includes(service.value);
    const event = Boolean(service.value) && !product;
    showFields('[data-event-field]', event);
    showFields('[data-product-field]', product || service.value === 'Multiple services');
    showFields('[data-snack-field]', ['Personalized snacks','Multiple services'].includes(service.value));
    showFields('[data-instagram-field]', contact.value === 'Instagram');
    form.querySelector('#instagram-handle').required = contact.value === 'Instagram';
    form.querySelector('#phone').required = ['Text message','Phone call'].includes(contact.value);
    form.querySelector('#location').required = event;
  }
  const requested = new URLSearchParams(location.search).get('service');
  if ([...service.options].some(option => option.value === requested)) service.value = requested;
  service.addEventListener('change', update);
  contact.addEventListener('change', update);
  update();
})();
