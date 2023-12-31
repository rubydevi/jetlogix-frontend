import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import axios from '../../api/axios';
import { fetchReservedAeroplanes } from '../aeroplanes/aeroplanesActions';

const initialState = {
  reservedPlanes: [],
  createdReserve: {},
  reservation: [],
  loading: false,
  showLoading: false,
  error: null,
};

export const createReservation = createAsyncThunk(
  'reservation/createReservation',
  async (data) => {
    const url = `/api/v1/users/${data.reservation.user_id}/reservations`;
    try {
      const { authToken } = JSON.parse(localStorage.getItem('Token'));
      const response = await axios.post(url, JSON.stringify(data), {
        headers: {
          authorization: authToken,
          'Content-Type': 'application/json',
        },
      });
      toast.success(`🎉Reservation Successfully ${response.statusText} `);
      return response.data;
    } catch (err) {
      toast.error('Opps😥 failed to create reservation');
      throw Error(err);
    }
  },
);

const reservationSlice = createSlice({
  name: 'reservation',
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createReservation.pending, (state) => {
        state.loading = true;
      })
      .addCase(createReservation.fulfilled, (state, action) => {
        state.loading = false;
        state.createdReserve = action.payload;
      })
      .addCase(createReservation.rejected, (state, action) => {
        state.loading = false;
        state.showError = action.error.message;
      })
      .addCase(fetchReservedAeroplanes.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchReservedAeroplanes.fulfilled, (state, action) => {
        state.loading = false;
        state.reservation = action.payload;
      })
      .addCase(fetchReservedAeroplanes.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default reservationSlice.reducer;
