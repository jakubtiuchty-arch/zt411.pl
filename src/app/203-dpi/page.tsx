import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WariantyDpi from '@/components/WariantyDpi'
import PodstronaInfo from '@/components/PodstronaInfo'
import { getPrices } from '@/data/prices'
import { ArrowRight, Home, ChevronRight, Truck, Warehouse, ShoppingCart, MapPin, Rocket, Gauge } from 'lucide-react'

const prices = getPrices()
const variants203 = prices.variants.filter(v => v.pn.startsWith('ZT41142'))
const cheapest203 = variants203.sort((a, b) => a.price - b.price)[0]
const price203 = cheapest203 ? Math.round(cheapest203.price) : 0
const fmtPLN = (n: number) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
const price203Display = price203 ? fmtPLN(price203) : '—'

export const metadata: Metadata = {
  title: `ZT411 203 dpi — drukarka logistyczna od ${price203Display} zł`,
  description: `Zebra ZT411 203 dpi: 8 pkt/mm, 356 mm/s — najszybszy i najtańszy wariant. Etykiety wysyłkowe, adresy, GS1-128, magazyn, retail. Od ${price203Display} zł netto. Partner Zebra — TAKMA.`,
  alternates: { canonical: 'https://www.zt411.pl/203-dpi' },
  openGraph: {
    type: 'article',
    locale: 'pl_PL',
    url: 'https://www.zt411.pl/203-dpi',
    title: 'Zebra ZT411 203 dpi — drukarka etykiet logistycznych',
    description: 'Szczegółowy przewodnik po rozdzielczości 203 dpi w ZT411. Standardowa rozdzielczość dla logistyki, e-commerce, magazynu. Najniższa cena i najwyższa szybkość.',
    images: [{ url: '/images/zt411-hero.jpg', width: 1200, height: 630, alt: 'Zebra ZT411 203 dpi' }],
  },
}

const useCases = [
  {
    icon: Truck,
    title: 'Etykiety kurierskie',
    desc: 'DPD, DHL, InPost, UPS, FedEx — wszyscy kurierzy używają standardu GS1-128 lub własnych formatów 1D. Wymiar etykiety 100×150 mm z adresem, barcode i tekstem — 203 dpi wystarcza w 100%.',
  },
  {
    icon: MapPin,
    title: 'Etykiety adresowe e-commerce',
    desc: 'Adres odbiorcy + nadawcy + kod nadania. Czytelna czcionka 8-12 pt, kod kreskowy 50×10 mm. 203 dpi zapewnia szybki druk i niższy koszt vs 300 dpi.',
  },
  {
    icon: Warehouse,
    title: 'Etykiety magazynowe',
    desc: 'SKU + lokalizacja + ilość. Standardowe etykiety policowe, paletowe (SSCC), pojemnikowe. Skaner 1D czyta bez problemu — nie ma potrzeby wyższej rozdzielczości.',
  },
  {
    icon: ShoppingCart,
    title: 'Retail — etykiety cenowe',
    desc: 'Cena + nazwa produktu + kod EAN/UPC (1D). Standardowe etykiety półkowe i produktowe. 203 dpi to branżowa norma retailu.',
  },
  {
    icon: Rocket,
    title: 'Wysokie wolumeny',
    desc: 'Gdy drukujesz 5 000–20 000 etykiet dziennie, szybkość 356 mm/s (14 ips) oszczędza godziny vs. 300 dpi. Dla fulfillment center jest to decydujący parametr.',
  },
  {
    icon: Gauge,
    title: 'Cross-docking',
    desc: 'Szybki przerzut palet — etykiety są drukowane just-in-time. 203 dpi + gilotyna = drukarka nadąża za taśmociągiem sortowni.',
  },
]

