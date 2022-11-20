import axios from 'axios';
import { getRequestUrl } from './request';

export const login = async userData => {
  const axiosResponse = await axios.post(
    getRequestUrl('/api/users/login'),
    userData,
  );

  return axiosResponse.data;
};
