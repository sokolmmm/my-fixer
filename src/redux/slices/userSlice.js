/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Base64 from '../../helpers/base64';

import UserService from '../../services/userService';

export const signIn = createAsyncThunk(
  'user/signIn',
  async (payload, { rejectWithValue, dispatch }) => {
    try {
      const response = await UserService.signIn(payload);
      const { tokens, ...userData } = response.data;

      dispatch(setUserData(userData));

      window.localStorage.setItem('token', tokens.accessToken);
      window.localStorage.setItem('refresh', tokens.refreshToken);
      return userData;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const signUp = createAsyncThunk(
  'user/signUp',
  async (payload, { rejectWithValue, dispatch, getState }) => {
    try {
      dispatch(setPassword(payload));
      const { userData } = getState().user;

      const response = await UserService.signUp(userData);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const checkIsAuth = createAsyncThunk(
  'user/checkIsAuth',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const token = window.localStorage.getItem('token');
      const { id } = Base64.getJWTPayload(token);
      const response = await UserService.getUser(id);
      const userData = response.data;

      dispatch(setUserData(userData));
      return userData;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const updatePersonalInfo = createAsyncThunk(
  'user/updatePersonalInfo',
  async (payload, { rejectWithValue, dispatch }) => {
    try {
      const response = await UserService.patchUser(payload);

      const userData = response.data;

      dispatch(setUserData(userData));

      return userData;
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

      const userData = response.data;

      dispatch(setUserData(userData));

      return userData;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const initialState = {
  userData: {
    id: '',
    firsName: '',
    lastName: '',
    email: '',
    password: '',
    country: '',
    phoneNumber: '',
    photo: '',
    title: '',
    profile: '',
  },
  isCompleted: false,
  isAuth: false,
  isRefreshRefused: false,
  status: '',
  error: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signOut: (state) => {
      state.userData = '';
      state.isAuth = false;
      state.status = null;
      state.isRefreshRefused = false;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setPassword: (state, action) => {
      state.userData.password = action.payload;
    },
    setIsCompleted: (state) => {
      state.isCompleted = true;
    },
    setIsAuthFalse: (state) => {
      state.isAuth = false;
    },
  },
  extraReducers: {
    [signIn.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [signIn.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.isAuth = true;
      state.error = null;
    },
    [signIn.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload.error;
    },
    [signUp.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [signUp.fulfilled]: (state) => {
      state.status = 'resolved';
      state.userData = '';
    },
    [signUp.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload.error;
    },
    [checkIsAuth.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [checkIsAuth.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.isAuth = true;
      state.error = null;
    },
    [checkIsAuth.rejected]: (state, action) => {
      state.status = 'rejected';
      state.isAuth = false;
      state.isRefreshRefused = true;
    },
    [updatePersonalInfo.fulfilled]: (state, action) => {
      state.error = null;
    },
    [updatePersonalInfo.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload.error;
    },
    [updatePhoto.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload.error;
    },
  },
});

export const {
  signOut, setUserData, setIsAuthFalse, setPassword, setIsCompleted,
} = userSlice.actions;

export default userSlice.reducer;
