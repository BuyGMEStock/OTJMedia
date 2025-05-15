import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const plusJakarta = Plus_Jakarta_Sans({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-plusjakarta'
})

export const metadata: Metadata = {
  title: 'OTJ Media Group - Custom Web Development Services',
  description: 'Transform your business with a custom website that drives sales, saves time, and makes a difference. Expert web development for restaurants, plumbers, lawyers, and more.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${plusJakarta.variable} font-sans min-h-screen flex flex-col`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
} 