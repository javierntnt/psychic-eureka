function mostrarusuario() {
    const app = document.getElementById("app");

    // Establecer el fondo representativo del tema de la API
    document.body.style.margin = "0"; // Eliminar márgenes del body
    document.body.style.height = "100vh"; // Asegurar que el body ocupe toda la pantalla
    document.body.style.display = "flex"; // Usar flexbox para centrar el contenido
    document.body.style.flexDirection = "column"; // Alinear elementos en columna
    document.body.style.justifyContent = "center"; // Centrar verticalmente
    document.body.style.alignItems = "center"; // Centrar horizontalmente
    document.body.style.backgroundImage = "url('./Fondo.png')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";

    // Crear el contenido
    app.innerHTML = `
        <h1 style="text-align: center; margin-bottom: 20px;">api.coingecko</h1> <!-- Título centrado -->
        
        <p style="text-align: center;">La API de Coingecko proporciona acceso a datos en tiempo real sobre criptomonedas, incluyendo precios, volumen de comercio, pares de comercio, metadatos y datos históricos. La API está integrada con más de 1,000 exchanges de criptomonedas y ofrece más de 70 puntos de conexión.</p> <!-- Descripción centrada -->

        <img src="./LogoApi.png" alt="Imagen temática de coingecko" style="width: 200px; height: auto; display: block; margin: 20px auto;"> <!-- Logo centrado -->

        <p style="text-align: center; margin-top: 20px;">Usuario de GitHub: Javierntnt. <br> Versión de la app: V.1.0.0</p> <!-- Usuario y versión centrados -->

        <h1 style="text-align: center;">Javier Alejandro Dueñas Torres</h1> <!-- Nombre centrado -->
    `;
}