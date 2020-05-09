//Importa express
const express = require('express');
//Importa variables de entorno
require('dotenv').config({path: 'variables.env'});
//Importa el Router
const routes = require('./routes');
//Importa path
const path = require('path');

//Crea el servidor
const app = express();

//Habilita routing
app.use('/', routes());

//Asigna host
const host = process.env.HOST || '0.0.0.0';
//Asigna puerto
const port = process.env.PORT || 3100;

//Arranca servidor
app.listen(port, host, () => {
    console.log(`Servidor iniciado en ${host} : ${port}`);
});