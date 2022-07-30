const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./db/config');
require('dotenv').config();

// Crear el servidor/aplicacion de express
const app = express();

// Base de datos
dbConnection();

// Directorio Publico
app.use( express.static('public') );

// CORS
app.use( cors() );

// Lectura y parseo
app.use( express.json() );

// Rutas
app.use( '/api/auth', require('./routes/auth') );

app.listen( process.env.PORT, ( req, res ) => {
    console.log(`Servidor corriendo en el puerto ${ process.env.PORT }`)
})