import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchMe } from '../../api/user';
import setAuthToken from '../../utils/setAuthToken';
import { REMEMBER_ME_KEY } from '../log-in/login-form';

function Home({ authState, authDispatch }) {
  const checkRememberMe = async () => {
    // Check rememberMe
    const rememberMe = localStorage.getItem(REMEMBER_ME_KEY) === 'true';
    if (rememberMe) {
      // Set token on axios
      const token = localStorage.getItem('jwtToken');
      setAuthToken(token);

      // Get my user info
      const { data: user } = await fetchMe();

      authDispatch({ type: 'AUTHENTICATED', user });
    }
  };

  // Check rememberMe
  useEffect(() => {
    checkRememberMe();
  }, []);

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
          {!isAuthenticated ? (
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
          ) : (
            <Typography
              sx={{
                color: '#FFFFFF',
                cursor: 'pointer',
              }}
              onClick={() => authDispatch({ type: 'NOT_AUTHENTICATED' })}
            >
              Logout
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
}
export default Home;
