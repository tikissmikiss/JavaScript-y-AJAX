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

// const bloqueMostrar = document.getElementById("main-contenido");
const enunciado = document.getElementById("enunciado");
const ejerciciosJS = document.getElementById("ejercicios-js");
const ejerciciosAJAX = document.getElementById("ejercicios-ajax");
const btnInicio = document.getElementById("btnInicio");
const btnJS = document.getElementById('btnJavaScript');
const btnAJAX = document.getElementById('btnAJAX');

toggleMenu(btnInicio, enunciado);
// toggleMenu(btnJS, ejerciciosJS);
// toggleMenu(btnAJAX, ejerciciosAJAX);

/**************************************************************
 * Menu principal
 **************************************************************/
btnInicio.addEventListener("click", function () {
    toggleMenu(btnInicio, enunciado);
});

btnJS.addEventListener("click", function () {
    toggleMenu(btnJS, ejerciciosJS);
});

btnAJAX.addEventListener("click", function () {
    toggleMenu(btnAJAX, ejerciciosAJAX);
});

function toggleMenu(item_menu, contenido_mostrar) {
    for (let i of document.getElementsByClassName("menu-item")) {
        if (i !== item_menu) {
            i.classList.add("inactivo");
            i.classList.remove("activo");
        } else {
            i.classList.add("activo");
            i.classList.remove("inactivo");
        }
    }

    let a = document.querySelectorAll(".seccion");
    for (let i of document.querySelectorAll(".seccion")) {
        if (i !== contenido_mostrar) {
            i.classList.add("no-visible");
        } else {
            i.classList.remove("no-visible");
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
 * Ejercicio 1 - AJAX
 **************************************************************/
const url_input = document.querySelector("#recurso");
url_input.addEventListener("change", function () { // Validacion url
    if (!urlCheck(this.value))
        alert("Introduzca una url valida");
});

document.querySelector("#recurso").setAttribute("value", document.URL.split("?")[0] + "assets/ejemplo.json");


/**************************************************************
 * Ejercicio 2, 3, 4 y 5 - AJAX
 **************************************************************/
const btmMostrarContenidos = document.getElementById("enviar");

btmMostrarContenidos.addEventListener("click", function () {
    let url = document.querySelector("#recurso").value;
    document.querySelector("#contenidos").textContent = "";
    document.querySelector("#cabeceras").innerHTML = "";
    if (!urlCheck(url)) {
        alert("La url no es válida");
        document.querySelector("#contenidos").textContent = "";
    } else {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            // Ejercicio 3
            document.querySelector("#estados").innerHTML = "(" + strFecha() + "):<b>"
                + strEstado(xhr.readyState) + "</b> " + url + "<br>" + document.querySelector("#estados").innerHTML;
        };
        xhr.onload = function () {
            // Ejercicio 2
            if (xhr.readyState == 4 && xhr.status == 200) {
                if (this.getResponseHeader("Content-Type").search("application/json") !== -1) {                
                    console.log("El recurso es un documento JSON");
                    let response_json = JSON.parse(this.responseText);
                    document.querySelector("#contenidos").classList.add("response_json");
                    $(function () {
                        $(".response_json").JSONView(response_json);
                    });
                } else {
                    console.log("El recurso es un documento HTML");
                    document.querySelector("#contenidos").classList.remove("response_json");
                    document.querySelector("#contenidos").textContent = xhr.responseText;
                }
            }
            // Ejercicio 4
            document.querySelector("#cabeceras").innerHTML = this.getAllResponseHeaders();
            // Ejercicio 5
            document.querySelector("#codigo").innerHTML = "(" + strFecha() + "):<b>"
                + xhr.status + " " + xhr.statusText + "</b> " + url + "<br>"
                + document.querySelector("#codigo").innerHTML;
        };
        xhr.open("GET", url, true);
        xhr.send();
    }
});


/* btmMostrarContenidos.addEventListener("click", function () {
    let url = document.querySelector("#recurso").value;
    document.querySelector("#contenidos").textContent = "";
    document.querySelector("#cabeceras").innerHTML = "";
    if (!urlCheck(url)) {
        alert("La url no es válida");
        document.querySelector("#contenidos").textContent = "";
    } else {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            // Ejercicio 4
            if (xhr.readyState == 4 && xhr.status == 200) {
                document.querySelector("#contenidos").textContent = xhr.responseText;
            }
            // Ejercicio 3
            document.querySelector("#estados").innerHTML = "(" + strFecha() + "):<b>"
                + strEstado(xhr.readyState) + "</b> " + url + "<br>" + document.querySelector("#estados").innerHTML;
        };
        xhr.onload = function () {
            // Ejercicio 4
            document.querySelector("#cabeceras").innerHTML = this.getAllResponseHeaders();
            // Ejercicio 5
            document.querySelector("#codigo").innerHTML = "(" + strFecha() + "):<b>"
                + xhr.status + " " + xhr.statusText + "</b> "+url+"<br>"
                + document.querySelector("#codigo").innerHTML;
        };
        xhr.open("GET", url, true);
        xhr.send();
    }
});
 */

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


// https://gorest.co.in/public/v1/users?page=2
// https://regex101.com/r/5A7Fg5/1
function urlCheck(url) {
    var url_regex = new RegExp(/^(https?:\/\/)?([\da-z\.-]+)(:[\d]{1,5}\/?)?([\/\w\.-]*)*(\?.*)?\s*$/i);
    return url.search(url_regex) !== -1;
}

function strEstado(estado) {
    switch (estado) {
        case 0: return "UNINITIALIZED";
        case 1: return "LOADING";
        case 2: return "LOADED";
        case 3: return "INTERACTIVE";
        case 4: return "COMPLETED";
        default: return "UNKNOWN";
    }
}

function strFecha() {
    let d = Date.now();
    let ye = new Intl.DateTimeFormat('es', { year: 'numeric' }).format(d);
    let mo = new Intl.DateTimeFormat('es', { month: 'short' }).format(d);
    let da = new Intl.DateTimeFormat('es', { day: '2-digit' }).format(d);
    let ho = new Intl.DateTimeFormat('es', { hour: '2-digit' }).format(d);
    let mi = new Intl.DateTimeFormat('es', { minute: '2-digit' }).format(d);
    let se = new Intl.DateTimeFormat('es', { second: '2-digit' }).format(d);
    console.log(`${da}-${mo}-${ye} ${ho}:${mi}:${se}`);
    return `${da}-${mo}-${ye} ${ho}:${mi}:${se}`;
}
