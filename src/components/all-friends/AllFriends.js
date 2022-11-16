import { Typography } from '@mui/material';
import React, { useState } from 'react';
import './AllFriends.css';

const data = [
  {
    id: 1,
    profileImg:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
    name: 'Tiffany Lee',
  },
  {
    id: 2,
    profileImg:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
    name: 'Tiffany Lee',
  },
  {
    id: 3,
    profileImg:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
    name: 'Tiffany Lee',
  },
  {
    id: 4,
    profileImg:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
    name: 'Tiffany Lee',
  },
  {
    id: 5,
    profileImg:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
    name: 'Tiffany Lee',
  },
  {
    id: 6,
    profileImg:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
    name: 'Tiffany Lee',
  },
  {
    id: 7,
    profileImg:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
    name: 'Tiffany Lee',
  },
  {
    id: 8,
    profileImg:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
    name: 'Tiffany Lee',
  },
  {
    id: 9,
    profileImg:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
    name: 'Tiffany Lee',
  },
];

function AllFriends() {
  const [friends, setFriends] = useState(data);

  return (
    <div className="allfriends__container">
      <div className="allfriends__wrapper">
        <Typography
          variant="h5"
          className="primary"
        >
          All Friends
        </Typography>
        <div className="allfriends__content-wrapper">
          {friends.map(({ id, profileImg, name }) => (
            <div
              className="allfriends__content-item"
              key={id}
            >
              <img
                src={profileImg}
                className="allfriends__content-item-profile"
              />
              <div className="allfriends__content-item-name">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllFriends;
