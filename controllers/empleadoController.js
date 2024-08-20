const Empleado = require('../models/Empleado');

//?Funcion para agregar empleados
exports.agregarEmpleado = async(req, res) =>{
    try {
       let empleado;
       empleado = new Empleado(req.body)
       await empleado.save();
       res.send(empleado);

    } catch (error) {
       console.log(error) 
       res.status(500).send('Hubo un error al agregar un empleado');
    }
}

//?Funcion para buscar los clientes
exports.buscarEmpleados = async(req, res) =>{
    try {
        const empleado = await Empleado.find();
        res.send(empleado);
        
    } catch (error) {
        console.log(error) 
        res.status(500).send('Hubo un error al buscar los empleados');      
    }
}

//?Funcion para buscar empleados por id
exports.buscarEmpleado = async(req, res) =>{
    try {
        let empleado = await Empleado.findById(req.params.id);
        if (!empleado) {
            res.status(404).json({msg:"Empleado no encontrado con ese Id"});
            return
        }
        res.send(empleado);
        
    } catch (error) {
        console.log(error) 
        res.status(500).send('Hubo un error al buscar un empleado por Id');      
    }
}

//?Funcion para eliminar empleados
exports.eliminarEmpleado = async(req, res) =>{
    try {
        let empleado = await Empleado.findById(req.params.id);
        if (!empleado) {
            res.status(404).json({msg:"El empleado no existe!"});
            return        
        }
        await Empleado.findOneAndDelete({_id: req.params.id})
        res.json({msg:"El empleado ha sido eliminado"});
        return

    } catch (error) {
        console.log(error) 
        res.status(500).send('Hubo un error al eliminar un empleado');      
    }
}

//?Funcion para actualizar un empleado
exports.actualizarEmpleado = async (req, res) => {
    try {
        let empleado = await Empleado.findById(req.params.id);
        if (!empleado) {
            return res.status(404).json({ msg: "Empleado no encontrado con ese Id" });
        }

        //Actualizar los campos del cliente con los datos del cuerpo de la solicitud (req.body)
        empleado = await Empleado.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(empleado);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al actualizar el empleado');
    }
}