/**
 * ▸	JavaScript
 * 1.	Detectar si la cadena de entrada en un palíndromo.
 * 2.	Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
 * 3.	Escribe un programa que pida una frase y escriba las vocales que aparecen.
 * 4.	Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales.
 */

$(document).ready(function () {
    $('#enviar').click(function () {
        alert("Es un palíndromo");
    });
});


class lab {

    constructor() {
        this.initEventsListeners();
    }

    initEventsListeners() {
        $("#enviar").click(() => {
            this.palindromo();
        });
    }

    palindromo() {
        let cadena = prompt("Ingrese una cadena");
        let cadenaInvertida = cadena.split("").reverse().join("");
        if (cadena == cadenaInvertida) {
            alert("Es un palíndromo");
        } else {
            alert("No es un palíndromo");
        }
    }

}