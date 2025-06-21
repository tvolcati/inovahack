import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Desenrolai',
  description: 'Desenrolai - Desenrole sua vida.'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
