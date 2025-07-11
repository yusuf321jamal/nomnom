'use client';

import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';

export default function Description() {
    return (
        <Box
            component="section"
            sx={{
                py: { xs: 6, md: 10 },
                background: 'linear-gradient(to bottom, #fffbe7, #ffffff)',
            }}
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                        gap: { xs: 6, md: 8 },
                        alignItems: 'center',
                        px: { xs: 3, md: 0 },

                    }}
                >
                    {/* Left Text */}
                    <Box sx={{ pr: 8 }}>
                        <Typography
                            variant="h3"
                            component="h2"
                            sx={{
                                fontWeight: 600,
                                mb: 3,
                                fontSize: { xs: '2.2rem', md: '3rem' },
                                lineHeight: 1.3,
                            }}
                        >
                            From Our Heart to{' '}
                            <Box component="span" sx={{ color: 'orange' }}>
                                Their Bowl
                            </Box>
                        </Typography>

                        <Typography
                            paragraph
                            sx={{
                                fontSize: '1.05rem',
                                lineHeight: 1.75,
                                color: '#444',
                                mb: 1.5,
                            }}
                        >
                            <strong>Nom Nom Tails </strong> isn’t just about dog food — it’s about heart.
                        </Typography>

                        <Typography
                            paragraph
                            sx={{
                                fontSize: '1.05rem',
                                lineHeight: 1.75,
                                color: '#444',
                                mb: 1.5,
                            }}
                        >
                            We’re a kindness kitchen based in <strong>Sahakar Nagar, Bangalore</strong>, lovingly cooking fresh, affordable meals for pet dogs and community streeties every single day.
                        </Typography>

                        <Typography
                            paragraph
                            sx={{
                                fontSize: '1.05rem',
                                lineHeight: 1.75,
                                color: '#444',
                                mb: 1.5,
                            }}
                        >
                            What started with Dipak Shodhan feeding a few hungry dogs outside his home soon turned into a full-fledged mission. With the power of compassion (and a lot of chicken!), Dipak created a community-led initiative that now nourishes hundreds of tails across the city.
                        </Typography>

                        <Typography
                            paragraph
                            sx={{
                                fontSize: '1.05rem',
                                lineHeight: 1.75,
                                color: '#444',
                                mb: 1.5,
                            }}
                        >
                            Whether you feed one loyal pup or a full street pack, you’re part of our mission — and we’re right beside you with bowls full of goodness.
                        </Typography>

                    </Box>

                    {/* Right Image */}
                    <Box
                        sx={{
                            width: '100%',
                            height: { xs: 300, md: 500 },
                            position: 'relative',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                        }}
                    >
                        <Image
                            src="./Dog5.jpeg"
                            alt="Dog eating food"
                            fill
                            style={{
                                objectFit: 'cover',
                            }}
                        />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
