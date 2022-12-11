import { useState } from 'react';
import { Avatar, Button, Box, TextField, Typography } from '@mui/material';
import MiniProfile from './mini-profile';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import { fetchMe } from '../../api/user';
import { getUsersTodos } from '../../api/todo';

function ProfilePage() {
  const [ name, setName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ email, setEmail ] = useState('');

  const[ following, setFollowing ] = useState(0);
  const[ followers, setFollowers ] = useState(0);

  const [ taskCount, setTaskCount ] = useState(0);
  const [ completeTasksCount, setCompleteTasksCount ] = useState(0);
  const [ inProgressTasksCount, setInProgressTasksCount] = useState(0);

  function initialsProfilePic(name) {
    return {
      sx: {
        bgcolor: '#143AA2',
        width: '100px',
        height: '100px',
        fontSize: '40pt',
        mt: '20px'
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }
  
  const getLoggedInUser = async() => {
    const { data } = await fetchMe();
    setName(data.name.first);
    setLastName(data.name.last);
    setEmail(data.email);
    setFollowing(data.following.length);
    setFollowers(data.followers.length);
    //console.log(data)
  }

  const getLoggedInUsersTodos = async() => {
    const { data } = await getUsersTodos();
    setTaskCount(data.length);
    
    let completed = 0;
    let inProgress = 0;
    data.forEach((task) =>{
      if(task.complete){
        completed++;
      } else {
        inProgress++;
      }
    })
    setCompleteTasksCount(completed);
    setInProgressTasksCount(inProgress);
  }

  getLoggedInUser();
  getLoggedInUsersTodos();

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
          height: '90vh',
          display: 'flex',
          flexDirection: 'column',
          rowGap: '30px',
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            height: '50vh',
            borderRadius: '25px',
            width: '65%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            backgroundColor: '#D3D4D7',
            overflow: 'auto'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              rowGap: '10px',
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
              <Avatar {...initialsProfilePic(name + " " + lastName)} />
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
                  {name + " " + lastName}
                </Typography>

                <Typography
                  sx={{
                    fontSize: '14pt',
                  }}
                >
                  {email}
                </Typography>
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

            <Box
            sx={{
              display: 'flex',
              marginTop: '10px',
              justifyContent: 'center'
            }}>
              <Typography sx={{fontSize: '18pt'}}> Analytics</Typography>
            </Box>

            <Typography> Total Want to Dos: {taskCount}</Typography>
            <Typography> In Progress Want to Dos: {inProgressTasksCount}</Typography>
            <Typography> Completed Want to Dos: {completeTasksCount} </Typography>


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


      <Box
        sx={{
          width: '60%',
          height: '86vh',
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          rowGap: '15px',
          ml: '-80px',
        }}
      >
        <Box
          sx={{
            width: '65%',
            display: 'flex',
            flexDirection: 'column',
            rowGap: '10px',
            justifyContent: 'center',
          }}
        >
 
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              alignContent: 'center',
              columnGap: '15px',
              textAlign: 'center',
              fontSize: '22px',
            }}
          >
            Following ({following})
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

          <Box
            sx={{
              my: 1,
              textAlign: 'center',
              fontSize: '22px',
              mt: '30px'
            }}
          >
            Followers ({followers})
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
      </Box>
    </Box>
  );
}

export default ProfilePage;
