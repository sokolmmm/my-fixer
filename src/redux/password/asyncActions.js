/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';

import PasswordService from '../../services/passwordService';
import { setPasswordData } from './slice';

export const sendResetPasswordMail = createAsyncThunk(
  'password/sendResetPasswordMail',
  async (payload, { rejectWithValue, dispatch }) => {
    try {
      dispatch(setPasswordData(payload));

      const response = await PasswordService.resetPasswordRequest(payload);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const checkCode = createAsyncThunk(
  'password/checkCode',
  async (payload, { rejectWithValue, dispatch, getState }) => {
    try {
      dispatch(setPasswordData(payload));

      const { email, code } = getState().password.passwordData;

      const response = await PasswordService.verifyCode({ email, code });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
