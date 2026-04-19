import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getPrices } from '@/data/prices'
import { ArrowRight, Home, ChevronRight, Radio, Zap, Shield, Layers, Target, CheckCircle2 } from 'lucide-react'

const prices = getPrices()
const rfidVariant = prices.variants.find(v => v.pn.includes('00C0Z')) || prices.variants.find(v => v.pn.includes('C0'))
const rfidPrice = rfidVariant ? Math.round(rfidVariant.price) : 0
const fmtPLN = (n: number) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
const rfidPriceDisplay = rfidPrice ? fmtPLN(rfidPrice) : '—'

export const metadata: Metadata = {
  title: `Zebra ZT411 RFID UHF — EPC gen. 2 | od ${rfidPriceDisplay} zł`,
  description: `ZT411 RFID: koder UHF EPC gen. 2 v2.1, ISO/IEC 18000-63, RAIN RFID. Adaptive encoding, wariant On-Metal. Cena od ${rfidPriceDisplay} zł netto. Partner Zebra — TAKMA.`,
  alternates: { canonical: 'https://www.zt411.pl/rfid' },
  openGraph: {
    type: 'article',
    locale: 'pl_PL',
    url: 'https://www.zt411.pl/rfid',
    title: 'Zebra ZT411 RFID — drukarka UHF EPC gen. 2 z adaptive encoding',
    description: 'Kompletny przewodnik po RFID UHF w drukarce Zebra ZT411 — EPC gen. 2, kodowanie adaptacyjne, On-Metal, tagi ARC certified.',
    images: [{ url: '/images/zt411-hero.jpg', width: 1200, height: 630, alt: 'Zebra ZT411 RFID UHF' }],
  },
}

const specs = [
  { label: 'Protokoły', value: 'EPC gen. 2 v2.1 · ISO/IEC 18000-63 · RAIN RFID' },
  { label: 'Częstotliwość pracy', value: '865,6–867,6 MHz (ETSI EU) · 902–928 MHz (FCC US)' },
  { label: 'Moc transmisji', value: 'Regulowana programowo (zgodna z regulacjami regionu)' },
  { label: 'Kodowanie', value: 'Adaptive Encoding — automatyczny dobór ustawień per tag' },
  { label: 'Wspierane tagi', value: 'Zebra ARC-certified (Advanced RFID Center)' },
  { label: 'Dostępność w wariancie', value: 'Fabryczna instalacja lub zestaw upgrade u klienta' },
  { label: 'Obsługa 4" i 6"', value: 'Tak — RFID działa w ZT411 (4") i ZT421 (6")' },
  { label: 'On-Metal', value: 'Tylko ZT411 (rozwiązanie niedostępne dla modelu 600 dpi)' },
  { label: 'Sterowanie', value: 'ZPL II z rozszerzeniami RFID (^RF, ^RS, ^RR)' },
  { label: 'Kalibracja', value: 'Automatyczna — podczas pierwszego kodowania tagu' },
]

const adaptiveEncodingSteps = [
  {
    step: '1',
    title: 'Drukarka wykrywa tag',
    desc: 'Przy przesuwaniu etykiety przez koder RFID drukarka identyfikuje typ tagu (chipset, antena, pozycja).',
  },
  {
    step: '2',
    title: 'Automatyczny wybór mocy',
    desc: 'Algorytm dobiera optymalną moc transmisji dla danego tagu — eliminuje konieczność ręcznej kalibracji.',
  },
  {
    step: '3',
    title: 'Pozycjonowanie',
    desc: 'System określa dokładną pozycję anteny względem chipu, żeby zapewnić niezawodne odczytywanie.',
  },
  {
    step: '4',
    title: 'Kodowanie danych',
    desc: 'Drukarka wysyła komendę write do tagu — EPC memory lub User memory (zgodnie z ZPL RF command).',
  },
  {
    step: '5',
    title: 'Weryfikacja',
    desc: 'Natychmiast po kodowaniu drukarka czyta tag i porównuje z oryginalnymi danymi — odrzuca błędne.',
  },
]

