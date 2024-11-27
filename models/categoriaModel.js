let  DataTypes  = require('sequelize');
let sequelize = require('../config/db');



let Categoria = sequelize.define('Categoria', {
    nombre: {
        type:DataTypes.STRING,
        allowNull:false
    },
},{
    timestamps: true,
    tableName: 'Categoria'
});


module.exports = Categoria;