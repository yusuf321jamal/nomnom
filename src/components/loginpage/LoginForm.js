'use client';

import React from 'react';
import {
    Box,
    TextField,
    Typography,
    Button,
    Link,
    Stack,
    useTheme,
} from '@mui/material';

export default function LoginForm() {
    const theme = useTheme();

    const sharedInputSx = {
        height: 40,
        fontSize: '0.9rem',
    };

    const sharedRootSx = {
        borderRadius: 2,
        '&.Mui-focused fieldset': {
            borderColor: 'orange',
            boxShadow: '0 0 0 2px #ffe0b2',
        },
    };

    return (
        <Box
            sx={{
                minHeight: '70vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: '#fff',
                px: 2,
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    maxWidth: 300,
                }}
            >

                <Typography fontWeight="medium" mb={1}>
                    Email
                </Typography>
                <TextField
                    fullWidth
                    placeholder="Email"
                    variant="outlined"
                    InputProps={{ sx: sharedInputSx }}
                    sx={{
                        mb: 3,
                        '& .MuiOutlinedInput-root': sharedRootSx,
                    }}
                />


                <Stack direction="row" justifyContent="space-between" alignItems="center" mb={1}>
                    <Typography fontWeight="medium">Password</Typography>
                    <Link href="#" underline="hover" color="orange">
                        Reset Password
                    </Link>
                </Stack>


                <TextField
                    fullWidth
                    placeholder="Password"
                    type="password"
                    variant="outlined"
                    InputProps={{ sx: sharedInputSx }}
                    sx={{
                        mb: 4,
                        '& .MuiOutlinedInput-root': sharedRootSx,
                    }}
                />

                {/* Log In Button */}
                <Button
                    fullWidth
                    variant="contained"
                    sx={{
                        backgroundColor: 'orange',
                        color: 'black',
                        fontWeight: 'bold',
                        borderRadius: '999px',
                        py: 1.2,
                        textTransform: 'none',
                        mb: 2,
                        '&:hover': {
                            backgroundColor: '#ff9800',
                        },
                    }}
                >
                    Log in
                </Button>


                <Box textAlign="center">
                    <Link href="#" underline="hover" color="orange">
                        Don’t have an account?
                    </Link>
                </Box>

            </Box>
        </Box>
    );
}
