import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './AllFollowers.css';
import { fetchFollowing } from './../../api/follow.js';
import { getFollowers } from './../../api/user.js';
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

function AllFollowers() {
  const [followers, setFollowers] = useState([]);
  useEffect(() => {
    getFollowerList();
  }, []);

  const getFollowerList = async () => {
    const data = await getFollowers();
    console.log(data.followers[0].name);
    let d = [];
    data.followers.map(item => d.push(item.name));
    // for (let i = 0; i < data.following.length; i++) {
    //   d.push(data.following[i].email);
    // }
    console.log(d);
    setFollowers(d);
  };

  return (
    <div className="allfollowers__container">
      <Link to="/profile">
        <Button
          variant="contained"
          size="small"
        >
          Back to Profile
        </Button>
      </Link>
      <div className="allfollowers__wrapper">
        <Typography
          variant="h5"
          className="primary"
        >
          Followers
        </Typography>
        <div className="allfollowers__content-wrapper">
          {followers.map(item => (
            <div
              className="allfollowers__content-item"
              key={item.first}
            >
              <Avatar {...initialsProfilePic(item.first + ' ' + item.last)} />
              <div className="allfollowers__content-item-name">
                {item.first}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllFollowers;
