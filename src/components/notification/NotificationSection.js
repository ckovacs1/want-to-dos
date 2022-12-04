import React from 'react';
import NotificationItem from './NotificationItem';
import './NotificationSection.css';

function NotificationSection({ data }) {
  return (
    <div className="notification__date-section">
      <ul className="notification__date-list">
        {data.map(item => (
          <li
            className="notification__date-list-item"
            key={item._id}
          >
            <NotificationItem data={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NotificationSection;
