import axios from 'axios';
import { getRequestUrl } from './request';

export const fetchFollowNotifications = async () => {
  const axiosResponse = await axios.get(getRequestUrl('/api/viewNotifs'));

  return axiosResponse.data;
};

export const updateFollowNotificationToRead = async id => {
  const axiosResponse = await axios.post(
    getRequestUrl(`/api/setNotifAsRead/${id}`),
  );

  return axiosResponse.data;
};

export const fetchInviteNotifications = async () => {
  const axiosResponse = await axios.get(getRequestUrl('/api/viewInviteNotifs'));

  return axiosResponse.data;
};

export const updateInviteNotificationToRead = async id => {
  const axiosResponse = await axios.post(
    getRequestUrl(`/api/setInviteNotifsAsRead/${id}`),
  );

  return axiosResponse.data;
};

export const createInviteNotification = async id => {
  const axiosResponse = await axios.post(
    getRequestUrl(`/api/createNewInviteNotif/${id}`),
  );

  return axiosResponse.data;
};

export const createFollowNotification = async id => {
  const axiosResponse = await axios.post(
    getRequestUrl(`/api/newFollowerNotif/${id}`),
  );

  return axiosResponse.data;
};
