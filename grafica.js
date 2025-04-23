function mostrargrafica() {
    const app = document.getElementById("app");
    app.innerHTML = '<canvas id="cryptoChart" width="400" height="200"></canvas>';

    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    if (favoritos.length === 0) {
        app.innerHTML = "<p>No tienes criptomonedas en favoritos para mostrar en la gráfica.</p>";
        return;
    }

    // Extraer nombres y precios de las criptomonedas favoritas
    const nombres = favoritos.map(cripto => cripto.nombre);
    const precios = favoritos.map(cripto => cripto.precio || 0);

    // Crear la gráfica usando Chart.js
    const ctx = document.getElementById('cryptoChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: nombres,
            datasets: [{
                label: 'Precio en USD',
                data: precios,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

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
        window.location.href = "index.html"; // Redirigir al archivo index.html
    });

    app.appendChild(botonVolver); // Agregar el botón al final del contenido
}