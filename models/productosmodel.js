/*Requerimos mongoose*/
const {Schema, model}  = require("mongoose");

/*Definimos la estructura para el modelo de servicios*/
const productosSchema = new Schema({
    producto:{
        type: String,
        required: true,
    },
    descripcion:{
        type: String,
        required: true,
    },
    disponible:{
        type: Boolean,
        required: true,
    }
})

module.exports=model('productos', productosSchema)