import React from 'react';
import HeadComponent from '../components/HeadComponent';
import Footer from '../components/footer/Footer';
import '@/app/styles/globals.css';
import '@/app/styles/styles.css';
import { Inter } from 'next/font/google';
import { ShelfProvider } from './contexts/ShelfContext';
import PageWrapper from '@/components/PageWrapper';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout ({ metadata, children, session }) {

  return (
    <>
      <html lang="en">
        <HeadComponent metadata={metadata}/>
        <body className={inter.className}>
          <ShelfProvider>
            <PageWrapper session={session}>
              {children}
            </PageWrapper>
          </ShelfProvider>
          <Footer />
        </body>
      </html>
    </>
  );
};