/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';

import user from './slices/userSlice';
import signUp from './signUp/slice';
import auth from './auth/slice';
import password from './password/slice';

export const store = configureStore({
  reducer: {
    user, signUp, auth, password,
  },
});
