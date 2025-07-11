'use client';

import { Box, Grid, Typography, Card, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import { REASONS } from '@/constants/reasons';

export default function WhyChooseUs() {
    const theme = useTheme();
    const isBelow900 = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box sx={{ py: 10, px: 2, textAlign: 'center', backgroundColor: '#fff' }}>
            <Typography variant="h4" fontWeight="600" gutterBottom>
                Why Choose Nom Nom Tails?
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" sx={{ mb: 6 }}>
                Because Every Tail Deserves a Wag!
            </Typography>

            <Grid
                container
                spacing={0}
                justifyContent="center"
                wrap={isBelow900 ? 'wrap' : 'nowrap'}
                sx={{
                    rowGap: { xs: 5, sm: 6 },
                    columnGap: { xs: 5, sm: 5, md: 3 }, // ⬅ increased gap below 900px
                }}
            >
                {REASONS.map((reason, index) => (
                    <Grid item key={index}>
                        <Card
                            sx={{
                                p: 2,
                                border: '3px dotted #c6e4f6',
                                borderRadius: 4,
                                boxShadow: 'none',
                                height: '100%',
                                width: {
                                    xs: '190px',
                                    sm: '220px',
                                    md: '120px',
                                },
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                textAlign: 'center',
                                minHeight: 200,
                                mx: 'auto',
                            }}
                        >
                            <Image
                                src={reason.icon}
                                alt={reason.title}
                                width={isBelow900 ? 160 : 120}
                                height={isBelow900 ? 160 : 120}
                                style={{ marginBottom: '16px' }}
                            />
                            <Typography
                                variant="body1"
                                fontWeight="600"
                                sx={{
                                    fontSize: '1.1rem',
                                    textAlign: 'center',
                                    wordWrap: 'break-word',
                                    overflowWrap: 'break-word',
                                    whiteSpace: 'normal',
                                }}
                            >
                                {reason.title}
                            </Typography>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
