import { configureStore } from '@reduxjs/toolkit';
import aeroplanesReducer from './aeroplanes/aeroplanesSlice';

const store = configureStore({
  reducer: {
    aeroplanes: aeroplanesReducer,
  },
});

export default store;
