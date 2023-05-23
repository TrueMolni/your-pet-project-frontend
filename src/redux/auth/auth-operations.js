// import * as api from '../../services/auth-api';
import * as api from '../../services/auth-api'
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const signup = createAsyncThunk(
  'auth/signup',
  async (data, thunkAPI) => {
    try {
      const result = await api.signUp(data);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',

  async (data, { rejectWithValue }) => {
    try {
      const result = await api.login(data);
      // console.log(data)
      const userEmail = data.email;

      Notify.success(`Welcome ${userEmail}`, {
        timeout: 2000,
        clickToClose: true,
        position: 'center-top',
      });
      return result;
    } catch (error) {
      Notify.failure('Wrong password or email', {
        timeout: 2000,
        clickToClose: true,
        position: 'center-top',
      });
      return rejectWithValue(error.message);
    }
  }
);



export const current = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const data = await api.getCurrent(auth.token);
      // console.log("data =>", data)
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);


export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
       
      const data = await api.logout();
      Notify.info(`Good bye!`, {
        timeout: 2000,
        clickToClose: true,
        position: 'center-top',
      });
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

