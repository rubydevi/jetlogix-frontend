import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../api/axios';

const initialState = {
  reservedPlanes: [],
  createdReserve: {},
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
      return response.data;
    } catch (err) {
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
      });
  },
});

export default reservationSlice.reducer;
