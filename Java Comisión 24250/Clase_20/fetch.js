// Ejemplo de codigo sincronico

/*console.log("esto imprime primero");

console.log("esto imprime segundo");


// Ejemplo de codigo asincronico

console.log("esto imprime primero");
setTimeout(function(){console.log("esto se imprime ultimo")},5000);
console.log("esto imprime segundo");
*/


// Fetch
// al no cargar el segundo parametro por defecto hacemos una peticioin GET

fetch("https://rickandmortyapi.com/api/character/1")
// El primer .then recibe la cadena string (json) y la predispone a transformar a objeto
// .then recibe como parametro una funcion con su propio parametro
.then(function(respueta){
    // transformamos el json en objeto
    return respueta.json();
})
.then(function(datos){
    console.log(datos.name, datos.image);
})
.catch(function(error){
    console.error(error);
})

// Declaramos una funcion que renderiza elementos en el DOM


function pedirDatos(){
    fetch("https://rickandmortyapi.com/api/character")

    .then(function(respueta){
        return respueta.json();
    })
    .then(function(personajes){
        // traemos el epacio de renderizado
        const contenedor = document.getElementById("contenedor-tarjetas");

        // utilizamos un bucle for-each
        personajes.results.forEach(function(dato){
            //Creamos el elemento html
            const article = document.createElement('article');
            //Agregamos estilo a article
            article.classList.add("tarjeta");
            //Inyectamos contenido a <article>
            article.innerHTML = `
            <img src="${dato.image}" alt="Imagen del personaje ${dato.name}" class="card_img-size">
            <label>Nombre:</label>
            <p>${dato.name}</p>
            <div>
              <label>Estado:</label>
              <p><i class="fa-solid fa-circle ${dato.status.toLowerCase()}"></i>${dato.status}</p>
              <label>Planeta:</label>
              <p>${dato.location.name}</p>
            </div>
            `
            // adjuntamos el contenido
            contenedor.appendChild(article);
        })  
    })
    .catch(function(error){
        console.log(error);
    })
}

// llamamos a la funcion
pedirDatos();