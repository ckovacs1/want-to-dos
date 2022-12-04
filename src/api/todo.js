import axios from 'axios';
import { getRequestUrl } from './request';

export const fetchTodosDay = async () => {
  const axiosResponse = await axios.get(
    getRequestUrl('/api/todos/viewtoDosDay'),
  );

  return axiosResponse.data;
};
