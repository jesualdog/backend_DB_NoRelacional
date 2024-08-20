const express = require('express');
const router = express.Router();
const facturaController = require('../controllers/facturaController');

//?Rutas de nuestro de nuestro CRUD para los empleados
router.post('/',facturaController.agregarFactura);
router.get('/',facturaController.buscarFacturas);
router.get('/:id',facturaController.buscarFactura);
router.delete('/:id',facturaController.eliminarFactura);
router.put('/:id',facturaController.actualizarFactura);

module.exports = router;