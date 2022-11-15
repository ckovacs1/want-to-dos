import React from 'react';
import NotificationItem from './NotificationItem';
import './NotificationSection.css';

function NotificationSection() {
  return (
    <div className="notification__date-section">
      <ul className="notification__date-list">
        <li className="notification__date-list-item">
          <NotificationItem />
        </li>
        <li className="notification__date-list-item">
          <NotificationItem />
        </li>
        <li className="notification__date-list-item">
          <NotificationItem />
        </li>
      </ul>
    </div>
  );
}

export default NotificationSection;
