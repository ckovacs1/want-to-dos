import {  Box, Typography } from '@mui/material';
import pfp from './i.png';


const imgStyle = {
    borderRadius: '50%'
}

function MiniProfile(){
    return(
        <Box>
           <Box 
           sx={{
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center'
           }}>
                <img src={pfp} alt={""} style={imgStyle} width={'100px'} />

                <Typography > Charles Leclerc </Typography>
            </Box>
        </Box>
    );
};

export default MiniProfile;