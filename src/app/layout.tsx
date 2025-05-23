import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import '../assets/scss/main.scss'
import { Analytics } from '@vercel/analytics/react'
import { metaTitleEn, metaDescEn, metaKeyEn} from './dataMeta'
import SmoothScrolling from '@/components/smooth/Smoothscroling'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: metaTitleEn,
  description: metaDescEn,
  keywords: metaKeyEn,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
}
type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({
  children
} : LayoutProps) {

  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
          <SmoothScrolling>
            {children}
          </SmoothScrolling>
          <Analytics />
      </body>
    </html>
  )
}

