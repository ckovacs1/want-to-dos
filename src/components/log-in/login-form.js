import { EmailTwoTone } from '@mui/icons-material';
import {
  Box,
  Button,
  Checkbox,
  Typography,
  TextField,
  Alert,
} from '@mui/material';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../api/user';
import setAuthToken from '../../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

function LoginForm({ authDispatch }) {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const { email, password } = inputs;

  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [loginFail, setLoginFail] = useState(false);

  const loginUser = async (email, password) => {
    try {
      const response = await login({ email, password });

      const { token } = response;

      localStorage.setItem('jwtToken', token);

      setAuthToken(token);

      // Decode JWT
      const decoded = jwt_decode(token);

      authDispatch({ type: 'AUTHENTICATED', user: decoded });

      navigate('/');
    } catch (err) {
      setLoginFail(true);
    }
  };

  const onClickLogin = () => {
    loginUser(email, password);
  };

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
          borderRadius: '25px 0px 0px 25px',
        }}
      >
        <Box>
          <Typography variant="h3"> Welcome Back!</Typography>
        </Box>
      </Box>

      <Box
        sx={{
          width: '55%',
          border: '1px solid #143AA2',
          borderRadius: '0px 25px 25px 0px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          rowGap: '10px',
        }}
      >
        <Box>
          <Typography
            variant="h4"
            sx={{ color: '#04060D' }}
          >
            {' '}
            Log In{' '}
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            rowGap: '15px',
            width: '65%',
            flexWrap: 'wrap',
          }}
        >
          <TextField
            label="Email"
            variant="standard"
            name="email"
            onChange={onChange}
            value={email}
          />
          <TextField
            label="Password"
            variant="standard"
            name="password"
            onChange={onChange}
            value={password}
            type="password"
          />

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              flexWrap: 'wrap',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}
            >
              <Checkbox />
              <Typography sx={{ mt: '10px' }}> Remember Me</Typography>
            </Box>

            <Typography sx={{ mt: '10px' }}> Forgot Password </Typography>
          </Box>
          {loginFail && (
            <Alert severity="error">
              {' '}
              Wrong ID or Password. Please check again.{' '}
            </Alert>
          )}
          <Button
            variant="contained"
            onClick={onClickLogin}
          >
            {' '}
            Login{' '}
          </Button>
        </Box>
        <Typography sx={{ mt: '85px' }}>
          {' '}
          Need an Account? <Link to="/register">Sign Up</Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default LoginForm;
