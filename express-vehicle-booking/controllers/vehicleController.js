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

exports.getVehicleTypes = async (req, res) => {
  try {
    const vehicleTypes = await VehicleType.findAll();
    res.json(vehicleTypes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get vehicles by type ID
exports.getVehiclesByType = async (req, res) => {
  try {
    const { typeId } = req.params;  
    const vehicles = await Vehicle.findAll({
      where: { typeId }
    });
    res.json(vehicles);
  } catch (error) {
    console.error('Error fetching vehicles by type:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


exports.getvehicletypesbynoofwheels = async (req, res) => {
  try {
    const { wheels } = req.params;
    const vehicleTypes = await VehicleType.findAll({
      where: { wheels },
      include: [Vehicle]
    });
    res.json(vehicleTypes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};