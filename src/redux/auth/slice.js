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
  },
  extraReducers: {
    [signIn.pending]: (state) => {
      state.statuses.signInStatus = 'loading';
      state.error = '';
    },
    [signIn.fulfilled]: (state) => {
      state.statuses.signInStatus = 'resolved';
      state.isAuth = true;
    },
    [signIn.rejected]: (state, action) => {
      state.statuses.signInStatus = 'rejected';
      state.errors = action.payload.error;
    },
    [checkIsAuth.pending]: (state) => {
      state.statuses.checkIsAuthStatus = 'loading';
    },
    [checkIsAuth.fulfilled]: (state) => {
      state.statuses.checkIsAuthStatus = 'resolved';
      state.isAuth = true;
    },
    [checkIsAuth.rejected]: (state) => {
      state.statuses.checkIsAuthStatus = 'rejected';
      state.isAuth = false;
      state.isRefreshRefused = true;
    },
  },
});

export const { signOut } = authSlice.actions;

export default authSlice.reducer;
