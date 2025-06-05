require('dotenv').config();

module.exports = {
  development: {
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'root',
    database: process.env.MYSQL_DATABASE || 'vehicle_booking_db',
    host: process.env.MYSQL_HOST || '127.0.0.1',
    dialect: 'mysql'
  }
};
