/*conexion a base de datos de mongo*/
const mongoose = require('mongoose');

//Funcion para hacer la conexion a Mongo
const dbConnect= async()=>{
    try{
    const connection = await mongoose.connect(process.env.URI_CONNECT);
        console.log('DB CONNECTED')
        return connection
    } catch (error){
        console.log(error)
        return{
            ok: false,
            msg: 'Error al conectar'
        }
    }
}

/*Exportamos la funcion de conexion y la mandamos a APP.js*/
/*Para que funcione tenemos que recibir la exportación y e invocar la funcion en APP*/
module.exports = {dbConnect}
