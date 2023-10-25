// IMPORTAMOS BIBLIOTECAS 

const express = require ("express");
const app = express()

// Traer objeto de conexion 
const sequelize = require('./util/database') 

// middleware 
app.use(express.json());

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