import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-lato',
  display: 'swap',
})

// Actualiza esta URL cuando tengas dominio definitivo
const siteUrl = 'https://carniceriaelmercadito.es'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Carnicería El Mercadito | Carabanchel, Madrid — Desde 1995',
  description:
    'Carnicería tradicional en Carabanchel desde 1995. Calidad y buen trato. Envíos a la Comunidad de Madrid para pedidos superiores a 120 €. Pide por WhatsApp.',
  keywords: ['carnicería', 'Carabanchel', 'Madrid', 'carne', 'carnes', 'El Mercadito'],
  alternates: { canonical: siteUrl },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Carnicería El Mercadito | Carabanchel, Madrid',
    description: 'Más de 30 años de calidad y tradición en Carabanchel.',
    locale: 'es_ES',
    type: 'website',
    url: siteUrl,
    siteName: 'Carnicería El Mercadito',
    images: [{ url: '/images/hero.jpg', width: 1200, height: 630, alt: 'Carnicería El Mercadito — Carabanchel, Madrid' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carnicería El Mercadito | Carabanchel, Madrid',
    description: 'Más de 30 años de calidad y tradición en Carabanchel.',
    images: ['/images/hero.jpg'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': siteUrl,
  name: 'Carnicería El Mercadito',
  description: 'Carnicería tradicional en Carabanchel desde 1995. Calidad y buen trato.',
  url: siteUrl,
  telephone: '+34675628688',
  image: `${siteUrl}/images/hero.jpg`,
  priceRange: '€€',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. de Ntra. Sra. de Fátima, 3',
    addressLocality: 'Carabanchel',
    addressRegion: 'Madrid',
    postalCode: '28047',
    addressCountry: 'ES',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 40.3833,
    longitude: -3.7224,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '14:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '17:30',
      closes: '20:30',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '09:00',
      closes: '14:00',
    },
  ],
  sameAs: ['https://www.instagram.com/carneselmercaditocarabanchel/'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${playfair.variable} ${lato.variable}`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
