import $api from '../api/api';

export default class PasswordService {
  static resetPasswordRequest(payload) {
    return $api.post('/users/password/reset', payload);
  }

  static verifyCode(payload) {
    return $api.post('/users/password/reset/verify-code', payload);
  }

  static resetPassword(payload) {
    return $api.put('/users/password/reset', payload);
  }
}