const comparisonTable = [
  {
    aspect: 'Punkty / mm',
    dpi203: '8',
    dpi300: '12',
    dpi600: '24',
    highlight: '203',
  },
  {
    aspect: 'Najmniejsza kreska',
    dpi203: '0,125 mm',
    dpi300: '0,083 mm',
    dpi600: '0,042 mm',
    highlight: '203',
  },
  {
    aspect: 'Minimalna czcionka',
    dpi203: '3 pt',
    dpi300: '2 pt',
    dpi600: '1 pt',
    highlight: '203',
  },
  {
    aspect: 'Minimalny kod 2D',
    dpi203: '8×8 mm',
    dpi300: '5×5 mm',
    dpi600: '2×2 mm',
    highlight: '203',
  },
  {
    aspect: 'Szybkość druku',
    dpi203: '356 mm/s',
    dpi300: '305 mm/s',
    dpi600: '152 mm/s',
    highlight: '203',
  },
  {
    aspect: 'Cena wariantu bazowego',
    dpi203: `~${price203Display} zł`,
    dpi300: 'od ~6 741 zł',
    dpi600: 'od ~11 097 zł',
    highlight: '203',
  },
  {
    aspect: 'Długość ciągłego druku',
    dpi203: '3 988 mm',
    dpi300: '1 854 mm',
    dpi600: '991 mm',
    highlight: '203',
  },
]

const when203Fits = [
  'Etykiety kurierskie (DPD, DHL, InPost, UPS) w formacie 100×150 mm',
  'Etykiety adresowe e-commerce z kodem kreskowym 1D',
  'Standardowe etykiety magazynowe z SKU, kodem 1D, lokalizacją',
  'Etykiety paletowe GS1-128 / SSCC (kod kreskowy 1D, duży)',
  'Etykiety retail z cenami, kodem EAN/UPC',
  'Etykiety transportowe z adresem i kodami 1D',
  'Wysokie wolumeny druku — priorytet szybkości nad jakością detali',
]

const when300Upgrade = [
  'Etykieta zawiera kod 2D (QR, DataMatrix) poniżej 10×10 mm',
  'Etykieta zawiera czcionkę mniejszą niż 4 pt (np. INCI kosmetyków)',
  'Powierzchnia etykiety < 50×50 mm z gęstym tekstem',
  'Symbole GHS/chemiczne wymagające precyzji',
  'Etykiety kosmetyczne, laboratoryjne, farmaceutyczne (OTC)',
]

const faqs = [
  {
    q: 'Co oznacza rozdzielczość 203 dpi w drukarce etykiet?',
    a: '203 dpi (dots per inch) to 8 punktów drukujących na milimetr. Najmniejsza możliwa linia ma grubość 0,125 mm, minimalny kod 2D to 8×8 mm, a minimalna czcionka to 3 pt. 203 dpi jest standardową rozdzielczością dla logistyki, e-commerce, magazynu i retailu — wystarcza dla wszystkich kodów kreskowych 1D (EAN, UPC, GS1-128) i tekstów powyżej 3 pt.',
  },
  {
    q: 'Dlaczego 203 dpi jest najpopularniejszym wyborem w logistyce?',
    a: 'Z trzech powodów: (1) najwyższa szybkość druku — 356 mm/s (14 ips) = 50-60 etykiet wysyłkowych na minutę, (2) najniższa cena — wariant bazowy od ~5 614 zł netto, (3) standard branży — kurierzy DPD/DHL/InPost/UPS projektują etykiety z założeniem 203 dpi. Nie potrzeba wyższej rozdzielczości dla kodów 1D.',
  },
  {
    q: 'Kiedy upgrade z 203 do 300 dpi ma sens?',
    a: 'Wybierz 300 dpi, gdy etykiety zawierają: kody 2D poniżej 10×10 mm (QR, DataMatrix), czcionkę poniżej 4 pt (INCI, wielojęzyczne ostrzeżenia), gęsty tekst na powierzchni < 50×50 mm, symbole GHS/chemiczne. Dla standardowej logistyki, adresów i etykiet magazynowych 203 dpi jest wystarczające.',
  },
  {
    q: 'Ile kosztuje ZT411 203 dpi?',
    a: `Wariant bazowy ZT411 203 dpi z odrywaniem (ZT41142-T0E0000Z) kosztuje od ${price203Display} zł netto. Wariant z Wi-Fi 6/6E: od ~6 984 zł. Z odklejakiem: ~6 364 zł. Z gilotyną: ~7 734 zł. Z RFID UHF: od ~8 500 zł. Linerless (ZeroLiner): ~8 146 zł. Dostępne 7 konfiguracji w tej rozdzielczości.`,
  },
  {
    q: 'Jak szybko ZT411 203 dpi drukuje etykiety?',
    a: '356 mm/s (14 ips) to najwyższa szybkość w klasie drukarek przemysłowych 4". Dla standardowej etykiety kurierskiej 100×150 mm oznacza to wydruk co ~0,5 s. W 8-godzinnej zmianie drukarka wydrukuje 50 000+ etykiet bez problemu. Najwyższa wydajność = drukarka nie jest wąskim gardłem na linii sortującej.',
  },
  {
    q: 'Czy 203 dpi obsługuje kody 2D (QR, DataMatrix)?',
    a: 'Tak, ale tylko większe kody — od 8×8 mm wzwyż. Dla mniejszych kodów 2D (farmacja, elektronika) potrzebujesz 300 lub 600 dpi. Dla standardowych QR Code wielkości 15-30 mm (reklamy, linki do stron) 203 dpi drukuje czytelnie.',
  },
  {
    q: 'Czy 203 dpi jest dostępne w ZT421?',
    a: 'Tak. ZT421 (6") oferuje 203 dpi i 300 dpi — nie ma 600 dpi. Wybór między ZT411 203 dpi a ZT421 203 dpi zależy od szerokości etykiety: ZT411 do 104 mm, ZT421 do 168 mm. Dla większości zastosowań e-commerce i magazynu wystarczy ZT411 4".',
  },
]

