import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WariantyDpi from '@/components/WariantyDpi'
import PodstronaInfo from '@/components/PodstronaInfo'
import { getPrices } from '@/data/prices'
import { ArrowRight, Home, ChevronRight, Zap, ScanBarcode, Sparkles, FlaskConical, Package, TrendingUp } from 'lucide-react'

const prices = getPrices()
const variants300 = prices.variants.filter(v => v.pn.startsWith('ZT41143'))
const cheapest300 = variants300.sort((a, b) => a.price - b.price)[0]
const price300 = cheapest300 ? Math.round(cheapest300.price) : 0
const fmtPLN = (n: number) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
const price300Display = price300 ? fmtPLN(price300) : '—'

export const metadata: Metadata = {
  title: `ZT411 300 dpi — drukarka GS1 DataMatrix | od ${price300Display} zł`,
  description: `Zebra ZT411 300 dpi: 12 pkt/mm, kod 2D od 5 mm, szybkość 305 mm/s. Najpopularniejsza rozdzielczość — kosmetyki GHS, laboratoria, farmacja. Od ${price300Display} zł netto.`,
  alternates: { canonical: 'https://www.zt411.pl/300-dpi' },
  openGraph: {
    type: 'article',
    locale: 'pl_PL',
    url: 'https://www.zt411.pl/300-dpi',
    title: 'Zebra ZT411 300 dpi — drukarka GS1 DataMatrix',
    description: 'Szczegółowy przewodnik po rozdzielczości 300 dpi w ZT411. Zastosowania, kiedy wybrać 300 dpi vs 203 dpi vs 600 dpi.',
    images: [{ url: '/images/zt411-hero.jpg', width: 1200, height: 630, alt: 'Zebra ZT411 300 dpi' }],
  },
}

const useCases = [
  {
    icon: Sparkles,
    title: 'Kosmetyki i chemia gospodarcza',
    desc: 'Etykiety kosmetyczne z symbolami GHS (pictogramy), INCI składników 5-6 pt i kodami 2D. Powierzchnia 30×80 mm musi zmieścić 2-3 języki — 300 dpi zapewnia czytelność.',
  },
  {
    icon: FlaskConical,
    title: 'Laboratoria',
    desc: 'Etykiety na probówki Falcon 15/50 ml — ID próbki + data + operator + kod kreskowy 2D. Skaner laboratoryjny potrzebuje wyraźnych kodów w 300 dpi.',
  },
  {
    icon: ScanBarcode,
    title: 'GS1 DataMatrix',
    desc: 'Standardowa rozdzielczość dla GS1 DataMatrix w opakowaniach farmaceutycznych (ilość 7-10 mm). 203 dpi za mało dla jednoznacznego odczytu, 600 dpi to nadwyżka.',
  },
  {
    icon: Package,
    title: 'Handel detaliczny — kody 2D',
    desc: 'Etykiety produktów z QR Code/DataMatrix do dowodów zakupu, programów lojalnościowych, traceability. Typowy rozmiar 10-20 mm — 300 dpi idealnie.',
  },
  {
    icon: TrendingUp,
    title: 'Etykiety kompaktowe',
    desc: 'Małe etykiety produktowe 25×40 mm gdzie trzeba zmieścić nazwę, cenę, kod kreskowy i QR. 300 dpi drukuje czytelnie 2 pt — każdy szczegół wyraźny.',
  },
  {
    icon: Zap,
    title: 'Standardowe etykiety logistyczne 2D',
    desc: 'Etykiety GS1-128 + dodatkowy kod 2D (np. DataMatrix) — nowoczesny trend w T&L. 300 dpi obsługuje oba formaty bez utraty szybkości na produkcji.',
  },
]

