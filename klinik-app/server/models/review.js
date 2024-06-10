const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Review = db.define('Review', {
  id_review: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  id_user: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'reservations',
      key: 'id_user'
    }
  },
  id_doctor: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'reservations',
      key: 'id_user'
    }
  },
  review: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'reviews',
  timestamps: false
});

module.exports = Review;
