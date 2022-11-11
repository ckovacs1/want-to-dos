import { Button, Box, TextField, Typography } from '@mui/material';
import MiniProfile from './mini-profile';
import pfp from './i.png';
import AddIcon from '@mui/icons-material/Add';

function ProfilePage(){

    const imgStyle = {
        borderRadius: '50%'
    }

    return(
        <Box 
        sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center'
        }}>

            <Box 
            sx={{
                width: '60%',
                height: '89vh',
                display: 'flex',
                flexDirection: 'row',
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Box
                sx={{
                    height: '75vh',
                    borderRadius: '25px',
                    width: '65%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    backgroundColor: '#D3D4D7'
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <Box
                        sx={{
                            mt: '5%',
                            display: 'block',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            maxWidth: '125%',
                            height:'auto'
                        }}>

                            <img src={pfp} alt={""} style={imgStyle} width={'250px'} />
                        </Box>
                        
                        <Box>
                            <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                mt: '5%'
                            }}>
                                
                                <Typography
                                sx={{
                                    fontSize: '14pt',
                                }}>
                                    Charles Leclerc
                                </Typography>

                                <Typography
                                sx={{
                                    fontSize: '14pt',
                                }}>
                                    cleclerc@gmail.com
                                </Typography>
                            </Box>

                            <Box
                            sx={{
                                width: '70%',
                                marginLeft: '15%',
                                marginTop: '25px',
                                textAlign: 'center'
                            }}>
                                <Typography>
                                    Charles Perceval Leclerc is a Monégasque racing driver, 
                                    currently racing in Formula One for Scuderia Ferrari. 
                                    He won the GP3 Series championship in 2016 and the FIA Formula 2 
                                    Championship in 2017.
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
                            mt: '5%'
                        }}>
                        
                            <Button variant="contained">
                                Edit Profile
                            </Button>
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
                ml: '-80px'
            }}>
                <Box 
                sx={{
                    mb: '-35px'
                }}>
                    Friends
                </Box>
                <Box 
                sx={{
                    height: '30vh',
                    borderRadius: '25px',
                    width: '65%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    backgroundColor: '#D3D4D7'
                }}>

                    <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        overflow: 'hidden',
                        columnGap: '30px',
                        alignItems: 'center'
                    }}>
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
                    height: '15vh',
                    borderRadius: '25px',
                    width: '65%',
                    display: 'flex',
                    flexDirection: 'column',
                    columnGap: '50px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#D3D4D7'
                }}>
                <Typography> Find a Friend</Typography>
                    <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row'
                    }}>
                        
                        <TextField variant="standard" label="Friend's Email" />
                        <AddIcon sx={{mt: '15px'}}/>
                    </Box>
                </Box>

                
            </Box>

        </Box>
    );
}

export default ProfilePage;