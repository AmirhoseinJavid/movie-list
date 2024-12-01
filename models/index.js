'use strict';

const { timeStamp } = require('console');
const path = require('path');
const { Sequelize, DataTypes } = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const db = {};

let sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
    dialectModule: require('mysql2'),
});

db.Movies = movieModel(sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

function movieModel(sequelize) {
    const attributes = {
      title : {
        type : DataTypes.STRING,
        allowNull : false
      },
      director : {
        type : DataTypes.TEXT,
        allowNull: true
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
    };
    const options = {
      modelName : 'Movie',
      tableName : 'Movies',
      timestamps : true,
      defaultScope : {
        attributes : {exclude : ['hash']}
      },
      scopes: {
        withHash : {attributes : {},}
      }
    }
    return sequelize.define('Movie',attributes , options);
}

module.exports = db;
