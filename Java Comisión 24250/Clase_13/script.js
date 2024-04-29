/** Organización del código:
 * El código en JS se puede estructurar en las secciones generales:
 * 1. Comentarios de la cabecera.
 * 2. Importación de librerías externas.
 * 3. Importación de módulos locales.
 * 4. Definición de variables globales.
 * 5. Declaración de funciones.
 * 6. Ejecución principal del código, procesos.
 * 7. Resultados. 
 */

// Comentario de linea simple.

// Declaracion de variables e inicializacion de las mismas.
// tipo: let, var, const.

let num1;

// Inicializacion o asignacion de la variable.

num1 = 10;
num1 = 20.5;
num1 = "hola mundo"; // de los mi valores asignados es el ultimo.

/***** INSTRUCCIONES DE SALIDA *****/

// 1- Salida de informacion a traves de consola.

console.log(num1);

// 2- Utilizando alert() utiliza ventanas del navegador.

alert(num1);

// 3- Utilizando document.write() inyecta codigo html en el documento html.

document.write("<h2> Esto es un saludo inyectado desde javascript. </h2>");

// Variable tipo var.

// Declaracion e inicializacion de variable tipo var.
console.log(var1); // undefined. declaro la variable antesd de tiempo.
var var1 = 20;
var var1 = 30; // redeclaracion de la variable. 

// propiedad hoist o hoisting.

// variables de tipo const.

const PI = 3,14; // no permite reasignar la variable.
/* PI = 5; */
