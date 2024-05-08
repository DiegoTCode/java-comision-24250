/**
 * autor/a:
 * version:
 * fecha:
 * El siguiente script modelo sirve a index.html y genera el molde principal
 * luego sera adaptado a los personajes particulares en el archivo instancias.js
 * En este archivo estaremos dando las caracteristicas genericas comunes a
 * todos los objetos que crearemos en el futuro.
 */

// Definimos un objeto mediante una funcion constructora.

function Simpson(nombre, edad, peso, esClavo, fraseFavorita){
    // Atributos de clase. inicializacion de variables del abjeto

    this.nombre = nombre;
    this.edad = edad;
    this.peso = peso;
    this.esClavo = esClavo;
    this.fraseFavorita = fraseFavorita;


    // Metodo para obtener la foto (funciones dentro de la variable, como lo visto en flecha)
    // this. indica que el metodo será propiedad del objeto nuevo, que se creará en el otro archivo
    // Estos metodos se llaman anonimos.

    this.obtenerFoto = function(){
        document.write(`<div class= "container">`);
        document.write(`<img src="./assets/${this.nombre.toLowerCase()}.png" alt="${this.nombre}" > `);
    }

    // Metodo para obtener el nombre
    this.obtenerNombre = function(){
        document.write(`<p>Nombre: ${this.nombre}</p>`);
    }

    // metodo para obtener edad
    this.obtenerEdad = function(){
        document.write(`<p>Edad: ${this.edad} años</p>`);
    }

    //tarea para la casa consultar peso y es calvo
    this.obtenerPeso = function(){
        document.write(`<p>Su peso es: ${this.peso}</p>`);
    }
    
    //Consultamos calvicie.
    this.obtenerEsCalvo = function(){
        
        if (this.esClavo === true) {
            document.write(`<p>Es Calvo?: si</p>`);
        } else {
            document.write(`<p>Es Calvo?: no</p>`);
        }
    }

    //metodo para obtenes frase favorita
    this.obtenerFraseFavorita = function(){
        document.write(`<p>Frase favorita de ${this.nombre}: ${this.fraseFavorita}</p>`);
        document.write(`</div>`);
    }
}