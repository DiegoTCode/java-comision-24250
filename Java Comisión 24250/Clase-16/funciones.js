/**
 * autor/a:
 * version:
 * fecha: 
 * El siguiente script sirve a index.html y genera funciones 
 * para calculos aritméticos
 */
// 1- Declaracion de funciones.
//1.1 - Funcion declarada no parametrica.

function saludar(){
    alert("hola mundo");
}

//1.2- llamada a ala funcion saludar.
saludar();

//1.3- Funcion declarada y parametrica.

function saludar2(nombre){
    alert("Hola "+nombre);
}

//1.4- llamada a saludar2.
saludar2("codo");


//2- Fucion declarada sumar()
function sumar(num1, num2) {
    // Declaracion de variable local.
    let resultado = num1 + num2;
    //alert(resultado);
    //valor de retorno.
    return resultado;
}

//2.1- llamada a sumar.
console.log(sumar(10, 5)*2);

//3- funcion declarada restar()

function restar(num1, num2) {
    let resultado = num1 - num2;
    
    //valor de retorno
    return resultado;
}

// realizar funcion declarada parametrica y con retorno de multiplicacion y division.

// expresiones flecha.

const sumarFlecha = (num1, num2) =>{return num1 + num2};

// llamada de la flecha.

console.log(sumarFlecha(15, 25));