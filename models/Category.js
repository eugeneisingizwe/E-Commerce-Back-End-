const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

//creating our Category Modeil

class Category extends Model {}


// creating a feilds/colums for Category model
Category.init(
  {
    // define columns

    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }


  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
