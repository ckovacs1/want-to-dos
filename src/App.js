import React, { useEffect, useReducer } from 'react';
import { Box } from '@mui/material';
import NavBar from './components/nav-bar/nav-bar';
import ProfilePage from './components/profile-page/user-profile';
import { Notification } from './components/notification';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './components/log-in/login-form';
import Home from './components/home/home';
import RegistrationForm from './components/log-in/registration-form';
import { Addwanttodo } from './components/add-want-to-do';
import { ListByDate } from './components/list-by-date';
import { AllFriends } from './components/all-friends';
import { CalendarView } from './components/calendar-view';
import { Toaster } from 'react-hot-toast';
import setAuthToken from './utils/setAuthToken';

const authInitialState = {
  isAuthenticated: false,
  user: {},
  loading: false,
};

function authReducer(state, action) {
  switch (action.type) {
    case 'AUTHENTICATED':
      return {
        ...state,
        isAuthenticated: true,
        user: action.user,
      };
    case 'NOT_AUTHENTICATED':
      return {
        ...state,
        isAuthenticated: false,
        user: {},
      };
    case 'USER_LOADING':
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}

function App() {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');

    setAuthToken(token);
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: '15px',
      }}
    >
      <Toaster position="top-center" />
      <NavBar authState={authState} />

      <Routes>
        <Route
          path="/addwanttodo"
          element={<Addwanttodo />}
        ></Route>
        <Route
          path="/notification"
          element={<Notification />}
        ></Route>
        <Route
          path="/profile"
          element={<ProfilePage />}
        >
          {' '}
        </Route>
        <Route
          path="/calendar"
          element={<CalendarView />}
        >
          {' '}
        </Route>
        <Route
          path="/all-friends"
          element={<AllFriends />}
        ></Route>
        <Route
          path="/login"
          element={<LoginForm authDispatch={dispatch} />}
        >
          {' '}
        </Route>
        <Route
          path="/register"
          element={<RegistrationForm />}
        >
          {' '}
        </Route>
        <Route
          path="/list-by-date"
          element={<ListByDate />}
        >
          {' '}
        </Route>
        <Route
          path="/"
          element={
            <Home
              authState={authState}
              authDispatch={dispatch}
            />
          }
        >
          {' '}
        </Route>
        <Route
          path="/add"
          element={<Addwanttodo />}
        >
          {' '}
        </Route>
      </Routes>

      {/* <ProfilePage />

        <LoginForm /> */}
    </Box>
  );
}

export default App;
