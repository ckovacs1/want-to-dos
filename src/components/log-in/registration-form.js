import { Box, Button, Typography, TextField, Alert } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../api/user';

function RegistrationForm() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = inputs;

  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [registerFail, setRegisterFail] = useState(false);

  const register = async userData => {
    try {
      const response = await registerUser(userData);

      navigate('/login');
    } catch (err) {
      console.log(err);
      setRegisterFail(true);
    }
  };

  const onClickRegister = () => {
    register({ name, email, password, password2 });
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
        <Box
          sx={{
            textAlign: 'center',
          }}
        >
          <Typography variant="h3"> Welcome to Want To Do!</Typography>
          <Typography variant="h5"> Join us in improving our lives!</Typography>
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
            Register{' '}
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
            label="Name"
            variant="standard"
            name="name"
            onChange={onChange}
            value={name}
          />
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
          />
          <TextField
            label="Confirm Password"
            variant="standard"
            name="password2"
            onChange={onChange}
            value={password2}
          />

          {registerFail && (
            <Alert severity="error">
              {' '}
              Oops! Something went wrong. Please try again.{' '}
            </Alert>
          )}

          <Button
            variant="contained"
            onClick={onClickRegister}
          >
            {' '}
            Register{' '}
          </Button>
        </Box>
        <Typography sx={{ mt: '85px' }}>
          {' '}
          Already Have An Account? Sign In
        </Typography>
      </Box>
    </Box>
  );
}

export default RegistrationForm;
