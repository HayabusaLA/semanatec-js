const Sequelize = require('sequelize');
const {applyRelations} = require('./relations')
const sequelize = new Sequelize('semanatec', 'admin', 'password', {
    dialect: 'mysql', 
    host: 'database-1.c3pj43aobyn6.us-east-1.rds.amazonaws.com',
    define: {
        //Evitar que nos ponga createdAT y updateAT
        timestamps:false,
        // Pluralizar 
        freezeTableName:true
    }


});

//Cargar modelos 

const modelDefiners =[
    require ('../models/persona'),
    require ('../models/proyecto'),
    require ('../models/proyectoPersona')
];



// Vincular el modelo con el objeto de conexion 
for(const modelDefiner of modelDefiners){
    modelDefiner(sequelize);

}

//Contruir relaciones 

applyRelations(sequelize); 

//exportar elemento de conexion 
module.exports = sequelize; 