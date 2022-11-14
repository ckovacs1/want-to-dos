import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Box
      sx={{
        height: '50px',
        margin: '0px',
        padding: '0px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          height: '100%',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <Box>
          <Typography
            sx={{
              color: '#143AA2',
              fontSize: '18pt',
            }}
          >
            WTD
          </Typography>
        </Box>

        <Box></Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            columnGap: '20px',
            color: '#143AA2',
          }}
        >
          <Link to="/">
            <Typography> Home </Typography>
          </Link>
          <Link to="/list-by-date">
            <Typography> List </Typography>
          </Link>
          <Link to="#">
            <Typography> Progress </Typography>
          </Link>
          <Link to="/profile">
            <Typography> Profile </Typography>
          </Link>
          <Link to="/notification">
            <Typography> Notification </Typography>
          </Link>
          <Link to="#">
            <Typography> Settings </Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default NavBar;
