import React from 'react';
import './globals.css'

import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'

export default function RootLayout({children}: {
  children: React.ReactNode
}) {
  return (
    <html lang="bg">
      <body className="flex flex-col h-screen">
        <Header />
        <main role="main" className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
