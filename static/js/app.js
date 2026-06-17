// pagina para hacer funcinal el formulario

document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("formulario-contacto");
  const mensaje = document.getElementById("mensaje-confirmacion");

  if (formulario && mensaje) {
    formulario.addEventListener("submit", function (e) {
      e.preventDefault();

      const datos = new FormData(formulario);

      fetch("/enviar", {
        method: "POST",
        body: datos
      })
        .then(res => res.ok ? res.json() : Promise.reject(res))
        .then(data => {
          if (data.status === 'ok') {
            formulario.reset();
            mensaje.classList.remove("oculto");
          } else {
            alert("Error al enviar: " + data.message);
          }
          console.log(data.status)
        })
        .catch(() => {
          alert("Error de conexión. Verifica tu red o vuelve a intentarlo.");
        });
    });
  }
});
