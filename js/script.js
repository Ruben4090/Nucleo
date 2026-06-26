// Espera a que todo el HTML se haya cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", () => {
  // Seleccionamos todos los enlaces de tu navegación
  const navLinks = document.querySelectorAll(".navbar ul li a");
  // Seleccionamos todos los contenedores que tienen la clase 'page'
  const sections = document.querySelectorAll(".page");

  // Recorremos cada enlace para añadirle un "escuchador de eventos" (event listener)
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      // Evitamos que el enlace recargue la página o haga el salto de ancla (#)
      e.preventDefault();

      // Obtenemos el nombre de la sección a mostrar desde el atributo data-target
      const targetId = link.getAttribute("data-target");

      // 1. Ocultamos todas las secciones:
      // Recorremos todas las secciones y les quitamos la clase 'active'
      sections.forEach((sec) => {
        sec.classList.remove("active");
      });

      // 2. Quitamos el resaltado del enlace anterior:
      // Recorremos los enlaces para quitarles la clase 'active' (si la tuvieran)
      navLinks.forEach((nav) => {
        nav.classList.remove("active");
      });

      // 3. Mostramos la sección elegida:
      // Buscamos el elemento con el ID que obtuvimos (ej: 'muestra1')
      // y le añadimos la clase 'active' para que el CSS lo haga visible
      if (targetId) {
        document.getElementById(targetId).classList.add("active");
        // También marcamos el enlace presionado como activo
        link.classList.add("active");
      }
    });
  });
});
