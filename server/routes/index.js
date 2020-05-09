//Importa express
const express = require('express');
//Importa el Router de express
const routes = express.Router();
//Importa path
const path = require('path');

module.exports = function(){
    
    routes.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../views/inicio/index.html'));
    });

    routes.get('/nosotros', (req, res) => {
        res.sendFile(path.join(__dirname, '../views/nosotros/index.html'));;
    });

    return routes;
}