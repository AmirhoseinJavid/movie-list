'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      director: {
        type: Sequelize.TEXT
      },
      release_year: {
        type: Sequelize.INTEGER
      },
      genre: {
        type: Sequelize.TEXT
      },
      rating : {
        type : Sequelize.FLOAT
      },
      img :{
        type : Sequelize.STRING
      },
      details :{
        type : Sequelize.STRING
      },
      link :{
        type : Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Movies');
  }
};