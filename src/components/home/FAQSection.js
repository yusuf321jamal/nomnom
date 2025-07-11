import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image';
import { FAQS } from '@/constants/faqs';

export default function FAQSection() {
    return (
        <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 4,
            py: 8,
            px: { xs: 4, md: 10 },
            bgcolor: 'background.paper',
            alignItems: 'center'
        }}>
            <Box>
                <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
                    Frequently Asked Questions
                </Typography>

                <Typography variant="body1" paragraph sx={{ mb: 3, fontStyle: 'italic' }}>
                    {"Got questions? We've got tail-wagging answers."}
                </Typography>

                <Typography variant="body1" paragraph sx={{ mb: 4 }}>
                    {"Whether you're a first-time feeder or a long-time rescuer, we're here to make things easy, honest, and helpful — just like our food."}
                </Typography>

                <Box sx={{ borderTop: '1px solid', borderColor: 'divider', pt: 2 }}>
                    {FAQS.map((faq, index) => (
                        <Accordion key={index} sx={{ boxShadow: 'none', '&:before': { display: 'none' }, mb: 1 }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                    {faq.question}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ textAlign: 'left' }} variant="body1">
                                    {faq.answer}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Box>
            </Box>

            <Box sx={{
                position: 'relative',
                height: { xs: '300px', md: '500px' },
                width: { xs: '100%', md: '80%' },
                marginLeft: { xs: 0, md: 'auto' },
                display: 'flex',
                justifyContent: { xs: 'center', md: 'flex-end' },
            }}>
                <Image
                    src="./Dog3.jpeg"
                    alt="Happy pet with food"
                    fill
                    style={{
                        objectFit: 'cover',
                        borderRadius: '8px',
                        width: '100%',
                    }}
                />
            </Box>
        </Box>
    );
}