const useCases = [
  {
    icon: Layers,
    title: 'Magazyn i logistyka',
    desc: 'Znakowanie palet i kartonów kodami SSCC + RFID UHF. Bramki odczytują całe palety przy wjeździe/wyjeździe z magazynu (zasięg do 9 m).',
  },
  {
    icon: Target,
    title: 'Inwentaryzacja',
    desc: 'Odczyt 100–700 tagów/sekundę z odległości do 9 metrów. Skanowanie regału 3-metrowego w 5 sekund zamiast 10 minut.',
  },
  {
    icon: Shield,
    title: 'Farmacja / UDI',
    desc: 'Zgodność z regulacjami FDA UDI i europejskimi GS1 DataMatrix. Każda jednostka lekowa z unikalnym identyfikatorem EPC.',
  },
  {
    icon: Zap,
    title: 'Motoryzacja',
    desc: 'Znakowanie części samochodowych (Track & Trace), kontenerów metalowych (wariant On-Metal), identyfikacja na linii produkcyjnej.',
  },
  {
    icon: Radio,
    title: 'Retail',
    desc: 'Etykiety lojalnościowe, anti-theft (EAS), szybka inwentaryzacja z readerem mobilnym. RFID UHF jest standardem w dużych sieciach odzieżowych.',
  },
  {
    icon: CheckCircle2,
    title: 'Zasoby metalowe',
    desc: 'Wariant On-Metal do znakowania kontenerów, pojemników przemysłowych, narzędzi. Dedykowana antena eliminuje interferencje z metalem.',
  },
]

const faqs = [
  {
    q: 'Co to jest RFID UHF w drukarce Zebra ZT411?',
    a: 'RFID UHF (Ultra High Frequency) w ZT411 to zintegrowany koder, który jednocześnie drukuje etykietę i zapisuje dane do chipa RFID osadzonego w tej etykiecie. Działa w pasmach 865,6–867,6 MHz (ETSI EU) oraz 902–928 MHz (FCC US), używa protokołu EPC gen. 2 v2.1 oraz standardu ISO/IEC 18000-63. Zasięg odczytu: do 9 m przy odpowiednich tagach.',
  },
  {
    q: 'Czym jest Adaptive Encoding w ZT411?',
    a: 'Adaptive Encoding to technologia Zebra, która automatycznie dobiera optymalną moc transmisji i pozycję kodowania dla każdego typu tagu RFID. Eliminuje konieczność ręcznej kalibracji — drukarka rozpoznaje tag i sama znajduje najlepsze ustawienia. W praktyce oznacza to mniej błędów kodowania i szybsze wdrożenie nowych tagów bez przerywania produkcji.',
  },
  {
    q: 'Czym jest wariant On-Metal w ZT411 RFID?',
    a: 'On-Metal to specjalna wersja ZT411 RFID do znakowania powierzchni metalowych — kontenerów, pojemników przemysłowych, narzędzi. Standardowy RFID UHF nie działa na metalu (interferencje), dlatego używa się dedykowanych tagów on-metal z izolatorem. Wariant dostępny wyłącznie w ZT411 (ZT421 nie obsługuje On-Metal) i niekompatybilny z rozdzielczością 600 dpi.',
  },
  {
    q: 'Czy można dokupić RFID do istniejącej ZT411 bez RFID?',
    a: 'Tak. Dostępny jest zestaw upgrade do instalacji u klienta (Field Installable Kit). Montaż zajmuje ok. 30-60 minut, nie wymaga specjalistycznych narzędzi — instrukcja krok po kroku. Po instalacji drukarka uzyskuje pełną funkcjonalność RFID identyczną z wariantem fabrycznym.',
  },
  {
    q: 'Jakie tagi RFID pasują do Zebra ZT411?',
    a: 'ZT411 obsługuje wszystkie tagi w standardzie EPC gen. 2 v2.1 (ISO/IEC 18000-63). Najlepszą kompatybilność zapewniają tagi ARC-certified (testowane przez Zebra Advanced RFID Center) — dają gwarancję kodowania bez problemów. Popularne modele: Impinj M730/M750/M800, NXP UCODE 9, Alien Higgs 9. Do On-Metal: dedykowane tagi Xerafy, Confidex Ironside, Omni-ID.',
  },
  {
    q: 'Ile kosztuje wariant Zebra ZT411 RFID?',
    a: `Wariant ZT411 z RFID UHF (PN: ZT41142-T0E00C0Z) kosztuje ${rfidPriceDisplay !== '—' ? `od ${rfidPriceDisplay} zł netto` : 'od ok. 8 500 zł netto'}. Zestaw upgrade do istniejącej drukarki bez RFID: ok. 4 000-5 000 zł netto. Dodatkowo doliczyć należy koszt tagów RFID (od 0,10 zł za sztukę przy dużych wolumenach).`,
  },
  {
    q: 'Jak zacząć drukować etykiety RFID w ZT411?',
    a: 'Po skonfigurowaniu drukarki (kalibracja nośnika + pozycji kodera) używa się rozszerzenia języka ZPL II. Komenda ^RFW zapisuje dane do tagu, ^RFR czyta tag dla weryfikacji, ^RS ustawia parametry RFID (lokalizacja bloku, moc), ^RR zgłasza błędy. Projekt etykiety w Zebra Designer, BarTender lub NiceLabel. Pierwszy druk RFID wymaga ok. 1-2 godzin konfiguracji.',
  },
  {
    q: 'Jak szybko ZT411 koduje tagi RFID?',
    a: 'Prędkość kodowania RFID w ZT411: ok. 8-12 tagów/sekundę w ciągłej pracy (zależnie od ilości danych i typu tagu). To wystarczająca wydajność dla magazynu 500-5 000 palet dziennie. Kodowanie nie spowalnia druku — proces jest zintegrowany z przesuwem etykiety.',
  },
]

