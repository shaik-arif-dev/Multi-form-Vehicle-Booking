'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Vehicles', 'wheels', {
      type: Sequelize.INTEGER,
      allowNull: true // Or false if you want it required
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Vehicles', 'wheels');
  }
};
