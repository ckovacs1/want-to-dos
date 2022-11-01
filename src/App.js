import { Box } from "@mui/material";
import NavBar from "./components/nav-bar";
import MiniProfile from "./components/profile-page/mini-profile";
import ProfilePage from "./components/profile-page/user-profile";

function App() {
  return (
    <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      rowGap: '15px'
    }}>
      <NavBar />

      <ProfilePage />

     
    </Box>
  );
}

export default App;
