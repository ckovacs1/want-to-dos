import axios from 'axios';
import { getRequestUrl } from './request';

export const fetchNotifications = async () => {
  const axiosResponse = await axios.get(getRequestUrl('/api/viewNotifs'));

  return axiosResponse.data;
};
