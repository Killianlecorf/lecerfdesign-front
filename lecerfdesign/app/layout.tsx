import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../src/style/index.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lecerf design',
  description: 'Donnez vie à votre vision, avec des solutions graphiques sur mesure !',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <link rel="shortcut icon" href="/Assets/Img/logo_vert.svg" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
