const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const vehicleRoutes = require('./routes/vehicles');
const bookingRoutes = require('./routes/bookings');
const db = require('./models');

const app = express();
app.use(helmet());
app.use(bodyParser.json());

app.use('/vehicles', vehicleRoutes);
app.use('/bookings', bookingRoutes);

const PORT = process.env.PORT || 3000;

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
