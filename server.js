// Importa el módulo de Express
const express = require('express');

// Crea una instancia de la aplicación Express
const app = express();

// Define un puerto en el cual el servidor va a escuchar
const port = 3000;

// Define una ruta básica para la raíz del sitio
app.get('/', (req, res) => {
    res.send('API de autenticación');
});

// Inicia el servidor
app.listen(port, () => {
    console.log(Servidor escuchando en http://localhost:${port});
});
