/*Requerimos mongoose*/
const {Schema, model}  = require("mongoose");

/*Definimos la estructura para el modelo de servicios*/
const serviciosSchema = new Schema({
    servicio:{
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

module.exports=model('servicios', serviciosSchema)