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

export const fetchAllUsers = async () => {
  const axiosResponse = await axios.get(getRequestUrl('/api/viewUsers'));

  return axiosResponse.data;
};

export const getUserIdFromEmail = async email => {
  const axiosResponse = await axios.get(
    getRequestUrl(`/api/findUserByEmail/${email}`),
  );
  return axiosResponse.data;
};

export const followById = async id => {
  const axiosResponse = await axios.post(getRequestUrl(`/api/follow/${id}`));
  return axiosResponse.data;
};

export const checkFollowing = async () => {
  const axiosResponse = await axios.get(getRequestUrl('/api/viewFollowing'));
  return axiosResponse.data;
};
