/*
 * Autor
 * version
 * fecha
 * El siguiente script sirve a index1.html y utiliza una accion repetitiva con bucle while
 */

// 1 - Declaracion de las variables.
let dato;

// variable de control.

let registrar;

// 2 -inicializacion de las variables.

registrar = prompt("¿Desea registrar datos? (s/n)");

// 3 - Proceso mediante bucle while.

while (registrar.toLowerCase() === "s") {
    // inicializamos daltos.
    dato = prompt("Ingrese un dato:");
    // instruccion de salida.
    document.write("<p>Usted ingresó: "+dato+"</p>");

    //OBLIGATORIO : actualizar la variable de control.
    registrar = prompt("¿Desea ingresar otro dato?(s/n)");
}