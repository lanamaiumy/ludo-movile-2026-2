import axios from 'axios';
import useAuth from '../states/useAuth';

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
});

api.interceptors.request.use((config) => {
  const token = useAuth.getState().token;
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

export default api;
