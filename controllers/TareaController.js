let TareaService = require("../services/TareaService");
class TareaController{
static async   traerTarea(req, res) {
        try {
            let tareaService = new TareaService();
            let tareas=await tareaService.obtenerT();
            res.json(tareas);
        } catch (e) {
            res.json({e: "errrorrrrr"})
        }
    }
static async obtenerId(req, res) { 
    try {
        let resultado = await TareaService.obtenerId(req.params.id);
        res.json(resultado);
    } catch (e) {
        res.status(500).json({ error: "Error al obtener la tarea por ID" });
    }
}
static async crearTarea(req, res) {
    try {
        
        let rest = TareaService.crearTarea(req.body);
        res.json(rest);
    } catch (e) {
        res.status(500).json({ error: "Error al crear la tarea" });
    }
}
static async actualizarTarea(req, res) {
    try {
        let resultado = await TareaService.actualizarTarea(req.params.id,req.body);
        if (resultado == 0) {
            return res.json({ mensaje: "Tarea no encontrada o no actualizada"})
        } else {
            return res.json({mensaje: "Tarea actualizada",  data: resultado})
        }
 }catch (e) {
        console.log( "Error al actualizar la tarea");
        res.json({mensaje: "error al actualizar la tarea"})
       
    }
}

static async eliminarTarea(req, res) {
    try {
    let borrar = await TareaService.eliminarTarea(req.params.id);
      if (borrar == 0) {
      return res.json({mensaje: "Tarea no eliminada o no encontrada"});
      } else {
        res.json({ mensaje: "Tarea eliminada correctamente"});
      }
    } catch (e) {
        
    }
}
}
module.exports =  TareaController;

