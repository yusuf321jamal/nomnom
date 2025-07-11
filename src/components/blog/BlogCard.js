'use client';

import { Box, Typography, Card, CardMedia, CardContent, Stack } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function BlogCard({ blog }) {
    return (
        <Card
            elevation={3}
            sx={{
                maxWidth: 360,
                borderRadius: 4,
                overflow: 'hidden',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 6px 20px rgba(0,0,0,0.12)',
                },
            }}
        >

            <Box sx={{ position: 'relative' }}>
                <CardMedia
                    component="img"
                    height="200"
                    image={blog.image}
                    alt={blog.title}
                    sx={{
                        borderBottom: '1px solid #eee',
                        transition: 'all 0.3s ease-in-out',
                    }}
                />
                <Typography
                    sx={{
                        position: 'absolute',
                        bottom: 12,
                        left: 12,
                        backgroundColor: 'rgba(0,0,0,0.6)',
                        color: '#fff',
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        px: 1.2,
                        py: 0.4,
                        borderRadius: 1,
                    }}
                >
                    {blog.author}
                </Typography>
            </Box>

            {/* Content */}
            <CardContent sx={{ px: 2, py: 2 }}>
                <Typography
                    variant="h6"
                    component="h3"
                    sx={{ fontWeight: 600, mb: 1.2, fontSize: '1.05rem', color: '#222' }}
                >
                    {blog.title}
                </Typography>

                <Typography
                    variant="body2"
                    sx={{ color: '#555', fontSize: '0.9rem', lineHeight: 1.6, mb: 2 }}
                >
                    {blog.description}
                </Typography>

                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, color: '#888' }}>
                        {blog.date}
                    </Typography>
                    <Stack direction="row" spacing={1.5} alignItems="center" sx={{ color: '#666' }}>
                        <Stack direction="row" alignItems="center" spacing={0.5}>
                            <ChatBubbleOutlineIcon sx={{ fontSize: 16 }} />
                            <Typography sx={{ fontSize: '0.75rem' }}>{blog.comments}</Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={0.5}>
                            <VisibilityIcon sx={{ fontSize: 16 }} />
                            <Typography sx={{ fontSize: '0.75rem' }}>{blog.views}</Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    );
}
