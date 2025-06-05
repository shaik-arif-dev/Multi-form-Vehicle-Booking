const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');

router.get('/', vehicleController.getAllVehicles);
router.get('/types', vehicleController.getVehicleTypes);
router.get('/types/:wheels', vehicleController.getvehicletypesbynoofwheels);
router.get('/typesid/:typeId', vehicleController.getVehiclesByType);

module.exports = router;
