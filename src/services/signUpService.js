import $api from '../api/api';

export default class SignUpService {
  static signUp(payload) {
    return $api.post('users', payload);
  }
}
