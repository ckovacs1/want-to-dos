import axios from 'axios';
import { getRequestUrl } from './request';

export const getTodos = async () => {
  const axiosResponse = await axios.get(
    getRequestUrl('/api/todos/viewtoDosDay'),
  );

  return axiosResponse.data;
};

export const postTodo = async data => {
  const axiosResponse = await axios.post(
    getRequestUrl('/api/todos/createtoDos'),
    data,
  );

  return axiosResponse.data;
};

export const completeTodo = async (id, data) => {
  const axiosResponse = await axios.put(
    getRequestUrl(`/api/todos/completetoDo/${id}`),
    data,
  );

  return axiosResponse.data;
};

export const getUsersTodos = async () => {
  const axiosResponse = await axios.get(getRequestUrl('/api/todos/viewtoDos'));
  return axiosResponse.data;
};

export const deleteTodo = async id => {
  const axiosResponse = await axios.delete(
    getRequestUrl(`/api/todos/deletetoDos/${id}`),
  );

  return axiosResponse.data;
};
