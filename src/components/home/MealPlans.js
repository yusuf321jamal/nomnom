import { Box, Grid, Typography, Button } from '@mui/material';

export default function MealPlans() {
    return (
        <Box sx={{ py: 10, px: 2, backgroundColor: '#fff', textAlign: 'center' }}>
            <Typography variant="h3" fontWeight={500}>
                Discover Our
            </Typography>

            <Box sx={{ display: 'inline-block', position: 'relative', mb: 2 }}>
                <Box sx={{
                    position: 'absolute',
                    bottom: 6,
                    left: 0,
                    width: '100%',
                    height: '40%',
                    bgcolor: '#ff8000',
                    zIndex: -1,
                    borderRadius: '4px',
                    transform: 'skewX(-10deg)',
                }} />
                <Typography variant="h3" fontWeight={700} sx={{ px: 1 }}>
                    Meal Plans
                </Typography>
            </Box>

            <Typography variant="h6" fontWeight="bold" sx={{ mt: 2, mb: 1 }}>
                Tail–wagging food for every kind of feeder.
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 700, mx: 'auto', mb: 6 }}>
                Whether you're caring for one loyal pup or a whole streetie crew, our meals are freshly
                cooked, budget-friendly, and delivered right to your doorstep.
            </Typography>

            <Grid container spacing={4} justifyContent="center" alignItems="stretch">
                <Grid item xs={12} md={4}>
                    <Box sx={{ width: 320, mx: 'auto', height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="h2" color="#ff8000" fontWeight="bold" sx={{ mb: 2, textAlign: 'left' }}>
                            1
                        </Typography>
                        <Box sx={{ borderTop: '1px solid #ddd', pt: 2, textAlign: 'left', flexGrow: 1 }}>
                            <Typography variant="h5" fontWeight={500} gutterBottom>
                                Choose Your Bowl
                            </Typography>
                            <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
                                🐾 Classic Chicken Bowl (Non-Veg)
                            </Typography>
                            <ul style={{ paddingLeft: '1.2em', marginBottom: 0 }}>
                                <li>Everyday goodness for street and pet dogs alike.</li>
                                <li>Chicken, Chicken Skin, Feet, Rice, Turmeric & Coconut Oil</li>
                                <li>Balanced, belly-friendly, and full of tail-wagging nutrition.</li>
                            </ul>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Box sx={{ width: 320, mx: 'auto', height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="h2" color="#ff8000" fontWeight="bold" sx={{ mb: 2, textAlign: 'left' }}>
                            2
                        </Typography>
                        <Box sx={{ borderTop: '1px solid #ddd', pt: 2, textAlign: 'left', flexGrow: 1 }}>
                            <Typography variant="h5" fontWeight={500} gutterBottom>
                                Pick Your Plan
                            </Typography>
                            <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
                                📅 Weekly Subscription
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 1 }}>
                                ₹30/kg (Classic Chicken Bowl)
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 1 }}>
                                No one-time orders.
                            </Typography>
                            <Typography variant="body2">
                                Only weekly subscriptions — we focus on consistent, reliable feeding that makes a real
                                impact.
                            </Typography>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Box sx={{ width: 320, mx: 'auto', height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="h2" color="#ff8000" fontWeight="bold" sx={{ mb: 2, textAlign: 'left' }}>
                            3
                        </Typography>
                        <Box sx={{ borderTop: '1px solid #ddd', pt: 2, textAlign: 'left', flexGrow: 1 }}>
                            <Typography variant="h5" fontWeight={500} gutterBottom>
                                Get It Delivered
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 1 }}>
                                We deliver around Sahakar Nagar and areas across North Bangalore.
                            </Typography>
                            <Typography variant="subtitle1" fontWeight="bold" sx={{ mt: 2 }}>
                                📦 Delivery Charges:
                            </Typography>
                            <ul style={{ paddingLeft: '1.2em' }}>
                                <li>₹30 for under 5 km</li>
                                <li>₹60 for under 15 km</li>
                            </ul>
                            <Typography variant="body2" sx={{ mt: 2 }}>
                                Just drop us a message to start feeding tails with love.
                            </Typography>
                            <Button
                                variant="contained"
                                sx={{
                                    mt: 3,
                                    bgcolor: '#ff8000',
                                    color: 'black',
                                    fontWeight: 'bold',
                                    borderRadius: '30px',
                                    px: 4,
                                    py: 1.2,
                                    textTransform: 'none',
                                    '&:hover': { bgcolor: '#e67300' },
                                }}
                            >
                                Start Now
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}