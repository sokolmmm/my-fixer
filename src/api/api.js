/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
import axios from 'axios';

export const API_URL = 'http://localhost:4000/';

const $api = axios.create({
  baseURL: API_URL,
  headers: {},
});

$api.interceptors.request.use((config) => {
  const token = `Bearer ${window.localStorage.getItem('token')}`;
  config.headers.Authorization = token;
  return config;
});

$api.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
      try {
        const refreshToken = `Bearer ${window.localStorage.getItem('refresh')}`;
        const response = await axios.get(`${API_URL}auth/refresh`, {
          headers: {
            Authorization: refreshToken,
          },
        });
        localStorage.setItem('token', response.data.tokens.accessToken);
        localStorage.setItem('refresh', response.data.tokens.refreshToken);
        return $api.request(originalRequest);
      } catch (e) {
        console.log(e.response.data);
      }
    }
    throw error;
  },
);

export default $api;
