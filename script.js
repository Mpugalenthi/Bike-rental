document.querySelectorAll('.bike-card').forEach(card => {
  const planButtons = card.querySelectorAll('.plan button');
  const chargeEl = card.querySelector('.charge');
  const kmEl = card.querySelector('.km');
  const plans = JSON.parse(card.dataset.plans);

  planButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      planButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Get plan data
      const plan = btn.dataset.plan;
      const data = plans[plan];

      // Update text
      chargeEl.textContent = data.charge;
      kmEl.textContent = data.km;
    });
  });
});
