import $api from '../api/api';

export default class UserService {
  static signIn(payload) {
    return $api.post('auth/sign-in', payload);
  }

  static signUp(payload) {
    return $api.post('users', payload);
  }

  static getUser(id) {
    return $api.get(`users/${id}`);
  }

  static patchUser(payload) {
    return $api.patch('users', payload);
  }

  static updatePhoto(payload) {
    return $api.put('/users/photo', payload);
  }
}