const comparisonTable = [
  {
    aspect: 'Punkty / mm',
    dpi203: '8',
    dpi300: '12',
    dpi600: '24',
  },
  {
    aspect: 'Najmniejsza kreska',
    dpi203: '0,125 mm',
    dpi300: '0,083 mm',
    dpi600: '0,042 mm',
  },
  {
    aspect: 'Minimalna czcionka',
    dpi203: '3 pt',
    dpi300: '2 pt',
    dpi600: '1 pt',
  },
  {
    aspect: 'Minimalny kod 2D',
    dpi203: '8×8 mm',
    dpi300: '5×5 mm',
    dpi600: '2×2 mm',
  },
  {
    aspect: 'Szybkość druku',
    dpi203: '356 mm/s',
    dpi300: '305 mm/s',
    dpi600: '152 mm/s',
  },
  {
    aspect: 'Szybkość vs 203 dpi',
    dpi203: '100%',
    dpi300: '86%',
    dpi600: '43%',
  },
  {
    aspect: 'Typowe zastosowanie',
    dpi203: 'Logistyka, adresy, wysyłki',
    dpi300: 'GS1 DataMatrix, kosmetyki, laboratoria',
    dpi600: 'PCB, farmacja UDI, mikrotekst',
  },
]

const when300Triggers = [
  'Etykieta zawiera kod 2D (QR, DataMatrix) mniejszy niż 10 mm',
  'Etykieta zawiera czcionkę mniejszą niż 4 pt (INCI, ostrzeżenia)',
  'Powierzchnia etykiety < 50×50 mm z 2+ językami',
  'Skaner optyczny / kamera wymaga wysokiej rozdzielczości dla automatycznego sortowania',
  'Symbole GHS/chemiczne na małych opakowaniach',
  'Etykiety produktowe kosmetyków, leków OTC, suplementów',
]

const when600Triggers = [
  'Kody 2D mniejsze niż 5×5 mm (elektronika, PCB, SMD)',
  'Etykiety farmaceutyczne UDI na ampułkach/strzykawkach',
  'Mikrotekst 1 pt (jubilerstwo, zegarki)',
  'Etykiety probówek Eppendorf 0,5-2 ml',
  'Ultrakompaktowe znakowanie zgodności CE/FCC na miniaturowych produktach',
]

const faqs = [
  {
    q: 'Co oznacza rozdzielczość 300 dpi w drukarce etykiet?',
    a: '300 dpi (dots per inch) to 12 punktów drukujących na milimetr. Najmniejsza możliwa linia ma grubość 0,083 mm, najmniejszy kod 2D to 5×5 mm, a minimalna czcionka to 2 pt. 300 dpi jest najpopularniejszą rozdzielczością w drukarkach przemysłowych — złoty środek między szybkością (305 mm/s) a jakością wystarczającą dla GS1 DataMatrix i kosmetyków.',
  },
  {
    q: 'Kiedy wybrać ZT411 300 dpi zamiast 203 dpi?',
    a: 'Wybierz 300 dpi, gdy etykiety zawierają: (1) kody 2D mniejsze niż 10 mm (QR, DataMatrix), (2) czcionkę mniejszą niż 4 pt (INCI, ostrzeżenia wielojęzyczne), (3) symbole GHS/chemiczne na małych opakowaniach, (4) precyzyjne grafiki lub loga w wysokiej jakości. Dla typowej logistyki, adresów i standardowych kodów kreskowych wystarczy 203 dpi.',
  },
  {
    q: 'Kiedy wybrać 300 dpi zamiast 600 dpi?',
    a: 'Wybierz 300 dpi, gdy: (1) zależy ci na szybkości druku (305 vs 152 mm/s — 2× szybciej), (2) cena ma znaczenie (300 dpi jest o ok. 2 000-3 000 zł tańsza), (3) etykiety nie mają detali mniejszych niż 5 mm, (4) nie drukujesz PCB/UDI/jubilerstwa. Dla 90% zastosowań B2B 300 dpi jest optymalne.',
  },
  {
    q: 'Ile kosztuje ZT411 300 dpi?',
    a: `Wariant bazowy ZT411 300 dpi (ZT41143-T0E0000Z, odrywanie) kosztuje od ${price300Display} zł netto. Warianty z gilotyną, odklejakiem lub RFID są odpowiednio droższe. Dla porównania: 203 dpi zaczyna się od ok. 5 614 zł, a 600 dpi od ok. 11 097 zł netto.`,
  },
  {
    q: 'Czy ZT421 (6") ma 300 dpi?',
    a: 'Tak. Rozdzielczość 300 dpi jest dostępna zarówno w ZT411 (4") jak i ZT421 (6"). Różnica to szerokość druku — ZT411 do 104 mm, ZT421 do 168 mm. Wybór między ZT411 300 dpi a ZT421 300 dpi zależy od szerokości etykiety, którą drukujesz.',
  },
  {
    q: 'Jakie nośniki pasują do ZT411 300 dpi?',
    a: 'Większość standardowych etykiet termotransferowych dla drukarek przemysłowych obsługuje 300 dpi. Zebra rekomenduje certyfikowane konsumabilia Zebra (Wax, Wax-Resin, Resin) dla gwarantowanej jakości. Dla zastosowań specjalnych (kosmetyki, laboratoria) dostępne są dedykowane nośniki — papier powlekany, PP, PE, PET.',
  },
  {
    q: 'Czy 300 dpi jest wystarczające dla GS1 DataMatrix?',
    a: 'Tak — 300 dpi to standardowa rekomendacja GS1 dla DataMatrix. Kody mniejsze niż 5×5 mm (np. w elektronice SMD lub na małych strzykawkach medycznych) wymagają 600 dpi, ale dla 95% zastosowań farmaceutycznych, kosmetycznych i detalicznych 300 dpi zapewnia niezawodny odczyt przez standardowe skanery 2D.',
  },
]

