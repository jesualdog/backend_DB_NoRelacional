const mongoose = require('mongoose');

//?El modelo que se cree aca debe ser igual al de la base de datos
const facturaSchema = mongoose.Schema({
    cliente:{
        type: String,
        required: true
    },

    documento:{
        type: Number,
        required: true
    },

    telefono:{
        type: Number,
        required: true
    },

    correo:{
        type: String,
        required: true
    },
 
    productos:{
        type: String,
        required: true
    },

    total:{
        type: Number,
        required: true
    },
},{versionkey:false});

module.exports = mongoose.model('Factura',facturaSchema);