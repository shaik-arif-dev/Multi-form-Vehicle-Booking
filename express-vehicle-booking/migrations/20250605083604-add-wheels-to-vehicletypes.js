'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('VehicleTypes', 'wheels', {
      type: Sequelize.INTEGER,
      allowNull: true // You can set allowNull to false if you want this field to be mandatory
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('VehicleTypes', 'wheels');
  }
};
