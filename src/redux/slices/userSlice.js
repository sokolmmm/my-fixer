/* eslint-disable no-use-before-define */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import UserService from '../../services/userService';

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
    firstName: '',
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
  statuses: {
    sendResetPasswordMailStatus: '',
  },
  errors: {
    updatePersonalInfoError: '',
    updatePhotoError: '',
    sendResetPasswordMailError: '',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = { ...state.userData, ...action.payload };
    },
    deleteUserData: (state) => {
      state.userData = initialState.userData;
    },
    setIsCompleted: (state) => {
      state.isCompleted = true;
    },
    setIsAuthFalse: (state) => {
      state.isAuth = false;
    },
  },
  extraReducers: {
    [updatePersonalInfo.pending]: (state) => {
      state.error.updatePersonalInfoError = '';
    },
    [updatePersonalInfo.rejected]: (state, action) => {
      state.error.updatePersonalInfoError = action.payload.error;
    },
    [updatePersonalInfo.pending]: (state) => {
      state.error.updatePhotoError = '';
    },
    [updatePhoto.rejected]: (state, action) => {
      state.error.updatePhotoError = action.payload.error;
    },
  },
});

export const {
  setUserData, deleteUserData, setIsAuthFalse, setIsCompleted,
} = userSlice.actions;

export default userSlice.reducer;
