let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

// Función para alternar el estado de favorito
function toggleFavorito(id, nombre, imagen, precio) {
    const esFavorito = favoritos.some(cripto => cripto.id === id);

    if (esFavorito) {
        // Eliminar del array de favoritos
        favoritos = favoritos.filter(c => c.id !== id);
        document.getElementById(`corazon-${id}`).textContent = '🤍';
    } else {
        // Agregar a favoritos
        favoritos.push({
            id,
            nombre,
            imagen,
            precio // Asegúrate de guardar el precio correctamente
        });
        document.getElementById(`corazon-${id}`).textContent = '❤️';
    }

    // Guardar favoritos en localStorage
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
}

// Función para actualizar el icono del favorito cuando se carga el detalle
function actualizarIconoFavorito(id) {
    const corazonIcono = document.getElementById(`corazon-${id}`);
    if (!corazonIcono) return;

    // Si la criptomoneda está en favoritos, mostrar el icono de favorito
    if (favoritos.some(cripto => cripto.id === id)) {
        corazonIcono.textContent = '❤️';
    } else {
        corazonIcono.textContent = '🤍';
    }
}

function mostrarDetalle(id) {
    // Obtener el detalle de la criptomoneda usando la API de CoinGecko
    fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
        .then(res => res.json())
        .then(data => {
            // Crear el HTML para mostrar el detalle
            const detalle = `
                <section class="c-detalle">
                    <h2>${data.name}</h2>
                    <img src="${data.image.large}" alt="${data.name}" height="120" width="auto">
                    <p>Precio actual: $${data.market_data.current_price.usd}</p>
                    <p>Capitalización de mercado: $${data.market_data.market_cap.usd}</p>
                    <p>Volumen total: $${data.market_data.total_volume.usd}</p>
                    <p>Ranking: ${data.market_cap_rank}</p>
                    <button id="favorito-btn-${id}" onclick="toggleFavorito('${id}', '${data.name}', '${data.image.large}', ${data.market_data.current_price.usd})">
                        <span id="corazon-${id}" class="corazon">${favoritos.some(cripto => cripto.id === id) ? '❤️' : '🤍'}</span> Favorito
                    </button>
                </section>
            `;

            // Mostrar el detalle de la criptomoneda en el DOM
            const app = document.getElementById("app");
            app.innerHTML = detalle;

            // Actualizar el icono de favorito
            actualizarIconoFavorito(id);
        })
        .catch(error => {
            console.error("Error al obtener los detalles de la criptomoneda:", error);
            document.getElementById("app").innerHTML = `<p>Error al cargar los detalles de la criptomoneda.</p>`;
        });
}

// Función para volver al inicio
function volverAlInicio() {
    location.reload(); // Recargar la página para volver al estado inicial
}