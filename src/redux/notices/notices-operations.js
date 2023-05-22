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
      const { data } = await api.updateFavorite(id);

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
      return data._id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const operations = {
  getNoticesByCategory,
  getNoticeById,
  updateFavorite,
  deleteUserNotice,
};

export default operations;
