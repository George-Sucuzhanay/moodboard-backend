//this file defines the structure of the database using sequelize. Model1 is PhotosFavorites

//fulfills the requirement "Create 2 or more models, each with 2 or more fields" b/c PhotosFavorites (Model1) has 2 or more fields
//fulfills requirement "2 or models should be associated with each other" b/c association is in PhotosFavorites model with caption_id referencing caption_id in PhotoCaptions model
const Sequelize = require('sequelize');
const db = require('../db');
const PhotoCaptions = require('./Model2');

const PhotosFavorites = db.define("PhotosFavorites", {
    photo_id: { //unique identifier for each photo aka primary key
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true, // If photo_id is auto-incrementing
        allowNull: false
    },
    
    photo_url: { //url of the photo
        type: Sequelize.STRING,
        allowNull: false // Add this if the URL should not be null
    },
    
    caption_id: { //foreign key refrencing caption_id in photocaptions table
        type: Sequelize.INTEGER
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

// Association: PhotoFavorite belongs to PhotoCaption
PhotosFavorites.belongsTo(PhotoCaptions, {
    foreignKey: 'caption_id',  // Ensure this is the correct foreign key field
    as: 'caption'
});

module.exports = PhotosFavorites;
