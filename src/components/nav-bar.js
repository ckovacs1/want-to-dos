import {Box, Typography} from '@mui/material';

function NavBar(){
    return(
        <Box
        sx={{
            height: '50px',
            margin: '0px',
            padding: '0px'
        }}>
            <Box
            sx={{
                display: 'flex',
                height: '100%',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center'
            }}>
                <Box>
                    <Typography 
                    sx={{
                        color: '#143AA2',
                        fontSize: '18pt'
                    }}> 
                        WTD 
                    </Typography>
                </Box>

                <Box> 

                </Box>

                <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    columnGap: '20px',
                    color: '#143AA2',
                }}>
                    <Typography> Home </Typography>
                    <Typography> Progress </Typography>
                    <Typography> Profile </Typography>
                    <Typography> Settings </Typography>

                </Box>

            </Box>
        </Box>
    );
}

export default NavBar;