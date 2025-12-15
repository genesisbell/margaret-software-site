import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Margaret Software',
  description: 'Margaret Software builds reliable, scalable software solutions.',
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <body>{children}</body>
    </html>
  )
}
