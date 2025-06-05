import axios from 'axios';

export const API_BASE = 'http://localhost:5000'; // Adjust as needed

export const fetchVehicleTypes = (wheels) => axios.get(`${API_BASE}/vehicles/types/${wheels}`);
export const fetchVehicles = (typeId) => axios.get(`${API_BASE}/vehicles/typesid/${typeId}`);
export const submitBooking = async (bookingData) => {
  try {
    const response = await axios.post(`${API_BASE}/bookings`, bookingData);
    return response.data;
  } catch (error) {
    console.error('Error submitting booking:', error);
    throw error;
  }
};

export const getAllBookings = async () => {
  try {
    const response = await axios.get(`${API_BASE}/bookings`);
    return response.data;
  } catch (error) {
    console.error('Error fetching bookings:', error);
    throw error;
  }
};
