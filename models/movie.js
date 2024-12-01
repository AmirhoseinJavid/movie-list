'use strict';
const { Model,DataTypes } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Movie.init({
    title : {
      type : DataTypes.STRING,
      allowNull : false
    },
    director : {
      type : DataTypes.TEXT,
      allowNull: True
    },
    release_year : {
      type : DataTypes.INTEGER,
      allowNull : false
    },
    genre :{
      type : DataTypes.STRING,
      allowNull : true
    },
    rating : {
      type : DataTypes.FLOAT,
      allowNull : true
    },
    img : {
      type : DataTypes.STRING,
      allowNull : false
    },
    details : {
      type : DataTypes.STRING,
      allowNull : true
    },
    link : {
      type : DataTypes.STRING,
      allowNull : false
    },
  }, {
    sequelize,
    modelName: 'Movie',
    tableName : 'Movies',
    timestamps :  false,
  });
  return Movie;
};