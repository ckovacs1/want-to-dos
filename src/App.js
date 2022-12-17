import React, { useEffect, useReducer } from 'react';
import { Box } from '@mui/material';
import NavBar from './components/nav-bar/nav-bar';
import ProfilePage from './components/profile-page/user-profile';
import { Notification } from './components/notification';
import { Route, Routes, Navigate } from 'react-router-dom';
import LoginForm, { REMEMBER_ME_KEY } from './components/log-in/login-form';
import Home from './components/home/home';
import RegistrationForm from './components/log-in/registration-form';
import { Addwanttodo } from './components/add-want-to-do';
import { ListByDate } from './components/list-by-date';
import { AllFriends } from './components/all-friends';
import { CalendarView } from './components/calendar-view';
import { Toaster } from 'react-hot-toast';
import setAuthToken from './utils/setAuthToken';
import { fetchMe } from './api/user';
import { AllFollowers } from './components/all-followers';

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

  const checkRememberMe = async () => {
    // Check rememberMe
    const rememberMe = localStorage.getItem(REMEMBER_ME_KEY) === 'true';
    if (rememberMe) {
      // Set token on axios
      const token = localStorage.getItem('jwtToken');
      setAuthToken(token);

      // Get my user info
      const { data: user } = await fetchMe();

      dispatch({ type: 'AUTHENTICATED', user });
    }
  };

  // Check rememberMe
  useEffect(() => {
    checkRememberMe();
  }, []);

  useEffect(() => {
    console.log(authState);
  }, [authState]);

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

      {!authState.isAuthenticated && (
        <Routes>
          <Route
            path="/calendar"
            element={
              <Navigate
                from="/calendar"
                to="/"
              />
            }
          />
          <Route
            path="/list-by-date"
            element={
              <Navigate
                from="/list-by-date"
                to="/"
              />
            }
          />
          <Route
            path="/notification"
            element={
              <Navigate
                from="/notification"
                to="/"
              />
            }
          />
          <Route
            path="/all-friends"
            element={
              <Navigate
                from="/all-friends"
                to="/"
              />
            }
          />
          <Route
            path="/all-fowllowers"
            element={
              <Navigate
                from="/all-followers"
                to="/"
              />
            }
          />
          <Route
            path="/profile"
            element={
              <Navigate
                from="/profile"
                to="/"
              />
            }
          />
          <Route
            path="/"
            element={
              <Home
                authState={authState}
                authDispatch={dispatch}
              />
            }
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
        </Routes>
      )}

      {authState.isAuthenticated && (
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
          {/* here */}
          <Route
            path="/all-followers"
            element={<AllFollowers />}
          ></Route>
          {/* here */}
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
      )}
      {/* <ProfilePage />

        <LoginForm /> */}
    </Box>
  );
}

export default App;
