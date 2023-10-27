const express = require ("express");
const router = express.Router();
const proyectoController = require("../controllers/proyecto")

//Rutas de controller 
router.post('/agregarProyecto', proyectoController.postAgregarProyecto);
router.get('/consultarProyecto', proyectoController.getconsultarProyecto);

module.exports = router  