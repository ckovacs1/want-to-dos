import React, { useReducer } from 'react';
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
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: '15px',
      }}
    >
      <NavBar />

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
          element={<Home authState={authState} />}
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
