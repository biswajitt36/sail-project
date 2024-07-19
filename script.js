document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const sidebarToggle = document.querySelector('.sidebar img');
    const learnMoreButton = document.querySelector('.hero button');
    const contactForm = document.querySelector('.contact-form form');
  
    sidebarToggle.addEventListener('click', () => {
      sidebar.classList.toggle('expanded');
    });
  
    learnMoreButton.addEventListener('click', () => {
      document.querySelector('.highlights').scrollIntoView({ behavior: 'smooth' });
    });
  
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('Thank you for your message!');
      contactForm.reset();
    });
  });
  