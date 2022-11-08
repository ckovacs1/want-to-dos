import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ProfilePage from '../components/profile-page/user-profile';
import LoginForm from '../components/log-in/login-form';

export default function App() {
  return (
    <Router>
        <Switch>

          <Route path="/profile">
            <ProfilePage />
          </Route>

            <Route path='/login'>
                <LoginForm />   
            </Route>

        </Switch>
    </Router>
  );
}