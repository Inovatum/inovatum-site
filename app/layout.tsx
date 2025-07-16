import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Inovatum',
  description: 'Created with v0',
  generator: 'inovatum.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
