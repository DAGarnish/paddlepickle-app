import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PaddlePickle HQ',
  description: 'Your one-stop shop for all things Padel Tennis and Pickleball',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
