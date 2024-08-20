const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

//?Rutas de nuestro de nuestro CRUD para los clientes
router.post('/',clienteController.agregarCliente);
router.get('/',clienteController.buscarClientes);
router.get('/:id',clienteController.buscarCliente);
router.delete('/:id',clienteController.eliminarCliente);
router.put('/:id',clienteController.actualizarCliente);

module.exports = router;
