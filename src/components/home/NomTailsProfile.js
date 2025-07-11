'use client';
import React from 'react';
import {
    Box,
    Container,
    Typography,
    Divider,
    Button,
} from '@mui/material';
import Image from 'next/image';
import InstagramIcon from '@mui/icons-material/Instagram';


const imageUrls = [
    './Dog1.jpeg',
    './Dog2.jpeg',
    './Dog3.jpeg',
    './Dog4.jpeg',
    './Dog5.jpeg',
    './Dog6.jpeg',
];

export default function NomTailsProfile() {
    return (
        <Box sx={{ bgcolor: '#fafafa', minHeight: '100vh', py: 2 }}>
            <Container maxWidth="md">

                <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>

                    <Box display="flex" alignItems="center">
                        <Box
                            sx={{
                                width: 86,
                                height: 86,
                                borderRadius: '50%',
                                p: '3px',
                                background:
                                    'conic-gradient(from 180deg at 50% 50%, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5, #feda75)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mr: 2,
                            }}
                        >
                            <Box
                                sx={{
                                    width: 80,
                                    height: 80,
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    border: '2px solid white',
                                    position: 'relative',
                                    transition: 'transform 0.3s ease',
                                    '& img': {
                                        transition: 'transform 0.3s ease',
                                    },
                                    '&:hover img': {
                                        transform: 'scale(1.1)',
                                    },
                                }}
                            >
                                <Image
                                    src="./logo-nom-nom.jpeg"
                                    alt="Nom Nom Tails"
                                    width={80}
                                    height={80}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                    }}
                                />
                            </Box>
                        </Box>

                        <Box>
                            <Typography variant="h6">Nom Nom Tails</Typography>
                            <Typography variant="body2">33 followers</Typography>
                            <Typography variant="body2">23 posts</Typography>
                        </Box>
                    </Box>


                    <InstagramIcon
                        sx={{
                            fontSize: 40,
                            color: '#C13584',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                color: '#e95950',
                                filter: 'drop-shadow(0 0 6px rgba(225, 89, 80, 0.5))',
                            },
                        }}
                    />
                </Box>


                <Divider sx={{ my: 2 }} />


                <Container
                    maxWidth="md"
                    disableGutters
                    sx={{ my: 1, px: 0 }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            rowGap: 0.2,
                            columnGap: 0.2,
                            justifyContent: 'center',
                        }}
                    >
                        {imageUrls.map((src, index) => (
                            <Box
                                key={index}
                                sx={{
                                    width: '25%',
                                    flexShrink: 1,
                                    overflow: 'hidden',
                                    '&:hover img': {
                                        transform: 'scale(1.05)',
                                    },
                                }}
                            >
                                <Image
                                    src={src}
                                    alt={`Image ${index + 1}`}
                                    width={300}
                                    height={200}
                                    style={{
                                        width: '100%',
                                        height: '210px',
                                        display: 'block',
                                        objectFit: 'cover',
                                        transition: 'transform 0.3s ease',
                                    }}
                                />
                            </Box>
                        ))}
                    </Box>
                </Container>


                <Box display="flex" justifyContent="center" mt={2}>

                </Box>
            </Container>
        </Box>
    );
}
