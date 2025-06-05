import axios from 'axios';

const API_BASE = 'http://localhost:5000'; // Adjust as needed

export const fetchVehicleTypes = (wheels) => axios.get(`${API_BASE}/vehicles/types/${wheels}`);
export const fetchVehicles = (typeId) => axios.get(`${API_BASE}/vehicles/typesid/${typeId}`);
export const submitBooking = (bookingData) => axios.post(`${API_BASE}/bookings`, bookingData);
