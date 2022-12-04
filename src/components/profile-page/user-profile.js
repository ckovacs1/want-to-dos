import { useState } from 'react';
import { Button, Box, TextField, Typography } from '@mui/material';
import MiniProfile from './mini-profile';
import pfp from './i.png';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ProfilePage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');

  const imgStyle = {
    borderRadius: '50%',
  };

  function getProfiles(inputName) {
    axios.get('http://localhost:8080/profile').then(res => {
      const users = res.data;

      for (let i = 0; i < Object.keys(users.profiles).length; i++) {
        if (users.profiles[i].name === inputName) {
          setName(users.profiles[i].name);
          setEmail(users.profiles[i].email);
          setBio(users.profiles[i].bio);
        }
      }
    });
  }

  getProfiles('Nicolas Latifi');

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: '60%',
          height: '89vh',
          display: 'flex',
          flexDirection: 'row',
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            height: '75vh',
            borderRadius: '25px',
            width: '65%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            backgroundColor: '#D3D4D7',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Box
              sx={{
                mt: '5%',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                maxWidth: '125%',
                height: 'auto',
              }}
            >
              <img
                src={pfp}
                alt={''}
                style={imgStyle}
                width={'250px'}
              />
            </Box>

            <Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  mt: '5%',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '14pt',
                  }}
                >
                  {name}
                </Typography>

                <Typography
                  sx={{
                    fontSize: '14pt',
                  }}
                >
                  {email}
                </Typography>
              </Box>

              <Box
                sx={{
                  width: '70%',
                  marginLeft: '15%',
                  marginTop: '25px',
                  textAlign: 'center',
                }}
              >
                <Typography>{bio}</Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                alignContent: 'center',
                mt: '5%',
              }}
            >
              <Button variant="contained">Edit Profile</Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          width: '60%',
          height: '89vh',
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          rowGap: '5%',
          ml: '-80px',
        }}
      >
        <Box
          sx={{
            width: '65%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'end',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Link to="/all-friends">
              <Button
                variant="contained"
                size="small"
              >
                View all
              </Button>
            </Link>
          </Box>
          <Box
            sx={{
              my: 1,
              textAlign: 'center',
              fontSize: '22px',
            }}
          >
            Friends
          </Box>
          <Box
            sx={{
              height: '30vh',
              borderRadius: '25px',
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              backgroundColor: '#D3D4D7',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                flexWrap: 'wrap',
                overflow: 'hidden',
                columnGap: '30px',
                alignItems: 'center',
              }}
            >
              <MiniProfile />
              <MiniProfile />

              <MiniProfile />
              <MiniProfile />
              <MiniProfile />
              <MiniProfile />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            height: '15vh',
            borderRadius: '25px',
            width: '65%',
            display: 'flex',
            flexDirection: 'column',
            columnGap: '50px',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#D3D4D7',
          }}
        >
          <Typography> Find a Friend</Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <TextField
              variant="standard"
              label="Friend's Email"
            />
            <AddIcon sx={{ mt: '15px' }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ProfilePage;
