window.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('weddingForm');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    await fetch('https://docs.google.com/forms/d/e/1uIF2wcmtkFi79HyP-dd5PKT3p9TxJ9ZC_8w5XX4WsHc/formResponse', {
      method: 'POST',
      mode: 'no-cors',
      body: data
    });

    form.style.display = 'none';
    document.getElementById('successMessage')?.classList.remove('hidden');
  });
});
