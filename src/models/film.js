const {DataTypes} = require ('sequelize')
module.exports = (sequelize) => {
  // defino el modelo
  return sequelize.define('film', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    title: DataTypes.STRING,
    director: DataTypes.STRING,
    image: {
      type: DataTypes.STRING,
      allowNull : true
    },
    review: DataTypes.STRING,
    score: DataTypes.STRING
    
  });
};