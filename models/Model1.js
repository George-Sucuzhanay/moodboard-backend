// this file defines a Sequelize model for FavoritesCollection table specifying fields like imageID, imageURL n likes
const Sequelize = require('sequelize');
const db = require('../db');

const FavoritesCollection = db.define("favorite", {
    photo_id: {
        type: Sequelize.NUMBER,
        allowNull: false
    },
    
    photo_url: {
        type: Sequelize.STRING
    },
    
    caption_id: {
        type: Sequelize.NUMBER
    }
});

module.exports = FavoritesCollection;