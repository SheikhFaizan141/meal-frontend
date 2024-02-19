// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Form, Link as RouterLink } from 'react-router-dom'
import { useState } from 'react';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// TODO remove, this demo shouldn't need to reset the theme.

// const defaultTheme = createTheme();

// {
//     "email": "eve.holt@reqres.in",
//     "password": "cityslicka"
// }

async function csrfRequest() {
    const token = await fetch('http://localhost:8000/sanctum/csrf-cookie', {
        mode: 'cors',
        credentials: 'include',
        headers: {
            Accept: 'application/json',
            Referer: 'localhost:5173'
        }
    });


    console.log(token);
    return null;
}

export async function action({ request }) {
    // const formData = await request.formData();

    await csrfRequest();

    const formData = new FormData();
    formData.append('email', 'faizanfarooq@gmail.com');
    formData.append('password', 'onetwo');

    const login = await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
            Accept: 'application/json',
            Referer: 'localhost:5173',
            'X-XSRF-TOKEN': 'eyJpdiI6InRqNytNTENtUWxkTlRCd1VrVmJVbGc9PSIsInZhbHVlIjoidFBGUkNIUW1QQ0ZEMGh1cVBwL0ZGaFBWbERoYjAycmp4TVZVV01ET3hVaFBUWnlGa1Jqb2dybEtjakJzY3Vpd0RQb29ha3doeVAyTG00a21DNUhCQjFzeWNlSXZDQk04b0RqVm5DcE1lYUpGRjBlYkZwWmR1WlRVWXAycGo4WTkiLCJtYWMiOiJlY2EyYzliOGU2NzQ0OGMwNDIxNjhjZWE3Njg2MTNjZDE1ZTJjNjc4M2Q5ODI4ODY1YjU3MDBhODgxOTZjYzcwIiwidGFnIjoiIn0='
        },
        body: formData
    });


    const loginData = await login.json();

    console.log(loginData);

    return null;
}


export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    return (
        // <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs" sx={{ paddingBlockStart: '2rem', paddingBlockEnd: '2rem' }} >
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box noValidate sx={{ mt: 1 }}>
                    <Form encType={'application/x-www-form-urlencoded'} method={'POST'} action='/signin'>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.currentTarget.value)}
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            // component={pass}
                            inputProps={{ minLength: 3 }}
                            // variant=''
                            fullWidth
                            id="password"
                            label="Password"
                            name="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.currentTarget.value)}
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox name='remember' checked={remember} onChange={(e) => setRemember(!remember)} color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link component={RouterLink} to={'/signin'} variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link component={RouterLink} to={'/signup'} variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Form>
                </Box>
            </Box>
            {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
        </Container>
        // {/* </ThemeProvider> */}
    );
}