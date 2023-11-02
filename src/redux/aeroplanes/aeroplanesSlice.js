import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://localhost:3000/api/v1/users/1/aeroplanes';

export const fetchAeroplanes = createAsyncThunk('aeroplanes/fetchAeroplanes', async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw Error(error);
  }
});

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
