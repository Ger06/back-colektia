const {Sequelize} = require ("sequelize");
require('dotenv').config();
const filmFactory = require('../src/models/film')
const userFactory = require('../src/models/user')
const reviewFactory = require ('../src/models/review')


const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_NAME,DB_PORT
} = process.env;

const sequelize = new Sequelize (`mysql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`)

const Film = filmFactory(sequelize,Sequelize)
const User = userFactory(sequelize,Sequelize)
const Review = reviewFactory(sequelize,Sequelize)

Film.hasMany(Review)
Review.belongsTo(Film)

User.hasMany(Review)
Review.belongsTo(User)

module.exports = {
  Film,
  User,
  Review, 
  conn: sequelize,     
};


