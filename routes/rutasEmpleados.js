const express = require('express');
const router = express.Router();
const empleadoController = require('../controllers/empleadoController');

//?Rutas de nuestro de nuestro CRUD para los empleados
router.post('/',empleadoController.agregarEmpleado);
router.get('/',empleadoController.buscarEmpleados);
router.get('/:id',empleadoController.buscarEmpleado);
router.delete('/:id',empleadoController.eliminarEmpleado);
router.put('/:id',empleadoController.actualizarEmpleado);

module.exports = router;