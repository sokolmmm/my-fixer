/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';

import AuthService from '../../services/authService';
import Base64 from '../../helpers/base64';

import { setUserData } from '../user/slice';

export const signIn = createAsyncThunk(
  'auth/signIn',
  async (payload, { rejectWithValue, dispatch }) => {
    try {
      const response = await AuthService.signIn(payload);
      const { tokens, ...userData } = response.data;

      window.localStorage.setItem('token', tokens.accessToken);
      window.localStorage.setItem('refresh', tokens.refreshToken);

      dispatch(setUserData(userData));

      return userData;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const checkIsAuth = createAsyncThunk(
  'auth/checkIsAuth',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const token = window.localStorage.getItem('token');

      const { id } = Base64.getJWTPayload(token);

      const response = await AuthService.authMe(id);

      const userData = response.data;

      dispatch(setUserData(userData));

      return userData;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
