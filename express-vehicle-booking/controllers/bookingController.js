const { Booking, Vehicle } = require('../models');
const { Op } = require('sequelize');

exports.createBooking = async (req, res) => {
  try {
    const { vehicleId, user, startDate, endDate } = req.body;
    if (!vehicleId || !user || !startDate || !endDate) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const vehicle = await Vehicle.findByPk(vehicleId);
    if (!vehicle) {
      return res.status(404).json({ error: 'Vehicle not found' });
    }

    // Ensure dates are in ISO format
    if (startDate instanceof Date) {
      startDate = startDate.toISOString();
    }
    if (endDate instanceof Date) {
      endDate = endDate.toISOString();
    }

    const overlappingBooking = await Booking.findOne({
      where: {
        vehicleId,
        [Op.or]: [
          {
            startDate: { [Op.between]: [startDate, endDate] }
          },
          {
            endDate: { [Op.between]: [startDate, endDate] }
          },
          {
            startDate: { [Op.lte]: startDate },
            endDate: { [Op.gte]: endDate }
          }
        ]
      }
    });

    if (overlappingBooking) {
      return res.status(409).json({ error: 'Vehicle is already booked for the selected dates' });
    }

    const booking = await Booking.create({ vehicleId, user, startDate, endDate });
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
