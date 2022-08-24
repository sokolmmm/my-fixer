/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { signUp } from './asyncActions';

const initialState = {
  userData: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  },
  isFirstStepCompleted: false,
  status: '',
  error: '',
};

export const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    firstStepSignUp: (state, action) => {
      state.userData = { ...state.userData, ...action.payload };
      state.isFirstStepCompleted = true;
      state.status = '';
      state.error = '';
    },
    setPassword: (state, action) => {
      state.userData.password = action.payload.password;
    },
  },
  extraReducers: {
    [signUp.pending]: (state) => {
      state.status = 'loading';
      state.error = '';
    },
    [signUp.fulfilled]: (state) => {
      state.status = 'resolved';
      state.userData = initialState.userData;
      state.isFirstStepCompleted = false;
    },
    [signUp.rejected]: (state, action) => {
      state.status = 'rejected';
      state.isFirstStepCompleted = false;
      state.error = action.payload.error;
    },
  },
});

export const { firstStepSignUp, setPassword } = signUpSlice.actions;

export default signUpSlice.reducer;
