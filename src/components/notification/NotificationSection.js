import React from 'react';
import { getUserFullname } from '../../utils/profile';
import NotificationItem from './NotificationItem';
import './NotificationSection.css';

//refer to this part for error
function NotificationSection({ followData, inviteData }) {
  return (
    <div className="notification__date-section">
      <ul className="notification__date-list">
        {followData.map(item => {
          const { title, description: descriptionObj, read } = item;
          const { follower } = descriptionObj;
          const description = follower
            ? `${getUserFullname(
                follower.name,
              )} has followed you. ${getUserFullname(
                follower.name,
              )} can now invite you to his/her wantToDo.`
            : 'Error! The username is null.';

          return (
            <li
              className="notification__date-list-item"
              key={item._id}
            >
              <NotificationItem
                title={title}
                description={description}
                read={read}
              />
            </li>
          );
        })}
        {inviteData.map(item => {
          const { title, description: descriptionObj, read } = item;
          const { invitedBy } = descriptionObj;
          const description = invitedBy
            ? `${getUserFullname(
                invitedBy.name,
              )} has invited you to a WantToDo.`
            : 'Error! The username is null.';

          return (
            <li
              className="notification__date-list-item"
              key={item._id}
            >
              <NotificationItem
                title={title}
                description={description}
                read={read}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default NotificationSection;
