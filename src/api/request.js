const DEV_HOST =
  process.env.NODE_ENV === 'production'
    ? 'https://todo-backend-bk5n.onrender.com'
    : 'http://localhost:5000';

export const getRequestUrl = path => `${DEV_HOST}${path}`;
