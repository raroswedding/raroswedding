// ==========================================
// CUENTA ATRÁS
// ==========================================

const fechaBoda = new Date("2027-09-24T18:00:00");

function actualizarCuentaAtras() {

    const ahora = new Date();

    const diferencia = fechaBoda - ahora;

    if (diferencia <= 0) {

        document.getElementById("dias").textContent = "0";
        document.getElementById("horas").textContent = "0";
        document.getElementById("minutos").textContent = "0";

        return;

    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    const horas = Math.floor(
        (diferencia % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutos = Math.floor(
        (diferencia % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;

}

actualizarCuentaAtras();

setInterval(actualizarCuentaAtras, 60000);


// ==========================================
// ABRIR Y CERRAR FORMULARIO
// ==========================================

const modal = document.getElementById("modal");
const abrir = document.getElementById("abrirFormulario");
const cerrar = document.getElementById("cerrarModal");

abrir.addEventListener("click", () => {

    modal.style.display = "flex";

});

cerrar.addEventListener("click", () => {

    modal.style.display = "none";

});

window.addEventListener("click", (e) => {

    if (e.target === modal) {

        modal.style.display = "none";

    }

});


// ==========================================
// MOSTRAR / OCULTAR CAMPOS
// ==========================================

const acompanante = document.getElementById("acompanante");
const nombreAcompanante = document.getElementById("nombreAcompanante");

acompanante.addEventListener("change", () => {

    if (acompanante.value === "Sí") {

        nombreAcompanante.style.display = "block";

    } else {

        nombreAcompanante.style.display = "none";

    }

});


const ninos = document.getElementById("ninos");
const cantidadNinos = document.getElementById("cantidadNinos");

ninos.addEventListener("change", () => {

    if (ninos.value === "Sí") {

        cantidadNinos.style.display = "block";

    } else {

        cantidadNinos.style.display = "none";

    }

});


// ==========================================
// ANIMACIONES AL HACER SCROLL
// ==========================================

const secciones = document.querySelectorAll(
    ".contador, .frases, .evento, .rsvp"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

        }

    });

}, {

    threshold: 0.2

});

secciones.forEach((seccion) => {

    seccion.classList.add("oculto");

    observer.observe(seccion);

});