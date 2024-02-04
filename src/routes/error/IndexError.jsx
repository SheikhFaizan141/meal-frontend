import { Box, Typography } from '@mui/material'
import React from 'react'

export default function IndexError() {

    return (
        <Box minHeight={'100vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Box display={'flex'} >
                <Typography paddingBlock={0.5} paddingInline={1} borderRight={1} >404</Typography>
                <Typography paddingBlock={0.5} paddingInline={1} >NOT FOUND</Typography>
            </Box>
        </Box>
    )
}
