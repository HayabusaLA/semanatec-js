const express = require ("express");
const router = express.Router();
const personaController = require("../controllers/persona")

//Rutas de controller 
router.post('/agregarPersona', personaController.postAgregarPersona);
router.get('/consultarPersonas', personaController.getconsultarPersonas);

module.exports = router  