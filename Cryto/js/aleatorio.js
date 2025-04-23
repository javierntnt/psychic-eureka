function mostrarAleatorios() {
    const app = document.getElementById("app");
    app.innerHTML = "Aleatorios";

    // Obtener los números de criptomonedas almacenados en el localStorage o crear un array vacío
    var misNumeros = JSON.parse(localStorage.getItem("misNumeros")) || [];

    // Obtener las criptomonedas desde la API de CoinGecko
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then(res => res.json())
        .then(data => {
            const totalCriptos = data.length;
            let criptosAleatorias = '<section class="c-aleatorio c-lista">';

            // Mostrar 4 criptomonedas aleatorias
            for (let i = 0; i < 4; i++) {
                let num;
                let repetido;

                // Generar un número aleatorio único
                do {
                    num = Math.floor(Math.random() * totalCriptos);
                    repetido = misNumeros.includes(num);
                } while (repetido);

                // Guardar el número para no repetirlo
                misNumeros.push(num);
                localStorage.setItem("misNumeros", JSON.stringify(misNumeros));

                // Obtener el nombre y la imagen de la criptomoneda usando el índice
                const cripto = data[num];

                criptosAleatorias += `
                <div class="c-lista-cripto c-un_aleatorio">
                    <p>${num + 1}</p>
                    <img src="${cripto.image}" alt="${cripto.name}" width="60" height="60">
                    <p>${cripto.name}</p>
                    <p>Precio: $${cripto.current_price}</p>
                </div>`;
            }

            criptosAleatorias += "</section>";
            app.innerHTML = criptosAleatorias;
        })
        .catch(error => {
            console.error("Error al obtener las criptomonedas:", error);
            app.innerHTML = "Hubo un error al cargar las criptomonedas aleatorias.";
        });
}