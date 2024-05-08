/**
 * autor/a:
 * version:
 * fecha: 
 * El siguiente script sirve a index.html y genera manipulacionde del DOM
 *
* Desarrollaremos los siguientes temas:
 * 1- Métodos tradicionales - modificación de elementos. Métodos modernos - modificación de elementos con querySelector 
 * 2- Métodos tradicionales - modificación de elementos, utilizacion del bucle for
 * 3- Creación de elementos - creamos un boton, creamos un texto, clonamos un texto
 * 4- Modificamos atributos de un elemento - cambiamos contenido, agregamos clase, cambiamos un atributo
 * 5- Eventos addEventListener
 * 
 */

// 1 - declaracion de variables.

let titulo, contenidos;

// modificacion del titulo.

titulo = document.getElementById("titulo1");
console.log(titulo);

// .innerHTML 

let contenido = titulo.innerHTML;
console.log(contenido);

titulo.innerHTML = "Titulo modificado por JS en el DOM"

// .classList.add()

titulo.classList.add("modificado");

// .className() pisa el valor anterior y lo reemplaza por uno nuevo

titulo.className = "modificado2";
