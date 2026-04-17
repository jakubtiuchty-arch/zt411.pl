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
  metadataBase: new URL('https://tc22.pl'),
  title: `Zebra TC22 — terminal mobilny od ${lowDisplay} zł netto | TAKMA`,
  description: `Zebra TC22: terminal mobilny 6" FHD+, skaner 1D/2D (do 7,6 m), Wi-Fi 6E, IP68, Android do v16. 7 wariantów od ${lowDisplay} zł netto. Partner Zebra — TAKMA.`,
  keywords: ['zebra tc22', 'tc22', 'terminal mobilny zebra tc22', 'zebra tc22 cena', 'zebra tc22 dane techniczne', 'tc22 vs tc27', 'terminal mobilny do magazynu', 'kolektor danych zebra', 'WLMT0-T22'],
  authors: [{ name: 'TAKMA Tadeusz Tiuchty', url: 'https://takma.com.pl' }],
  creator: 'TAKMA',
  publisher: 'TAKMA Tadeusz Tiuchty',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: 'https://tc22.pl' },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://tc22.pl',
    siteName: 'tc22.pl — Zebra TC22 | TAKMA',
    title: `Zebra TC22 — terminal mobilny od ${lowDisplay} zł | TAKMA`,
    description: `Wytrzymały terminal Zebra TC22: 6" FHD+, skaner 1D/2D, IP68, MIL-STD-810H, Android do v16. 7 wariantów od ${lowDisplay} zł netto.`,
    images: [{ url: '/images/tc22_hero.jpg', width: 1200, height: 630, alt: 'Terminal mobilny Zebra TC22 — partner TAKMA' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Zebra TC22 — terminal mobilny od ${lowDisplay} zł | TAKMA`,
    description: 'Wi-Fi 6E, ekran 6", IP68, skaner 1D/2D SE4710/SE55. Autoryzowany partner Zebra — TAKMA.',
    images: ['/images/tc22_hero.jpg'],
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
    sameAs: ['https://takma.com.pl', 'https://www.serwis-zebry.pl'],
  }

  const product = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': 'https://tc22.pl/#product',
    name: 'Zebra TC22',
    alternateName: ['Terminal mobilny Zebra TC22', 'Kolektor danych Zebra TC22', 'Zebra WLMT0-T22'],
    description: 'Wytrzymały terminal mobilny klasy enterprise z ekranem 6" FHD+, skanerem 1D/2D (SE4710 lub SE55 do 7,6 m), Wi-Fi 6/6E, IP68, MIL-STD-810H i systemem Android do v16.',
    brand: { '@type': 'Brand', name: 'Zebra Technologies' },
    manufacturer: { '@type': 'Organization', name: 'Zebra Technologies Corporation', url: 'https://www.zebra.com' },
    category: 'Terminale mobilne',
    sku: sortedByPrice[0].pn,
    mpn: 'WLMT0-T22',
    image: ['https://tc22.pl/images/tc22_scanner_1.png', 'https://tc22.pl/images/tc22_scanner_2.png', 'https://tc22.pl/images/tc22_scanner_3.png'],
    url: 'https://tc22.pl',
    sameAs: 'https://www.zebra.com/us/en/products/mobile-computers/handheld/tc22-tc27.html',
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'Procesor', value: 'Qualcomm 5430 hex-core 2.1 GHz' },
      { '@type': 'PropertyValue', name: 'Wyświetlacz', value: '6.0" FHD+ 1080x2160 Gorilla Glass' },
      { '@type': 'PropertyValue', name: 'Odporność', value: 'IP68/IP65 MIL-STD-810H' },
      { '@type': 'PropertyValue', name: 'Łączność', value: 'Wi-Fi 6/6E Bluetooth 5.2 NFC' },
      { '@type': 'PropertyValue', name: 'Waga', value: '236 g' },
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
        url: 'https://tc22.pl/#warianty',
        seller: { '@type': 'Organization', name: 'TAKMA Tadeusz Tiuchty' },
      })),
    },
  }

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Jaka jest cena terminala Zebra TC22 w Polsce?', acceptedAnswer: { '@type': 'Answer', text: `Zebra TC22 kosztuje od ${lowDisplay} zł netto (konfiguracja SE4710, 6/64 GB, bateria 3 800 mAh) do ${highDisplay} zł netto (SE55 Advanced Range, 8/128 GB, RFID-ready, BLE). Wersja z 5G/GPS — Zebra TC27 — zaczyna się od 3 254 zł netto. Ceny obejmują urządzenie z baterią, bez akcesoriów. Ceny netto PLN, aktualizowane na bieżąco.` } },
      { '@type': 'Question', name: 'Czym Zebra TC22 różni się od modelu TC27?', acceptedAnswer: { '@type': 'Answer', text: 'TC22 i TC27 mają identyczny procesor (Qualcomm 5430), ekran (6" FHD+), skanery, wytrzymałość IP68 i kompatybilne akcesoria. Jedyna różnica: TC22 pracuje wyłącznie przez Wi-Fi 6/6E, natomiast TC27 dodaje moduł 5G/4G LTE z dual SIM (nano + eSIM) oraz GPS/GNSS z dokładnością 1–3 m. TC22 wybierz do pracy wewnątrz budynku (magazyn, sklep). TC27 — dla pracowników terenowych (kurierzy, serwisanci, inspektorzy).' } },
      { '@type': 'Question', name: 'Który skaner wybrać — SE4710 czy SE55?', acceptedAnswer: { '@type': 'Answer', text: 'SE4710 to standardowy skaner 1D/2D z zasięgiem do 35 cm — idealny do codziennego skanowania produktów na półkach, w kasie lub w aptece. SE55 Advanced Range sięga od 10 cm do 7,6 metra — skanuje etykiety na wysokich regałach magazynowych bez użycia drabiny. Różnica cenowa wynosi ok. 500 zł. Rekomendacja: SE55 dla magazynów z regałami powyżej 2 m, SE4710 dla retailu i pracy na poziomie ręki.' } },
      { '@type': 'Question', name: 'Czy TC22 jest wodoodporny i wytrzymały?', acceptedAnswer: { '@type': 'Answer', text: 'Tak — TC22 posiada podwójną certyfikację IP68 (pyłoszczelność + zanurzenie do 1 m na 30 min) oraz IP65 (silny strumień wody). Spełnia normy MIL-STD-810H: upadki z 1,5 m na beton (z etui), 500 tumble z 0,5 m, szok termiczny od -10°C do +50°C, wilgotność 95%. Wyświetlacz i okienko skanera chronione Corning Gorilla Glass.' } },
      { '@type': 'Question', name: 'Jak długo wytrzymuje bateria i czy można ją wymienić?', acceptedAnswer: { '@type': 'Answer', text: 'Bateria standardowa 3 800 mAh zapewnia ok. 10 godzin typowej pracy (Wi-Fi + skanowanie). Bateria rozszerzona 5 200 mAh — ok. 14 godzin. Obie są wymienne metodą hot-swap: pracownik wymienia baterię w 5 sekund bez wyłączania terminala i utraty danych. Technologia PowerPrecision podaje stan baterii w czasie rzeczywistym.' } },
      { '@type': 'Question', name: 'Jaki system Android ma TC22 i jak długo będzie wspierany?', acceptedAnswer: { '@type': 'Answer', text: 'TC22 jest dostarczany z aktualnym Androidem i posiada gwarancję producenta na aktualizację do Androida 16 (3 generacje OS). Zebra LifeGuard zapewnia comiesięczne łatki bezpieczeństwa przez cały cykl życia urządzenia. Dostępne wersje: GMS (Google Play) i AOSP (bez Google). Zarządzanie flotą przez SOTI, VMware, Intune lub Zebra DNA Cloud.' } },
      { '@type': 'Question', name: 'Czy Zebra TC22 może czytać tagi RFID?', acceptedAnswer: { '@type': 'Answer', text: 'TC22 nie ma wbudowanego czytnika RFID UHF, ale warianty z 8-pinowym złączem eConnex (oznaczone „RFID-ready") obsługują nakładkę Zebra RFD40 UHF Sled — odczyt 100–700 tagów/sekundę z odległości do 9 m. Modele z 2-pinowym złączem łączą się z RFD40 przez Bluetooth. Wbudowany NFC (13,56 MHz) działa we wszystkich wariantach — obsługuje karty lojalnościowe, Apple VAS i Google SmartTap.' } },
      { '@type': 'Question', name: 'Ile kosztuje Zebra TC22 vs Honeywell CT32?', acceptedAnswer: { '@type': 'Answer', text: `Zebra TC22 zaczyna się od ${lowDisplay} zł netto — Honeywell CT32 od 3 389 zł netto. CT32 jest o ~27% droższy w wersji bazowej, ale oferuje dłuższą ścieżkę Android (do v18 vs v16) i skaner FlexRange z zasięgiem 11 m. TC22 jest lżejszy (236 vs 269 g), ma większy ekosystem Mobility DNA (gratis) i najszerszą sieć serwisową Zebra w Polsce. Dla firm szukających najniższego TCO — TC22. Dla projektów z perspektywą 6+ lat — CT32 wart rozważenia.` } },
      { '@type': 'Question', name: 'Ile kosztuje Zebra TC22 vs TC53e?', acceptedAnswer: { '@type': 'Answer', text: `TC22 od ${lowDisplay} zł netto, TC53e od ok. 4 500 zł netto. TC53e to klasa premium: bateria 4 680/7 000 mAh (vs 3 800/5 200 mAh), procesor QCS4490 2,4 GHz (vs 5430 2,1 GHz), Android do v17, nowszy skaner SE4720. TC22 wystarczy dla 80% zastosowań magazynowych i retailowych. TC53e rekomendowany dla wymagających środowisk z 3-zmianową pracą i potrzebą najdłuższego cyklu baterii.` } },
      { '@type': 'Question', name: 'Czy mogę korzystać z płatności zbliżeniowych NFC na TC22?', acceptedAnswer: { '@type': 'Answer', text: 'Tak — wbudowany NFC (ISO 14443 A/B, Mifare, FeliCa) obsługuje płatności contactless po integracji z aplikacją POS. TC22 jest certyfikowany Apple VAS i Google SmartTap — skanuje bilety, karty lojalnościowe, karty podarunkowe i boarding passy z Apple Wallet / Google Wallet. Przydatne w retail, hotelarstwie i obsłudze eventów.' } },
      { '@type': 'Question', name: 'Jakie oprogramowanie jest dołączone do TC22?', acceptedAnswer: { '@type': 'Answer', text: 'Każdy TC22 zawiera darmowy pakiet Mobility DNA Professional: DataWedge (skanowanie kodów bez programowania — kody trafiają bezpośrednio do pola tekstowego), StageNow (masowa konfiguracja floty z jednego profilu), Device Tracker (lokalizacja zagubionego terminala w budynku), LifeGuard (comiesięczne łatki bezpieczeństwa). Żaden konkurent nie oferuje takiego pakietu w cenie urządzenia.' } },
      { '@type': 'Question', name: 'Gdzie serwisować Zebra TC22 w Polsce?', acceptedAnswer: { '@type': 'Answer', text: 'Autoryzowany serwis Zebra w Polsce: TAKMA oraz serwis-zebry.pl. Czas naprawy gwarancyjnej: 3–5 dni roboczych. Opcjonalne kontrakty OneCare (Z1AE-TC2L-*): Essential (naprawa 3 dni), Select (naprawa+wymiana baterii), TC Cloud (zarządzanie zdalne). TAKMA zapewnia też diagnostykę przed zakupem i pomoc przy konfiguracji floty.' } },
      { '@type': 'Question', name: 'Ile urządzeń TC22 mogę ładować jednocześnie?', acceptedAnswer: { '@type': 'Answer', text: 'Dostępne stacje ładowania: 1-slot (CRD-TC2L-BS1CO-01) do pojedynczego stanowiska, 5-slot (CRD-TC2L-BS5CO-01) z Ethernet do każdego urządzenia, ładowarka 4 baterii (SAC-TC2L-4SCHG-01). Dla floty 20+ urządzeń: 4× stacja 5-slot + 2× ładowarka 4 baterii. Zasilanie: dedykowany zasilacz 50 W (1-slot) lub 108 W (5-slot/ładowarka).' } },
      { '@type': 'Question', name: 'Jakie są alternatywy dla Zebra TC22 na rynku?', acceptedAnswer: { '@type': 'Answer', text: `Główne alternatywy w segmencie entry/mid-range: Honeywell CT32 (od 3 389 zł, Android do v18, FlexRange 11 m), Zebra TC53e (od ~4 500 zł, premium z baterią 7 000 mAh), Datalogic Memor 12 (od ~4 490 zł, Android 13, ładowanie Qi), Samsung Galaxy XCover (od ~1 500 zł, smartfon — brak profesjonalnego skanera i Mobility DNA). TC22 (od ${lowDisplay} zł netto) oferuje najlepszy stosunek cena/wydajność z darmowym Mobility DNA i najszerszą siecią serwisową Zebra w Polsce.` } },
    ],
  }

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://tc22.pl/#webpage',
    url: 'https://tc22.pl',
    name: `Zebra TC22 — terminal mobilny od ${lowDisplay} zł netto | TAKMA`,
    description: `Strona produktowa terminala Zebra TC22 prowadzona przez autoryzowanego partnera Zebra — TAKMA.`,
    inLanguage: 'pl-PL',
    isPartOf: { '@id': 'https://takma.com.pl/#website' },
    about: { '@id': 'https://tc22.pl/#product' },
    primaryImageOfPage: { '@type': 'ImageObject', url: 'https://tc22.pl/images/tc22_scanner_1.png' },
    dateModified: lastModifiedISO,
    author: { '@id': 'https://takma.com.pl/#organization' },
    publisher: { '@id': 'https://takma.com.pl/#organization' },
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'TAKMA', item: 'https://takma.com.pl' },
      { '@type': 'ListItem', position: 2, name: 'Terminale mobilne', item: 'https://takma.com.pl/terminale-mobilne' },
      { '@type': 'ListItem', position: 3, name: 'Zebra TC22', item: 'https://tc22.pl' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(product) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  )
}
