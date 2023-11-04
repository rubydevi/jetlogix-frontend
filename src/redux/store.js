import { configureStore } from '@reduxjs/toolkit';
import aeroplanesReducer from './aeroplanes/aeroplanesSlice';
import reservationsReducer from './reservations/reservationSlice';

const store = configureStore({
  reducer: {
    aeroplanes: aeroplanesReducer,
    reservation: reservationsReducer,
  },
});

export default store;
