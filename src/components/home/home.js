import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Home({ authState }) {
  const { isAuthenticated } = authState;
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        width: '80%',
        margin: 'auto',
        marginTop: '2%',
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '75vh',
          background: '#143AA2',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          alignContent: 'center',
          borderRadius: '25px 25px 25px 25px',
        }}
      >
        <Box
          sx={{
            textAlign: 'center',
          }}
        >
          <Typography variant="h3"> Welcome to Want-To-Do!</Typography>
          <Typography variant="h5"> Join us in improving our lives!</Typography>
          {!isAuthenticated && (
            <Typography
              sx={{
                '& > a': {
                  color: '#FFFFFF',
                },
              }}
            >
              <Link to="/register">Register Now</Link> /{' '}
              <Link to="/login">Sign In</Link>
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
}
export default Home;
