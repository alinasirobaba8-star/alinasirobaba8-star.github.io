(() => {
  let submittedAt;
  try {
    submittedAt = Number(sessionStorage.getItem('party_studio_lead_pending'));
    sessionStorage.removeItem('party_studio_lead_pending');
  } catch (_) { return; }

  // Ignore direct visits, stale form attempts, and refreshes of the thank-you page.
  if (!submittedAt || Date.now() - submittedAt > 10 * 60 * 1000) return;
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'generate_lead', { event_category: 'booking_form' });
  }
})();
