//?Configurar la Base de Datos
const mongoose = require('mongoose');
require('dotenv').config();

//?Se crea la conexion
const conectarDB = () => {

mongoose
.connect(process.env.DB_MONGO)
.then(() => console.log('Estamos conectados con Mongo'))
.catch((err) => console.error(err));
}

module.exports = conectarDB;
