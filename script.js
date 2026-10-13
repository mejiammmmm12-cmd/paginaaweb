const saludo = document.getElementById("saludo");
const anio = document.getElementById("anio");
const cambiarTema = document.getElementById("cambiarTema");

if (saludo) {
    const hora = new Date().getHours();

    if (hora < 12) {
        saludo.textContent = "¡Buenos días! Gracias por visitar mi página.";
    } else if (hora < 19) {
        saludo.textContent = "¡Buenas tardes! Gracias por visitar mi página.";
    } else {
        saludo.textContent = "¡Buenas noches! Gracias por visitar mi página.";
    }
}

if (anio) {
    anio.textContent = new Date().getFullYear();
}

if (cambiarTema) {
    cambiarTema.addEventListener("click", function () {
        document.body.classList.toggle("tema-oscuro");
    });
}

const formulario = document.getElementById("formPrincipal");

if (formulario) {
    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const respuesta = document.getElementById("respuesta");

        respuesta.textContent =
            "¡Gracias, " + nombre + "! El formulario se completó correctamente.";

        formulario.reset();
    });
}