/*Importamos express y lo utilizamos */
const express = require('express')
const app=express();

/*importo conexion a MONGOATLAS*/
const {dbConnect} = require('./helpers/dbConnect')

/*Recibo a DOTENV*/
require('dotenv').config()

/*recibo a cors*/
let cors = require('cors')

/*puerto*/
const port=process.env.PORT;


/*middleware*/
//Establecemos el template engine y definimos carpeta de vistas
app.set('view engine', 'ejs')
app.use(express.static(__dirname + "/public"))

app.use(cors())


/*conexion a base de datos*/
//invocación de la función conexion
dbConnect()


/*rutas*/
app.use("/", require("./router/all-router"))


app.use((req,res)=>{
    res.status(404).render("404", {
        titulo: '404 - Not found',
        title: '404 - Not found'
    })
})


/*servidor a la escucha*/
app.listen(port, ()=>{
    console.log (`servidor a la escucha en el puerto ${port}`)
})
