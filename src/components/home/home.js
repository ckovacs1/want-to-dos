import { Box, Typography } from '@mui/material';

function Home (){
    return(
        <Box
        sx={{
            display: 'flex',
            flexDirection: 'row',
            width:'80%',
            margin: 'auto',
            marginTop: '2%',
        }}>
            <Box
            sx={{
                width: '100%',
                height: '75vh',
                background: "#143AA2",
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                alignContent: 'center',
                borderRadius: '25px 25px 25px 25px',

            }}>
                <Box
                sx={{
                    textAlign:'center'
                }}>
                    <Typography variant='h3'> Welcome to Want-To-Do!</Typography>
                    <Typography variant='h5'> Join us in improving our lives!</Typography>
                    <Typography> Register Now / Sign In </Typography>

                </Box>
                
            </Box>
        </Box>
    )
}
export default Home;