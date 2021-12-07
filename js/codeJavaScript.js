/**
 * ▸  JavaScript
 * 1.	Detectar si la cadena de entrada en un palíndromo.
 * 2.	Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
 * 3.	Escribe un programa que pida una frase y escriba las vocales que aparecen.
 * 4.	Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales.
 * 
 * 
 * ▸  AJAX. A partir de la página web proporcionada, se pide añadir el código necesario para que:
 * 1.	Al cargar la página, el cuadro de texto debe mostrar por defecto la URL de la propia página.
 * 2.	Al pulsar el botón Mostrar Contenidos, se debe descargar mediante peticiones AJAX el contenido 
 *      correspondiente a la URL introducida por el usuario. El contenido de la respuesta recibida del 
 *      servidor en se debe mostrar en la zona de Contenidos del archivo.
 * 3.	En la zona Estados de la petición se debe mostrar en todo momento el estado en el que se encuentra 
 *      la petición (no iniciada, cargando, completada, etc.).
 * 4.	Mostrar el contenido de todas las cabeceras de la respuesta del servidor en la zona Cabeceras HTTP 
 *      de la respuesta del servidor.
 * 5.	Mostrar el código y texto de la respuesta del servidor en la zona Código de estado.
 */

const bloqueMostrar = document.getElementById("main-contenido");
const enunciado = document.getElementById("enunciado");
const ejerciciosJS = document.getElementById("ejercicios-js");
const ejerciciosAJAX = document.getElementById("ejercicios-ajax");
const btnInicio = document.getElementById("btnInicio");
const btnJS = document.getElementById('btnJavaScript');
const btnAJAX = document.getElementById('btnAJAX');

bloqueMostrar.innerHTML = enunciado.innerHTML;
toggleMenu(btnJS);
bloqueMostrar.innerHTML = ejerciciosJS.innerHTML;
// bloqueMostrar.innerHTML = ejerciciosAJAX.innerHTML;

/**************************************************************
 * Menu principal
 **************************************************************/
btnInicio.addEventListener("click", function () {
    toggleMenu(btnInicio);
    bloqueMostrar.innerHTML = enunciado.innerHTML;
});

btnJS.addEventListener("click", function () {
    toggleMenu(btnJS);
    bloqueMostrar.innerHTML = ejerciciosJS.innerHTML;
});

btnAJAX.addEventListener("click", function () {
    toggleMenu(btnAJAX);
    bloqueMostrar.innerHTML = ejerciciosAJAX.innerHTML;
});

function toggleMenu(item) {
    for (let i of document.getElementsByClassName("menu-item")) {
        if (i !== item) {
            i.classList.add("inactivo");
            i.classList.remove("activo");
        } else {
            i.classList.add("activo");
            i.classList.remove("inactivo");
        }
    }
}


/**************************************************************
 * Ejercicio 1 - JavaScript
 **************************************************************/
const txtPalindromo = document.getElementById("txtPalindromo");
const output_Ej1JS = document.getElementById("output-palindromo");
addListeners(txtPalindromo, ejercicio1)

function ejercicio1() {
    let cadena = txtPalindromo.value;
    if (cadena.length < 2) {
        output_Ej1JS.innerHTML = "El texto debe de tene más de 1 caracteres";
    } else if (isPalíndromo(cadena)) {
        output_Ej1JS.innerHTML = "Es palíndromo";
    } else {
        output_Ej1JS.innerHTML = "No es palíndromo";
    }
}

function isPalíndromo(word) {
    word = unifyString(word);
    let invertWord = word.split("").reverse().join("");
    if (word === invertWord) {
        return true;
    }
}


/**************************************************************
 * Ejercicio 2 - JavaScript
 **************************************************************/
const num1 = document.getElementById("txtNumero1");
const num2 = document.getElementById("txtNumero2");
const output_Ej2JS = document.getElementById("output-numero-mayor");
const simbolo = document.getElementById("simbolo-mayor-menor");
addListeners(num1, ejercicio2)
addListeners(num2, ejercicio2)

function ejercicio2() {
    if (num1.value.search(/^\d+$/) === -1 || num2.value.search(/^\d+$/) === -1) {
        output_Ej2JS.innerHTML = "Los campos deben de contener solo números";
        simbolo.innerHTML = "-?-";
    } else if (num1.value.length < 1 || num2.value.length < 1) {
        output_Ej2JS.innerHTML = "Debe haber un numero en cada campo";
        simbolo.innerHTML = "-?-";
    } else if (Number(num1.value) > Number(num2.value)) {
        output_Ej2JS.innerHTML = "El número mayor es: " + num1.value;
        simbolo.innerHTML = ">";
    } else if (Number(num1.value) < Number(num2.value)) {
        output_Ej2JS.innerHTML = "El número mayor es: " + num2.value;
        simbolo.innerHTML = "<";
    } else {
        output_Ej2JS.innerHTML = "Los números son iguales";
        simbolo.innerHTML = "=";
    }
}


/**************************************************************
 * Ejercicio 3 - JavaScript
 **************************************************************/
const txtMuestraVocales = document.getElementById("txtMuestraVocales");
const output_Ej3JS = document.getElementById("output-muestra-vocales");
addListeners(txtMuestraVocales, ejercicio3)

function ejercicio3() {
    let cadena = txtMuestraVocales.value;
    output_Ej3JS.innerHTML = "";
    let result = countVowels(cadena);
    for (let i = 0; i < result.length; i++) 
        if (result[i].count > 0)
            output_Ej3JS.innerHTML += result[i].letter;
    if (output_Ej3JS.innerHTML.length > 0) 
        output_Ej3JS.innerHTML = "Aparecen las vocales: " + output_Ej3JS.innerHTML;
    else 
        output_Ej3JS.innerHTML = "No hay vocales";
}


/**************************************************************
 * Ejercicio 4 - JavaScript
 **************************************************************/
const txtCuentaVocales = document.getElementById("txtCuentaVocales");
const output_Ej4JS = document.getElementById("output-cuenta-vocales");
addListeners(txtCuentaVocales, ejercicio4);

function ejercicio4() {
    let cadena = txtCuentaVocales.value;
    output_Ej4JS.innerHTML = "";
    let result = countVowels(cadena);
    for (let i = 0; i < result.length; i++) {
        output_Ej4JS.innerHTML += "<b>" + result[i].letter + "</b> = " + result[i].count + "; ";
    }
}


/**************************************************************
 * Funciones auxiliares
 **************************************************************/
function addListeners(inText, func) {
    inText.addEventListener("keyup", func);
    inText.addEventListener("change", func);
    inText.addEventListener("paste", func);
}

function unifyString(str) {
    return str.toLowerCase().replace(/\s+/g, '')
        .replace(/[áàäâ]/g, 'a')
        .replace(/[éëèê]/g, 'e')
        .replace(/[íïìî]/g, 'i')
        .replace(/[óöòô]/g, 'o')
        .replace(/[úüùû]/g, 'u');
}

function countVowels(word) {
    word = unifyString(word);
    let vowels = [
        { letter: "a", count: 0 },
        { letter: "e", count: 0 },
        { letter: "i", count: 0 },
        { letter: "o", count: 0 },
        { letter: "u", count: 0 }
    ];
    for (let vowel of vowels) {
        vowel.count = word.split(vowel.letter).length - 1;
    }
    return vowels;
}
