/**
 * autor/a:
 * version:
 * fecha: 
 * El siguiente script sirve a index.html y genera una
 * función que se llama menú
 * El menú consta de un switch que por recursividad 
 * vuelve a llamarse a si misma
 */


// 1- Declaracion de la funcion menu.

function menu(){
  //declaracion de variable local por I-E.
  let opc = prompt("Seleccione una opción:\n1. Sumar\n2. Restar\n3. Salir");

  // Proceso mediante switch
  switch (opc) {
    case "1":
        // inicializacion de variables.
        let dato1 = parseFloat(prompt("Ingrese un numero:"));
        let dato2 = parseFloat(prompt("Ingrese otro numero:"));
        //llamada a la funcion sumar.
        alert(sumar(dato1, dato2));
        //recursividad.
        menu();
      break;
    case "2":
         // inicializacion de variables.
         let dato3 = parseFloat(prompt("Ingrese un numero"));
         let dato4 = parseFloat(prompt("Ingrese otro numero"));
         //llamada a la funcion sumar.
         alert(restar(dato3, dato4));
         //recursividad.
         menu();
      break;
    case "3":
        document.write("<h2>Hasta luego!!!!</h2>");
        exit(0);
      //break;  Exit cumple con la funcion de break.

    default:
        alert("Opcion no valida, intente nuevamente.")
        //recursividad.
        menu();
      break;
  }
}