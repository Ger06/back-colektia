const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  return sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    email: DataTypes.STRING,
    password: DataTypes.STRING(150)
    
  });
};