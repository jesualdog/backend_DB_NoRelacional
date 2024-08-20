const Factura = require('../models/Factura');

//?Funcion para agregar facturas
exports.agregarFactura = async(req, res) =>{
    try {
       let factura;
       factura = new Factura(req.body)
       await factura.save();
       res.send(factura);

    } catch (error) {
       console.log(error) 
       res.status(500).send('Hubo un error al agregar una factura');
    }
}

//?Funcion para buscar las facturas
exports.buscarFacturas = async(req, res) =>{
   try {
       const factura = await Factura.find();
       res.send(factura);
       
   } catch (error) {
       console.log(error) 
       res.status(500).send('Hubo un error al buscar las facturas');      
   }
}

//?Funcion para buscar acturas por id
exports.buscarFactura = async(req, res) =>{
    try {
        let factura = await Factura.findById(req.params.id);
        if (!factura) {
            res.status(404).json({msg:"Factura no encontrado con ese Id"});
            return
        }
        res.send(factura);
        
    } catch (error) {
        console.log(error) 
        res.status(500).send('Hubo un error al buscar una factura por Id');      
    }
}

//?Funcion para eliminar facturas
exports.eliminarFactura = async(req, res) =>{
   try {
       let factura = await Factura.findById(req.params.id);
       if (!factura) {
           res.status(404).json({msg:"La factura no existe!"});
           return        
       }
       await Factura.findOneAndDelete({_id: req.params.id})
       res.json({msg:"El cliente ha sido eliminado"});
       return

   } catch (error) {
       console.log(error) 
       res.status(500).send('Hubo un error al eliminar una factura');      
   }
}

//?Funcion para actualizar una factura

exports.actualizarFactura = async (req, res) => {
    try {
        let factura = await Factura.findById(req.params.id);
        if (!factura) {
            return res.status(404).json({ msg: "Factura no encontrado con ese Id" });
        }

        //Actualizar los campos del cliente con los datos del cuerpo de la solicitud (req.body)
        factura = await Factura.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(factura);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al actualizar la factura');
    }
}