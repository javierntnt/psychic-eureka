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

    // Agregar el botón "Volver al inicio"
    const botonVolver = document.createElement("button");
    botonVolver.textContent = "Volver al inicio";
    botonVolver.style.marginTop = "20px";
    botonVolver.style.padding = "10px 20px";
    botonVolver.style.fontSize = "16px";
    botonVolver.style.cursor = "pointer";
    botonVolver.style.backgroundColor = "#007BFF";
    botonVolver.style.color = "white";
    botonVolver.style.border = "none";
    botonVolver.style.borderRadius = "5px";
    botonVolver.addEventListener("click", () => {
        window.location.href = "../index.html"; // Redirigir al archivo index.html
    });

    app.appendChild(botonVolver); // Agregar el botón al final del contenido
}