export default function Dpi300Page() {
  const techArticleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Zebra ZT411 300 dpi — drukarka GS1 DataMatrix, kosmetyki, laboratoria',
    description: 'Przewodnik po rozdzielczości 300 dpi w drukarce Zebra ZT411. Kiedy wybrać 300 dpi vs 203 dpi vs 600 dpi, zastosowania, cena.',
    datePublished: '2026-04-18',
    dateModified: '2026-04-18',
    author: { '@type': 'Organization', name: 'TAKMA', url: 'https://takma.com.pl' },
    publisher: {
      '@type': 'Organization',
      name: 'TAKMA',
      logo: { '@type': 'ImageObject', url: 'https://takma.com.pl/images/logo-takma.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.zt411.pl/300-dpi' },
    image: 'https://www.zt411.pl/images/zt411-hero.jpg',
    about: { '@type': 'Product', name: 'Zebra ZT411 300 dpi', url: 'https://www.zt411.pl/300-dpi' },
    keywords: 'zebra zt411 300 dpi, drukarka 300 dpi, gs1 datamatrix drukarka, etykiety kosmetyki, etykiety laboratorium',
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
      { '@type': 'ListItem', position: 2, name: '300 dpi', item: 'https://www.zt411.pl/300-dpi' },
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
            <span className="text-slate-900 font-medium">300 dpi</span>
          </div>
        </nav>

        {/* Hero */}
        <section className="relative bg-black py-14 lg:py-20 overflow-hidden">
          <div
            className="absolute inset-0 bg-no-repeat bg-right"
            style={{ backgroundImage: 'url(/images/zt411_300dpi_hero.webp)', backgroundSize: 'contain' }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/30 to-black" aria-hidden="true" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.7)' }}>
            <div className="max-w-full lg:max-w-[55%] text-center lg:text-left">
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
              <span className="text-brand-500">Zebra ZT411 300 dpi</span><br />
              Najpopularniejsza rozdzielczość drukarki etykiet
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
              <strong className="text-white">12 pkt/mm, kod 2D od 5×5 mm, szybkość 305 mm/s</strong>.
              Złoty środek między szybkością a jakością —
              standard dla GS1 DataMatrix, kosmetyków GHS, etykiet laboratoryjnych i farmaceutycznych.
              Dostępna w ZT411 i ZT421.
            </p>
            {price300Display !== '—' && (
              <div className="mt-6 inline-flex items-center gap-3 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full">
                <span className="text-xs text-slate-400 uppercase tracking-wider">Wariant 300 dpi</span>
                <span className="text-lg font-bold text-white">od {price300Display} zł netto</span>
              </div>
            )}
            </div>
          </div>
        </section>

        {/* Passage citable */}
        <section className="py-10 lg:py-14 bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-4">Co to jest 300 dpi w drukarce etykiet?</h2>
            <p className="text-slate-700 leading-relaxed">
              <strong>300 dpi (dots per inch) to 12 punktów drukujących na milimetr</strong>.
              Najmniejsza możliwa linia ma grubość <strong>0,083 mm</strong>, najmniejszy kod 2D to <strong>5×5 mm</strong>,
              a minimalna czytelna czcionka to 2 pt. 300 dpi jest najpopularniejszą rozdzielczością w drukarkach przemysłowych —
              złoty środek między szybkością (305 mm/s) a jakością wystarczającą dla większości zastosowań B2B.
            </p>
          </div>
        </section>

        {/* Tabela porównawcza */}
        <section className="py-10 lg:py-14 bg-slate-50 border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-2">300 dpi vs 203 dpi vs 600 dpi</h2>
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="text-sm text-slate-500 mr-1">Porównaj z innymi rozdzielczościami:</span>
              <Link
                href="/203-dpi"
                className="group inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-sm font-semibold text-slate-900 hover:border-brand-500 hover:bg-brand-500/5 hover:text-brand-700 transition-colors"
              >
                203 dpi
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
                    <th className="py-3 px-4 text-center font-semibold text-slate-700 border-b border-slate-200">203 dpi</th>
                    <th className="py-3 px-4 text-center font-semibold bg-brand-500 text-slate-900 border-b border-brand-500">300 dpi</th>
                    <th className="py-3 px-4 text-center font-semibold text-slate-700 border-b border-slate-200">600 dpi</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonTable.map((r, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                      <td className="py-2.5 px-4 text-slate-600 font-medium border-b border-slate-100">{r.aspect}</td>
                      <td className="py-2.5 px-4 text-center text-slate-700 border-b border-slate-100">{r.dpi203}</td>
                      <td className="py-2.5 px-4 text-center font-medium text-slate-900 bg-brand-50/50 border-b border-slate-100">{r.dpi300}</td>
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
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-6">Zastosowania ZT411 300 dpi</h2>
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

        {/* Kiedy upgrade / downgrade */}
        <section className="py-10 lg:py-14 bg-slate-50 border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-6">Kiedy 300 dpi to właściwy wybór</h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="bg-white rounded-2xl border-2 border-brand-500 p-5 lg:p-6">
                <div className="inline-block px-3 py-1 bg-brand-500 text-slate-900 text-xs font-bold uppercase tracking-wider rounded-full mb-3">
                  Upgrade z 203 → 300
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Wybierz 300 dpi, jeśli:</h3>
                <ul className="space-y-2">
                  {when300Triggers.map((t, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 bg-brand-500 rounded-full mt-2 shrink-0" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl border border-slate-300 p-5 lg:p-6">
                <div className="inline-block px-3 py-1 bg-slate-700 text-white text-xs font-bold uppercase tracking-wider rounded-full mb-3">
                  Upgrade z 300 → 600
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Wybierz 600 dpi, jeśli:</h3>
                <ul className="space-y-2">
                  {when600Triggers.map((t, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 bg-slate-700 rounded-full mt-2 shrink-0" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/600-dpi" className="inline-flex items-center gap-1 text-sm text-brand-700 font-semibold mt-4 hover:underline">
                  Zobacz szczegóły 600 dpi <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Warianty */}
        <WariantyDpi dpi={300} />

        {/* Info podstrony: oferta projektowa + serwis/instrukcje */}
        <PodstronaInfo />

        {/* FAQ */}
        <section className="py-10 lg:py-14 bg-white border-b border-slate-200">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-6">FAQ — ZT411 300 dpi</h2>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <details key={i} className="group bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">Zamów wariant ZT411 300 dpi</h2>
            <p className="text-slate-300 mb-8 leading-relaxed">
              Dostępne konfiguracje: odrywanie, odklejak, nawijak podkładu, nawijak etykiet, gilotyna,
              gilotyna linerless. Plus opcjonalnie RFID UHF i Wi-Fi 6/6E.
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
                Zapytaj o 300 dpi
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
