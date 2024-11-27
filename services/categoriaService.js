let categoria = require('../models/categoriaModel');

class CategoriaService { 
    static async obtenerCategoria() {
        try {
            let catego = await categoria.findAll();
            return catego;
        } catch (e) {
            console.log("error "+ e);
        }
    }
    static async obtenerId(id){
        try{let catego = await categoria.findByPk(id);
            if(!catego){
                console.log("categoria no encontrada");
        } else {
            return catego;
        }
        } catch (e) {
            console.log("error al obtener la categoria");
        }}
    static async crearCategoria(datos){
        try {
          let catego =  categoria.create(datos);
          return catego;
        } catch (error) {
            console.log("categoria no creada");
        }
    }
  static async actualizarCategoria(id, datosActualizados) {
        try {
            let categoActualizada = await categoria.update(datosActualizados, {where: {id}});
            if (categoActualizada==0) {
                console.log("categoria no encontrada");
            } else {
                return datosActualizados;
            }
        } catch (e) {
            console.log("Error al actualizar la categoria:", e);
        }
    }
 static async eliminarCategoria(id) {
        try {
        let borrar = await categoria.destroy({where: {id}});
        if (borrar == 0){
            console.log("No encontró la categoria a borrar")
        }
        else return borrar;
        } catch (e) {
           
        }
    }
    }

module.exports = CategoriaService;