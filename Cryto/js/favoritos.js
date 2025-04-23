function mostrarFavoritos() {
    const app = document.getElementById("app");
    app.innerHTML = "";

    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    if (favoritos.length === 0) {
        app.innerHTML = "<p>No tienes criptomonedas en favoritos.</p>";
        return;
    }

    const contenedor = document.createElement("section");
    contenedor.classList.add("c-lista");

    contenedor.innerHTML = favoritos
        .map(
            (cripto) => `
            <div class="c-lista-cripto">
                <p>${cripto.nombre}</p>
                <img src="${cripto.imagen}" alt="${cripto.nombre}" width="60" height="60">
                <p>Precio: $${cripto.precio}</p> <!-- Mostrar el precio -->
                <button onclick="mostrarDetalle('${cripto.id}')">Ver Detalle</button>
            </div>
        `
        )
        .join("");

    app.appendChild(contenedor);
}