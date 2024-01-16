import React from 'react'
import css from './footer.module.css';
import { Stack, Typography } from '@mui/material';
import FullWidthGrid from './FGrid';

export default function AppFooter() {
    console.log(css);
    return (
        <>
            <footer className={css.footer} >
                <div className={css.fw}>
                    <div className="h2 ma-logo-wrapper ma-logo-footer">
                        <Typography variant='h5' component='h1' >Filling Meals</Typography>
                        {/* <h2>Filling Meals</h2> */}
                    </div>
                    <nav className="ma-f-nav mb-1">
                        <ul className="ma-f-ul">
                            <li className="ma-f-li">
                                <a href="#" className="ma-f-link">Blog</a>
                            </li>
                            <li className="ma-f-li">
                                <a href="#" className="ma-f-link">Support</a>
                            </li>
                            <li className="ma-f-li">
                                <a href="#" className="ma-f-link">Contact</a>
                            </li>
                            <li className="ma-f-li">
                                <a href="#" className="ma-f-link">For Work</a>
                            </li>
                        </ul>

                        {/* <FullWidthGrid /> */}
                    </nav>
                    <div className="fb">
                        <Stack direction="row" spacing={2} >
                            <div className="terms">Terms</div>
                            <div className="terms">Privacy</div>
                            <div className="terms">© {(new Date()).getFullYear()}</div>
                        </Stack>
                    </div>
                </div>
            </footer>
        </>
    )
}
