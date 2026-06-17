// main.js – Seguro para todas las páginas

document.addEventListener("DOMContentLoaded", () => {
  // 🌟 ANIMACIÓN AL HACER SCROLL
  const faders = document.querySelectorAll('.animacion');

  if (faders.length > 0) {
    const appearOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    }, appearOptions);

    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });
  }

  // 🧩 FILTRO DE PROYECTOS
  const botonesFiltro = document.querySelectorAll(".filtro-btn");
  const items = document.querySelectorAll(".proyecto-item");

  if (botonesFiltro.length > 0 && items.length > 0) {
    botonesFiltro.forEach(boton => {
      boton.addEventListener("click", () => {
        const filtro = boton.getAttribute("data-filtro");

        // Cambia clase activa
        botonesFiltro.forEach(b => b.classList.remove("active"));
        boton.classList.add("active");

        items.forEach(item => {
          const categoria = item.getAttribute("data-categoria");

          if (filtro === "todos" || filtro === categoria) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      });
    });
  }

  // 🌗 MODO CLARO / OSCURO
  const botonTema = document.getElementById('toggle-tema');
  const body = document.body;

  if (botonTema) {
    const modoGuardado = localStorage.getItem('modo');

    if (modoGuardado === 'oscuro') {
      body.classList.add('modo-oscuro');
      botonTema.textContent = '🌙';
    } else {
      body.classList.remove('modo-oscuro');
      botonTema.textContent = '💡';
    }

    botonTema.addEventListener('click', () => {
      const modoOscuroActivo = body.classList.toggle('modo-oscuro');
      botonTema.textContent = modoOscuroActivo ? '🌙' : '💡';
      localStorage.setItem('modo', modoOscuroActivo ? 'oscuro' : 'claro');
    });
  }
});

// Para animacion de barras

document.addEventListener("DOMContentLoaded", () => {
  const barras = document.querySelectorAll(".progreso");

  const cargarBarra = (entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.style.width = entrada.target.style.getPropertyValue("--porcentaje");
    }
  };

  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(cargarBarra);
  }, { threshold: 0.5 });

  barras.forEach(barra => observador.observe(barra));
});








