import $api from '../api/api';

export default class AuthService {
  static signIn(payload) {
    return $api.post('auth/sign-in', payload);
  }

  static authMe(id) {
    return $api.get(`users/${id}`);
  }
}
