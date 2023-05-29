// Seleccionar todos los enlaces de desplazamiento suave
const scrollLinks = document.querySelectorAll('.scroll-link');

// Agregar un event listener a cada enlace
scrollLinks.forEach((link) => {
  link.addEventListener('click', smoothScroll);
});

// Función para realizar el desplazamiento suave
function smoothScroll(event) {
  event.preventDefault();

  const targetId = this.getAttribute('href');
  const targetElement = document.querySelector(targetId);
  const targetOffset = targetElement.offsetTop;

  window.scrollTo({
    top: targetOffset,
    behavior: 'smooth',
  });
}