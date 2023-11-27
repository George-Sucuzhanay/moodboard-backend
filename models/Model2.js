// this file defines a Sequelize model for CaptionsCollection table specifying fields like caption_id, caption_text, author_id n date_created
const Sequelize = require('sequelize');
const db = require('../db');

const PhotoCaptions = db.define('PhotoCaptions', {
  caption_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  caption_text: {
    type: Sequelize.TEXT,
    allowNull: false,
  },

  author_id: {
    type: Sequelize.INTEGER,
  },

  date_created: {
    type: Sequelize.DATE,
    allowNull: false,
  },
},
{
    tableName: 'photocaptions',
    freezeTableName: true,
    timestamps: false,
});

module.exports = PhotoCaptions;