import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://localhost:3000/api/v1/users/1/aeroplanes';

const fetchAeroplanes = createAsyncThunk('aeroplanes/fetchAeroplanes', async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw Error(error);
  }
});

export const createAeroplane = createAsyncThunk('aeroplanes/createAeroplane', async (aeroplane) => {
  try {
    const response = await axios.post('http://localhost:3000/api/v1/aeroplanes', { aeroplane });
    return response.data;
  } catch (error) {
    throw Error(error);
  }
});

export default fetchAeroplanes;
