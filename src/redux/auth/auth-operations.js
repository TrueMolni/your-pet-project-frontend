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
      Notify.success('Welcome');
      return result;
      
    } catch (error) {
      // console.log("error login")
      Notify.failure(error.message);
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
      return data;
    } catch ({ response }) {
      return rejectWithValue(response);
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
      return data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
