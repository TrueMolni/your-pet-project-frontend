import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../services/notices-api';

const getNoticesByCategory = createAsyncThunk(
  'notices/getByCategory',
  async ({ category }, { rejectWithValue }) => {
    try {
      const data = await api.getNoticesByCategory(category);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const getNoticeById = createAsyncThunk(
  'notices/getOneNotice',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.getNoticeById(id);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const updateFavorite = createAsyncThunk(
  'notices/updateFavorite',
  async (id, { rejectWithValue }) => {
    try {
      const result = await api.updateFavorite(id);
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const getNoticeByFavorite = createAsyncThunk(
  'notices/getFavorites',
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.getNoticeByFavorite();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteUserNotice = createAsyncThunk(
  'notices/deleteNotice',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.deleteUserNotice(`/notices/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const addNoticeByCategory = createAsyncThunk(
  'notices/addNoticeByCategory',
  async (notice, { rejectWithValue }) => {
    try {
      const { data } = await api.addNoticeByCategory(notice);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const getUserNotices = createAsyncThunk(
  'notices/getOwn',
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.getUserNotices();
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const addPet = createAsyncThunk(
  'notices/addPet',
  async (pet, { rejectWithValue }) => {
    try {
      const { data } = await api.addPet(pet);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const addPet = createAsyncThunk(
  'notices/addPet',
  async (pet, { rejectWithValue }) => {
    try {
      const { data } = await api.addPet(pet);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const getUserPet = createAsyncThunk(
  'notices/getUserPet',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.getUserPet();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const operations = {
  getNoticesByCategory,
  getNoticeById,
  updateFavorite,
  getNoticeByFavorite,
  addNoticeByCategory,
  getUserNotices,
  deleteUserNotice,
  addPet,
  getUserPet,

};

export default operations;