export default function Dpi203Page() {
  const techArticleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Zebra ZT411 203 dpi — drukarka etykiet logistycznych',
    description: 'Przewodnik po rozdzielczości 203 dpi w drukarce Zebra ZT411. Najszybszy i najtańszy wariant — standard dla logistyki, e-commerce, magazynu. Porównanie z 300 i 600 dpi.',
    datePublished: '2026-04-18',
    dateModified: '2026-04-18',
    author: { '@id': 'https://takma.com.pl/#organization' },
    publisher: {
      '@type': 'Organization',
      name: 'TAKMA',
      logo: { '@type': 'ImageObject', url: 'https://takma.com.pl/images/logo-takma.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.zt411.pl/203-dpi' },
    image: 'https://www.zt411.pl/images/zt411-hero.jpg',
    about: { '@type': 'Product', name: 'Zebra ZT411 203 dpi', url: 'https://www.zt411.pl/203-dpi' },
    keywords: 'zebra zt411 203 dpi, drukarka 203 dpi, drukarka etykiet logistyka, etykiety wysyłkowe, drukarka adresów, gs1-128 drukarka',
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Zebra ZT411', item: 'https://www.zt411.pl' },
      { '@type': 'ListItem', position: 2, name: '203 dpi', item: 'https://www.zt411.pl/203-dpi' },
    ],
  }



  return (
    <>
      <Header />
      <main>
        {/* Breadcrumb */}
        <nav className="bg-white border-b border-slate-200" aria-label="Breadcrumb">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-1.5 text-xs sm:text-sm">
            <Link href="/" className="text-slate-500 hover:text-slate-700 inline-flex items-center gap-1">
              <Home size={12} /> Zebra ZT411
            </Link>
            <ChevronRight size={12} className="text-slate-400" />
            <span className="text-slate-900 font-medium">203 dpi</span>
          </div>
        </nav>

        {/* Hero */}
        <section className="relative bg-black py-14 lg:py-20 overflow-hidden">
          <div
            className="absolute inset-0 bg-no-repeat bg-right"
            style={{ backgroundImage: 'url(/images/zt411_203dpi_hero.webp)', backgroundSize: 'contain' }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/30 to-black" aria-hidden="true" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.7)' }}>
            <div className="max-w-full lg:max-w-[55%] text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                <span className="text-brand-500">Zebra ZT411 203 dpi</span><br />
                Najszybsza i najtańsza rozdzielczość
              </h1>
              <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
                <strong className="text-white">8 pkt/mm, 356 mm/s, cena od {price203Display} zł netto</strong>.
                Standard dla logistyki, e-commerce, magazynu i retailu.
                Najwyższa szybkość w klasie drukarek przemysłowych 4&quot;.
                Używana przez DPD, DHL, InPost i wszystkich kurierów.
              </p>
              {price203Display !== '—' && (
                <div className="mt-6 inline-flex items-center gap-3 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full">
                  <span className="text-xs text-slate-400 uppercase tracking-wider">Wariant bazowy 203 dpi</span>
                  <span className="text-lg font-bold text-white">od {price203Display} zł netto</span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Passage */}
        <section className="py-10 lg:py-14 bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-4">Co to jest 203 dpi w drukarce etykiet?</h2>
            <p className="text-slate-700 leading-relaxed">
              <strong>203 dpi (dots per inch) to 8 punktów drukujących na milimetr</strong>.
              Najmniejsza możliwa linia ma grubość <strong>0,125 mm</strong>, minimalny kod 2D to <strong>8×8 mm</strong>, a minimalna czcionka to 3 pt.
              203 dpi jest standardową rozdzielczością dla logistyki, e-commerce, magazynu i retailu —
              wszyscy kurierzy (DPD, DHL, InPost, UPS) projektują etykiety z założeniem 203 dpi.
              Wariant bazowy jest najszybszy (356 mm/s) i najtańszy (od {price203Display} zł netto) w całej ofercie ZT411.
            </p>
          </div>
        </section>

        {/* Tabela porównawcza */}
        <section className="py-10 lg:py-14 bg-slate-50 border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-2">203 dpi vs 300 dpi vs 600 dpi</h2>
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="text-sm text-slate-500 mr-1">Więcej informacji:</span>
              <Link
                href="/300-dpi"
                className="group inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-sm font-semibold text-slate-900 hover:border-brand-500 hover:bg-brand-500/5 hover:text-brand-700 transition-colors"
              >
                300 dpi
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/600-dpi"
                className="group inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-sm font-semibold text-slate-900 hover:border-brand-500 hover:bg-brand-500/5 hover:text-brand-700 transition-colors"
              >
                600 dpi
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-sm border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="text-left py-3 px-4 font-semibold text-slate-600 border-b border-slate-200">Parametr</th>
                    <th className="py-3 px-4 text-center font-semibold bg-brand-500 text-slate-900 border-b border-brand-500">203 dpi</th>
                    <th className="py-3 px-4 text-center font-semibold text-slate-700 border-b border-slate-200">300 dpi</th>
                    <th className="py-3 px-4 text-center font-semibold text-slate-700 border-b border-slate-200">600 dpi</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonTable.map((r, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                      <td className="py-2.5 px-4 text-slate-600 font-medium border-b border-slate-100">{r.aspect}</td>
                      <td className="py-2.5 px-4 text-center font-medium text-slate-900 bg-brand-50/50 border-b border-slate-100">{r.dpi203}</td>
                      <td className="py-2.5 px-4 text-center text-slate-700 border-b border-slate-100">{r.dpi300}</td>
                      <td className="py-2.5 px-4 text-center text-slate-700 border-b border-slate-100">{r.dpi600}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section className="py-10 lg:py-14 bg-white border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-6">Zastosowania ZT411 203 dpi</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {useCases.map((u, i) => (
                <div key={i} className="bg-slate-50 rounded-xl border border-slate-200 p-5">
                  <h3 className="font-bold text-slate-900 mb-2">{u.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{u.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Matryce decyzyjne */}
        <section className="py-10 lg:py-14 bg-slate-50 border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-6">Kiedy 203 dpi to właściwy wybór</h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="bg-white rounded-2xl border-2 border-brand-500 p-5 lg:p-6">
                <div className="inline-block px-3 py-1 bg-brand-500 text-slate-900 text-xs font-bold uppercase tracking-wider rounded-full mb-3">
                  Zostań na 203 dpi
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">203 dpi wystarczy, jeśli:</h3>
                <ul className="space-y-2">
                  {when203Fits.map((t, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 bg-brand-500 rounded-full mt-2 shrink-0" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl border border-slate-300 p-5 lg:p-6">
                <div className="inline-block px-3 py-1 bg-slate-700 text-white text-xs font-bold uppercase tracking-wider rounded-full mb-3">
                  Upgrade do 300 dpi
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Dopłać za 300 dpi, jeśli:</h3>
                <ul className="space-y-2">
                  {when300Upgrade.map((t, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 bg-slate-700 rounded-full mt-2 shrink-0" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/300-dpi" className="inline-flex items-center gap-1 text-sm text-brand-700 font-semibold mt-4 hover:underline">
                  Zobacz szczegóły 300 dpi <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* TCO section */}
        <section className="py-10 lg:py-14 bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-4">Dlaczego 203 dpi ma najniższe TCO</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              203 dpi wygrywa kalkulację TCO (Total Cost of Ownership) w trzech wymiarach:
            </p>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                <div className="shrink-0 w-8 h-8 rounded-full bg-brand-500 text-slate-900 flex items-center justify-center font-bold text-xs">1</div>
                <div>
                  <strong className="block text-slate-900 mb-1">Niższa cena zakupu</strong>
                  Wariant 203 dpi (ZT41142-T0E0000Z) to {price203Display} zł netto — o ~1 000 zł taniej niż 300 dpi i o ~5 500 zł taniej niż 600 dpi.
                </div>
              </li>
              <li className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                <div className="shrink-0 w-8 h-8 rounded-full bg-brand-500 text-slate-900 flex items-center justify-center font-bold text-xs">2</div>
                <div>
                  <strong className="block text-slate-900 mb-1">Tańsze nośniki</strong>
                  Standardowe etykiety i taśmy dla 203 dpi są najpopularniejsze na rynku — niższe ceny, łatwa dostępność, brak dedykowanych certyfikacji.
                </div>
              </li>
              <li className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                <div className="shrink-0 w-8 h-8 rounded-full bg-brand-500 text-slate-900 flex items-center justify-center font-bold text-xs">3</div>
                <div>
                  <strong className="block text-slate-900 mb-1">Najwyższa wydajność operacyjna</strong>
                  356 mm/s vs 305 mm/s (300 dpi) vs 152 mm/s (600 dpi) — dla 10 000 etykiet dziennie 203 dpi oszczędza 30-60 minut pracy dziennie.
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Warianty */}
        <WariantyDpi dpi={203} />

        {/* Info podstrony: oferta projektowa + serwis/instrukcje */}
        <PodstronaInfo />

        {/* FAQ */}
        <section className="py-10 lg:py-14 bg-slate-50 border-b border-slate-200">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-6">FAQ — ZT411 203 dpi</h2>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <details key={i} className="group bg-white rounded-xl border border-slate-200 overflow-hidden">
                  <summary className="cursor-pointer p-4 lg:p-5 font-semibold text-slate-900 hover:text-brand-700 transition-colors text-sm lg:text-base">
                    {f.q}
                  </summary>
                  <p className="px-4 lg:px-5 pb-4 lg:pb-5 text-sm text-slate-700 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 lg:py-16 bg-gradient-to-br from-[#0A1A2F] to-slate-900 text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">Zamów ZT411 203 dpi</h2>
            <p className="text-slate-300 mb-8 leading-relaxed">
              7 konfiguracji do wyboru: odrywanie, odklejak, nawijak podkładu, nawijak etykiet, gilotyna, gilotyna linerless,
              oraz opcja RFID UHF i Wi-Fi 6/6E. Cena od <strong className="text-white">{price203Display} zł netto</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/#warianty"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-bold text-slate-900 bg-brand-500 rounded-full hover:bg-brand-400 hover:-translate-y-0.5 transition-all"
              >
                Zobacz warianty ZT411
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/#kontakt"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-bold text-white border-2 border-white/20 rounded-full hover:bg-white/5 hover:border-white/40 transition-all"
              >
                Zapytaj o 203 dpi
              </Link>
            </div>
          </div>
        </section>

        {/* JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      </main>
      <Footer />
    </>
  )
}
