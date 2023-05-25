import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL ='http://localhost:3030';
    // baseURL: 'https://connections-api.herokuapp.com',

export const addUserInfo = createAsyncThunk(
    '/userInfo',
    async (data, thunkAPI) => {
      try {
        const response = await axios.post('/api/users/:id', {
           
          name: data.name,
          email: data.email,
          birthday:data.birthday,
          phone:data.phone,
          city:data.city
        });
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
