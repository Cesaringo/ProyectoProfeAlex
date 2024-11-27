const express = require("express");
const app = express();
let dotenv = require ('dotenv');
dotenv.config();
const port = process.env.PUERTO;

const tareasRoutes = require("./routes/tareasRoutes")

const categoriasRoutes = require ("./routes/categoriasRoutes")
let sequelize = require('./config/db');


app.use(express.json());
app.use('/api/', tareasRoutes);
app.use('/api/Tarea',tareasRoutes);
app.use('/api/', categoriasRoutes);
app.use('/api/Categoria', categoriasRoutes);
let startDB = async () => {
  try{
    await sequelize.sync();
    console.log('Base de datos sincronizada');
    app.listen(port, () => {
      console.log(`Servidor corriendo en http://localhost:${port}`);
    });
  }catch(e){
    console.error('ERROR al conectar la Base de Datos')
  }
}

startDB();

  