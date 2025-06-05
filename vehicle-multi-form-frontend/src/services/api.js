import axios from 'axios';

const API_BASE = 'http://localhost:5000/api'; // Adjust as needed

export const fetchVehicleTypes = (wheels) => axios.get(`${API_BASE}/vehicle-types?wheels=${wheels}`);
export const fetchVehicles = (typeId) => axios.get(`${API_BASE}/vehicles?typeId=${typeId}`);
export const submitBooking = (bookingData) => axios.post(`${API_BASE}/bookings`, bookingData);
