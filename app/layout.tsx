import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Golden Valley Ventures',
  description: 'A full-stack investment and venture platform building capital, products, and impact.',
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
