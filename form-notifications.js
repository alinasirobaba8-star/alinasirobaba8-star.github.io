(() => {
  const form = document.getElementById('inquiry-form');
  if (!form) return;

  // A separate subject keeps unrelated customers out of one Gmail conversation.
  // Keep native POST submission so every enabled, named field is sent.
  form.addEventListener('submit', () => {
    const value = name => String(form.elements.namedItem(name)?.value || '')
      .replace(/[\r\n]+/g, ' ').trim();
    const subject = form.elements.namedItem('_subject');
    const reference = globalThis.crypto?.randomUUID?.() ||
      `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    if (subject) subject.value =
      `Party Studio inquiry — ${value('name').slice(0, 60)} — ${value('event_date')} — ${reference}`;
  });
})();
