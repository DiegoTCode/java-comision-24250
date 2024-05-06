/**
 * DESAFIO 1
 * Declaramos un array
 * Exploramos los distintos métodos
 * create(crear), read(leer), upload(actualizar), delete(borrar)
 */

//1 - Declaracion del array

let autos = ["Tito", "F.Fuego"];

// 2 - impresion de array 

console.log("El array autos es: "+autos);

// Metodos de los arrays
// 3 - Insertamos valores en el array .push()

autos.push("Volvo");

console.log("El array autos es: "+autos);

//BMW Mzda Ford

autos.push("BMW", "Mazda", "Ford");

console.log("El array autos es: "+autos);

// 4 - Obtenemos la longitud del array .length

let longitud = autos.length;

console.log("La longitud de autos es: " + longitud);
console.log("La longitud es: "+autos.length);

// 5 - ára inspeccionar o leer un indice particular utilizamos .at()

console.log("El elemento de indice 3 es: "+autos.at(3));
console.log("El valor del ultimo elemento es: "+autos.at(-1));

// 6 - Para saber el indice de un elemento utilizamos .indexOf()

console.log("El indice del utimo elemento es: "+autos.indexOf("Ford"));

// 7 - Borramos elementos del array con splice()

console.log("Eliminamos el indice 2: "+autos.splice(2,3))

// 8 - Ordenamos con .sort()

console.log("Ordenamos con .sort "+autos.sort());

// 9 - agregamos datos al principio  .upshift

autos.unshift("Tesla");
console.log("El array autos es. "+autos);

// 10 - for-in 
for(let i in autos){
    console.log(i+" valor: "+autos[i]);
}

// 11 - for-of
for(let dato of autos){
    console.log(dato);
}

// 12 - Actualizacion

autos[6] = "Volvo";
