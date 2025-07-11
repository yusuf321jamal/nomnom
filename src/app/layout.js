'use client';

import Footer from '@/components/common/Footer';
import './globals.css';
import Navbar from '@/components/common/Navbar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}