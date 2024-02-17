import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://swapi.dev/api/',
  timeout: 10000,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;
