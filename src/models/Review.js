import { DataTypes } from 'sequelize'
import sequelize from '../config/sequelize.js'

export const Review = sequelize.define('Review', {
  movieId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  },
  rating: {
    type: DataTypes.ENUM,
    values: ['1', '2', '3', '4', '5'],
    allowNull: false
  }
})

Review.sync()
