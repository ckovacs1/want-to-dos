import React from 'react';
import { Box } from "@mui/material";
import NavBar from "./components/nav-bar/nav-bar";
import ProfilePage from "./components/profile-page/user-profile";
import { Notification } from "./components/notification";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/log-in/login-form';
import Home from './components/home/home';
import RegistrationForm from './components/log-in/registration-form';

function App() {
  return (
      <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: '15px'
      }}>
      
        <NavBar />

  
          
        <Router>
          <Routes>
            <Route path="/notification" element={<Notification />}></Route>
            <Route path="/profile" element={<ProfilePage />}> </Route>
            <Route path="/login" element={<LoginForm />}> </Route>
            <Route path='/register' element={<RegistrationForm />}> </Route>
            <Route path='/' element={<Home />}> </Route>
          </Routes> 
        </Router>

        {/* <ProfilePage />

        <LoginForm /> */}

      </Box>

  );
}

export default App;
