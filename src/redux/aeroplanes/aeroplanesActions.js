import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAeroplanes = createAsyncThunk(
  'aeroplanes/fetchAeroplanes',
  async (userId) => {
    const url = `http://localhost:4000/api/v1/users/${userId}/aeroplanes`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw Error(error);
    }
  },
);

export const createAeroplane = createAsyncThunk(
  'aeroplanes/createAeroplane',
  async (data) => {
    const { authToken } = JSON.parse(localStorage.getItem('Token'));
    try {
      const config = {
        headers: {
          authorization: authToken,
          'Content-Type': 'application/json',
        },
      };
      const baseUrl = `http://localhost:4000/api/v1/users/${data.auth.id}/aeroplanes`;

      const response = await axios.post(
        baseUrl,
        JSON.stringify({
          aeroplane: data.aeroplane,
        }),
        config,
      );
      return response.data;
    } catch (error) {
      throw Error(error);
    }
  },
);

export const showAeroplane = createAsyncThunk(
  'aeroplanes/showAeroplane',
  async (data) => {
    const url = `http://localhost:4000/api/v1/users/${data.userId}/aeroplanes/${data.aeroplaneId}`;
    try {
      const response = await axios.get(url, {
        authorization: JSON.parse(localStorage.getItem('Token')),
        'Content-Type': 'application/json',
      });
      return response.data;
    } catch (error) {
      throw Error(error);
    }
  },
);

export const fetchReservedAeroplanes = createAsyncThunk(
  'reservation/fetchReservedAeroplanes',
  async (userId) => {
    try {
      const response = await axios.get(`http://localhost:4000/api/v1/users/${userId}/reservations`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem('Token'))}`,
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      throw Error(error);
    }
  },
);
