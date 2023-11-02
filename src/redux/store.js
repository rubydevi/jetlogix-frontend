import { configureStore } from '@reduxjs/toolkit';
import aeroplanesReducer from './aeroplanes/aeroplanesSplice';

const store = configureStore({
  reducer: {
    aeroplanes: aeroplanesReducer,
  },
});

export default store;
