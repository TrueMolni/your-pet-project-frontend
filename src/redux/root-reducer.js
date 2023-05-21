import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authSlice from './auth/auth-slice';
import noticesReducer from './notices/notices-slice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(persistConfig, authSlice);

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  notices: noticesReducer,
});

export default rootReducer;
