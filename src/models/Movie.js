const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('movies', {
    movieId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    director: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    synopsis: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
};
