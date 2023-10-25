const Seq = require('sequelize');
const sequelize = require ('../util/database');
const Persona = sequelize.models.persona;

exports.postAgregarPersona=(req, res)=>{
    console.log(req.body);
    persona.create(req.body)
    .then(result=>{
        console.log("Registro Exitoso");
        res.send("Registro exitoso");
    })
    .catch(errores=>{
        console.log(error);
        res.send('Hubo un problema')
    })
} 