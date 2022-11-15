import { Button } from '@mui/material';
import React from 'react';
import Addwanttodo from '../add-want-to-do/Addwanttodo';
import './Notification.css';

import NotificationSection from './NotificationSection';

function Notification() {
  return (
    <div className="notification__container">
      <div className="notification__wrapper">
        <div className="notification__date-wrapper">
          <div className="notification__date-header">
            <div className="notification__date-text">Today</div>
          </div>
          <NotificationSection />
        </div>
        <div className="notification__date-wrapper">
          <div className="notification__date-header">
            <div className="notification__date-text">Yesterday</div>
          </div>
          <NotificationSection />
        </div>
      </div>
      <div className="notification__add-wrapper"></div>
    </div>
  );
}

export default Notification;
