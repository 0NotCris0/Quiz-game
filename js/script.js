// ==================================================
// PREGUNTES DE CHRISTIAN
// Afegiu els objectes de les preguntes dins d'aquest array.
// Format acordat: tipo, pregunta, opciones i correcta.
// "correcta" és la posició correcta: 0, 1, 2 o 3.
// ==================================================

const preguntas = [
    // ESPORTS — 15 preguntes
    {
        tipo: "Deportes",
        pregunta: "¿Qué selección ganó el Mundial masculino de fútbol de 2010?",
        opciones: ["Alemania", "España", "Países Bajos", "Brasil"],
        correcta: 1
    },
    {
        tipo: "Deportes",
        pregunta: "¿Qué selección ganó el Mundial masculino de fútbol de 2022?",
        opciones: ["Francia", "Croacia", "Brasil", "Argentina"],
        correcta: 3
    },
    {
        tipo: "Deportes",
        pregunta: "¿Qué selección ganó el primer Mundial masculino de fútbol, celebrado en 1930?",
        opciones: ["Uruguay", "Argentina", "Italia", "Brasil"],
        correcta: 0
    },
    {
        tipo: "Deportes",
        pregunta: "¿Con cuántos jugadores por equipo se disputa en pista un partido de baloncesto convencional?",
        opciones: ["4", "6", "5", "7"],
        correcta: 2
    },
    {
        tipo: "Deportes",
        pregunta: "¿Cuánto vale un tiro libre encestado en baloncesto convencional?",
        opciones: ["1 punto", "2 puntos", "3 puntos", "4 puntos"],
        correcta: 0
    },
    {
        tipo: "Deportes",
        pregunta: "¿Cuánto vale una canasta lanzada desde fuera de la línea de triple en baloncesto convencional?",
        opciones: ["1 punto", "2 puntos", "3 puntos", "4 puntos"],
        correcta: 2
    },
    {
        tipo: "Deportes",
        pregunta: "¿Sobre qué superficie se disputa el torneo de Wimbledon?",
        opciones: ["Tierra batida", "Pista dura", "Moqueta", "Hierba"],
        correcta: 3
    },
    {
        tipo: "Deportes",
        pregunta: "¿Sobre qué superficie se disputa el torneo de Roland Garros?",
        opciones: ["Hierba", "Tierra batida", "Pista dura", "Moqueta"],
        correcta: 1
    },
    {
        tipo: "Deportes",
        pregunta: "¿Cuántos torneos forman el Grand Slam de tenis?",
        opciones: ["2", "3", "4", "5"],
        correcta: 2
    },
    {
        tipo: "Deportes",
        pregunta: "¿Cuál es la distancia oficial de una maratón?",
        opciones: ["21,0975 km", "40 km", "50 km", "42,195 km"],
        correcta: 3
    },
    {
        tipo: "Deportes",
        pregunta: "¿Cuántas pruebas componen un decatlón de atletismo?",
        opciones: ["10", "5", "7", "12"],
        correcta: 0
    },
    {
        tipo: "Deportes",
        pregunta: "¿Cuánto mide una vuelta por la calle interior de una pista estándar de atletismo al aire libre?",
        opciones: ["200 metros", "400 metros", "600 metros", "800 metros"],
        correcta: 1
    },
    {
        tipo: "Deportes",
        pregunta: "¿Qué ciudad acogió los primeros Juegos Olímpicos de la era moderna, en 1896?",
        opciones: ["París", "Londres", "Roma", "Atenas"],
        correcta: 3
    },
    {
        tipo: "Deportes",
        pregunta: "¿Qué ciudad fue la sede de los Juegos Olímpicos de verano de 2016?",
        opciones: ["Río de Janeiro", "Tokio", "Pekín", "Londres"],
        correcta: 0
    },
    {
        tipo: "Deportes",
        pregunta: "¿Qué ciudad fue la sede de los Juegos Olímpicos de verano de 2004?",
        opciones: ["Sídney", "Atenas", "Atlanta", "Barcelona"],
        correcta: 1
    },

    // VIDEOJOCS — 15 preguntes
    {
        tipo: "Videojuegos",
        pregunta: "¿Cómo se llama el hermano de Mario?",
        opciones: ["Wario", "Luigi", "Toad", "Bowser"],
        correcta: 1
    },
    {
        tipo: "Videojuegos",
        pregunta: "¿Cuál es la profesión tradicional de Mario?",
        opciones: ["Médico", "Carpintero", "Cocinero", "Fontanero"],
        correcta: 3
    },
    {
        tipo: "Videojuegos",
        pregunta: "¿Qué princesa de Super Mario es conocida por su vestido rosa?",
        opciones: ["Peach", "Daisy", "Zelda", "Pauline"],
        correcta: 0
    },
    {
        tipo: "Videojuegos",
        pregunta: "¿Cómo se llama el héroe que controlas en The Legend of Zelda: Breath of the Wild?",
        opciones: ["Zelda", "Ganondorf", "Link", "Impa"],
        correcta: 2
    },
    {
        tipo: "Videojuegos",
        pregunta: "¿Cómo se llama el reino al que pertenece la princesa Zelda?",
        opciones: ["Hyrule", "Kanto", "Sinnoh", "Reino Champiñón"],
        correcta: 0
    },
    {
        tipo: "Videojuegos",
        pregunta: "¿Qué princesa da nombre a la saga The Legend of Zelda?",
        opciones: ["Peach", "Midna", "Zelda", "Daisy"],
        correcta: 2
    },
    {
        tipo: "Videojuegos",
        pregunta: "¿De qué tipo es Pikachu en los videojuegos principales de Pokémon?",
        opciones: ["Agua", "Planta", "Fuego", "Eléctrico"],
        correcta: 3
    },
    {
        tipo: "Videojuegos",
        pregunta: "¿De qué tipo es Charmander antes de evolucionar?",
        opciones: ["Dragón", "Fuego", "Roca", "Volador"],
        correcta: 1
    },
    {
        tipo: "Videojuegos",
        pregunta: "¿De qué tipo es Squirtle en los videojuegos principales de Pokémon?",
        opciones: ["Hielo", "Tierra", "Agua", "Acero"],
        correcta: 2
    },
    {
        tipo: "Videojuegos",
        pregunta: "¿Qué criatura verde de Minecraft es conocida por acercarse al jugador y explotar?",
        opciones: ["Enderman", "Esqueleto", "Aldeano", "Creeper"],
        correcta: 3
    },
    {
        tipo: "Videojuegos",
        pregunta: "¿Qué jefe de Minecraft vive en la dimensión del End y vuela alrededor de sus pilares?",
        opciones: ["Enderdragón", "Wither", "Guardián anciano", "Warden"],
        correcta: 0
    },
    {
        tipo: "Videojuegos",
        pregunta: "¿A qué dimensión conduce un portal de obsidiana encendido desde el Overworld en Minecraft?",
        opciones: ["End", "Nether", "Mundo de los sueños", "Isla de los champiñones"],
        correcta: 1
    },
    {
        tipo: "Videojuegos",
        pregunta: "¿Qué animal es Sonic?",
        opciones: ["Zorro", "Gato", "Conejo", "Erizo"],
        correcta: 3
    },
    {
        tipo: "Videojuegos",
        pregunta: "¿Cómo se llama el zorro de dos colas que acompaña a Sonic?",
        opciones: ["Tails", "Knuckles", "Shadow", "Silver"],
        correcta: 0
    },
    {
        tipo: "Videojuegos",
        pregunta: "¿Qué científico es uno de los principales enemigos de Sonic?",
        opciones: ["Profesor Oak", "Dr. Eggman", "Dr. Wily", "Dr. Neo Cortex"],
        correcta: 1
    }
];

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