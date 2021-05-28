var grupoTarjetas1 = ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺"];

var grupoTarjetas2 = ["😻", "🧠", "👀", "🧐", "☄️", "🍉", "🥑", "🥬"];

var grupoTarjetas3 = ["🤡", "💩", "🎃", "🙀", "☠️", "👾", "😽", "😺"];

// Unimos array concatenando
var totalTarjetas = grupoTarjetas1.concat(grupoTarjetas2, grupoTarjetas3);

console.log(totalTarjetas);

// Función para que nos cuántos elementos tiene el array
console.log(totalTarjetas.length);

// Añadimos un nuevo elemento al final del array
var nuevoTotalTarjetas = totalTarjetas.push("Test");

console.log(totalTarjetas);

// Array anidado
var arrayAnidado = [
    ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺"],
    ["😻", "🧠", "👀", "🧐", "☄️", "🍉", "🥑", "🥬"],
    ["🤡", "💩", "🎃", "🙀", "☠️", "👾", "😽", "😺"]
];

console.log(arrayAnidado[1][5]);