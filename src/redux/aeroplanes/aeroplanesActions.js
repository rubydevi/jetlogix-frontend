import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchAeroplanes = createAsyncThunk('aeroplanes/fetchAeroplanes', async (userId) => {
  const url = `http://localhost:4000/api/v1/users/${userId}/aeroplanes`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw Error(error);
  }
});

export default fetchAeroplanes;
