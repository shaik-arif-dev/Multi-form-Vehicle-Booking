module.exports = (sequelize, DataTypes) => {
    const Booking = sequelize.define('Booking', {
      vehicleId: { type: DataTypes.INTEGER, allowNull: false },
      user: { type: DataTypes.STRING, allowNull: false },
      startDate: { type: DataTypes.DATE, allowNull: false },
      endDate: { type: DataTypes.DATE, allowNull: false }
    }, {});
    Booking.associate = models => {
      Booking.belongsTo(models.Vehicle, { foreignKey: 'vehicleId' });
    };
    return Booking;
  };
  