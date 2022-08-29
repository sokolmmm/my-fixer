/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';

import SignUpService from '../../services/signUpService';
import { setPassword } from './slice';

export const signUp = createAsyncThunk(
  'signUp/signUp',
  async (payload, { rejectWithValue, dispatch, getState }) => {
    try {
      dispatch(setPassword(payload));

      const { userData } = getState().signUp;

      const response = await SignUpService.signUp(userData);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
