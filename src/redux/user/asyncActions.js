/* eslint-disable import/no-cycle */
import { createAsyncThunk } from '@reduxjs/toolkit';

import UserService from '../../services/userService';
import { setIsAuthFalse } from '../auth/slice';

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

      return response.data;
    } catch (error) {
      if (error.response.status === 401) {
        dispatch(setIsAuthFalse());
      }
      return rejectWithValue(error.response.data);
    }
  },
);

export const getUser = createAsyncThunk(
  'user/getUser',
  async (payload, { rejectWithValue, dispatch, getState }) => {
    try {
      const { id } = getState().user.userData;
      const response = await UserService.getUser(id);

      return response.data;
    } catch (error) {
      if (error.response.status === 401) {
        dispatch(setIsAuthFalse());
      }
      return rejectWithValue(error.response.data);
    }
  },
);
