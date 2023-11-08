import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAeroplanes,
  createAeroplane,
  showAeroplane,
  deleteAeroplane,
} from './aeroplanesActions';

const initialState = {
  aeroplanes: [],
  jetShow: {},
  loading: false,
  showLoading: false,
  reservedJet: {},
  showError: '',
  error: null,
};

const aeroplanesSlice = createSlice({
  name: 'aeroplanes',
  initialState,

  reducers: {
    aeroplaneCreated: (state, action) => {
      state.aeroplanes?.push(action.payload);
    },
    reserveJet(state, action) {
      const id = action.payload;
      const reserved = state.aeroplanes.aeroplanes.find(
        (plane) => plane.id === id,
      );
      state.reservedJet = reserved;
    },
    aeroplaneRemoved(state, action) {
      const aeroplane = state.aeroplanes.aeroplanes.find(
        (plane) => plane.id === action.payload,
      );
      if (aeroplane) {
        aeroplane.isRemoved = true;
      }
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
        state.aeroplanes = [...state.aeroplanes, action.payload];
      })
      .addCase(showAeroplane.pending, (state) => {
        state.loading = true;
      })
      .addCase(showAeroplane.fulfilled, (state, action) => {
        state.loading = false;
        state.jetShow = action.payload;
      })
      .addCase(showAeroplane.rejected, (state, action) => {
        state.loading = false;
        state.showError = action.error.message;
      })
      .addCase(deleteAeroplane.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteAeroplane.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(deleteAeroplane.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { reserveJet, aeroplaneRemoved } = aeroplanesSlice.actions;
export default aeroplanesSlice.reducer;
