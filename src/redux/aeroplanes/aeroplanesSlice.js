import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAeroplanes,
  createAeroplane,
  showAeroplane,
} from './aeroplanesActions';

const initialState = {
  aeroplanes: [],
  jetShow: {},
  loading: false,
  showLoading: false,
  showError: '',
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
      });
  },
});

export default aeroplanesSlice.reducer;
