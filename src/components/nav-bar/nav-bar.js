import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function NavBar({ authState }) {
  const { isAuthenticated } = authState;
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
          width: '80%',
          margin: 'auto',
          height: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
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
            <Link to="/">WTD</Link>
          </Typography>
        </Box>

        {isAuthenticated && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              columnGap: '20px',
              color: '#143AA2',
            }}
          >
            <Link to="/list-by-date">
              <Typography> List </Typography>
            </Link>
            <Link to="/profile">
              <Typography> Profile </Typography>
            </Link>
            <Link to="/notification">
              <Typography> Notification </Typography>
            </Link>
            <Link to="/calendar">
              <Typography> Calendar </Typography>
            </Link>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default NavBar;
