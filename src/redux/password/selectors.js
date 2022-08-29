export const selectPassword = (state) => state.password;

export const selectResetPasswordStatus = (state) => state.password.statuses.sendResetPasswordMailStatus;

export const selectResetPasswordError = (state) => state.password.errors.sendResetPasswordMailError;

export const selectIsMailSent = (state) => state.password.isMailSent;

export const selectIsPasswordReset = (state) => state.password.isPasswordReset;
