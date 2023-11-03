import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://localhost:3000/api/v1/users/7/aeroplanes';

export const fetchAeroplanes = createAsyncThunk('aeroplanes/fetchAeroplanes', async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw Error(error);
  }
});

export const createAeroplane = createAsyncThunk('aeroplanes/createAeroplane', async (aeroplaneData, { getState }) => {
  try {
    const { user } = getState();
    const aeroplanesUrl = `${url}/${user.id}/aeroplanes`;
    const config = {
      headers: {
        Authorization: `Bearer ${user.jti}`,
        'Content-Type': 'application/json',
      },
    };
    const response = await axios.post(aeroplanesUrl, aeroplaneData, config);
    return response.data;
  } catch (error) {
    throw Error(error);
  }
});
