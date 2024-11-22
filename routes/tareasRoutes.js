const express = require('express');
const Tareacontroller = require("../controllers/TareaController");
const router = express.Router();

router.get("/tareas", Tareacontroller.traerTarea);
router.get("/tareas/:id", Tareacontroller.obtenerId); 
router.post("/tareas", Tareacontroller.crearTarea);
router.put("/tareas/:id", Tareacontroller.actualizarTarea);
router.delete("/tareas/:id", Tareacontroller.eliminarTarea);

module.exports = router;