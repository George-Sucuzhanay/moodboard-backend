const Sequelize = require('sequelize');
const db = require('../db');

const FavoritesCollection = db.define("favorite", {
    imageID: {
        type: Sequelize.NUMBER,
        allowNull: false
      },
    
    imageURL: {
        type: Sequelize.STRING
    },
    likes: {
        type: Sequelize.NUMBER
    },
})