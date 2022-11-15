import React from 'react';
import './NotificationItem.css';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

function NotificationItem() {
  return (
    <>
      <CheckBoxOutlineBlankIcon />
      <div className="notification__date-item-content">
        <div className="notification__date-content-left">
          <div className="notification__date-content-title">
            New Notification
          </div>
          <div className="notification__date-content-description">
            Notification description
          </div>
        </div>
        <div className="notification__date-content-right"></div>
      </div>
    </>
  );
}

export default NotificationItem;
