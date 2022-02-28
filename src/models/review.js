module.exports = (sequelize, type) => {
    // defino el modelo
	return sequelize.define('review', {
   
		review: type.STRING,
    score: type.INTEGER,
      
      
    });
  };