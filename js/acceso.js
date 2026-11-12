// =====================================================
// acceso.js — Pantalla de inicio del Quiz (Albert)
// Valida el nombre, guarda la categoría elegida, filtra
// las preguntas de esa categoría y cambia a la pantalla
// de juego.
// Se carga DESPUÉS de script.js (ver index.html).
// =====================================================

// ---------- Datos de la partida ----------
// Joan puede leer estas variables desde script.js
let nombreJugador = "";      // nombre escrito por el jugador
let categoriaElegida = "";   // categoría elegida en el selector
let preguntasPartida = [];   // solo las preguntas de esa categoría

// ---------- Elementos del HTML ----------
const pantallaInicio = document.getElementById("pantalla-inicio");
const pantallaJuego = document.getElementById("pantalla-juego");
const pantallaResultados = document.getElementById("pantalla-resultados");
const campoNombre = document.getElementById("nombre-jugador");
const selectorCategoria = document.getElementById("tipo-quiz");
const botonEmpezar = document.getElementById("btn-empezar");

// ---------- Preguntas de prueba ----------
// Solo se usan si todavía no existe el array "preguntas" de
// script.js. BORRAR cuando Christian suba las preguntas reales.
const preguntasDePrueba = [
  {
    tipo: "Categoría 1",
    pregunta: "Pregunta de prueba 1",
    opciones: ["Opción A", "Opción B", "Opción C", "Opción D"],
    correcta: 0
  },
  {
    tipo: "Categoría 1",
    pregunta: "Pregunta de prueba 2",
    opciones: ["Opción A", "Opción B", "Opción C", "Opción D"],
    correcta: 1
  },
  {
    tipo: "Categoría 2",
    pregunta: "Pregunta de prueba 3",
    opciones: ["Opción A", "Opción B", "Opción C", "Opción D"],
    correcta: 2
  }
];

// Devuelve el array real si existe; si no, el de prueba
function obtenerPreguntas() {
  if (typeof preguntas !== "undefined") {
    return preguntas;
  }
  return preguntasDePrueba;
}

// ---------- Empezar la partida ----------
function empezar() {
  const nombre = campoNombre.value.trim();

  // 1. Comprobar que hay nombre
  if (nombre === "") {
    alert("Escribe tu nombre para empezar.");
    campoNombre.focus();
    return;
  }

  // 2. Filtrar las preguntas de la categoría elegida
  const categoria = selectorCategoria.value;
  const filtradas = obtenerPreguntas().filter(function (p) {
    return p.tipo === categoria;
  });

  if (filtradas.length === 0) {
    alert("No hay preguntas para esta categoría.");
    return;
  }

  // 3. Guardar los datos de la partida
  nombreJugador = nombre;
  categoriaElegida = categoria;
  preguntasPartida = filtradas;

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