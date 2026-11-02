import type { Metadata } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-editorial-serif',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://juliansumali.com'),
  title: 'Julian Sumali — UGC Creator & Content Creator Portfolio',
  description:
    'Luxury editorial portfolio of Julian Sumali. UGC Creator & Content Creator with 1+ year of experience and over 20M+ views generated across top brands.',
  keywords: [
    'Julian Sumali',
    'UGC Creator',
    'Content Creator',
    'Julian Sumali Portfolio',
    'TikTok UGC Indonesia',
    'Instagram Reels Creator',
    'Editorial Creator Portfolio',
  ],
  authors: [{ name: 'Julian Sumali' }],
  openGraph: {
    title: 'Julian Sumali — UGC Creator & Content Creator',
    description: 'Authentic Content. Meaningful Impact. 20M+ views generated across innovative brands.',
    url: 'https://juliansumali.com',
    siteName: 'Julian Sumali Editorial Portfolio',
    images: [
      {
        url: '/assets/profile/header.png',
        width: 1080,
        height: 1080,
        alt: 'Julian Sumali UGC Creator',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Julian Sumali — UGC Creator & Content Creator',
    description: 'Authentic Content. Meaningful Impact.',
    images: ['/assets/profile/header.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="bg-[#F5F1EA] text-[#252321] antialiased selection:bg-[#252321] selection:text-[#F5F1EA] font-sans">
        {children}
      </body>
    </html>
  );
}
