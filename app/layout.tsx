import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import CookieBanner from '@/components/cookie-banner'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'HungarySportTickets – Sportjegy Ár-összehasonlítás',
  description:
    'Hasonlítsa össze a sportjegyek árait több szolgáltatónál! Labdarúgás, Forma-1, tenisz és más sportesemények jegyárai Magyarországon. hungarysporttickets.com — másodlagos piaci ár-összehasonlító oldal, nem értékesítünk jegyeket.',
  keywords:
    'sportjegy összehasonlítás, jegyár, labdarúgás jegy, Formula-1 jegy, Budapest, Magyarország, másodlagos piac, ár-összehasonlítás, HungarySportTickets, hungarysporttickets.com',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hu" className={inter.variable}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
