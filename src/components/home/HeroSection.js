'use client';

import { Box, Button, Container, Typography, Grow } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useEffect, useState } from 'react';

export default function HeroSection({ isMobile }) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setShow(true), 100);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <Grow in={show} timeout={1000}>
            <Container
                sx={{
                    pt: { xs: 8, sm: 4, md: 6 },
                    pb: 8,
                    mb: { xs: 12, md: 18, lg: 20 },
                    color: 'white',
                    textAlign: isMobile ? 'center' : 'left',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: isMobile ? 'center' : 'flex-start',
                }}
            >
                {/* Headings */}
                <Typography
                    variant={isMobile ? 'h4' : 'h2'}
                    fontWeight={500}
                    gutterBottom
                    sx={{ letterSpacing: '0.5px', lineHeight: 1.2 }}
                >
                    Loved by Dogs,
                </Typography>

                <Typography
                    variant={isMobile ? 'h4' : 'h2'}
                    fontWeight={500}
                    gutterBottom
                    sx={{
                        position: 'relative',
                        display: 'inline-block',
                        lineHeight: 1.2,
                        letterSpacing: '0.5px',
                    }}
                >
                    Trusted by
                    <Box
                        component="span"
                        sx={{
                            position: 'absolute',
                            bottom: 4,
                            left: 0,
                            width: '100%',
                            height: 14,
                            background: 'linear-gradient(to right, orange, gold)',
                            borderRadius: 2,
                            zIndex: -1,
                            transform: 'skew(-12deg)',
                        }}
                    />
                </Typography>

                <Typography
                    variant={isMobile ? 'h4' : 'h2'}
                    fontWeight={500}
                    gutterBottom
                    sx={{ letterSpacing: '0.5px', lineHeight: 1.2 }}
                >
                    Feeders
                </Typography>

                {/* Subtext */}
                <Typography
                    variant="body1"
                    sx={{
                        maxWidth: 500,
                        mt: 1,
                        mb: 1,
                        fontSize: '1.05rem',
                        color: '#f5f5f5',
                        lineHeight: 1.7,
                    }}
                >
                    Fresh, home-style meals for street and pet dogs in Bangalore — starting at just ₹30/kg.
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        maxWidth: 500,
                        fontSize: '1.05rem',
                        color: '#f5f5f5',
                        lineHeight: 1.7,
                    }}
                >
                    Cooked with care. Delivered with love. Devoured with joy.
                </Typography>

                {/* CTA Button */}
                <Button
                    variant="contained"
                    sx={{
                        mt: 2,
                        bgcolor: 'white',
                        color: 'black',
                        fontWeight: 'bold',
                        px: 4,
                        py: 1.6,
                        fontSize: '1rem',
                        borderRadius: '30px',
                        textTransform: 'none',
                        transition: 'all 0.4s ease',
                        boxShadow: '0 0 12px rgba(255,165,0,0.4)',
                        '&:hover': {
                            bgcolor: '#f4f4f4',
                            transform: 'scale(1.05)',
                            boxShadow: '0 0 16px rgba(255,165,0,0.5)',
                        },
                        '&:focus': {
                            outline: 'none',
                            boxShadow: '0 0 0 4px rgba(255,165,0,0.3)',
                        },
                    }}
                    endIcon={<ArrowForwardIcon />}
                >
                    Start Now
                </Button>
            </Container>
        </Grow>
    );
}
