//this file configures the Sequelize database connection using the info in db.sql

//database connection is established using Sequelize in db.js with tables PhotoCaptions and PhotosFavorites that are created in db.sql
const { Sequelize } = require('sequelize');
console.log('Opening database connection');

const db = new Sequelize('postgres', 'georgesucuzhanay', 'test1', { //new sequelize instance
    host: 'localhost',
    dialect: 'postgres',
});

db.authenticate() //checks if connection to database is successful
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


module.exports = db;
