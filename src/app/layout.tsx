import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AlertBar } from '../components/alert-bar'
import { Header } from '../components/header'
import ParentWapper from './parent-wapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Natura &co',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ParentWapper>
          <div className="flex flex-col items-center min-h-screen">
            <AlertBar />
            <Header />
            {children}
          </div>
        </ParentWapper>
      </body>
    </html>
  )
}
