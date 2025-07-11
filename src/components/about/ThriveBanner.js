'use client';

import { Box, Typography } from '@mui/material';

export default function ThriveBanner() {
    return (
        <Box
            component="section"
            sx={{
                bgcolor: '#ff8400',
                py: { xs: 10, md: 16 },
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: { xs: 120, md: 200 },
            }}
        >
            <Typography
                variant="h2"
                sx={{
                    fontWeight: 400,
                    fontSize: { xs: '2rem', md: '3rem', lg: '3.5rem' },
                    color: '#fff',
                }}
            >
                Help Dogs Thrive, Not Just Survive
            </Typography>
        </Box>
    );
}
