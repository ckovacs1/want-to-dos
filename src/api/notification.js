import axios from 'axios';
import { getRequestUrl } from './request';

export const fetchNotifications = async () => {
  const axiosResponse = await axios.get(getRequestUrl('/api/viewNotifs'));

  return axiosResponse.data;
};

export const updateNotificationToRead = async id => {
  const axiosResponse = await axios.post(
    getRequestUrl(`/api/setNotifAsRead/${id}`),
  );

  return axiosResponse.data;
};
