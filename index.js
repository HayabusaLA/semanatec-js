// IMPORTAMOS BIBLIOTECAS 

const express = require ("express");
const app = express()
const personaRoutes = require('./routes/persona')
const proyectoRoutes = require('./routes/proyecto')

// Traer objeto de conexion 
const sequelize = require('./util/database') 

// middleware 
app.use(express.json());
app.use('/persona', personaRoutes)
app.use('/proyecto', proyectoRoutes)

// mala practica 
app.get('/test', (request , response)=>{
    console.log("Esto no se debe hacer pero funciona");
    response.send('<h1>Servidor funcionando</h1>');
})

sequelize.sync()
.then (result=>{
    // levantar el server y escuchat peticiones 
app. listen(8080,()=>{
    console.log("Servidor escuchando 🎧")
})
})

.catch(error=>console.log(error));