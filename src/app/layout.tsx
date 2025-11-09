import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';

import { Navbar } from '@/components/navbar';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://appinex.me'),
  title: 'Appinex — Web Agency',
  description:
    'Portfolio of Appinex, a web agency crafting minimalist, high-performing digital products with React, Next.js, and Tailwind CSS.',
  openGraph: {
    title: 'Appinex — Web Agency',
    description:
      'Crafting scalable experiences with a minimalist heartbeat. Explore product collaborations, systems design, and polished engineering.',
    url: 'https://appinex.me',
    siteName: 'appinex.me',
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Appinex — Web Agency',
    description:
      'Minimalist, confident, and high-performing product engineering for founders and design-led teams.'
  },
  alternates: {
    canonical: 'https://appinex.me'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }): React.JSX.Element {
  return (
    <html lang="en" className={`${inter.variable} dark`} suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-foreground"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="content" className="relative">
          {children}
        </main>
      </body>
    </html>
  );
}
