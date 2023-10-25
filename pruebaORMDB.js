//Como utilizar la herramienta ORM sequelize 

const Sequelize = require('sequelize');

//configurar conexion 
//mysql -u admin -h puerto de enlace -p 

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

const Ejemplo = sequelize.define('ejemplo', {
    idTrabajo:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    descripcion:{
        type: Sequelize.STRING,
        allowNull: true
    }

}
)

const Ejemplo2 = sequelize.define('ejemplo2', {
    idTrabajo:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    descripcion:{
        type: Sequelize.STRING,
        allowNull: true
    }

}
)

//Prueba de conexion 
sequelize.sync()
.then(result => {
    console.log("Conexion exitosa ✅");
})
.catch(error => {
    console.log(error);
});