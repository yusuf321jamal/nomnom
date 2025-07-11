'use client';
import React from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    Stack,
    Link,
    Container,
    Paper,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Image from 'next/image';

export default function ContactSection() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box
            sx={{
                background: 'linear-gradient(to right, #fdfcfb, #e2d1c3)',
                py: { xs: 4, md: 8 },
            }}
        >
            <Container maxWidth="lg">
                <Typography
                    variant="h4"
                    textAlign="center"
                    fontWeight={700}
                    mb={6}
                    sx={{
                        position: 'relative',
                        display: 'inline-block',
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            width: '60%',
                            height: '4px',
                            backgroundColor: 'orange',
                            bottom: -6,
                            left: '20%',
                            borderRadius: 2,
                        },
                    }}
                >
                    Get in Touch
                </Typography>

                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                        gap: { xs: 5, md: 8 },
                        alignItems: 'start',
                        px: { xs: 2, md: 0 },
                    }}
                >

                    <Box>
                        <Image
                            src="./Dog13.jpeg"
                            alt="Dogs"
                            width={isMobile ? 300 : 400}
                            height={isMobile ? 180 : 220}
                            priority
                            style={{ width: '100%', height: 'auto', borderRadius: 16, objectFit: 'cover' }}
                        />
                        <Typography variant="h5" sx={{ mt: 4, fontWeight: 600 }}>
                            We’re here for you — and your streetie squad!
                        </Typography>
                        <Typography sx={{ mt: 2, fontSize: '1rem', color: '#444' }}>
                            Whether you’re placing an order, have questions about our food, or just want to chat — we’d love to hear from you.
                        </Typography>

                        <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 4 }}>
                            <EmailIcon fontSize="small" />
                            <Link href="mailto:nomnomtails@gmail.com" underline="hover" color="orange">
                                nomnomtails@gmail.com
                            </Link>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 1 }}>
                            <PhoneIcon fontSize="small" />
                            <Typography variant="body2">+91 99168 69595</Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 1 }}>
                            <LocationOnIcon fontSize="small" />
                            <Typography variant="body2">
                                2456, 11th Cross, 13th Main, E Block, Sahakar Nagar, Bangalore 560092
                            </Typography>
                        </Stack>
                    </Box>


                    <Paper
                        elevation={3}
                        sx={{
                            p: { xs: 3, md: 4 },
                            borderRadius: 4,
                            backdropFilter: 'blur(10px)',
                            backgroundColor: 'rgba(255, 255, 255, 0.7)',
                            boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                        }}
                    >
                        <Box component="form" noValidate autoComplete="off">
                            <Stack spacing={3}>
                                {[
                                    { label: 'Your Name *', defaultValue: '' },
                                    { label: 'Phone Number *', defaultValue: '+91' },
                                    { label: 'Your Email *', defaultValue: '' },
                                    { label: 'Subject *', defaultValue: '' },
                                ].map((field, index) => (
                                    <TextField
                                        key={index}
                                        label={field.label}
                                        defaultValue={field.defaultValue}
                                        variant="outlined"
                                        fullWidth
                                        size="small"
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: 2,
                                                bgcolor: '#fff',
                                                transition: '0.3s',
                                                '&:hover fieldset': { borderColor: 'orange' },
                                                '&.Mui-focused fieldset': { borderColor: 'orange' },
                                            },
                                        }}
                                    />
                                ))}

                                <TextField
                                    label="Your Question *"
                                    variant="outlined"
                                    multiline
                                    rows={4}
                                    fullWidth
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: 2,
                                            bgcolor: '#fff',
                                            '&:hover fieldset': { borderColor: 'orange' },
                                            '&.Mui-focused fieldset': { borderColor: 'orange' },
                                        },
                                    }}
                                />

                                <Box textAlign="right">
                                    <Button
                                        variant="contained"
                                        sx={{
                                            bgcolor: 'orange',
                                            borderRadius: 999,
                                            px: 4,
                                            py: 1,
                                            fontWeight: 'bold',
                                            fontSize: '0.95rem',
                                            '&:hover': {
                                                bgcolor: '#ff9800',
                                            },
                                        }}
                                    >
                                        Submit
                                    </Button>
                                </Box>
                            </Stack>
                        </Box>
                    </Paper>
                </Box>
            </Container>
        </Box>
    );
}
