// IMPORTAMOS BIBLIOTECAS 

const express = require ("express");
const app = express()

// middleware 
app.use(express.json());

// mala practica 
app.get('/test', (request , response)=>{
    console.log("Esto no se debe hacer pero funciona");
    response.send('<h1>Servidor funcionando</h1>');
})

// levantar el server y escuchat peticiones 
app. listen(8080,()=>{
    console.log("Servidor escuchando 🎧")
})