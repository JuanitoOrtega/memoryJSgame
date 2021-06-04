// Eventos en loop

var grupoTarjetas = ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺"];

var totalTarjetas = grupoTarjetas.concat(grupoTarjetas);
// Recorrido por array
// grupoTarjetas.forEach(function(elemento, indice) {
//     console.log(elemento, indice);
// });

function barajarTarjetas() {
    var resultado;

    // resultado = Math.floor(Math.random() * 100) + 1;

    resultado = totalTarjetas.sort(function () {
        return 0.5 - Math.random();
    });

    return resultado;
}

function reparteTarjetas() {
    var mesa = document.querySelector("#mesa");
    var tarjetasBarajadas = barajarTarjetas();
    // borramos el div
    mesa.innerHTML = "";

    tarjetasBarajadas.forEach(function(elemento) {
        // Añadiendo elementos dentro del div
        var tarjeta = document.createElement("div");

        tarjeta.innerHTML =
            "<div class='tarjeta'>" +
                "<div class='tarjeta__contenido'>" +
                elemento +
                "</div>" +
            "</div>";

        mesa.appendChild(tarjeta);
    });
}

function descubrir(){
    this.classList.add("descubierta");
}

reparteTarjetas();

document.querySelectorAll(".tarjeta").forEach(function(elemento) {
    elemento.addEventListener("click", descubrir);
});