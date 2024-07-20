import React from 'react'
import AppleSvg from '../assets/google-play.svg'
import GoogleSvg from '../assets/apple-store.svg'
import { Box, Button, Divider, Link, Stack, TextField, Typography } from '@mui/material';
import LogoUrl from '../assets/logo.png'
import { Link as RouterLink } from 'react-router-dom';

export default function AppFooter() {
    return (
        <>
            <Box component={'footer'} bgcolor={'GRAY'} color={'#fff'} paddingBlockStart={7} paddingBlockEnd={2}>
                <div className="f-container">
                    <Box paddingBlockEnd={5.25}>
                        <Stack gap={'0.5rem'} spacing={1} direction={{ xs: 'column', sm: 'column', md: 'row' }} alignItems={{ xs: 'center', sm: 'center' }} >
                            <Box flex={'1 0 25%'} className="h2 ma-logo-wrapper ma-logo-footer">
                                <Box component={RouterLink} to={'/'} marginBlockEnd='0.75rem' minWidth={180} width={'10vw'}  >
                                    <img className="img" src={LogoUrl} alt="" />
                                </Box>
                                <Stack gap={1}>
                                    {/* <figure >
                                        <img src={GoogleSvg} />
                                    </figure>
                                    <figure>
                                        <img src={AppleSvg} />
                                    </figure> */}
                                </Stack>
                            </Box>

                            <Box flex={'1 0 25%'} component={'nav'} display={'flex'} gap={'1rem'} paddingInline={1}>
                                <Stack >
                                    <Typography color={'#e4e4e4'} component={'h4'} variant='h5' marginBlockEnd={1.75} >Contact us</Typography>
                                    <Box display={'flex'} flexDirection={'column'} sx={{ fontSize: '1.25rem' }} component={'ul'} gap={1} >
                                        <Typography variant='body1' marginBlockEnd={1} underline='none' color={'inherit'} component={Link} href='#'>
                                            Help & Support
                                        </Typography>
                                        <Typography variant='body1' marginBlockEnd={1} underline='none' color={'inherit'} component={Link} href='#'>
                                            Partner with us
                                        </Typography>
                                        <Typography variant='body1' marginBlockEnd={1} underline='none' color={'inherit'} component={Link} href='#'>
                                            Ride with us
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Box>

                            <Box flex={'1 0 25%'} component={'nav'} display={'flex'} gap={'1rem'} paddingInline={1} >
                                <Stack flex={'1'}>
                                    <Typography color={'#e4e4e4'} component={'h4'} variant='h5' marginBlockEnd={1.75}>Legal</Typography>
                                    <Box display={'flex'} flexDirection={'column'} sx={{ fontSize: '1.25rem' }} component={'ul'} gap={1} >
                                        <Typography variant='body1' marginBlockEnd={1} underline='none' color={'inherit'} component={Link} href='#'>
                                            Terms & Conditions
                                        </Typography>
                                        <Typography variant='body1' marginBlockEnd={1} underline='none' color={'inherit'} component={Link} href='#'>
                                            Cookie Policy
                                        </Typography>
                                        <Typography variant='body1' marginBlockEnd={1} underline='none' color={'inherit'} component={Link} href='#'>
                                            Privacy Policy
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Box>

                            <Box flex={'1 0 25%'} display="flex" gap='0.5rem' paddingInline={1}>
                                <Stack b direction={'row'} component={'form'} method='post' >
                                    <TextField color='primary' defaultValue={''} id="outlined-basic" label="Email" variant="outlined" />
                                    <Button type='submit' sx={{ alignSelf: 'start' }} variant="contained" color='primary'>Subscribe</Button>
                                </Stack>
                            </Box>
                        </Stack>
                    </Box>
                    <Divider light />
                    <Box className="fb" paddingBlock={'1rem'}>
                        <Stack direction="row" spacing={2} flex={'1'} justifyContent={'center'}>
                            <Typography variant='body2' component={'div'} className="terms">© {(new Date()).getFullYear()}Meals. All Rights Reserved</Typography>
                        </Stack>
                    </Box>
                </div>
            </Box>
        </>
    )
}
