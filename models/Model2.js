//this file defines a Sequelize model for CaptionsCollection table specifying fields like caption_id, caption_text, author_id n date_created
//these models essentially define the structure of your tables in the database.

//fulfills the requirement "Create 2 or more models, each with 2 or more fields" b/c PhotosCaptions (Model2) has 2 or more fields
//fulfills requirement "2 or models should be associated with each other" b/c association is in PhotosFavorites model with caption_id referencing caption_id in PhotoCaptions model

const Sequelize = require('sequelize');
const db = require('../db');

const PhotoCaptions = db.define('PhotoCaptions', {
  caption_id: { //unique identifier for each caption - primary key
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  caption_text: { //the caption text duh
    type: Sequelize.TEXT,
    allowNull: false,
  },

  author_id: { //identifier for author of the caption
    type: Sequelize.INTEGER,
  },

  date_created: { //date caption was created
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW
  },
},
{
    tableName: 'photocaptions',
    freezeTableName: true,
    timestamps: false,
});

module.exports = PhotoCaptions;