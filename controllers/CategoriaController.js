let categoriaService = require("../services/categoriaService");
class categoriaController{
static async   traerCategoria(req, res) {
        try {
            let categoriaService = new categoriaService();
            let categoris=await categoriaService.obtenerCategoria();
            res.json(categoris);
        } catch (e) {
            res.json({e: "errrorrrrr"})
        }
    }
static async obtenerId(req, res) { 
    try {
        let resultado = await categoriaService.obtenerId(req.params.id);
        res.json(resultado);
    } catch (e) {
        res.status(500).json({ error: "Error al obtener la categoria por ID" });
    }
}
static async crearCategoria(req, res) {
    try {
        
        let rest = categoriaService.crearCategoria(req.body);
        res.json(rest);
    } catch (e) {
        res.status(500).json({ error: "Error al crear la categoria" });
    }
}
static async actualizarCategoria(req, res) {
    try {
        let resultado = await categoriaService.actualizarCategoria(req.params.id,req.body);
        if (resultado == 0) {
            return res.json({ mensaje: "Categoria no encontrada o no actualizada"})
        } else {
            return res.json({mensaje: "Categoria actualizada",  data: resultado})
        }
 }catch (e) {
        console.log( "Error al actualizar la Categoria");
        res.json({mensaje: "error al actualizar la Categoria"})
       
    }
}

static async eliminarCategoria(req, res) {
    try {
    let borrar = await categoriaService.eliminarCategoria(req.params.id);
      if (borrar == 0) {
      return res.json({mensaje: "Categoria no eliminada o no encontrada"});
      } else {
        res.json({ mensaje: "Categoria eliminada correctamente"});
      }
    } catch (e) {
        
    }
}
}
module.exports =  categoriaController;

