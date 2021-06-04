// Loops

var grupoTarjetas = ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺"];

var totalTarjetas = grupoTarjetas.concat(grupoTarjetas);
// Recorrido por array
// grupoTarjetas.forEach(function(elemento, indice) {
//     console.log(elemento, indice);
// });

function reparteTarjetas() {
    var mesa = document.querySelector("#mesa");

    // borramos el div
    mesa.innerHTML = "";

    totalTarjetas.forEach(function(elemento) {
        // Añadiendo elementos dentro del div
        var tarjeta = document.createElement("div");

        tarjeta.innerHTML =
            "<div class='tarjeta descubierta'>" +
                "<div class='tarjeta__contenido'>" +
                elemento +
                "</div>" +
            "</div>";

        mesa.appendChild(tarjeta);
    });
}

reparteTarjetas();