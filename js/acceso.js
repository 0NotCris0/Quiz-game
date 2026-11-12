// =====================================================
// acceso.js — Pantalla de inicio del Quiz (Albert)
// Valida el nombre, guarda la categoría elegida, coge las
// preguntas de esa categoría y cambia a la pantalla de juego.
// Se carga DESPUÉS de preguntas.js y script.js (ver index.html).
// =====================================================

// ---------- Datos de la partida ----------
// Joan puede leer estas variables desde script.js
let nombreJugador = "";      // nombre escrito por el jugador
let categoriaElegida = "";   // categoría elegida en el selector
let preguntasPartida = [];   // solo las preguntas de esa categoría

// ---------- Categorías ----------
// La clave debe ser IGUAL que el value de las opciones del selector
// (index.html). Cada categoría apunta a su array de js/preguntas.js.
// Para añadir una categoría: nuevo array en preguntas.js, nueva
// opción en el selector y una línea aquí.
const bancosDePreguntas = {
  "Videojuegos": typeof preguntasVideojuegos !== "undefined" ? preguntasVideojuegos : [],
  "Deportes": typeof preguntasDeportes !== "undefined" ? preguntasDeportes : []
};

// ---------- Elementos del HTML ----------
const pantallaInicio = document.getElementById("pantalla-inicio");
const pantallaJuego = document.getElementById("pantalla-juego");
const pantallaResultados = document.getElementById("pantalla-resultados");
const campoNombre = document.getElementById("nombre-jugador");
const selectorCategoria = document.getElementById("tipo-quiz");
const botonEmpezar = document.getElementById("btn-empezar");

// ---------- Empezar la partida ----------
function empezar() {
  const nombre = campoNombre.value.trim();

  // 1. Comprobar que hay nombre
  if (nombre === "") {
    alert("Escribe tu nombre para empezar.");
    campoNombre.focus();
    return;
  }

  // 2. Coger las preguntas de la categoría elegida
  const categoria = selectorCategoria.value;
  const banco = bancosDePreguntas[categoria] || [];

  if (banco.length === 0) {
    alert("No hay preguntas para esta categoría.");
    return;
  }

  // 3. Guardar los datos de la partida (copia, para no tocar el banco original)
  nombreJugador = nombre;
  categoriaElegida = categoria;
  preguntasPartida = banco.slice();

  // 4. Cambiar de pantalla
  pantallaInicio.classList.add("oculto");
  pantallaJuego.classList.remove("oculto");

  // 5. Avisar a la lógica del juego (Joan define iniciarPartida en script.js)
  if (typeof iniciarPartida === "function") {
    iniciarPartida();
  }
}

// ---------- Volver a la pantalla de inicio ----------
// Joan puede llamarla desde el botón Reiniciar
function volverAlInicio() {
  pantallaJuego.classList.add("oculto");
  pantallaResultados.classList.add("oculto");
  pantallaInicio.classList.remove("oculto");
}

// ---------- Eventos ----------
botonEmpezar.addEventListener("click", empezar);