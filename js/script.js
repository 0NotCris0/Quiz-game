// ==================================================
// PREGUNTES DE CHRISTIAN
// Afegiu els objectes de les preguntes dins d'aquest array.
// Format acordat: tipo, pregunta, opciones i correcta.
// "correcta" és la posició correcta: 0, 1, 2 o 3.
// ==================================================

const preguntas = [];

// ==================================================
// ELEMENTS DE L'HTML
// ==================================================

const pantallaInici = document.getElementById("pantalla-inicio");
const pantallaJoc = document.getElementById("pantalla-juego");
const pantallaResultats = document.getElementById("pantalla-resultados");

const campNom = document.getElementById("nombre-jugador");
const selectorTipus = document.getElementById("tipo-quiz");

const botoComencar = document.getElementById("btn-empezar");
const botoSeguent = document.getElementById("btn-siguiente");
const botoReiniciar = document.getElementById("btn-reiniciar");

const textPregunta = document.getElementById("pregunta");
const botonsOpcions = document.querySelectorAll("#opciones .opcion");
const textPuntuacio = document.getElementById("puntuacion");
const textTemps = document.getElementById("temporizador");
const textProgres = document.getElementById("progreso");

const resultatNom = document.getElementById("resultado-nombre");
const resultatPuntuacio = document.getElementById("resultado-puntuacion");
const resultatEncerts = document.getElementById("resultado-aciertos");
const resultatFallades = document.getElementById("resultado-fallos");

// ==================================================
// ESTAT DE LA PARTIDA
// ==================================================

const SEGONS_PER_PREGUNTA = 15;
const PUNTS_PER_ENCERT = 1;

let nomJugador = "";
let preguntesPartida = [];
let preguntaActual = 0;
let encerts = 0;
let fallades = 0;
let puntuacio = 0;
let tempsRestant = SEGONS_PER_PREGUNTA;
let temporitzador = null;
let respostaDonada = false;
let partidaActiva = false;

// ==================================================
// PANTALLES
// ==================================================

function mostrarPantalla(pantalla) {
    pantallaInici.classList.add("oculto");
    pantallaJoc.classList.add("oculto");
    pantallaResultats.classList.add("oculto");

    pantalla.classList.remove("oculto");
}

// Omplim el selector amb els tipus reals de les preguntes.
function prepararTipus() {
    if (preguntas.length === 0) {
        return;
    }

    selectorTipus.textContent = "";

    const tipusDisponibles = [];

    for (let i = 0; i < preguntas.length; i++) {
        const tipus = preguntas[i].tipo;

        if (!tipusDisponibles.includes(tipus)) {
            tipusDisponibles.push(tipus);

            const opcio = document.createElement("option");
            opcio.value = tipus;
            opcio.textContent = tipus;
            selectorTipus.appendChild(opcio);
        }
    }
}

// ==================================================
// INICI DE LA PARTIDA
// ==================================================

function comencarPartida() {
    if (partidaActiva) {
        return;
    }

    if (preguntas.length === 0) {
        alert("Encara falten les preguntes de Christian.");
        return;
    }

    nomJugador = campNom.value.trim();

    if (nomJugador === "") {
        alert("Escriu el teu nom per començar.");
        campNom.focus();
        return;
    }

    preguntesPartida = preguntas.filter(function (pregunta) {
        return pregunta.tipo === selectorTipus.value;
    });

    if (preguntesPartida.length === 0) {
        alert("No hi ha preguntes per a aquest tipus de quiz.");
        return;
    }

    preguntaActual = 0;
    encerts = 0;
    fallades = 0;
    puntuacio = 0;
    partidaActiva = true;

    textPuntuacio.textContent = puntuacio;

    mostrarPantalla(pantallaJoc);
    mostrarPregunta();
}

// ==================================================
// MOSTRAR LA PREGUNTA ACTUAL
// ==================================================

function mostrarPregunta() {
    clearInterval(temporitzador);

    const pregunta = preguntesPartida[preguntaActual];

    textPregunta.textContent = pregunta.pregunta;

    textProgres.textContent =
        "Pregunta " + (preguntaActual + 1) +
        " de " + preguntesPartida.length;

    for (let i = 0; i < botonsOpcions.length; i++) {
        botonsOpcions[i].textContent = pregunta.opciones[i];
        botonsOpcions[i].disabled = false;
        botonsOpcions[i].classList.remove("correcta", "incorrecta");
    }

    respostaDonada = false;
    botoSeguent.disabled = true;

    iniciarTemporitzador();
}

// ==================================================
// COMPROVAR LA RESPOSTA
// ==================================================

function bloquejarOpcions() {
    for (let i = 0; i < botonsOpcions.length; i++) {
        botonsOpcions[i].disabled = true;
    }
}

function comprovarResposta(opcio) {
    if (!partidaActiva || respostaDonada) {
        return;
    }

    respostaDonada = true;
    clearInterval(temporitzador);

    const correcta = preguntesPartida[preguntaActual].correcta;

    if (opcio === correcta) {
        encerts++;
        puntuacio += PUNTS_PER_ENCERT;
    } else {
        fallades++;
        botonsOpcions[opcio].classList.add("incorrecta");
    }

    botonsOpcions[correcta].classList.add("correcta");

    bloquejarOpcions();
    textPuntuacio.textContent = puntuacio;
    botoSeguent.disabled = false;
}

// ==================================================
// TEMPORITZADOR
// ==================================================

function iniciarTemporitzador() {
    clearInterval(temporitzador);

    tempsRestant = SEGONS_PER_PREGUNTA;
    textTemps.textContent = tempsRestant;

    temporitzador = setInterval(function () {
        tempsRestant--;
        textTemps.textContent = tempsRestant;

        if (tempsRestant <= 0) {
            clearInterval(temporitzador);

            respostaDonada = true;
            fallades++;
            bloquejarOpcions();

            avancarPregunta();
        }
    }, 1000);
}

// ==================================================
// PASSAR A LA SEGÜENT PREGUNTA
// ==================================================

function avancarPregunta() {
    if (!partidaActiva || !respostaDonada) {
        return;
    }

    clearInterval(temporitzador);
    preguntaActual++;

    if (preguntaActual < preguntesPartida.length) {
        mostrarPregunta();
    } else {
        acabarPartida();
    }
}

// ==================================================
// RESULTATS I REINICI
// ==================================================

function acabarPartida() {
    clearInterval(temporitzador);
    partidaActiva = false;

    resultatNom.textContent = nomJugador;
    resultatPuntuacio.textContent = puntuacio;
    resultatEncerts.textContent = encerts;
    resultatFallades.textContent = fallades;

    mostrarPantalla(pantallaResultats);
}

function tornarAInici() {
    clearInterval(temporitzador);

    partidaActiva = false;
    preguntesPartida = [];
    preguntaActual = 0;
    encerts = 0;
    fallades = 0;
    puntuacio = 0;
    respostaDonada = false;
    tempsRestant = SEGONS_PER_PREGUNTA;

    textPuntuacio.textContent = puntuacio;
    textTemps.textContent = tempsRestant;
    botoSeguent.disabled = true;

    mostrarPantalla(pantallaInici);
}

// ==================================================
// CLICS DELS BOTONS
// ==================================================

botoComencar.addEventListener("click", comencarPartida);
botoSeguent.addEventListener("click", avancarPregunta);
botoReiniciar.addEventListener("click", tornarAInici);

for (let i = 0; i < botonsOpcions.length; i++) {
    botonsOpcions[i].addEventListener("click", function () {
        comprovarResposta(i);
    });
}

// Preparem la pàgina quan s'obre.
prepararTipus();
tornarAInici();