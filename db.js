// this file configures the Sequelize database connection using the info in db.sql
const { Sequelize } = require('sequelize');
console.log('Opening database connection');

const db = new Sequelize('postgres', 'georgesucuzhanay', 'test1', {
    host: 'localhost',
    dialect: 'postgres'
});

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


module.exports = db;
