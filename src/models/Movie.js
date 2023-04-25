import { DataTypes } from 'sequelize'
import sequelize from '../config/sequelize.js'

export const Movie = sequelize.define('Movie', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  director: {
    type: DataTypes.STRING
  },
  synopsis: {
    type: DataTypes.TEXT
  }
})

Movie.sync()
