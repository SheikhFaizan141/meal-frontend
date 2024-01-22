import React from 'react'
import css from './footer.module.css';
import AppleSvg from '../assets/google-play.svg'
import GoogleSvg from '../assets/apple-store.svg'
import { Box, Button, Divider, Link, Stack, TextField, Typography } from '@mui/material';

export default function AppFooter() {
    return (
        <>
            <footer className={css.footer} >
                <div className="f-container">

                    <div style={{ paddingBlock: '2rem' }} className={css.fw}>
                        <Stack gap={'0.5rem'} spacing={1}  direction={{ xs: 'column', sm: 'column', md: 'row' }} alignItems={{ xs: 'center', sm: 'center' }} >

                            <Box  flex={'1 0 25%'} className="h2 ma-logo-wrapper ma-logo-footer">
                                <Typography variant='h4' component='h4' marginBlockEnd='0.75rem' >Filling Meals</Typography>
                                <Stack>
                                    <figure >
                                        <img src={GoogleSvg} />
                                    </figure>
                                    <figure>
                                        <img src={AppleSvg} />
                                    </figure>
                                </Stack>
                            </Box>


                            <Box flex={'1 0 25%'} component={'nav'} display={'flex'} gap={'1rem'}  >
                                <Stack flex={'1'}>
                                    <Typography color={'#e4e4e4'} component={'h4'} variant='body1' marginBlockEnd={'1rem'} >DISCOVER Meals</Typography>
                                    <Box display={'flex'} flexDirection={'column'} sx={{ fontSize: '1.25rem' }} component={'ul'} gap={1} >
                                        <Typography variant='body1' underline='none' color={'inherit'} component={Link} href='#'>
                                            About us
                                        </Typography>
                                        <Typography variant='body1' underline='none' color={'inherit'} component={Link} href='#'>
                                            About us
                                        </Typography>
                                        <Typography variant='body1' underline='none' color={'inherit'} component={Link} href='#'>
                                            About us
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Box>

                            <Box flex={'1 0 25%'} component={'nav'} display={'flex'} gap={'1rem'}>
                                <Stack >
                                    <Typography color={'#e4e4e4'} component={'h4'} variant='body1' marginBlockEnd={'1rem'} >DISCOVER Meals</Typography>
                                    <Box display={'flex'} flexDirection={'column'} sx={{ fontSize: '1.25rem' }} component={'ul'} gap={1} >
                                        <Typography variant='body1' underline='none' color={'inherit'} component={Link} href='#'>
                                            About us
                                        </Typography>
                                        <Typography variant='body1' underline='none' color={'inherit'} component={Link} href='#'>
                                            About us
                                        </Typography>
                                        <Typography variant='body1' underline='none' color={'inherit'} component={Link} href='#'>
                                            About us
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Box>

                            <Box flex={'1 0 25%'} display="flex" gap='0.5rem'>
                                <Stack spacing={1} component={'form'} method='post' >
                                    <TextField color='primary' id="outlined-basic" label="Email" variant="outlined" />
                                    <Button type='submit' sx={{ alignSelf: 'start' }} variant="contained" color='primary'>Subscribe</Button>
                                </Stack>
                            </Box>

                        </Stack>
                    </div>
                    <Divider light />
                    <Box className="fb" paddingBlock={'1rem'}>
                        <Stack direction="row" spacing={2} flex={'1'} justifyContent={'center'}>
                            <Typography variant='body2' component={'div'} className="terms">© {(new Date()).getFullYear()}  Meals. All Rights Reserved</Typography>
                        </Stack>
                    </Box>
                </div>
            </footer>
        </>
    )
}
