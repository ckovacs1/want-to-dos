import { Box } from "@mui/material";
import NavBar from "./components/nav-bar";
import ProfilePage from "./components/profile-page/user-profile";
import { Notification } from "./components/notification";

function App() {
  return (
    <div>
      <Notification />
    </div>
    
    // <Box
    // sx={{
    //   display: 'flex',
    //   flexDirection: 'column',
    //   rowGap: '15px'
    // }}>
    //   <NavBar />

    //   <ProfilePage />

     
    // </Box>
  );
}

export default App;