export default function RfidPage() {
  const techArticleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Zebra ZT411 RFID — drukarka UHF EPC gen. 2 z Adaptive Encoding',
    description: 'Przewodnik po funkcji RFID UHF w drukarce Zebra ZT411. EPC gen. 2 v2.1, ISO/IEC 18000-63, RAIN RFID, Adaptive Encoding, wariant On-Metal dla powierzchni metalowych. Specyfikacja, zastosowania, tagi kompatybilne, cena.',
    datePublished: '2026-04-18',
    dateModified: '2026-04-18',
    author: { '@id': 'https://takma.com.pl/#organization' },
    publisher: {
      '@type': 'Organization',
      name: 'TAKMA',
      logo: { '@type': 'ImageObject', url: 'https://takma.com.pl/images/logo-takma.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.zt411.pl/rfid' },
    image: 'https://www.zt411.pl/images/zt411-hero.jpg',
    about: { '@type': 'Product', name: 'Zebra ZT411', url: 'https://www.zt411.pl' },
    keywords: 'zebra zt411 rfid, drukarka rfid uhf, EPC gen 2, adaptive encoding, RAIN RFID, on-metal',
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
      { '@type': 'ListItem', position: 2, name: 'RFID', item: 'https://www.zt411.pl/rfid' },
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
            <span className="text-slate-900 font-medium">RFID</span>
          </div>
        </nav>

        {/* Hero */}
        <section className="relative bg-black py-14 lg:py-20 overflow-hidden">
          <div
            className="absolute inset-0 bg-no-repeat bg-right"
            style={{ backgroundImage: 'url(/images/zt411_rfid_hero.webp)', backgroundSize: 'contain' }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/30 to-black" aria-hidden="true" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.7)' }}>
            <div className="max-w-full lg:max-w-[55%] text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                <span className="text-brand-500">Zebra ZT411 RFID</span><br />
                Drukarka UHF EPC gen. 2 z Adaptive Encoding
              </h1>
              <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
                ZT411 z RFID UHF jednocześnie drukuje etykietę i koduje dane do chipa — protokół EPC gen. 2 v2.1,
                zasięg odczytu do 9 m, wydajność 8–12 tagów/s. Adaptive Encoding automatycznie dobiera ustawienia dla każdego tagu.
                Dostępna wersja On-Metal do powierzchni metalowych.
              </p>
              {rfidPriceDisplay !== '—' && (
                <div className="mt-6 inline-flex items-center gap-3 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full">
                  <span className="text-xs text-slate-400 uppercase tracking-wider">Cena wariantu RFID</span>
                  <span className="text-lg font-bold text-white">od {rfidPriceDisplay} zł netto</span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Co to RFID UHF — passage citable ~50 słów */}
        <section className="py-10 lg:py-14 bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-4">Co to jest RFID UHF w drukarce etykiet?</h2>
            <p className="text-slate-700 leading-relaxed">
              RFID UHF (Ultra High Frequency) to technologia bezprzewodowej identyfikacji, która pozwala zapisywać dane do chipa osadzonego
              w etykiecie. Drukarka Zebra ZT411 jednocześnie <strong>drukuje wizualny kod kreskowy</strong> i <strong>koduje dane do tagu RFID</strong> —
              oba elementy w jednej etykiecie. Zasięg odczytu: do 9 metrów przy odpowiednich tagach i czytnikach. Pasma ETSI EU (865,6–867,6 MHz) i FCC US (902–928 MHz).
            </p>
          </div>
        </section>

        {/* Pełna specyfikacja RFID */}
        <section className="py-10 lg:py-14 bg-slate-50 border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-6">Specyfikacja RFID w Zebra ZT411</h2>
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
              {specs.map((s, i) => (
                <div key={s.label} className={`flex flex-col sm:flex-row ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'} ${i < specs.length - 1 ? 'border-b border-slate-100' : ''}`}>
                  <div className="w-full sm:w-[40%] py-3 px-4 text-sm font-medium text-slate-500">{s.label}</div>
                  <div className="w-full sm:w-[60%] py-3 px-4 text-sm text-slate-900">{s.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Adaptive Encoding */}
        <section className="py-10 lg:py-14 bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-2">Adaptive Encoding — jak to działa</h2>
            <p className="text-sm text-slate-600 mb-6">
              Automatyczne kodowanie eliminuje ręczną kalibrację drukarki RFID — 5 kroków procesu.
            </p>
            <ol className="space-y-3">
              {adaptiveEncodingSteps.map(s => (
                <li key={s.step} className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="shrink-0 w-9 h-9 rounded-full bg-brand-500 text-slate-900 flex items-center justify-center font-bold text-sm">
                    {s.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{s.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Zastosowania */}
        <section className="py-10 lg:py-14 bg-slate-50 border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-6">Zastosowania ZT411 RFID</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {useCases.map((u, i) => (
                <div key={i} className="bg-white rounded-xl border border-slate-200 p-5">
                  <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center mb-3">
                    <u.icon size={20} className="text-brand-700" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1">{u.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{u.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* On-Metal deep dive */}
        <section className="py-10 lg:py-14 bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-4">ZT411 RFID On-Metal — do powierzchni metalowych</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Standardowe tagi RFID UHF nie działają na metalu — fala radiowa jest odbijana i neutralizuje sygnał.
              <strong> Wariant On-Metal ZT411</strong> to dedykowane rozwiązanie do znakowania kontenerów, pojemników przemysłowych, narzędzi i zasobów metalowych.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">Co zawiera wariant On-Metal</h3>
                <ul className="space-y-1.5 text-sm text-slate-700">
                  <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-brand-700 mt-0.5 shrink-0" /> Dedykowany koder RFID o zmodyfikowanej antenie</li>
                  <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-brand-700 mt-0.5 shrink-0" /> Kompatybilność z tagami Xerafy, Confidex Ironside, Omni-ID</li>
                  <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-brand-700 mt-0.5 shrink-0" /> Zestaw upgrade u klienta (ok. 60 min instalacji)</li>
                  <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-brand-700 mt-0.5 shrink-0" /> Adaptive Encoding dostosowany do izolatorów</li>
                </ul>
              </div>
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">Ograniczenia</h3>
                <ul className="space-y-1.5 text-sm text-slate-700">
                  <li className="flex items-start gap-2"><span className="text-red-500 font-bold">×</span> Niedostępny w modelu 600 dpi (tylko 203 i 300 dpi)</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 font-bold">×</span> Niedostępny w ZT421 (tylko ZT411)</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 font-bold">×</span> Wymaga tagów z izolatorem — droższe niż standardowe</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-10 lg:py-14 bg-slate-50 border-b border-slate-200">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-6">FAQ — Zebra ZT411 RFID</h2>
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">Skonfiguruj wariant ZT411 RFID</h2>
            <p className="text-slate-300 mb-8 leading-relaxed">
              Dostępne warianty RFID w 203 i 300 dpi — z Wi-Fi 6/6E lub bez, z różnymi mechanizmami druku.
              Zapytaj o wycenę z tagami i konfiguracją kodera.
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
                Zapytaj o RFID i tagi
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
