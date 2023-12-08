import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import '../assets/scss/main.scss'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Andriamahay IRIMANANA | Portfolio | Developer Frontend',
  description: "Passionate front-end developer with [X] years of experience creating responsive and user-friendly web applications. Proficient in HTML, CSS, and JavaScript, with a focus on modern frameworks such as React.js. Skilled in translating design concepts into efficient, clean, and maintainable code. Adept at collaborating with cross-functional teams to deliver high-quality digital experiences. Explore my portfolio to see how I bring creativity and technical expertise together to build engaging websites.",
  keywords: 'Andriamahay, Andriamahay IRIMANANA, Andriamahay IRIMANANA Portfolio, Andriamahay IRIMANANA Developer Frontend',
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
      <body className={inter.className}>
          {children}
          <Analytics />
      </body>
    </html>
  )
}

