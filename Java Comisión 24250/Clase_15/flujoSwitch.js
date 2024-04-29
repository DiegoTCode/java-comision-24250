/**
 * Autor/a
 * version
 * fecha
 * El siguiente script genera control de flujos mediante switch
 */

// 1 - Declaracion de las variables.

let opc;

// Inicializacion de la variable de control.

let repite = false; // esta es una variable de bandera, enciende o apaga el bucle.

let hasta = 1;

do {
    // 2 - inicializacion de la variable por instruccion de entrada. prompt

    opc = prompt("Bienvenido/a\nIngrese 1 si desea un saludo\nIngrese 2 si desea una despedida");

// prompt carga SIEMPRE valores alfanumericos.

// 3 - Proceso de datos de entrada, mediante de estructura de switch.

switch (opc) {
    case "1":
        document.write("<h1> Hola, que tengas una buena jornada.</h1>");
        //actualizacion de variable de control.
        repite = false;
        break;// estructura de salto. sentencia obligatoria dentro del switch

    case "2":
        document.write("<h1> Adios!, que tengas una buena jornada.</h1>");
        //actualizacion de variable de control.
        repite = false;
        break;

    default:
        alert("Introduzca una opción válida");
        // Actualizacion de la variable de control.
        repite = true; // encendemos el motor de bucle.
        hasta++; // hasta = hasta+1;
        break;
}
    
} while (repite && hasta <= 3);

if (hasta>3) {
    alert("no tiene mas intentos.")
}


