/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { updatePersonalInfo, updatePhoto } from './asyncActions';

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
  statuses: {
    updatePersonalInfoStatus: '',
    updatePhotoStatus: '',
  },
  errors: {
    updatePersonalInfoError: '',
    updatePhotoError: '',
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
  },
  extraReducers: (builder) => {
    builder.addCase(updatePersonalInfo.pending, (state) => {
      state.statuses.updatePersonalInfoStatus = 'loading';
      state.errors.updatePersonalInfoError = '';
    });
    builder.addCase(updatePersonalInfo.fulfilled, (state, action) => {
      state.statuses.updatePersonalInfoStatus = 'resolved';
      state.userData = action.payload;
    });
    builder.addCase(updatePersonalInfo.rejected, (state, action) => {
      state.statuses.updatePersonalInfoStatus = 'rejected';
      state.errors.updatePersonalInfoError = action.payload;
    });
    builder.addCase(updatePhoto.pending, (state) => {
      state.statuses.updatePhotoStatus = 'loading';
      state.errors.updatePhotoError = '';
    });
    builder.addCase(updatePhoto.fulfilled, (state, action) => {
      state.statuses.updatePhotoStatus = 'resolved';
      state.userData = action.payload;
    });
    builder.addCase(updatePhoto.rejected, (state, action) => {
      state.statuses.updatePhotoStatus = 'rejected';
      state.errors.updatePhotoError = action.payload;
    });
  },
});

export const { setUserData, deleteUserData } = userSlice.actions;

export default userSlice.reducer;
