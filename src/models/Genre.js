const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('genres', {
    
    genreId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },

    genre_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
