const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('reviews', {
    
    reviewId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
    },

    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    review: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
};
