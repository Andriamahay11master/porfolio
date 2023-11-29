import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import '../assets/scss/main.scss'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Andriamahay IRIMANANA | Portfolio | Developer Frontend',
  description: "Passionate Front-End Developer with a flair for creating seamless, user-centric web experiences. Transforming ideas into captivating interfaces through a blend of creativity and cutting-edge technologies. Let's build the future of the web together!",
}
type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({
  children
} : LayoutProps) {

  return (
    <html lang="en">
      <body className={inter.className}>
          {children}
          <Analytics />
      </body>
    </html>
  )
}

