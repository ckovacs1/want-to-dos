import React from "react";
import {Box, Typography} from '@mui/material';
import { Link, BrowserRouter as Router } from 'react-router-dom';

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
                    <Router>

                        <Typography> Home </Typography>
                        <Typography> Progress </Typography>
                        <Link to="/profile"> Profile </Link>
                        <Typography> Settings </Typography>
                    </Router>
                </Box>

            </Box>
        </Box>
    );
}

export default NavBar;