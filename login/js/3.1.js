// Operadores

var saludo = "Hola, mi nombre es";
var nombre = "Juanito";
var annio = 1983;
var edad = 2021 - annio;

var mensaje = saludo + " " + nombre + " y tengo " + edad + " años";

console.log(mensaje);

// Funciones. Son trozos de código reutilizables
function recogerDatos(evento){
    evento.preventDefault();
    // Leyendo elementos del DOM
    var tuNombre = document.querySelector("#nombre").value;
    var tuFecha = document.querySelector("#fecha").value;
    var edad = 2021 - tuFecha;
    var bienvenida = document.querySelector("#bienvenida");
    var mensajeEdad;
    var miMensaje;

    if (edad > 30) {
        mensajeEdad = "Abuelo!";
    } else if (edad < 30){
        mensajeEdad = "Jovenzuelo!";
    } else {
        mensajeEdad = "no me lo creo!";
    }

    miMensaje  = "<p>Hola " + tuNombre + ", tienes " + edad + " años, " + mensajeEdad + "</p>";

    // console.log("Hola " + tuNombre + ", tienes " + edad + " años");
    // bienvenida.textContent = miMensaje;
    bienvenida.innerHTML = miMensaje;
}

// recogerDatos();

// Event listeners
// El método addEventListener acepta 2 parámetros: tipo de evento y una función

function saludar(){
    console.log("Hola");
}

// document.querySelector("#formulario").addEventListener("click", saludar);

var miForm = document.querySelector("#formulario");

miForm.addEventListener("submit", recogerDatos);

// Función anónima
// document.querySelector("#formulario").addEventListener("click", function(){
//     console.log("Prueba");
// });

// Condicionales y booleanos