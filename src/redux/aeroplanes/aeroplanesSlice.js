import { createSlice } from '@reduxjs/toolkit';
import fetchAeroplanes from './aeroplanesActions';

const initialState = {
  aeroplanes: [],
  loading: false,
  error: null,
};

const aeroplanesSlice = createSlice({
  name: 'aeroplanes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAeroplanes.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(fetchAeroplanes.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        aeroplanes: action.payload,
      }))
      .addCase(fetchAeroplanes.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }));
  },
});

export default aeroplanesSlice.reducer;
