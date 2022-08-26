/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { checkIsAuth, signIn } from './asyncActions';

const initialState = {
  isAuth: false,
  isRefreshRefused: false,
  statuses: {
    signInStatus: '',
    checkIsAuthStatus: '',
  },
  error: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signOut: (state) => {
      state.isAuth = false;
      state.isRefreshRefused = false;
    },
    setIsAuthFalse: (state) => {
      state.isAuth = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.pending, (state) => {
      state.statuses.signInStatus = 'loading';
      state.error = '';
    });
    builder.addCase(signIn.fulfilled, (state) => {
      state.statuses.signInStatus = 'resolved';
      state.isAuth = true;
    });
    builder.addCase(signIn.rejected, (state, action) => {
      state.statuses.signInStatus = 'rejected';
      state.error = action.payload.error;
    });
    builder.addCase(checkIsAuth.pending, (state) => {
      state.statuses.checkIsAuthStatus = 'loading';
    });
    builder.addCase(checkIsAuth.fulfilled, (state) => {
      state.statuses.checkIsAuthStatus = 'resolved';
      state.isAuth = true;
    });
    builder.addCase(checkIsAuth.rejected, (state) => {
      state.statuses.checkIsAuthStatus = 'rejected';
      state.isAuth = false;
      state.isRefreshRefused = true;
    });
  },
});

export const { signOut, setIsAuthFalse } = authSlice.actions;

export default authSlice.reducer;
