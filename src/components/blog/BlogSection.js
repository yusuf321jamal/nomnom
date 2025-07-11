'use client';

import { Box, Grid } from '@mui/material';
import BlogCard from './BlogCard';
import blogPosts from '@/constants/blogData';

export default function BlogSection() {
    return (
        <Box sx={{ px: { xs: 3, md: 9 }, py: 8 }}>
            <Grid container justifyContent="center" spacing={3}>
                {blogPosts.map((post) => (
                    <Grid item xs={12} sm={6} md={4} key={post.id}>
                        <BlogCard blog={post} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
