// If web successfully connects
console.log('Web successfully connects')


document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const section = document.querySelector(link.getAttribute('href'));
      section.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Submit email form
  const form = document.querySelector('#get-involved form');
  const emailInput = document.querySelector('#get-involved input[type="email"]');
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert(`Thanks for subscribing, ${emailInput.value}!`);
    emailInput.value = '';
  });