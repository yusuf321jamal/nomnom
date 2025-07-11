'use client';

import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';

export default function AboutFounder() {
    return (
        <Box component="section" sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#fff' }}>
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

                    <Box
                        sx={{
                            width: '85%',
                            height: { xs: 300, md: 500 },
                            position: 'relative',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                        }}
                    >
                        <Image
                            src="./founder-img.webp"
                            alt="Dipak Shodhan with a dog"
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </Box>


                    <Box sx={{ pr: { md: 2 } }}>
                        <Typography
                            variant="h3"
                            component="h2"
                            sx={{
                                fontWeight: 600,
                                mb: 2,
                                fontSize: { xs: '2rem', md: '2.8rem' },
                                lineHeight: 1.3,
                            }}
                        >
                            About Dipak <br /> Shodhan
                        </Typography>

                        <Typography sx={{ fontSize: '1rem', color: '#555', mb: 2 }}>
                            Founder of Nom Nom Tails & Sahakar Nagar Animal Patrol (SNAP)
                        </Typography>

                        <Typography sx={{ fontSize: '1.05rem', color: '#444', lineHeight: 1.75, mb: 1.5 }}>
                            Dipak is a passionate animal welfare advocate, animal rescuer, and community mobilizer. Beyond
                            his work with Nom Nom Tails and SNAP, he brings with him{' '}
                            <strong>over a decade of experience in global financial markets</strong>, having worked across
                            international business operations and investment sectors.
                        </Typography>

                        <Typography sx={{ fontSize: '1.05rem', color: '#444', lineHeight: 1.75 }}>
                            Armed with an MBA from Manipal University, Dubai, and a professional certification from CISI
                            (UK) in Wealth & Investment Management, Dipak blends sharp business insight with deep empathy.
                            His unique background fuels his mission — running Nom Nom Tails with the same dedication and
                            discipline he brought to boardrooms around the world.<br></br><br></br>From spreadsheets to street dogs, Dipak leads with heart, ensuring every bowl served is filled with love and purpose.
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
