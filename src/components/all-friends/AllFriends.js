import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './AllFriends.css';
import { fetchFollowers } from './../../api/follow.js';
import { getFollowing } from './../../api/user.js';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

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
      <Link to="/profile">
        <Button
          variant="contained"
          size="small"
        >
          Back to Profile
        </Button>
      </Link>
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
