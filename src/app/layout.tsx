import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'B.M.R Degree College - Gajwel',
  description: 'A modern, vibrant, and engaging platform for B.M.R Degree College students and faculty.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground transition-colors duration-300 min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
          <ToastContainer position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  )
}
