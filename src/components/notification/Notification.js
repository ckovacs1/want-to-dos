import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { fetchFollowers } from '../../api/follow';
import {
  fetchFollowNotifications,
  fetchInviteNotifications,
  updateFollowNotificationToRead,
} from '../../api/notification';
import { fetchAllUsers } from '../../api/user';
import { checkDataIsEmpty } from '../../utils/array';
import { checkToday } from '../../utils/date';
import Addwanttodo from '../add-want-to-do/Addwanttodo';
import AlertInfo from '../common/alert-info';
import './Notification.css';

import NotificationSection from './NotificationSection';

function Notification() {
  const [notiFollowData, setNotiFollowData] = useState([]);
  const [notiInviteData, setNotiInviteData] = useState([]);

  // Update notifation
  const updateAllNotificationToRead = async ids => {
    for (let i = 0; i < ids.length; i++) {
      const id = ids[i];
      await updateFollowNotificationToRead(id);
    }

    setNotiFollowData(notiFollowData.map(noti => ({ ...noti, read: true })));
  };

  const onClickAllReadButton = () => {
    updateAllNotificationToRead();
  };

  // Fetching server data
  const getFollowNotifications = async () => {
    try {
      const followers = await getFollowers();
      const { data: notifications } = await fetchFollowNotifications();
      console.log(`notification: ${notifications.length}`);
      for (let i = 0; i < notifications.length; i++) {
        const followerId = notifications[i].description.follower;
        const follower = followers.find(
          follower => follower._id === followerId,
        );

        notifications[i].description.follower = follower;
      }

      setNotiFollowData(notifications || []);
    } catch (e) {
      if (e.response.data.error === 'Notification not found') {
        setNotiFollowData([]);
      }
    }
  };

  const getFollowers = async () => {
    const { followers } = await fetchFollowers();
    console.log(`followers: ${followers}`);
    return followers;
  };

  const getInviteNotifications = async () => {
    try {
      const users = await getUsers();
      const { data: notifications } = await fetchInviteNotifications();

      for (let i = 0; i < notifications.length; i++) {
        const invitedBy = notifications[i].description.invitedBy;
        const inviteUser = users.find(user => user._id === invitedBy);

        notifications[i].description.invitedBy = inviteUser;
      }

      setNotiInviteData(notifications || []);
    } catch (e) {
      if (e.response.data.error === 'Notification not found') {
        setNotiInviteData([]);
      }
    }
  };

  const getUsers = async () => {
    const { data } = await fetchAllUsers();
    return data;
  };

  useEffect(() => {
    getFollowNotifications();
    getInviteNotifications();
  }, []); // called when mounted

  // Filter notifications
  const todayFollowNotifications = notiFollowData.filter(noti =>
    checkToday(noti.description.date),
  );
  const pastFollowNotifications = notiFollowData.filter(
    noti => !checkToday(noti.description.date),
  );

  const todayInviteNotifications = notiInviteData.filter(noti =>
    checkToday(noti.description.date),
  );
  const pastInviteNotifications = notiInviteData.filter(
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
        </div>

        <div className="notification__date-wrapper">
          <div className="notification__date-header">
            <div className="notification__date-text">Today</div>
          </div>
          {checkDataIsEmpty(todayFollowNotifications) &&
          checkDataIsEmpty(todayInviteNotifications) ? (
            <AlertInfo content="No notifications yet. We'll let you know if there's something new." />
          ) : (
            <NotificationSection
              followData={todayFollowNotifications}
              inviteData={todayInviteNotifications}
            />
          )}
        </div>
        {(!checkDataIsEmpty(pastFollowNotifications) ||
          !checkDataIsEmpty(pastInviteNotifications)) && (
          <div className="notification__date-wrapper">
            <div className="notification__date-header">
              <div className="notification__date-text">Past</div>
            </div>
            <NotificationSection
              followData={pastFollowNotifications}
              inviteData={pastInviteNotifications}
            />
          </div>
        )}
      </div>
      <div className="notification__add-wrapper"></div>
    </div>
  );
}

export default Notification;
