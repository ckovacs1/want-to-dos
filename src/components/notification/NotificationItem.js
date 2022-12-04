import React from 'react';
import './NotificationItem.css';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function NotificationItem({ data }) {
  const { title, description, read } = data;
  const { follower } = description;
  return (
    <>
      <div className="notification__date-is-read">
        {!read && (
          <FiberManualRecordIcon sx={{ color: '#143aa2', width: '16px' }} />
        )}
      </div>
      <div className="notification__date-item-content">
        <div className="notification__date-content-left">
          <div className="notification__date-content-title">{title}</div>
          <div className="notification__date-content-description">
            {follower.name} has followed you. {follower.name} can now invite you
            to his/her wantToDo.
          </div>
        </div>
        <div className="notification__date-content-right"></div>
      </div>
    </>
  );
}

export default NotificationItem;
