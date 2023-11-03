import { createSlice } from '@reduxjs/toolkit';
import { fetchAeroplanes, createAeroplane } from './aeroplanesActions';

const initialState = {
  aeroplanes: [],
  loading: false,
  error: null,
};

const aeroplanesSlice = createSlice({
  name: 'aeroplanes',
  initialState,

  reducers: {
    aeroplaneCreated: (state, action) => {
      state.aeroplanes.push(action.payload);
    },
  },

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

      }))
      .addCase(createAeroplane.fulfilled, (state, action) => {
        state.loading = false;
        aeroplanesSlice.caseReducers.aeroplaneCreated(state, action);
      });
  },
});

export default aeroplanesSlice.reducer;
