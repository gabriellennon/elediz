import type { Metadata } from 'next'
import { Heebo } from 'next/font/google'
import './globals.css'

const heebo = Heebo({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Estudo Bíblicos | Ele Diz ',
  description: 'Estude a bíblia de graça e em qualquer lugar! Descubra o que Ele diz através da bíblia.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning={true}>
      <body className={heebo.className}>{children}</body>
    </html>
  )
}
