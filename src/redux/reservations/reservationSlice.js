import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  reservedPlanes: [],
  createdReserve: {},
  loading: false,
  showLoading: false,
  error: null,
};
const reservationSlice = createSlice({
  name: 'aeroplanes',
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createReservation.pending, (state) => {
        state.loading = true;
      })
      .addCase(createReservation.fulfilled, (state, action) => {
        state.loading = false;
        state.jetShow = action.payload;
      })
      .addCase(createReservation.rejected, (state, action) => {
        state.loading = false;
        state.showError = action.error.message;
      });
  },
});

export default reservationSlice.reducer;
