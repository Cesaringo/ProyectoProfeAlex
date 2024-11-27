let  DataTypes  = require('sequelize');
let sequelize = require('../config/db');



let Categoria = sequelize.define('Categoria', {
    nombre: {
        type:DataTypes.STRING,
        allowNull:false
    },
},{
    timestamps: false,
    tableName: 'categoria'
});


module.exports = Categoria;