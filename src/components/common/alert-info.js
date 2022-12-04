import { Box } from '@mui/material';
import React from 'react';

function AlertInfo({ content }) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: 2,
        backgroundColor: '#eeeeee',
        m: 2,
        borderRadius: 2,
      }}
    >
      {content}
    </Box>
  );
}

export default AlertInfo;
