const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('categories', {
    
    categoryId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
    },


    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
