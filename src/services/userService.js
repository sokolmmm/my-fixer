import $api from '../api/api';

export default class UserService {
  static patchUser(payload) {
    return $api.patch('users', payload);
  }

  static updatePhoto(payload) {
    return $api.put('/users/photo', payload);
  }

  static getUser(id) {
    return $api.get(`users/${id}`);
  }
}
