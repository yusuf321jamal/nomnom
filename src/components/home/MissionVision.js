import { Box, Grid, Typography } from '@mui/material';
import FlagIcon from '@mui/icons-material/Flag';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function MissionVision() {
    return (
        <Box sx={{ backgroundColor: '#ff8000', color: 'white', py: 8, textAlign: 'center' }}>
            <Grid container spacing={4} justifyContent="center" alignItems="flex-start" sx={{ gap: '100px', maxWidth: '1100px', margin: '0 auto' }}>
                <Grid item xs={12} md={6}>
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <FlagIcon sx={{ fontSize: 50, mb: 2 }} />
                        <Typography variant="h4" fontWeight="500" gutterBottom>
                            Our Mission
                        </Typography>
                        <Typography variant="body1" sx={{ maxWidth: 380, lineHeight: 1.6 }}>
                            To make sure no dog in Bangalore goes hungry — streetie or spoiled.
                        </Typography>
                        <br />
                        <Typography variant="body1" sx={{ maxWidth: 380, mt: 1, lineHeight: 1.6, fontWeight: 500 }}>
                            We cook <strong>affordable and accessible community dog food</strong> so feeders,
                            rescuers, and pet parents can nourish every wagging tail with ease.
                        </Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <VisibilityIcon sx={{ fontSize: 50, mb: 2 }} />
                        <Typography variant="h4" fontWeight="500" gutterBottom>
                            Our Vision
                        </Typography>
                        <Typography variant="body1" sx={{ maxWidth: 380, lineHeight: 1.6 }}>
                            A city where kindness fills every bowl and no stray is left behind.
                        </Typography>
                        <br />
                        <Typography variant="body1" sx={{ maxWidth: 380, mt: 1, lineHeight: 1.6 }}>
                            To create a kinder Bangalore where no dog is left behind — with fresh,
                            affordable meals reaching every street and every tail.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}