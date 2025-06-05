'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Vehicles', [
      // Hatchback
      { name: 'Maruti Swift', typeId: 1, wheels: 4, availability: true, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Hyundai i20', typeId: 1, wheels: 4, availability: true, createdAt: new Date(), updatedAt: new Date() },

      // SUV
      { name: 'Toyota Fortuner', typeId: 2, wheels: 4, availability: true, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Mahindra XUV700', typeId: 2, wheels: 4, availability: true, createdAt: new Date(), updatedAt: new Date() },

      // Sedan
      { name: 'Honda City', typeId: 3, wheels: 4, availability: true, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Skoda Octavia', typeId: 3, wheels: 4, availability: true, createdAt: new Date(), updatedAt: new Date() },

      // Cruiser
      { name: 'Royal Enfield Classic', typeId: 4, wheels: 2, availability: true, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Bajaj Avenger', typeId: 4, wheels: 2, availability: true, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Vehicles', null, {});
  }
};
