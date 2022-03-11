import axios from 'axios';
import { ENV } from '@env';
const dev = ENV === 'dev';

const REQUEST_TIMEOUT = 20000;
const axiosClient = axios.create({
  timeout: REQUEST_TIMEOUT,
  timeoutErrorMessage: 'REQUEST_TIMEOUT',
});

axiosClient.interceptors.request.use(
  (request) => {
    dev && console.log('------REQUEST-------: ', request);
    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);

axiosClient.interceptors.response.use(
  (response) => {
    dev && console.log('------RESPONSE-------: ', response);
    if (response && response.status === 200) {
      return response.data;
    }
    return response;
  },
  (error) => {
    console.log(error, 'error axios');
    return Promise.reject(error.response);
  },
);

export default axiosClient;
