import axios from 'axios';
import { getRequestUrl } from './request';

export const fetchFollowers = async () => {
  const axiosResponse = await axios.get(getRequestUrl('/api/viewFollowers'));

  return axiosResponse.data;
};
