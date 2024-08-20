const express = require('express');
const conectarDB = require('../config/db');
const cors = require('cors');

//?Creamos nuestro servidor
const app = express();

//?Enlazamos la conexion con la base de datos
conectarDB();
app.use(cors());
app.use(express.json());

//?Rutas principal del proyecto
app.use('/api/clientes', require('../routes/rutasClientes'));
app.use('/api/empleados', require('../routes/rutasEmpleados'));
app.use('/api/facturas', require('../routes/rutasFacturas'));

//?Se define la ruta principal
app.get('/', (req, res) => {
    res.send("Hola Mundo desde la Web");
})

//Se define una constante para el puerto que tendra configuracion local o en la nube
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("El servidor esta conectado http://localhost:3000/");
});

