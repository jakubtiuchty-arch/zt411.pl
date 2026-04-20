import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { getPrices } from '@/data/prices'

const inter = Inter({ subsets: ['latin', 'latin-ext'] })

const prices = getPrices()
const sortedByPrice = [...prices.variants].sort((a, b) => a.price - b.price)
const lowPrice = Math.round(sortedByPrice[0].price)
const highPrice = Math.round(sortedByPrice[sortedByPrice.length - 1].price)
const fmtPLN = (n: number) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
const lowDisplay = fmtPLN(lowPrice)

export const metadata: Metadata = {
  metadataBase: new URL('https://www.zebrazt411.pl'),
  title: `Zebra ZT411 — drukarka etykiet od ${lowDisplay} zł netto | TAKMA`,
  description: `Zebra ZT411: drukarka etykiet termotransferowa 4", 203/300/600 dpi, 356 mm/s, RFID, Wi-Fi 6E, ekran 4,3". Od ${lowDisplay} zł netto. Partner Zebra — TAKMA.`,
  keywords: ['zebra zt411', 'zt411', 'drukarka etykiet zebra', 'drukarka przemysłowa zebra', 'zebra zt411 cena', 'drukarka termotransferowa', 'zt411 300 dpi', 'zt411 600 dpi', 'zt411 rfid', 'zt411 vs zt421', 'zt411 vs zt410'],
  authors: [{ name: 'TAKMA Tadeusz Tiuchty', url: 'https://takma.com.pl' }],
  creator: 'TAKMA',
  publisher: 'TAKMA Tadeusz Tiuchty',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: 'https://www.zebrazt411.pl' },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://www.zebrazt411.pl',
    siteName: 'zebrazt411.pl — Zebra ZT411 | TAKMA',
    title: `Zebra ZT411 — drukarka etykiet od ${lowDisplay} zł | TAKMA`,
    description: `Drukarka etykiet Zebra ZT411: termotransferowa 4", do 600 dpi, 356 mm/s, RFID, Wi-Fi 6E. Od ${lowDisplay} zł netto.`,
    images: [{ url: '/images/zt411-hero.jpg', width: 1200, height: 630, alt: 'Drukarka etykiet Zebra ZT411 — partner TAKMA' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Zebra ZT411 — drukarka etykiet od ${lowDisplay} zł | TAKMA`,
    description: 'Termotransferowa 4", do 600 dpi, 356 mm/s, RFID, Wi-Fi 6E. Autoryzowany partner Zebra — TAKMA.',
    images: ['/images/zt411-hero.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body className={`${inter.className} antialiased`}>
        {children}
        <JsonLd />
      </body>
    </html>
  )
}

function JsonLd() {
  const org = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    '@id': 'https://takma.com.pl/#organization',
    name: 'TAKMA Tadeusz Tiuchty',
    alternateName: 'TAKMA',
    url: 'https://takma.com.pl',
    logo: 'https://takma.com.pl/images/logo-takma.png',
    description: 'Autoryzowany partner Zebra. Urządzenia AutoID: drukarki etykiet, terminale mobilne, skanery kodów kreskowych. Działamy od 2001 roku.',
    foundingDate: '2001',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ul. Romana Maya 1',
      addressLocality: 'Poznań',
      postalCode: '61-371',
      addressCountry: 'PL',
    },
    telephone: '+48616248282',
    email: 'takma@takma.com.pl',
    sameAs: ['https://takma.com.pl', 'https://www.serwis-zebry.pl', 'https://tc22.pl'],
  }

  const product = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': 'https://www.zebrazt411.pl/#product',
    name: 'Zebra ZT411',
    alternateName: ['Drukarka etykiet Zebra ZT411', 'Drukarka termotransferowa ZT411', 'Zebra ZT400 series'],
    description: 'Drukarka etykiet Zebra ZT411 — przemysłowa, termotransferowa i termiczna bezpośrednia z serii ZT400. Szerokość druku 4" (104 mm), rozdzielczości 203/300/600 dpi, prędkość do 356 mm/s, kolorowy ekran dotykowy 4,3", Wi-Fi 6/6E (opcja), RFID UHF (opcja), druk bezpodkładowy — linerless (opcja). Obsługa ZPL/ZPL II/EPL/ZBI 2.0.',
    brand: { '@type': 'Brand', name: 'Zebra Technologies' },
    manufacturer: { '@type': 'Organization', name: 'Zebra Technologies Corporation', url: 'https://www.zebra.com' },
    category: 'Drukarki przemysłowe',
    sku: sortedByPrice[0].pn,
    mpn: 'ZT411',
    image: ['https://www.zebrazt411.pl/images/zt411-hero.jpg'],
    url: 'https://www.zebrazt411.pl',
    sameAs: 'https://www.zebra.com/pl/pl/products/printers/industrial/zt400.html',
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'Technologia druku', value: 'Termotransferowy / termiczny' },
      { '@type': 'PropertyValue', name: 'Rozdzielczość', value: '203 / 300 / 600 dpi' },
      { '@type': 'PropertyValue', name: 'Max szerokość druku', value: '104 mm (4,09")' },
      { '@type': 'PropertyValue', name: 'Max prędkość druku', value: '356 mm/s (14"/s)' },
      { '@type': 'PropertyValue', name: 'Ekran', value: 'Kolorowy dotykowy 4,3"' },
      { '@type': 'PropertyValue', name: 'Pamięć', value: '256 MB SDRAM / 512 MB Flash' },
      { '@type': 'PropertyValue', name: 'Łączność', value: 'USB 2.0 / RS-232 / Ethernet 10/100 / Bluetooth 4.2 / 2× USB host + opcja Wi-Fi 6/6E' },
      { '@type': 'PropertyValue', name: 'RFID', value: 'UHF EPC gen. 2 v2.1, ISO/IEC 18000-63 (opcja)' },
      { '@type': 'PropertyValue', name: 'Waga', value: '16,33 kg' },
      { '@type': 'PropertyValue', name: 'Certyfikat', value: 'ENERGY STAR' },
    ],
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: String(lowPrice),
      highPrice: String(highPrice),
      priceCurrency: 'PLN',
      priceValidUntil: '2026-12-31',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      seller: { '@type': 'Organization', name: 'TAKMA Tadeusz Tiuchty', url: 'https://takma.com.pl' },
      offerCount: prices.variants.length,
      offers: prices.variants.map(v => ({
        '@type': 'Offer',
        name: v.name,
        sku: v.pn,
        price: String(Math.round(v.price)),
        priceCurrency: 'PLN',
        availability: v.availability === 'available' ? 'https://schema.org/InStock' : 'https://schema.org/PreOrder',
        itemCondition: 'https://schema.org/NewCondition',
        url: 'https://www.zebrazt411.pl/#warianty',
        seller: { '@type': 'Organization', name: 'TAKMA Tadeusz Tiuchty' },
      })),
    },
  }


  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.zebrazt411.pl/#website',
    url: 'https://www.zebrazt411.pl',
    name: 'Zebra ZT411 — zebrazt411.pl',
    inLanguage: 'pl-PL',
    publisher: { '@id': 'https://takma.com.pl/#organization' },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(product) }} />
    </>
  )
}
