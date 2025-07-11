'use client';

import {
    Box,
    Container,
    Grid,
    Typography,
    Link,
    Button,
    IconButton,
    useTheme,
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import Image from 'next/image';

export default function Footer() {
    const theme = useTheme();

    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#2a1a11',
                color: '#fff',
                py: 6,
                px: 2,
                borderTop: '1px solid #333',
                position: 'relative',
                zIndex: 1,
                fontFamily: "'Segoe UI', sans-serif",
            }}
        >
            <Container maxWidth="lg">
                <Grid
                    container
                    alignItems="center"
                    justifyContent="space-between"
                    spacing={3}
                >

                    <Grid item xs={12} sm={4} display="flex" justifyContent="flex-start">
                        <Box sx={{ width: { xs: '120px', sm: '150px' } }}>
                            <Image
                                src="./footer-logo.webp"
                                alt="Nom Nom Tails"
                                width={170}
                                height={120}
                                style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                            />
                        </Box>
                    </Grid>


                    <Grid
                        item
                        xs={12}
                        sm={4}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                            gap: 2,
                            flexWrap: 'wrap',
                            textAlign: 'center',
                            mt: { xs: 2, sm: 0 },
                        }}
                    >
                        {['Home', 'About us', 'Products', 'Services', 'Privacy Policy'].map(
                            (item) => (
                                <Link
                                    key={item}
                                    href="#"
                                    underline="none"
                                    sx={{
                                        color: '#eee',
                                        fontSize: '1rem',
                                        fontWeight: 400,
                                        transition: 'all 0.3s ease',
                                        position: 'relative',
                                        '&:hover': {
                                            color: '#ff9800',
                                        },
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            left: 0,
                                            bottom: -4,
                                            width: '0%',
                                            height: '2px',
                                            backgroundColor: '#ff9800',
                                            transition: 'width 0.3s ease',
                                        },
                                        '&:hover::after': {
                                            width: '100%',
                                        },
                                    }}
                                >
                                    {item}
                                </Link>
                            )
                        )}
                    </Grid>


                    <Grid
                        item
                        xs={12}
                        sm={4}
                        display="flex"
                        justifyContent="flex-end"
                        alignItems="center"
                        sx={{ mt: { xs: 2, sm: 0 }, gap: 2 }}
                    >
                        <IconButton
                            sx={{
                                border: '2px solid white',
                                color: 'white',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
                                '&:hover': {
                                    backgroundColor: '#fff',
                                    color: '#2a1a11',
                                    transform: 'scale(1.1)',
                                },
                            }}
                        >
                            <InstagramIcon />
                        </IconButton>

                        <Button
                            variant="contained"
                            sx={{
                                background: 'linear-gradient(135deg, #ffffff, #f3f3f3)',
                                color: '#000',
                                borderRadius: '25px',
                                textTransform: 'none',
                                fontWeight: 600,
                                px: { xs: 2, sm: 4 },
                                py: 1.2,
                                boxShadow: '0px 4px 12px rgba(0,0,0,0.2)',
                                fontSize: '0.95rem',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    backgroundColor: '#f2f2f2',
                                    transform: 'scale(1.03)',
                                },
                            }}
                        >
                            Get in touch
                        </Button>
                    </Grid>
                </Grid>


                <Grid
                    container
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ mt: 6, flexWrap: 'wrap' }}
                >
                    <Typography
                        variant="body2"
                        sx={{
                            color: '#bbb',
                            fontSize: '0.9rem',
                            mb: { xs: 1, sm: 0 },
                            fontWeight: 300,
                        }}
                    >
                        © {new Date().getFullYear()} Nom Nom Tails. All rights reserved.
                    </Typography>

                    <Box display="flex" alignItems="center" gap={1} flexWrap="wrap">
                        <Typography
                            variant="body2"
                            sx={{ color: '#bbb', fontSize: '0.85rem', fontWeight: 300 }}
                        >
                            Powered by
                        </Typography>
                        <Box
                            sx={{
                                backgroundColor: '#fff',
                                color: '#000',
                                fontWeight: 600,
                                fontSize: '0.75rem',
                                px: 1.5,
                                py: 0.5,
                                borderRadius: '12px',
                                boxShadow: theme.shadows[3],
                            }}
                        >
                            yusuf
                        </Box>
                        <Typography
                            variant="body2"
                            sx={{ color: '#bbb', fontSize: '0.85rem', fontWeight: 300 }}
                        >
                            - Create a free website
                        </Typography>
                    </Box>
                </Grid>
            </Container>
        </Box>
    );
}
