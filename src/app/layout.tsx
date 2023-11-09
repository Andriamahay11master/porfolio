import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import '../assets/scss/main.scss'
import Header from '@/components/header/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Andriamahay IRIMANANA | Portfolio | Developer Frontend',
  description: "Passionate Front-End Developer with a flair for creating seamless, user-centric web experiences. Transforming ideas into captivating interfaces through a blend of creativity and cutting-edge technologies. Let's build the future of the web together!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>

        <Header/>

          {children}

      </body>
    </html>
  )
}
