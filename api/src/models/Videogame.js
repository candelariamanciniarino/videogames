const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    'videogame',
     {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.UUID,
     defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    descripcion:{
      type:DataTypes.TEXT,
      allowNull:false
    },
    platform:{
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    
    },
    background_image:{
      type:DataTypes.STRING,
      allowNull:false
    },
    freleaseds:{
      type: DataTypes.DATEONLY,
      allowNull: false

    },
    rating:{
      type: DataTypes.FLOAT,
      allowNull: false,
      

    }
    }, {
      timestamps: false,

  });
};
