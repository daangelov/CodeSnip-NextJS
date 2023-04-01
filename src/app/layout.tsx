import React from 'react';
import {type Metadata} from 'next';
import '@/styles/globals.css'
import {defaultMetadata} from '@/config/metadata';
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import TopSpotGradient from '@/components/gradients/TopSpotGradient';
import BottomSpotGradient from '@/components/gradients/BottomSpotGradient';

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({children}: {
  children: React.ReactNode
}) {
  return (
    <html lang="bg">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      </head>
      <body className="flex flex-col h-screen bg-white">
        <Header />
        <main role="main" className="flex-grow">
          <TopSpotGradient />
          {children}
          <BottomSpotGradient />
        </main>
        <Footer />
      </body>
    </html>
  )
}
