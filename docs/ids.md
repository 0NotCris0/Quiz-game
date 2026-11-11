# Quiz: IDs y clases del HTML

Nov 11, 2026

Este documento es el acuerdo entre Albert (HTML), Adria (CSS) y Joan (JavaScript): nadie cambia un nombre sin avisar a los demás.

## IDs por pantalla

Hay tres pantallas y solo una se muestra a la vez. Cada una es un contenedor con su ID y la clase `pantalla`.

| Pantalla | ID | Elemento | Quién lo usa |
| --- | --- | --- | --- |
| Inicio | `pantalla-inicio` | Contenedor de la pantalla | Adria (estilos), Joan (mostrar y ocultar) |
| Inicio | `nombre-jugador` | Campo de texto con el nombre | Joan |
| Inicio | `tipo-quiz` | Selector con los tipos de quiz | Joan |
| Inicio | `btn-empezar` | Botón Empezar | Joan |
| Juego | `pantalla-juego` | Contenedor de la pantalla | Adria, Joan |
| Juego | `progreso` | Texto tipo "Pregunta 1 de 5" | Joan |
| Juego | `puntuacion` | Puntos actuales | Joan |
| Juego | `temporizador` | Segundos que quedan | Joan |
| Juego | `pregunta` | Texto de la pregunta | Joan |
| Juego | `opcion-0`, `opcion-1`, `opcion-2`, `opcion-3` | Los 4 botones de respuesta | Adria, Joan |
| Juego | `btn-siguiente` | Botón Siguiente | Joan |
| Resultados | `pantalla-resultados` | Contenedor de la pantalla | Adria, Joan |
| Resultados | `resultado-nombre` | Nombre del jugador | Joan |
| Resultados | `resultado-puntuacion` | Puntuación final | Joan |
| Resultados | `resultado-aciertos` | Número de aciertos | Joan |
| Resultados | `resultado-fallos` | Número de fallos | Joan |
| Resultados | `btn-reiniciar` | Botón Volver a jugar | Joan |

## Clases CSS compartidas

Adria las define en `style.css` y Joan las añade o quita desde JavaScript.

| Clase | Para qué sirve | Quién la define | Quién la aplica |
| --- | --- | --- | --- |
| `pantalla` | Estilo común de las tres pantallas | Adria | Albert (en el HTML) |
| `oculto` | Oculta un elemento (`display: none`) | Adria | Joan |
| `opcion` | Estilo base de los 4 botones de respuesta | Adria | Albert (en el HTML) |
| `correcta` | Marca la respuesta acertada en verde | Adria | Joan |
| `incorrecta` | Marca la respuesta fallada en rojo | Adria | Joan |

Al cargar la página, Albert deja visible `pantalla-inicio` y pone `oculto` en `pantalla-juego` y `pantalla-resultados`.

## Formato de las preguntas

Christian entrega las preguntas como un array de objetos y Joan lo pega en `script.js`. El campo `correcta` es la posición de la opción acertada, empezando en 0.

```js
const preguntas = [
  {
    tipo: "Tipo 1",
    pregunta: "Texto de la pregunta",
    opciones: ["Opción A", "Opción B", "Opción C", "Opción D"],
    correcta: 2
  }
];
```

El valor de `tipo` debe coincidir con las opciones del selector `tipo-quiz`.
