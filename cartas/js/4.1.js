var grupoTarjetas1 = ["π¦", "π¦", "π", "π½", "πΎ", "π€", "πΉ", "πΊ"];

var grupoTarjetas2 = ["π»", "π§ ", "π", "π§", "βοΈ", "π", "π₯", "π₯¬"];

var grupoTarjetas3 = ["π€‘", "π©", "π", "π", "β οΈ", "πΎ", "π½", "πΊ"];

// Unimos array concatenando
var totalTarjetas = grupoTarjetas1.concat(grupoTarjetas2, grupoTarjetas3);

console.log(totalTarjetas);

// FunciΓ³n para que nos cuΓ‘ntos elementos tiene el array
console.log(totalTarjetas.length);

// AΓ±adimos un nuevo elemento al final del array
var nuevoTotalTarjetas = totalTarjetas.push("Test");

console.log(totalTarjetas);

// Array anidado
var arrayAnidado = [
    ["π¦", "π¦", "π", "π½", "πΎ", "π€", "πΉ", "πΊ"],
    ["π»", "π§ ", "π", "π§", "βοΈ", "π", "π₯", "π₯¬"],
    ["π€‘", "π©", "π", "π", "β οΈ", "πΎ", "π½", "πΊ"]
];

console.log(arrayAnidado[1][5]);