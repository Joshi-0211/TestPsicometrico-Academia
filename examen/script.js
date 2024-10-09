//seleccionando todos los elementos requeridos
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

let que_count = 0;
let que_numb = 1;
let userScore = 0;

// Definir los arrays de intereses y aptitudes
const intereses = {
    'C': [98, 12, 64, 53, 85],
    'H': [9, 34, 25, 95, 67],
    'A': [21, 45, 57, 28, 16],
    'S': [33, 69, 80, 87, 22],
    'I': [75, 71, 79, 93, 27],
    'D': [84, 61, 61, 57, 52],
    'E': [77, 48, 88, 90, 48]
};

const aptitudes = {
    'C': [1, 78, 91, 71, 81],
    'H': [67, 56, 24, 36, 86],
    'A': [13, 65, 58, 45, 56],
    'S': [94, 23, 29, 18, 32],
    'I': [15, 83, 53, 79, 92],
    'D': [66, 66, 71, 43, 96],
    'E': [7, 27, 22, 55, 64]
};

// Aquí guardaremos el número de las preguntas afirmativas
let respuestasAfirmativas = [];

// si se hace clic en el botón Iniciar prueba
start_btn.onclick = () => {
    info_box.classList.add("activeInfo"); //mostrar cuadro de información
};

// si se hace clic en el botón Salir del cuestionario
exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); //ocultar cuadro de información
};

// si se hace clic en el botón continuar prueba
continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); //ocultar cuadro de información
    quiz_box.classList.add("activeQuiz"); //mostrar cuadro de cuestionario
    showQuetions(0); //llamar a la función para mostrar preguntas
    queCounter(1); //pasar el parámetro 1 a queCounter
};

// si se hace clic en el botón Siguiente
next_btn.onclick = () => {
    if (que_count < questions.length - 1) {
        que_count++; //incrementar el valor de que_count
        que_numb++; //incrementar el valor de que_numb
        showQuetions(que_count); //mostrar la siguiente pregunta
        queCounter(que_numb); //pasar el valor a queCounter
        next_btn.classList.remove("show"); //ocultar el botón de siguiente
    } else {
        showResult(); //mostrar el resultado si es la última pregunta
    }
};

// mostrar preguntas y opciones
function showQuetions(index) {
    const que_text = document.querySelector(".que_text");

    //crear etiquetas para preguntas y opciones
    let que_tag = '<span>' + questions[index].numb + ". " + questions[index].question + '</span>';
    let option_tag = '<div class="option" onclick="optionSelected(this, ' + questions[index].numb + ', true)"><span>Sí</span></div>'
        + '<div class="option" onclick="optionSelected(this, ' + questions[index].numb + ', false)"><span>No</span></div>';
    que_text.innerHTML = que_tag; //añadir la pregunta
    option_list.innerHTML = option_tag; //añadir las opciones
}

// al seleccionar una opción
function optionSelected(answer, preguntaNumb, respuestaAfirmativa) {
    if (respuestaAfirmativa) {
        respuestasAfirmativas.push(preguntaNumb); // guardar el número de la pregunta afirmativa
    }

    // pasar a la siguiente pregunta o mostrar el resultado
    if (que_count < questions.length - 1) {
        que_count++; //incrementar el contador de preguntas
        que_numb++; //incrementar el número de la pregunta
        showQuetions(que_count); //mostrar la siguiente pregunta
        queCounter(que_numb); //actualizar contador de preguntas
    } else {
        showResult(); //mostrar resultado si es la última pregunta
    }
}

// mostrar resultados
function showResult() {
    info_box.classList.remove("activeInfo"); //ocultar cuadro de información
    quiz_box.classList.remove("activeQuiz"); //ocultar cuadro de cuestionario
    result_box.classList.add("activeResult"); //mostrar cuadro de resultados

    // Sumar puntajes por categoría en intereses y aptitudes
    let totalIntereses = sumarPuntajes(respuestasAfirmativas, intereses);
    let totalAptitudes = sumarPuntajes(respuestasAfirmativas, aptitudes);

    // Encontrar los dos mayores puntajes en cada categoría
    let topIntereses = encontrarDosMayores(totalIntereses);
    let topAptitudes = encontrarDosMayores(totalAptitudes);

    // Mostrar resultados
    const scoreText = result_box.querySelector(".score_text");
    let scoreTag = `
        <span>Obtuviste los siguientes puntajes:</span>
        <p>Intereses: ${JSON.stringify(topIntereses)}</p>
        <p>Aptitudes: ${JSON.stringify(topAptitudes)}</p>
    `;
    scoreText.innerHTML = scoreTag; //mostrar el puntaje
}

// Función para sumar puntajes por categoría
function sumarPuntajes(respuestas, categorias) {
    let sumaPorCategoria = {
        'C': 0,
        'H': 0,
        'A': 0,
        'S': 0,
        'I': 0,
        'D': 0,
        'E': 0
    };

    respuestas.forEach(num => {
        for (let categoria in categorias) {
            if (categorias[categoria].includes(num)) {
                sumaPorCategoria[categoria] += num; // sumamos el valor de la pregunta a la categoría
            }
        }
    });

    return sumaPorCategoria;
}

// Función para encontrar los dos mayores puntajes en las categorías
function encontrarDosMayores(puntajes) {
    let sorted = Object.entries(puntajes).sort(([, a], [, b]) => b - a);
    return sorted.slice(0, 2); // tomar los dos primeros mayores puntajes
}

// actualizar contador de preguntas
function queCounter(index) {
    let totalQueCounTag = '<span><p>' + index + '</p> de <p>' + questions.length + '</p> Preguntas</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag; //actualizar el contador de preguntas
}
