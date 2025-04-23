// Función para mostrar la lista de criptomonedas
function mostrarlista(criptomonedas) {
    const seccion = document.createElement("section");
    seccion.classList.add("c-lista");

    const buscador = document.createElement("input");
    buscador.classList.add("c-buscador");
    buscador.type = "text";
    buscador.placeholder = "Buscar Criptomonedas...";
    buscador.addEventListener("input", (evento) => buscarCripto(evento, criptomonedas));

    // Generar la lista inicial
    seccion.innerHTML = generarLista(criptomonedas);

    // Agregar elementos al contenedor dinámico
    const contenidoDinamico = document.getElementById("contenido-dinamico");
    contenidoDinamico.innerHTML = ""; // Limpiar contenido previo
    contenidoDinamico.appendChild(buscador);
    contenidoDinamico.appendChild(seccion);
}

function generarLista(criptomonedas) {
    let listaHTML = "";
    for (let i = 0; i < criptomonedas.length; i++) {
        listaHTML += `
        <div class="c-lista-cripto" onclick="mostrarDetalle('${criptomonedas[i].id}')">
            <p>${criptomonedas[i].name}</p>
            <img src="${criptomonedas[i].image}" width="auto" height="60" loading="lazy" alt="${criptomonedas[i].name}">
            <p>Precio: $${criptomonedas[i].current_price}</p>
        </div>`;
    }

    return listaHTML;
}

function buscarCripto(evento, criptomonedas) {
    const texto = evento.target.value.toLowerCase();
    const listaFiltrada = criptomonedas.filter((cripto) => cripto.name.toLowerCase().includes(texto));
    document.querySelector(".c-lista").innerHTML = generarLista(listaFiltrada);
}