import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'http://localhost:4000/aeroplanes';

export const fetchAeroplanes = createAsyncThunk('aeroplanes/fetchAeroplanes', async (userId) => {
  const url = `http://localhost:4000/api/v1/users/${userId}/aeroplanes`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw Error(error);
  }
});

export const createAeroplane = createAsyncThunk('aeroplanes/createAeroplane', async (aeroplaneData) => {
  try {
    const config = {
      headers: {
        authorization: JSON.parse(localStorage.getItem('Token')),
        'Content-Type': 'application/json',
      },
    };
    const response = await axios.post(baseUrl, JSON.stringify({
      aeroplane:
      aeroplaneData,
    }), config);
    return response.data;
  } catch (error) {
    throw Error(error);
  }
});
