const { VehicleType, Vehicle } = require('../models');

exports.getAllVehicles = async (req, res) => {
  try {
    const vehicleTypes = await VehicleType.findAll({
      include: [Vehicle]
    });
    res.json(vehicleTypes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
