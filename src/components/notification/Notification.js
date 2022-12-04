import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { fetchFollowers } from '../../api/follow';
import {
  fetchNotifications,
  updateNotificationToRead,
} from '../../api/notification';
import { checkDataIsEmpty } from '../../utils/array';
import { checkToday } from '../../utils/date';
import Addwanttodo from '../add-want-to-do/Addwanttodo';
import AlertInfo from '../common/alert-info';
import './Notification.css';

import NotificationSection from './NotificationSection';

function Notification() {
  const [notiData, setNotiData] = useState([]);

  // Update notifation
  const updateAllNotificationToRead = async ids => {
    for (let i = 0; i < ids.length; i++) {
      const id = ids[i];
      await updateNotificationToRead(id);
    }

    setNotiData(notiData.map(noti => ({ ...noti, read: true })));
  };

  const onClickAllReadButton = () => {
    updateAllNotificationToRead();
  };

  // Fetching server data
  const getNotifications = async () => {
    try {
      const followers = await getFollowers();
      const notifications = await fetchNotifications();

      for (let i = 0; i < notifications.length; i++) {
        const followerId = notifications[i].description.follower;
        const follower = followers.find(
          follower => follower._id === followerId,
        );

        notifications[i].description.follower = follower;
      }

      setNotiData(notifications);
    } catch (e) {
      if (e.response.data.error === 'Notification not found') {
        setNotiData([]);
      }
    }
  };

  const getFollowers = async () => {
    const data = await fetchFollowers();
    return data;
  };

  useEffect(() => {
    getNotifications();
  }, []); // called when mounted

  // Filter notifications
  const todayNotifications = notiData.filter(noti =>
    checkToday(noti.description.date),
  );
  const pastNotifications = notiData.filter(
    noti => !checkToday(noti.description.date),
  );

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

        <div className="notification__date-wrapper">
          <div className="notification__date-header">
            <div className="notification__date-text">Today</div>
          </div>
          {checkDataIsEmpty(todayNotifications) ? (
            <AlertInfo content="No notifications yet. We'll let you know if there's something new." />
          ) : (
            <NotificationSection data={todayNotifications} />
          )}
        </div>
        {!checkDataIsEmpty(pastNotifications) && (
          <div className="notification__date-wrapper">
            <div className="notification__date-header">
              <div className="notification__date-text">Past</div>
            </div>
            <NotificationSection data={pastNotifications} />
          </div>
        )}
      </div>
      <div className="notification__add-wrapper"></div>
    </div>
  );
}

export default Notification;
