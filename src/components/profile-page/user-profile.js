import { Button, Box, Typography } from '@mui/material';
import pfp from './i.png';

function ProfilePage(){

    const imgStyle = {
        borderRadius: '50%'
    }

    return(
        <Box 
        sx={{
            border: '1px solid blue',
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
                    backgroundColor: '#F5F5F5'
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
                                    fontSize: '14pt'
                                }}>
                                    Charles Leclerc
                                </Typography>

                                <Typography
                                sx={{
                                    fontSize: '14pt'
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
                                    Charles Marc Hervé Perceval Leclerc is a Monégasque racing driver, 
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
                display: 'flex',
                flexDirection: 'column',
                width: '35%'
            }}>
            
                <Box 
                sx={{
                    border: '1px solid green'
                }}>
                    Friends
                </Box>

                <Box 
                sx={{
                    border: '1px solid black'
                }}>
                    Find Friends
                </Box>
            </Box>

        </Box>
    );
}

export default ProfilePage;