/**
 * Autor/a
 * version
 * fercha
 * El siguiente script genera control de flujos para un login
 */

// 1- Declaracion de las variables.

let usr;
let clave;

// 2- Inicializacion de las variables por instruccion de entrada.
//prompt()

usr = prompt("Por favor ingrese usuario o email validos");
clave = prompt("Por favor ingrese su clave valida");

// 3- Proceso de validacion mediante la estructura if-else.

if ((usr === "codo" || user === "codo@codo.com") && clave === "123") {  // Y = &&   O = ||  NOT
    document.write("<h2>Ingreso exitoso.</h2>");
} else {
    alert("Usuario o clave incorrecto");
}


