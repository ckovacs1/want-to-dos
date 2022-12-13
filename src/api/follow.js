import axios from 'axios';
import { getRequestUrl } from './request';

export const fetchFollowers = async () => {
  const axiosResponse = await axios.get(getRequestUrl('/api/viewFollowers'));

  return axiosResponse.data;
};

export const fetchFollowing = async () => {
  const axiosResponse = await axios.get(getRequestUrl('/api/viewFollowing'));

  return axiosResponse.data;
};

export const createFollowNotification = async id => {
  const axiosResponse = await axios.post(
    getRequestUrl(`/api/newFollowerNotif/${id}`),
  );

  return axiosResponse.data;
};
