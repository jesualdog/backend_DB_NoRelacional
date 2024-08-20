const Cliente = require('../models/Cliente');

//?Funcion para agregar clientes
exports.agregarCliente = async(req, res) =>{
    try {
       let cliente;
       cliente = new Cliente(req.body)
       await cliente.save();
       res.send(cliente);

    } catch (error) {
       console.log(error) 
       res.status(500).send('Hubo un error al agregar un cliente');
    }
}

//?Funcion para buscar los clientes
exports.buscarClientes = async(req, res) =>{
    try {
        const cliente = await Cliente.find();
        res.send(cliente);
        
    } catch (error) {
        console.log(error) 
        res.status(500).send('Hubo un error al buscar los clientes');      
    }
}

//?Funcion para buscar clientes por id
exports.buscarCliente = async(req, res) =>{
    try {
        let cliente = await Cliente.findById(req.params.id);
        if (!cliente) {
            res.status(404).json({msg:"Cliente no encontrado con ese Id"});
            return
        }
        res.send(cliente);
        
    } catch (error) {
        console.log(error) 
        res.status(500).send('Hubo un error al buscar un cliente por Id');      
    }
}

//?Funcion para eliminar clientes
exports.eliminarCliente = async(req, res) =>{
    try {
        let cliente = await Cliente.findById(req.params.id);
        if (!cliente) {
            res.status(404).json({msg:"El cliente no existe!"});
            return        
        }
        await Cliente.findOneAndDelete({_id: req.params.id})
        res.json({msg:"El cliente ha sido eliminado"});
        return

    } catch (error) {
        console.log(error) 
        res.status(500).send('Hubo un error al eliminar un cliente');      
    }
}

//?Funcion para actualizar un cliente
/*
exports.actualizarCliente = async (req, res) => {
    try {

        const {nombres, apellidos, documento, correo, telefono, direccion} = req.body
        let cliente = await Cliente.findById(req.params.id);

        if (!cliente) {
            res.status(404).json({msg: "Cliente no encontrado con ese Id"});
        }else{
            cliente.nombres = nombres;
            cliente.apellidos = apellidos;
            cliente.documento = documento;
            cliente.correo = correo;
            cliente.telefono = telefono;
            cliente.direccion = direccion;

        cliente = await Cliente.findByIdAndUpdate({_id: req.params.id}, cliente,{new:true});
        res.json(cliente);
        }

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al actualizar el cliente');
    }
}*/
exports.actualizarCliente = async (req, res) => {
    try {
        let cliente = await Cliente.findById(req.params.id);
        if (!cliente) {
            return res.status(404).json({ msg: "Cliente no encontrado con ese Id" });
        }

        //Actualizar los campos del cliente con los datos del cuerpo de la solicitud (req.body)
        cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(cliente);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al actualizar el cliente');
    }
}

