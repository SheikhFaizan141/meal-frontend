import { Box, Typography } from '@mui/material'
import React from 'react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

export default function NotFound() {
    const error = useRouteError();
    console.error(error);

    if (!isRouteErrorResponse(error)) {
        return (
            <div>
                <div>Oops</div>;
            </div>
        );
    }

    return (
        <Box minHeight={'100vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Box display={'flex'} >
                <Typography paddingBlock={0.5} paddingInline={1} borderRight={1} >{error.status}</Typography>
                <Typography paddingBlock={0.5} paddingInline={1} >{error.statusText}</Typography>
            </Box>
        </Box>
    )

}
