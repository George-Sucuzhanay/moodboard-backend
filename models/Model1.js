// this file defines a Sequelize model for FavoritesCollection table specifying fields like imageID, imageURL n likes
const Sequelize = require('sequelize');
const db = require('../db');

const PhotosFavorites = db.define("PhotosFavorites", {
    photo_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true, // If photo_id is auto-incrementing
        allowNull: false
    },
    
    photo_url: {
        type: Sequelize.STRING,
        allowNull: false // Add this if the URL should not be null
    },
    
    caption_id: {
        type: Sequelize.INTEGER,
        // allowNull: true or false based on whether this field is mandatory
    },
    // You may optionally add a reference to the foreign key here,
    // but the actual referential integrity is usually set elsewhere.
},
{
    tableName: 'photosfavorites',
    freezeTableName: true,
    timestamps: false,
});

module.exports = PhotosFavorites;
