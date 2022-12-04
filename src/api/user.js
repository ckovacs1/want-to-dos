import axios from 'axios';
import { getRequestUrl } from './request';

export const login = async userData => {
  const axiosResponse = await axios.post(
    getRequestUrl('/api/users/login'),
    userData,
  );

  return axiosResponse.data;
};

export const registerUser = async userData => {
  const axiosResponse = await axios.post(
    getRequestUrl('/api/users/register'),
    userData,
  );

  return axiosResponse.data;
};

export const fetchMe = async () => {
  const axiosResponse = await axios.get(getRequestUrl('/api/loggedInUserInfo'));

  return axiosResponse.data;
};
