'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('anime', 'mark', {
      type: Sequelize.STRING,
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('users', 'april')
  }
};
