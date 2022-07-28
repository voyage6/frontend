import axios from 'axios';
import { getCookies } from '../utils/cookie';

const instance = axios.create({
  baseURL: 'http://43.200.6.110',
  withCredentials: true,
  headers: {
    Authorization: getCookies('token'),
  },
});

export default instance;
