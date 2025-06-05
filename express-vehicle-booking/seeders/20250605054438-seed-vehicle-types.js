'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('VehicleTypes', [
      { name: 'Hatchback', category: 'Car', wheels: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: 'SUV', category: 'Car', wheels: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Sedan', category: 'Car', wheels: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Cruiser', category: 'Bike', wheels: 2, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('VehicleTypes', null, {});
  }
};
