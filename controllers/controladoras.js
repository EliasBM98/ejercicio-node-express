/*Importo el modelo de servicios*/
const servicio = require('../models/serviciosmodel.js')
/*importo el modelo de productos*/
const producto = require('../models/productosmodel.js')

//Funciones controladoras que reciben req y res para establecer la ruta en la que se va a renderizar la pagina
const getIndex = (req, res)=>{
    res.render('index', {
        titulo: "Indice",
        title: "Indice",
        descripcion: "Buen Indice"
    })
}

const getServicios = async (req, res)=>{
    try {
        const servicios = await servicio.find()
        //console.log(servicios)
        res.render('servicios', {
            titulo: "Este es el titulo de servicios",
            servicios
            })
    } catch (error) {
      
    }
}


const getProductos = async (req, res)=>{
    try {
        const productos = await producto.find()
        //console.log(productos)
        res.render('productos', {
            titulo: "Este es el titulo de productos",
            productos
            })
    } catch (error) {
        
    }
}






module.exports = {
    getIndex,
    getServicios,
    getProductos
}