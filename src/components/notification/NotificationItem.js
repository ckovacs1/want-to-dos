import React from 'react';
import './NotificationItem.css';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function NotificationItem({ title, description, read }) {
  return (
    <>
      <div className="notification__date-is-read">
        {!read && (
          <FiberManualRecordIcon sx={{ color: '#143aa2', width: '16px' }} />
        )}
      </div>
      <div className="notification__date-item-content">
        <div className="notification__date-content">
          <div className="notification__date-content-title">{title}</div>
          <div className="notification__date-content-description">
            {description}
          </div>
        </div>
      </div>
    </>
  );
}

export default NotificationItem;
