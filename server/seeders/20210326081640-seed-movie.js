'use strict';

const fs = require('fs')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const seedMovies = require('../movies.json')

    seedMovies.forEach(el => {
      el.createdAt = new Date()
      el.updatedAt = new Date()
    })

    return queryInterface.bulkInsert('Movies', seedMovies, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Movies', null, {});
  }
};
