'use client';

import { Box, Container, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import HeroSection from '@/components/home/HeroSection';
import MissionVision from '@/components/home/MissionVision';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import MealPlans from '@/components/home/MealPlans';
import FAQSection from '@/components/home/FAQSection';
import NomTailsProfile from '@/components/home/NomTailsProfile';

export default function HomePage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh', backgroundColor: '#0a0a0a' }}>
      <Box sx={{
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 0,
      }}>
        <Image
          src="/Dog6.jpeg"
          alt="Dog and puppies"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </Box>

      <Box sx={{ position: 'relative', zIndex: 1, minHeight: '100vh' }}>
        <HeroSection isMobile={isMobile} />
        <MissionVision />
        <WhyChooseUs />
        <MealPlans />
        <FAQSection />
        <NomTailsProfile />
      </Box>
    </Box>
  );
}