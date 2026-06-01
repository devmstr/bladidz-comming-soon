import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Bladidz.com — Bientôt Disponible',
  description:
    "L'écosystème complet du retour pour la diaspora algérienne. Bladidz connecte les membres qualifiés de la diaspora avec des entreprises, institutions, banques, avocats et partenaires immobiliers en Algérie.",
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '48x48' },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Bladidz.com — Bientôt Disponible',
    description:
      "L'écosystème complet du retour pour la diaspora algérienne.",
    siteName: 'Bladidz.com',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bladidz.com — Bientôt Disponible',
    description:
      "L'écosystème complet du retour pour la diaspora algérienne.",
    images: ['/opengraph-image'],
  },
  themeColor: '#011a14',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
