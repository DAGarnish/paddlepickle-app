import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PaddlePickle HQ',
  description: 'Your Net Advantage in Padel Tennis & Pickleball, from accessories, trips away, and even courts!',
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
