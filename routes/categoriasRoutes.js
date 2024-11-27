const express = require('express');
const categoriacontroller = require("../controllers/CategoriaController");
const router = express.Router();

router.get("/categorias", categoriacontroller.traerCategoria);
router.get("/categorias/:id", categoriacontroller.obtenerId); 
router.post("/categorias", categoriacontroller.crearCategoria);
router.put("/categorias/:id", categoriacontroller.actualizarCategoria);
router.delete("/categorias/:id", categoriacontroller.eliminarCategoria);


module.exports = router;