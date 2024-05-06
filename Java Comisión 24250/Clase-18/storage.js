/**DESAFIO 5: WEBSTORAGE 
 * 1- Crea una función que guarde los datos en WebStorage
 * 2- Crea una función que cargue los datos de WebStorage
 */

// ¿El navegador soporta esta función?
if (typeof(Storage) !== "undefined") {
    // setItem guarda datos en el dispositivo
    localStorage.setItem("apellido", "Perez")
    localStorage.setItem("nombre", "Juan")
    console.log("Datos guardados.")
 } else {
    console.log("Web Storage no soportado.")
 }
 
 // ¿El navegador soporta esta función?
if (typeof(Storage) !== "undefined") {
    // getItem recupera datos del dispositivo
    ape = localStorage.getItem("apellido")
    nom = localStorage.getItem("nombre")
    console.log(ape + ", " + nom)
 } else {
    console.log("Web Storage no soportado.")
 }
 