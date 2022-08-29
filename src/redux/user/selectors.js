/* eslint-disable import/prefer-default-export */
export const selectUser = (state) => state.user;

export const selectUserData = (state) => state.user.userData;

export const selectUpdateInfoStatus = (state) => state.user.statuses.updatePersonalInfoStatus;
export const selectUpdatePhotoStatus = (state) => state.user.statuses.updatePhotoStatus;

export const selectUpdateInfoError = (state) => state.user.errors.updatePersonalInfoError;
export const selectUpdatePhotoError = (state) => state.user.errors.updatePhotoError;
