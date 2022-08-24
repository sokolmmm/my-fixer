/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { checkCode, sendResetPasswordMail } from './asyncActions';

const initialState = {
  passwordData: {
    email: '',
    code: '',
    password: '',
  },
  isMailSent: false,
  isCodeVerified: false,
  statuses: {
    sendResetPasswordMailStatus: '',
    checkCodeStatus: '',
  },
  errors: {
    sendResetPasswordMailError: '',
    checkCodeError: '',
  },
};

export const passwordSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {
    setPasswordData: (state, action) => {
      state.passwordData = { ...state.passwordData, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(sendResetPasswordMail.pending, (state) => {
      state.statuses.sendResetPasswordMailStatus = 'loading';
      state.errors.sendResetPasswordMailError = '';
      state.isMailSent = false;
    });
    builder.addCase(sendResetPasswordMail.fulfilled, (state) => {
      state.statuses.sendResetPasswordMailStatus = 'resolved';
      state.isMailSent = true;
    });
    builder.addCase(sendResetPasswordMail.rejected, (state, action) => {
      state.statuses.sendResetPasswordMailStatus = 'rejected';
      state.errors.sendResetPasswordMailError = action.payload.error;
    });
    builder.addCase(checkCode.pending, (state) => {
      state.statuses.checkCodeStatus = 'loading';
      state.errors.sendResetPasswordMailError = '';
      state.isCodeVerified = false;
    });
    builder.addCase(checkCode.fulfilled, (state) => {
      state.statuses.checkCodeStatus = 'resolved';
      state.isCodeVerified = true;
    });
    builder.addCase(checkCode.rejected, (state, action) => {
      state.statuses.checkCodeStatus = 'rejected';
      state.errors.checkCodeError = action.payload.error;
    });
  },
});

export const { setPasswordData } = passwordSlice.actions;

export default passwordSlice.reducer;
