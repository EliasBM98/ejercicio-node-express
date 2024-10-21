/*Importo Express*/
const express = require("express");

/*llamo a la clase rutas del objeto express*/
const router = express.Router();

/*importo el objeto de funciones de controladora*/
const {getIndex, getServicios, getProductos} = require('../controllers/controladoras.js')

/*creo la ruta para el index*/
router.get("/", getIndex)

/*Creo la ruta para la seccion servicios*/
router.get("/servicios", getServicios)

/*creo la ruta para seccion productos*/
router.get("/productos", getProductos)


/*exporto el router de servicios*/
module.exports=router;