import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Frontend Mentor Challenges',
  description: 'Submissions for the Frontend Mentor challenges',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-none`}>
        <Header />
        <div className="container">
          {children}
        </div>
      </body>
    </html>
  )
}
