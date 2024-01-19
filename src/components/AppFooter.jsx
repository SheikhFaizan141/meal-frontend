import React from 'react'
import css from './footer.module.css';
import AppleSvg from '../assets/google-play.svg'
import GoogleSvg from '../assets/apple-store.svg'
import { Box, Button, Divider, Link, Stack, TextField, Typography } from '@mui/material';
import FooterNav from './FooterNav'

export default function AppFooter() {
    console.log(css);
    return (
        <>
            <footer className={css.footer} >
                <div className="f-container">

                    <div style={{ paddingBlock: '2rem' }} className={css.fw}>
                        <Stack spacing={'1'} direction="row"  >

                            <Box flex={'1'} className="h2 ma-logo-wrapper ma-logo-footer">
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


                            <Box component={'nav'} display={'flex'} gap={'1rem'} flex={'1'} >
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

                                <Stack flex={1}>

                                    <Box component={'ul'}>
                                        <Typography component={'h4'} variant='body1' >DISCOVER Meals</Typography>
                                        <Link>
                                            <Typography variant='body2' component={'a'} href='#' className="f-link">DISCOVER Meals</Typography>
                                        </Link>
                                        <Link>
                                            <Typography variant='body2' component={'a'} href='#' className="f-link">DISCOVER Meals</Typography>
                                        </Link>
                                        <Link>
                                            <Typography variant='body2' component={'a'} href='#' className="f-link">DISCOVER Meals</Typography>
                                        </Link>
                                        <Link>
                                            <Typography variant='body2' component={'a'} href='#' className="f-link">DISCOVER Meals</Typography>
                                        </Link>
                                    </Box>
                                </Stack>
                            </Box>

                            <Box flex={'1'} display="flex" gap='0.5rem' justifyContent={'flex-end'} varient="form" >
                                <Box flex={'1'} display='flex' gap='0.5rem' flexDirection='column' component={'form'} method='post' >
                                    <TextField color='primary' id="outlined-basic" label="Email" variant="outlined" />
                                    <Button type='submit' sx={{ alignSelf: 'start' }} variant="contained" color='primary'>Subscribe</Button>
                                </Box>
                            </Box>

                        </Stack>
                    </div>
                    <Divider light />
                    <Box className="fb" paddingBlock={'1rem'}>
                        <Stack direction="row" spacing={2} flex={'1'} justifyContent={'center'}>
                            <Typography className="terms">© {(new Date()).getFullYear()}  Meals. All Rights Reserved</Typography>
                            {/* <div > {(new Date()).getFullYear()}  Meals. All Rights Reserved</div> */}
                        </Stack>
                    </Box>
                </div>
            </footer>
        </>
    )
}
