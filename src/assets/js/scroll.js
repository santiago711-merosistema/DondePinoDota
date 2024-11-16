document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los enlaces internos que tienen un hash (#) o (/#)
    const links = document.querySelectorAll('a[href^="#"], a[href^="/#"]');
  
    // Agrega un evento de clic a cada enlace
    links.forEach(link => {
      link.addEventListener('click', e => {
        // Evita el comportamiento predeterminado del enlace
        e.preventDefault();
  
        // Obtiene el valor del atributo href del enlace
        let href = link.getAttribute('href');
  
        // Maneja el caso especial cuando el enlace comienza con "/#"
        if (href.startsWith('/#')) {
          href = href.substring(1); // Elimina la barra inicial
        }
  
        // Desplaza suavemente la página hasta la sección correspondiente
        document.querySelector(href).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });
  