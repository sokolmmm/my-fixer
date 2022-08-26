/* eslint-disable import/no-cycle */
import { createAsyncThunk } from '@reduxjs/toolkit';

import UserService from '../../services/userService';
import { setIsAuthFalse } from '../auth/slice';
// import { setUserData } from './slice';

export const updatePersonalInfo = createAsyncThunk(
  'user/updatePersonalInfo',
  async (payload, { rejectWithValue, dispatch }) => {
    try {
      const response = await UserService.patchUser(payload);

      return response.data;
    } catch (error) {
      if (error.response.status === 401) {
        dispatch(setIsAuthFalse());
      }
      return rejectWithValue(error.response.data);
    }
  },
);

export const updatePhoto = createAsyncThunk(
  'user/updatePhoto',
  async (payload, { rejectWithValue, dispatch }) => {
    try {
      const response = await UserService.updatePhoto(payload);

      // const userData = response.data;
      // dispatch(setUserData(userData));

      return response.data;
    } catch (error) {
      if (error.response.status === 401) {
        dispatch(setIsAuthFalse());
      }
      return rejectWithValue(error.response.data);
    }
  },
);
