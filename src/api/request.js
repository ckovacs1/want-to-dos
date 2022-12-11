const DEV_HOST =
  process.env.NODE_ENV === 'production'
    ? 'https://todo-backend-bk5n.onrender.com'
    : 'http://localhost:5002';

export const getRequestUrl = path => `${DEV_HOST}${path}`;
