import { Box, Button, Checkbox, Typography, TextField } from '@mui/material';

function LoginForm(){
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
                borderRadius: '25px 0px 0px 25px',

            }}>
                <Box>
                    <Typography variant='h3'> Welcome Back!</Typography>
                </Box>
                
            </Box>

            <Box
            sx={{
                width: '55%',
                border: '1px solid #143AA2',
                borderRadius: '0px 25px 25px 0px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                rowGap: '10px'
            }}>

                <Box>
                    <Typography variant='h4' sx={{color: '#04060D'}}> Log In </Typography>
                </Box>

                <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    rowGap: '15px',
                    width:'65%',
                    flexWrap: 'wrap'
                }}>

                    <TextField label="Email" variant="standard" />
                    <TextField label="Password" variant="standard" type='password'/>

                    <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        flexWrap: 'wrap'
                    }}>
                        <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'wrap'
                        }}>
                            <Checkbox/>
                            <Typography sx={{mt: '10px'}}> Remember Me</Typography>
                        </Box>

                        <Typography sx={{mt:'10px'}}> Forgot Password </Typography>
                    </Box>

                    <Button variant="contained"> Login </Button>
                </Box>
                <Typography sx={{mt:'85px'}}> Need an Account? Sign Up</Typography>
            </Box>
        </Box>
    );
}

export default LoginForm;