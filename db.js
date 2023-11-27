// this file configures the Sequelize database connection using the info in db.sql
const { Sequelize } = require('sequelize');
console.log('Opening database connection');

const db = new Sequelize('my_database', 'georgesucuzhanay', 'test1', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = db;
