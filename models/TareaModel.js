let  DataTypes  = require('sequelize');
let sequelize = require('../config/db');
let Categoria = require('./categoriaModel')

let Tarea = sequelize.define('Tarea', {
    /*id_tareas: {
        allowNull: true,
        autoIncrement: true,
        primaryKey: true,
    },*/
    titulo: {
        type:DataTypes.STRING,
        allowNull:false
    },
    descripcion: {
        type:DataTypes.STRING,
        allowNull:false
    },
    categoriaId: {
        type: DataTypes.INTEGER,
        references: {
            model: Categoria,
            key: 'id'
        }
    }
},{
    timestamps: true,
    tableName: 'tareas'
});

//relacion
Tarea.belongsTo(Categoria, {foreignKey: 'categoriaId'});


module.exports = Tarea;