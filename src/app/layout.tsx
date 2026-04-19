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
const highDisplay = fmtPLN(highPrice)
const lastModifiedISO = prices.lastSync

export const metadata: Metadata = {
  metadataBase: new URL('https://www.zt411.pl'),
  title: `Zebra ZT411 — drukarka etykiet od ${lowDisplay} zł netto | TAKMA`,
  description: `Zebra ZT411: drukarka etykiet termotransferowa 4", 203/300/600 dpi, 356 mm/s, RFID, Wi-Fi 6E, ekran 4,3". Od ${lowDisplay} zł netto. Partner Zebra — TAKMA.`,
  keywords: ['zebra zt411', 'zt411', 'drukarka etykiet zebra', 'drukarka przemysłowa zebra', 'zebra zt411 cena', 'drukarka termotransferowa', 'zt411 300 dpi', 'zt411 600 dpi', 'zt411 rfid', 'zt411 vs zt421', 'zt411 vs zt410'],
  authors: [{ name: 'TAKMA Tadeusz Tiuchty', url: 'https://takma.com.pl' }],
  creator: 'TAKMA',
  publisher: 'TAKMA Tadeusz Tiuchty',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: 'https://www.zt411.pl' },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://www.zt411.pl',
    siteName: 'zt411.pl — Zebra ZT411 | TAKMA',
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
    '@id': 'https://www.zt411.pl/#product',
    name: 'Zebra ZT411',
    alternateName: ['Drukarka etykiet Zebra ZT411', 'Drukarka termotransferowa ZT411', 'Zebra ZT400 series'],
    description: 'Drukarka etykiet Zebra ZT411 — przemysłowa, termotransferowa i termiczna bezpośrednia z serii ZT400. Szerokość druku 4" (104 mm), rozdzielczości 203/300/600 dpi, prędkość do 356 mm/s, kolorowy ekran dotykowy 4,3", Wi-Fi 6/6E (opcja), RFID UHF (opcja), druk bezpodkładowy ZeroLiner (opcja). Obsługa ZPL/ZPL II/EPL/ZBI 2.0.',
    brand: { '@type': 'Brand', name: 'Zebra Technologies' },
    manufacturer: { '@type': 'Organization', name: 'Zebra Technologies Corporation', url: 'https://www.zebra.com' },
    category: 'Drukarki przemysłowe',
    sku: sortedByPrice[0].pn,
    mpn: 'ZT411',
    image: ['https://www.zt411.pl/images/zt411-hero.jpg'],
    url: 'https://www.zt411.pl',
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
        url: 'https://www.zt411.pl/#warianty',
        seller: { '@type': 'Organization', name: 'TAKMA Tadeusz Tiuchty' },
      })),
    },
  }

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Ile kosztuje drukarka Zebra ZT411 w Polsce?', acceptedAnswer: { '@type': 'Answer', text: `Zebra ZT411 kosztuje od ${lowDisplay} zł netto (wariant 203 dpi, Wi-Fi + Bluetooth) do ${highDisplay} zł netto (wariant bezpodkładowy ZeroLiner). Wariant z RFID UHF: ok. 10 490 zł netto. Ceny zawierają drukarkę z zasilaczem i kablem USB, bez taśmy barwiącej.` } },
      { '@type': 'Question', name: 'Jaką rozdzielczość druku wybrać: 203, 300 czy 600 dpi?', acceptedAnswer: { '@type': 'Answer', text: '203 dpi — standardowe etykiety logistyczne, kody kreskowe, adresy. 300 dpi — mniejsze czcionki, QR, DataMatrix, etykiety laboratoryjne. 600 dpi — mikrotekst, znakowanie PCB, etykiety farmaceutyczne, drobne kody 2D. W serii ZT400: 600 dpi tylko w ZT411 — ZT421 (6″) nie oferuje tej rozdzielczości.' } },
      { '@type': 'Question', name: 'Czym różni się Zebra ZT411 od ZT421?', acceptedAnswer: { '@type': 'Answer', text: 'ZT411 ma szerokość druku 4" (104 mm), ZT421 ma 6" (168 mm). ZT411 oferuje rozdzielczość 600 dpi, ZT421 tylko 203 i 300 dpi. ZT411 obsługuje druk bezpodkładowy ZeroLiner, ZT421 nie. ZT411 jest lżejsza (16,33 vs 18,14 kg). Dla standardowych etykiet logistycznych — ZT411, dla dużych etykiet paletowych 6" — ZT421.' } },
      { '@type': 'Question', name: 'Czym ZT411 różni się od starszej ZT410?', acceptedAnswer: { '@type': 'Answer', text: 'ZT411 (następca ZT410) oferuje: kolorowy ekran dotykowy 4,3" (vs monochromatyczny w ZT410), Wi-Fi 6/6E i Bluetooth 5.3 (vs Wi-Fi 5 i BT 4.1), szybszy procesor, Zebra Link-OS z Print DNA, 2× port USB host, opcję druku bezpodkładowego ZeroLiner, certyfikat ENERGY STAR. ZT411 to aktualna linia — ZT410 została wycofana z produkcji.' } },
      { '@type': 'Question', name: 'Czy ZT411 obsługuje RFID UHF?', acceptedAnswer: { '@type': 'Answer', text: 'Tak. Opcja RFID UHF (ISO/IEC 18000-63, EPC gen. 2 v2.1, RAIN RFID) możliwa jako wariant fabryczny lub zestaw do instalacji u klienta. Technologia kodowania adaptacyjnego automatycznie dobiera optymalne ustawienia dla danego tagu. Dostępna jest też specjalna wersja RFID On-Metal do znakowania powierzchni metalowych (pojemniki, zasoby metalowe).' } },
      { '@type': 'Question', name: 'Czym jest druk bezpodkładowy ZeroLiner w ZT411?', acceptedAnswer: { '@type': 'Answer', text: 'ZeroLiner to technologia druku na etykietach bez podkładu (linerless). Zalety: ~50% więcej etykiet na rolkę, brak odpadów z podkładu, redukcja emisji CO2, mniej przestojów na wymianę rolki. ZT411 to jedyna drukarka przemysłowa Zebra obsługująca ZeroLiner. Dostępna jako wariant fabryczny (tylko druk termiczny) lub zestaw do modernizacji istniejących ZT411.' } },
      { '@type': 'Question', name: 'Jakie łączności ma ZT411?', acceptedAnswer: { '@type': 'Answer', text: 'Standard: USB 2.0, RS-232 szeregowy, Ethernet 10/100, Bluetooth 4.2, 2× USB host (do klawiatury, skanera, pendrive). Opcja: dwupasmowy moduł Wi-Fi 802.11ax (Wi-Fi 6/6E) + Bluetooth 5.3, interfejs równoległy, interfejs aplikatora. Dwa otwarte gniazda umożliwiają instalację dodatkowych kart komunikacyjnych w ciągu kilku minut.' } },
      { '@type': 'Question', name: 'Ile kosztuje Zebra ZT411 vs Honeywell PM45?', acceptedAnswer: { '@type': 'Answer', text: `ZT411 od ${lowDisplay} zł netto, PM45 od ok. 7 200 zł netto (porównywalny wariant 203 dpi). ZT411 wygrywa: Wi-Fi 6/6E (PM45 Wi-Fi 5), 600 dpi w opcji (PM45 max 406 dpi), ZeroLiner bezpodkładowy (PM45 brak), Print DNA gratis (bogatszy ekosystem niż Honeywell). PM45 wygrywa: nieco szybszy druk (300 mm/s @ 300 dpi). Dla firm z flotą Zebra — ZT411.` } },
      { '@type': 'Question', name: 'Jakie języki programowania obsługuje ZT411?', acceptedAnswer: { '@type': 'Answer', text: 'Standardowo: ZPL i ZPL II (Zebra Programming Language — zaawansowane formatowanie etykiet), ZBI 2.0 (BASIC Interpreter dla niezależnych aplikacji). Dodatkowo EPL i EPL2 (Eltron — tylko 203 dpi) dla kompatybilności ze starszymi systemami. Dzięki Unicode drukuje w dowolnym języku — polskim, chińskim, arabskim, cyrylicy.' } },
      { '@type': 'Question', name: 'Jak szybka jest Zebra ZT411?', acceptedAnswer: { '@type': 'Answer', text: 'Maksymalna prędkość druku: 356 mm/s (14"/s) przy 203 dpi. Przy 300 dpi: ok. 305 mm/s. Przy 600 dpi: ok. 152 mm/s. Krótki czas wydruku pierwszej etykiety (<1 s). Najwyższa wydajność w tej klasie urządzeń. Długość ciągłego druku: 3988 mm przy 203 dpi, 1854 mm przy 300 dpi, 991 mm przy 600 dpi.' } },
      { '@type': 'Question', name: 'Jakie akcesoria i materiały eksploatacyjne pasują do ZT411?', acceptedAnswer: { '@type': 'Answer', text: 'Taśmy barwiące Wax/Wax-Resin/Resin (szerokość 51–110 mm, długość do 450 m). Głowice drukujące 203/300/600 dpi (wymienne u klienta). Nawijak pełnej rolki, odklejak, obcinak gilotynowy, klawiatura ZKDU, interfejs aplikatora. Etykiety certyfikowane Zebra (ciągłe, sztancowane, z czarnymi znacznikami, ZeroLiner).' } },
      { '@type': 'Question', name: 'Gdzie serwisować Zebra ZT411 w Polsce?', acceptedAnswer: { '@type': 'Answer', text: 'Autoryzowany serwis Zebra w Polsce: TAKMA (Poznań, Premier Solution Partner) oraz portal serwis-zebry.pl. Czas naprawy gwarancyjnej: 3–5 dni roboczych. Kontrakty Zebra OneCare: Essential (naprawa 3 dni, priorytet 8×5), Select (priorytet 24×7, wymiana urządzenia następnego dnia). Wymiana głowic, konserwacja prewencyjna, diagnostyka zdalna przez Printer Profile Manager.' } },
      { '@type': 'Question', name: 'Do jakich zastosowań jest Zebra ZT411?', acceptedAnswer: { '@type': 'Answer', text: 'Produkcja (WIP, oznaczenia identyfikacyjne, numery seryjne, etykiety odbiorcze). Transport i logistyka (kompletacja, wysyłka, przeładunek, etykiety zgodności). Retail (centra dystrybucji, obsługa zaplecza). Ochrona zdrowia (etykiety laboratoryjne, banki krwi, śledzenie zasobów, apteki). Szczególnie rekomendowana gdzie wymagana niezawodność 24/7 i duża liczba drukowanych etykiet dziennie.' } },
      { '@type': 'Question', name: 'Jakie są warunki środowiskowe pracy ZT411?', acceptedAnswer: { '@type': 'Answer', text: 'Druk termotransferowy: 5°C do 40°C. Druk termiczny: 0°C do 40°C. Przechowywanie/transport: -40°C do +60°C. Wilgotność pracy: 20–85% bez kondensacji. Metalowa rama i składana pokrywa z dużym przezroczystym okienkiem. Certyfikat ENERGY STAR (energooszczędna). Trwała powłoka ochraniająca głowicę w trybie druku termicznego.' } },
    ],
  }

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://www.zt411.pl/#webpage',
    url: 'https://www.zt411.pl',
    name: `Zebra ZT411 — drukarka etykiet od ${lowDisplay} zł netto | TAKMA`,
    description: 'Strona produktowa drukarki etykiet Zebra ZT411 prowadzona przez autoryzowanego partnera Zebra — TAKMA.',
    inLanguage: 'pl-PL',
    isPartOf: { '@id': 'https://www.zt411.pl/#website' },
    about: { '@id': 'https://www.zt411.pl/#product' },
    primaryImageOfPage: { '@type': 'ImageObject', url: 'https://www.zt411.pl/images/zt411-hero.jpg' },
    dateModified: lastModifiedISO,
    author: { '@id': 'https://takma.com.pl/#organization' },
    publisher: { '@id': 'https://takma.com.pl/#organization' },
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.zt411.pl/#website',
    url: 'https://www.zt411.pl',
    name: 'Zebra ZT411 — zt411.pl',
    inLanguage: 'pl-PL',
    publisher: { '@id': 'https://takma.com.pl/#organization' },
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Zebra ZT411', item: 'https://www.zt411.pl' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(product) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  )
}
