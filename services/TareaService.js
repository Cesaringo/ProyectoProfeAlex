let Tarea = require('../models/TareaModel');
let Categoria = require('../models/categoriaModel');
class TareaService { 
    async obtenerT() {
        try {
            let tarea = await Tarea.findAll();
            return tarea;
        } catch (e) {
            console.log("error");
        }
    }
    static async obtenerId(id){
        try{let tarea = await Tarea.findByPk(id);
            if(!tarea){
                console.log("tarea no encontrada");
        } else {
            return tarea;
        }
        } catch (e) {
            console.log("error al obtener la tarea");
        }}
    static async crearTarea(datos){
        try {
          let tareita = await Tarea.create(datos);
          return tareita;

        } catch (error) {
            console.log("tarea no creada " + error);
        }
    }
  static async actualizarTarea(id, datosActualizados) {
        try {
            let tareaActualizada = await Tarea.update(datosActualizados, {where: {id}});
            if (tareaActualizada==0) {
                console.log("tarea no encontrada");
            } else {
                return datosActualizados;
            }
        } catch (e) {
            console.log("Error al actualizar la tarea:", e);
        }
    }
 static async eliminarTarea(id) {
        try {
        let borrar = await Tarea.destroy({where: {id}});
        if (borrar == 0){
            console.log("No encontró la tarea a borrar")
        }
        else return borrar;
        } catch (e) {
           
        }
    }

    static async traerTareaCategoria(){
        try{
           let rtarea = await Tarea.findAll({
                include: {
                    model: Categoria,
                    attributes: ['id','nombre']
                }
            });
            console.log("rtarea")
            return (rtarea);
        }
        catch (e){
            console.log("error al obtener tarea")
        }
    }

    }

module.exports = TareaService;