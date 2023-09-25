import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import Footer from '@/componets/footer'
import { Toaster } from 'react-hot-toast'
import Auth from '@/componets/AuthSession'
import ReduxProvider from '@/lib/Redux/Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={inter.className}>
        <ReduxProvider>
          <Auth>
            {children}
            <Footer />
            <Toaster />
          </Auth>
        </ReduxProvider>
        <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" defer />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" defer />
      </body>
    </html>
  )
}
