import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  CircularProgress,
  Button
} from '@mui/material';
import { getAllBookings } from '../../services/api';
import Header from '../layout/Header';

const AllBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await getAllBookings();
        setBookings(response);
      } catch (error) {
        console.error('Error fetching bookings:');
        setError('Failed to load bookings. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box textAlign="center" my={4}>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <>
    <Header />

    <Box sx={{ p: 3, maxWidth: 1200, mx: 'auto', mt: 12 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4" component="h1">
          All Bookings
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => window.location.href = '/new-booking'}
        >
          New Booking
        </Button>
      </Box>

      <TableContainer component={Paper} elevation={3}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Booking ID</TableCell>
              <TableCell>User</TableCell>
              <TableCell>Vehicle</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>End Date</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookings.length > 0 ? (
              bookings.map((booking) => (
                <TableRow key={booking.id} hover>
                  <TableCell>{booking.id}</TableCell>
                  <TableCell>{booking.user}</TableCell>
                  <TableCell>
                    {booking.vehicleName || 'N/A'} ({booking.vehicleId})
                  </TableCell>
                  <TableCell>{new Date(booking.startDate).toLocaleDateString()}</TableCell>
                  <TableCell>{new Date(booking.endDate).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <Box
                      component="span"
                      sx={{
                        p: '4px 12px',
                        borderRadius: '12px',
                        backgroundColor: 'success.light',
                        color: 'white',
                        fontSize: '0.75rem',
                        fontWeight: 500
                      }}
                    >
                      Confirmed
                    </Box>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  <Typography variant="subtitle1" color="textSecondary">
                    No bookings found
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
    </>
  );
};

export default AllBookings;