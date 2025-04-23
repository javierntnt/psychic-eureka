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
}