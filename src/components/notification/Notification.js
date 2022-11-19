import { Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import Addwanttodo from '../add-want-to-do/Addwanttodo';
import './Notification.css';

import NotificationSection from './NotificationSection';

const data = [
  {
    title: 'today',
    data: [
      {
        id: 1,
        title: 'Incoming Friend Request',
        description: 'You have a new friend request from Requester Requeston.',
        isRead: false,
      },
      {
        id: 2,
        title: 'Incoming Friend Request',
        description: 'You have a new friend request from Requester Requeston.',
        isRead: true,
      },
      {
        id: 3,
        title: 'Incoming Friend Request',
        description: 'You have a new friend request from Requester Requeston.',
        isRead: false,
      },
    ],
  },
  {
    title: 'yesterday',
    data: [
      {
        id: 4,
        title: 'Incoming Friend Request',
        description: 'You have a new friend request from Requester Requeston.',
        isRead: false,
      },
      {
        id: 5,
        title: 'Incoming Friend Request',
        description: 'You have a new friend request from Requester Requeston.',
        isRead: true,
      },
    ],
  },
];

function Notification() {
  const [notiData, setNotiData] = useState(data);

  const onClickAllReadButton = () => {
    setNotiData([
      ...notiData.map(section => ({
        ...section,
        data: [...section.data.map(noti => ({ ...noti, isRead: true }))],
      })),
    ]);
  };

  return (
    <div className="notification__container">
      <div className="notification__wrapper">
        <div className="notification__header">
          <Typography
            variant="h5"
            className="primary"
          >
            Notifications
          </Typography>

          <Button
            variant="contained"
            onClick={onClickAllReadButton}
          >
            Mark all as read
          </Button>
        </div>

        {notiData.map(({ title, data }) => (
          <div
            className="notification__date-wrapper"
            key={title}
          >
            <div className="notification__date-header">
              <div className="notification__date-text">{title}</div>
            </div>
            <NotificationSection data={data} />
          </div>
        ))}
      </div>
      <div className="notification__add-wrapper"></div>
    </div>
  );
}

export default Notification;
