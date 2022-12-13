import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './AllFriends.css';
import { fetchFollowing } from './../../api/follow.js';
import { getFollowing } from './../../api/user.js';
import { Avatar } from '@mui/material';

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

function initialsProfilePic(name) {
  return {
    sx: {
      bgcolor: '#143AA2',
      width: '100px',
      height: '100px',
      fontSize: '40pt',
      mt: '20px',
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

function AllFriends() {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    getFollowingList();
  }, []);

  const getFollowingList = async () => {
    const data = await getFollowing();
    console.log(data.following[0].name);
    let d = [];
    data.following.map(item => d.push(item.name));
    // for (let i = 0; i < data.following.length; i++) {
    //   d.push(data.following[i].email);
    // }
    console.log(d);
    setFriends(d);
  };

  return (
    <div className="allfriends__container">
      <div className="allfriends__wrapper">
        <Typography
          variant="h5"
          className="primary"
        >
          Following
        </Typography>
        <div className="allfriends__content-wrapper">
          {friends.map(item => (
            <div
              className="allfriends__content-item"
              key={item.first}
            >
              <Avatar {...initialsProfilePic(item.first + ' ' + item.last)} />
              <div className="allfriends__content-item-name">{item.first}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllFriends;
