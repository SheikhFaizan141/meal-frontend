import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../AuthProvider';
import { Card } from '@mui/material';


export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);

        axios.defaults.withCredentials = true;
        axios.defaults.withXSRFToken = true;

        const csrf = await axios.get('http://localhost:8000/sanctum/csrf-cookie');

        const res = await axios.post('http://localhost:8000/api/login', formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    "Accept": "application/json"
                }
            });

        if (res.status !== 200) {
            console.error('login', res);
        }
        const data = res['data'];

        const isValid = await auth.signin(data);

        if (isValid) {
            navigate('/', { replace: true });
        }
    }

    return (
        <Container component="main" maxWidth="xs" sx={{ paddingBlockStart: '2rem', paddingBlockEnd: '2rem' }} >
            <Card>

                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                    paddingBlock={2}
                    paddingInline={2}
                >
                     <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box noValidate sx={{ mt: 1 }}>
                        <form onSubmit={handleSubmit} >
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
                                inputProps={{ minLength: 3 }}
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
                        </form>
                    </Box>
                </Box>
            </Card>
        </Container>
    );
}