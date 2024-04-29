/* Operadores en JS */
 /* Utilizaremos los operadores en JS 
 * desarrollando los siguientes ejemplos:
 * Ejemplo de operaciones aritmeticas
 * Ejemplo de operadores de autoasignación
 * Ejemplo de operadores incrementales
 * Ejemplo de operadores relacionales
 * Ejemplo de operadores lógicos
*/

// Declaracion e inicializacion de las variables.
let a =15;
let b = 3;

// Ejemplos de op aritmetica.

document.write("<h2> Operadores aritmeticos + - * / </h2>");
document.write("<p> El valor de a+b es: "+(a+b)+ "</p>");
document.write("<p> E valor de a/b es: " +(a/b)+ "</p>")

//tarea para la casa practicar * - y **

// Operadores de autoasignacion
//a = a+5;  a+=5
document.write("<h2> Operadores de autoasignacion </h2>");
document.write("<p> a = a + 5: "+(a+=5)+ "</p>");
//a = a*2;  a*=2
document.write("<p> a = a * 2: "+(a*=2)+ "</p>");
//a = a-2;  a-=2
document.write("<p> a= a - 2: "+(a-=2)+ "</p>");
// a = a/2; a/=2
document.write("<p>El valor de a/b es: "+(a= a/2)+"</p>");

// Operador incremental unitario.
// a = a+1; a++ // esto es un pos-incremento.
//++a // esto es un pre-incremento.

document.write("<h2> Operadores incrementales </h2>");
document.write("<p> a = a + 1: a++ "+(a++)+ "</p>"); //20
document.write("<p> a = a + 1: ++a "+(++a)+ "</p>");//21
document.write("<p> El valor de a es: "+(a)+ "</p>");

// tarea para la casa hecar ---> 
// a = a-1; a--  --a


// Variables y operadores booleanos
// verdadero o falso.
// Declaracion de variables booleanas.

let v = true; // true es un palabra reservada.

let f = false; // false es una palabra reservada.

//Operadores relacionales.

console.log(3<10);//true
console.log(123 === "123");//false === compara valor y tipo.
console.log(123 == "123");//true == compara solamente valor.