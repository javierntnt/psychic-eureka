async function conexionlista() {
    const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
    const data = await res.json();
    console.log('Criptomonedas:', data); // Mostrar los datos en la consola
    return data; // Retornar los datos de la API
}

async function General() {
    const criptomonedas = await conexionlista(); // Obtener los datos de la API
    mostrarlista(criptomonedas); // Pasar los datos a la función mostrarlista
}