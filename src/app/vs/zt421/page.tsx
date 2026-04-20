import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getPrices } from '@/data/prices'
import { Check, X, ArrowRight, Home, ChevronRight } from 'lucide-react'

const prices = getPrices()
const lowPrice = Math.round(Math.min(...prices.variants.map(v => v.price)))
const fmtPLN = (n: number) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
const zt411Low = fmtPLN(lowPrice)

export const metadata: Metadata = {
  title: `Zebra ZT411 vs ZT421 — porównanie i różnice 2026`,
  description: `Zebra ZT411 (4", 203/300/600 dpi, linerless) vs ZT421 (6", etykiety paletowe). Szczegółowe porównanie specyfikacji, cen, zastosowań. Partner Zebra — TAKMA.`,
  alternates: { canonical: 'https://www.zebrazt411.pl/vs/zt421' },
  openGraph: {
    type: 'article',
    locale: 'pl_PL',
    url: 'https://www.zebrazt411.pl/vs/zt421',
    title: 'Zebra ZT411 vs ZT421 — porównanie i różnice',
    description: 'Szczegółowe porównanie dwóch drukarek przemysłowych z serii ZT400. Kiedy wybrać ZT411 (4"), a kiedy ZT421 (6")?',
    images: [{ url: '/images/zt411-hero.jpg', width: 1200, height: 630, alt: 'Zebra ZT411 vs ZT421 porównanie' }],
  },
}

const diffs = [
  {
    feature: 'Szerokość druku',
    zt411: '4" (104 mm)',
    zt421: '6" (168 mm)',
    winner: 'zt421',
    note: 'ZT421 dla etykiet paletowych SSCC, GHS, logistyki 6" — ZT411 dla standardowych 4×6" i mniejszych.',
  },
  {
    feature: 'Rozdzielczość (opcje)',
    zt411: '203 / 300 / 600 dpi',
    zt421: '203 / 300 dpi',
    winner: 'zt411',
    note: 'Tylko ZT411 oferuje 600 dpi — kluczowe dla mikrotekstu, farmacji, PCB, miniaturowych kodów 2D.',
  },
  {
    feature: 'Max szybkość druku',
    zt411: '356 mm/s (14"/s)',
    zt421: '305 mm/s (12"/s)',
    winner: 'zt411',
    note: 'ZT411 drukuje o ~17% szybciej — istotne przy ciągłej produkcji 24/7.',
  },
  {
    feature: 'Druk bezpodkładowy (linerless)',
    zt411: true,
    zt421: false,
    winner: 'zt411',
    note: 'Linerless = +50% etykiet na rolkę, brak odpadów z podkładu, redukcja CO2. Dostępny tylko w ZT411.',
  },
  {
    feature: 'Cena bazowa (netto)',
    zt411: `od ${zt411Low} zł`,
    zt421: 'od ok. 7 800 zł',
    winner: 'zt411',
    note: 'ZT421 jest droższy o ~30-40% przez szerszy mechanizm druku, większą głowicę i konstrukcję.',
  },
  {
    feature: 'Wymiary (Sz × Gł × W)',
    zt411: '495 × 269 × 324 mm',
    zt421: '495 × 336 × 324 mm',
    winner: 'zt411',
    note: 'ZT411 jest o 67 mm węższy — łatwiejszy montaż w ciasnych miejscach.',
  },
  {
    feature: 'Waga',
    zt411: '16,33 kg',
    zt421: '18,14 kg',
    winner: 'zt411',
    note: 'Różnica 1,8 kg — znacząca przy stanowiskach bez stałego montażu.',
  },
  {
    feature: 'Maks. szerokość nośników',
    zt411: '25,4–114 mm',
    zt421: '51–178 mm',
    winner: 'zt421',
    note: 'ZT421 nie zadrukuje etykiety węższej niż 51 mm — ZT411 radzi sobie od 25 mm.',
  },
  {
    feature: 'Długość ciągłego druku',
    zt411: '203 dpi: 3 988 · 300: 1 854 · 600: 991 mm',
    zt421: '203 dpi: 2 591 · 300: 1 143 · 600: —',
    winner: 'zt411',
    note: 'Dla 203 i 300 dpi ZT411 drukuje znacznie dłuższe ciągłe etykiety (większa pamięć RAM używana).',
  },
  {
    feature: 'Ekran',
    zt411: 'Kolor dotykowy 4,3"',
    zt421: 'Kolor dotykowy 4,3"',
    winner: 'tie',
    note: 'Identyczny ekran w obu modelach — intuicyjne menu z ikonami.',
  },
  {
    feature: 'Łączność standardowa',
    zt411: 'USB 2.0 + RS-232 + Ethernet + BT 4.2 + 2× USB host',
    zt421: 'USB 2.0 + RS-232 + Ethernet + BT 4.2 + 2× USB host',
    winner: 'tie',
    note: 'Identyczne interfejsy wejściowe.',
  },
  {
    feature: 'Wi-Fi 6/6E + BT 5.3 (opcja)',
    zt411: true,
    zt421: true,
    winner: 'tie',
    note: 'Oba modele obsługują dwupasmową kartę Wi-Fi 802.11ax jako opcję.',
  },
  {
    feature: 'RFID UHF (opcja)',
    zt411: true,
    zt421: true,
    winner: 'tie',
    note: 'Obie drukarki obsługują zestaw RFID UHF (EPC gen. 2 v2.1, ISO/IEC 18000-63, RAIN).',
  },
  {
    feature: 'RFID On-Metal',
    zt411: true,
    zt421: false,
    winner: 'zt411',
    note: 'Specjalistyczna wersja RFID On-Metal (znakowanie powierzchni metalowych) dostępna tylko w ZT411.',
  },
  {
    feature: 'Języki programowania',
    zt411: 'ZPL, ZPL II, ZBI 2.0, EPL (203 dpi)',
    zt421: 'ZPL, ZPL II, ZBI 2.0, EPL (203 dpi)',
    winner: 'tie',
    note: 'Identyczny stack Link-OS Print DNA w obu modelach.',
  },
  {
    feature: 'Certyfikat ENERGY STAR',
    zt411: true,
    zt421: true,
    winner: 'tie',
    note: 'Oba modele mają certyfikat energooszczędności.',
  },
]

const useCasesZT411 = [
  'Etykiety logistyczne 4×6" i mniejsze (standard w PL i UE)',
  'Etykiety apteczne, farmaceutyczne, laboratoryjne (600 dpi dla mikrotekstu)',
  'Znakowanie PCB i elementów elektronicznych (kody 2D < 5 mm)',
  'Etykiety produktowe retail — opis składu, kodów, dat',
  'Etykiety RFID On-Metal do znakowania powierzchni metalowych',
  'Druk bezpodkładowy linerless (apteki, szpitale, magazyny eco-friendly)',
  'Ciasne stanowiska montażowe (szerokość 269 mm)',
  'Stanowiska mobilne — lżejsza drukarka (16,3 vs 18,1 kg)',
  'Zastosowania wymagające najwyższej prędkości (356 mm/s)',
]

const useCasesZT421 = [
  'Etykiety paletowe SSCC (Serial Shipping Container Code) 6×4" (150×100 mm orientacja pozioma)',
  'Etykiety wysyłkowe GS1-128 z kompletnym zestawem kodów',
  'Etykiety chemiczne GHS z długimi piktogramami i tekstem',
  'Etykiety produkcyjne wielofunkcyjne — duża powierzchnia opisowa',
  'Etykiety paczki do kontenerów morskich (export)',
  'Etykiety odbiorcze / przyjmowania towarów z kompletnym opisem SKU+batch+data',
  'Etykiety znakowania zgodności CE, FCC dla dużych produktów (większa powierzchnia)',
  'Etykiety hub-and-spoke (cross-docking, sortownia)',
]

const faqs = [
  {
    q: 'Która drukarka jest tańsza — ZT411 czy ZT421?',
    a: `Zebra ZT411 jest tańsza — od ${zt411Low} zł netto, podczas gdy ZT421 zaczyna się od ok. 7 800 zł netto. Różnica wynosi ~30-40%, zależnie od wariantu, i jest wynikiem większej głowicy drukującej, szerszego mechanizmu i wyższej wagi ZT421.`,
  },
  {
    q: 'Czy ZT421 ma opcję 600 dpi jak ZT411?',
    a: 'Nie. ZT421 oferuje wyłącznie rozdzielczości 203 i 300 dpi. Rozdzielczość 600 dpi jest dostępna wyłącznie w modelu ZT411 — dedykowana do mikrotekstu, znakowania PCB, etykiet farmaceutycznych i drobnych kodów 2D.',
  },
  {
    q: 'Czy ZT421 obsługuje druk bezpodkładowy (linerless)?',
    a: 'Nie. Druk linerless (etykiety bez podkładu) jest dostępny wyłącznie w ZT411. ZT421 nie obsługuje linerless w żadnym wariancie.',
  },
  {
    q: 'Kiedy ZT421 jest lepszym wyborem niż ZT411?',
    a: 'ZT421 wybierz, gdy drukujesz etykiety szerokości 4-6" (104-168 mm) — typowo: etykiety paletowe SSCC, etykiety chemiczne GHS, wielofunkcyjne etykiety produkcyjne, etykiety wysyłkowe GS1-128 w dużym formacie. ZT411 nie zadrukuje etykiety szerszej niż 104 mm.',
  },
  {
    q: 'Czy akcesoria ZT411 pasują do ZT421?',
    a: 'Częściowo. Głowice drukujące są różne (4" vs 6"), obcinaki i odklejaki są dedykowane do szerokości. Kompatybilne są: nawijaki pełnej rolki, pojemniki taśmy, oprogramowanie Link-OS, karty Wi-Fi i RFID. Zawsze sprawdzaj Part Number akcesorium w katalogu Zebra.',
  },
  {
    q: 'ZT411 vs ZT421 — która ma większą pamięć?',
    a: 'Identyczną. Oba modele mają 256 MB SDRAM + 512 MB liniowy Flash. Różnica w długości ciągłego druku (3988 mm w ZT411 vs 2591 mm w ZT421 @ 203 dpi) wynika z mniejszej szerokości druku ZT411 — ta sama pamięć przechowuje dłuższą etykietę wąską.',
  },
  {
    q: 'Czy można upgradować ZT411 do 6" (ZT421)?',
    a: 'Nie. Szerokość druku jest określona przez mechanizm i głowicę, których nie można wymienić na szerszą w istniejącej drukarce. Jeśli firma potrzebuje obu formatów, typowo kupuje się ZT411 + ZT421 osobno lub wybiera jeden uniwersalny (np. ZT411 do większości zastosowań + dedykowana drukarka paletowa).',
  },
  {
    q: 'Czy ZT411 i ZT421 mają ten sam ekran i oprogramowanie?',
    a: 'Tak. Oba modele mają identyczny kolorowy ekran dotykowy 4,3" z intuicyjnym menu ikonowym, działają pod Link-OS, obsługują Print DNA (Printer Profile Manager, MDM Connectors, ZBI 2.0) i mają tę samą procedurę konfiguracji. Różnica tylko w części mechanicznej i szerokości.',
  },
]

function Cell({ val }: { val: string | boolean }) {
  if (val === true) return <Check size={16} className="text-emerald-500 mx-auto" />
  if (val === false) return <X size={16} className="text-slate-300 mx-auto" />
  return <span className="text-sm text-slate-700">{val as string}</span>
}

export default function Zt411VsZt421() {
  const techArticleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Zebra ZT411 vs ZT421 — porównanie drukarek przemysłowych z serii ZT400',
    description: 'Szczegółowe porównanie dwóch drukarek termotransferowych Zebra z serii ZT400. ZT411 (4", do 600 dpi, linerless) vs ZT421 (6", do 300 dpi) — specyfikacja, ceny, zastosowania.',
    datePublished: '2026-04-18',
    dateModified: '2026-04-18',
    author: { '@id': 'https://takma.com.pl/#organization' },
    publisher: {
      '@type': 'Organization',
      name: 'TAKMA',
      logo: { '@type': 'ImageObject', url: 'https://takma.com.pl/images/logo-takma.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.zebrazt411.pl/vs/zt421' },
    image: 'https://www.zebrazt411.pl/images/zt411-hero.jpg',
    about: [
      { '@type': 'Product', name: 'Zebra ZT411', url: 'https://www.zebrazt411.pl' },
      { '@type': 'Product', name: 'Zebra ZT421', url: 'https://takma.com.pl/produkt/zebra-zt421' },
    ],
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
      { '@type': 'ListItem', position: 1, name: 'Zebra ZT411', item: 'https://www.zebrazt411.pl' },
      { '@type': 'ListItem', position: 2, name: 'Porównania', item: 'https://www.zebrazt411.pl/vs' },
      { '@type': 'ListItem', position: 3, name: 'ZT411 vs ZT421', item: 'https://www.zebrazt411.pl/vs/zt421' },
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
            <span className="text-slate-400">Porównania</span>
            <ChevronRight size={12} className="text-slate-400" />
            <span className="text-slate-900 font-medium">ZT411 vs ZT421</span>
          </div>
        </nav>

        {/* Hero */}
        <section className="relative bg-black py-14 lg:py-20 overflow-hidden">
          <div
            className="absolute inset-0 bg-no-repeat bg-right"
            style={{ backgroundImage: 'url(/images/zt411_zt421_hero.webp)', backgroundSize: 'contain' }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/30 to-black" aria-hidden="true" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.7)' }}>
            <div className="max-w-full lg:max-w-[55%] text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                Zebra <span className="text-brand-500">ZT411</span> vs <span className="text-brand-500">ZT421</span>
              </h1>
              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
                Różnica w jednym zdaniu: <strong className="text-white">ZT411 drukuje etykiety szerokości 4&quot;</strong> (do 104 mm) i oferuje 600 dpi oraz druk linerless,
                natomiast <strong className="text-white">ZT421 to 6&quot;</strong> (do 168 mm) bez 600 dpi i bez linerless.
                Wybierz według szerokości etykiety.
              </p>
            </div>
          </div>
        </section>

        {/* TL;DR — szybka decyzja */}
        <section className="py-10 lg:py-14 bg-white border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-6">Szybka decyzja — TL;DR</h2>
            <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
              <div className="p-5 lg:p-6 rounded-2xl border-2 border-brand-500 bg-brand-50/30">
                <div className="inline-block px-3 py-1 bg-brand-500 text-slate-900 text-xs font-bold uppercase tracking-wider rounded-full mb-3">Wybierz ZT411</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Drukujesz etykiety do 104 mm szerokości</h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Standard: etykiety logistyczne 4×6&quot;, apteczne, produktowe, laboratoryjne.
                  Potrzebujesz 600 dpi, druku linerless (bezpodkładowego), najszybszego druku (356 mm/s), lub niższej ceny (od {zt411Low} zł netto).
                </p>
              </div>
              <div className="p-5 lg:p-6 rounded-2xl border border-slate-300 bg-slate-50">
                <div className="inline-block px-3 py-1 bg-slate-700 text-white text-xs font-bold uppercase tracking-wider rounded-full mb-3">Wybierz ZT421</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Drukujesz etykiety szerokości 4-6&quot;</h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Typowo: etykiety paletowe SSCC, chemiczne GHS, wielofunkcyjne produkcyjne, wysyłkowe GS1-128 w dużym formacie.
                  Akceptujesz wyższą cenę (od ok. 7 800 zł netto) i brak 600 dpi / linerless.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Główne różnice */}
        <section className="py-10 lg:py-14 bg-slate-50 border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-6">7 kluczowych różnic Zebra ZT411 vs ZT421</h2>
            <p className="text-sm text-slate-600 mb-6 max-w-3xl">
              Obie drukarki pochodzą z tej samej serii ZT400 Zebra — mają identyczny ekran, oprogramowanie Link-OS,
              interfejsy łączności i konstrukcję metalowej ramy. Różnią się tylko mechaniką druku.
            </p>
            <ol className="space-y-3">
              {diffs.filter(d => d.winner !== 'tie').map((d, i) => (
                <li key={i} className="flex gap-4 p-4 lg:p-5 bg-white rounded-xl border border-slate-200">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">{i + 1}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900 mb-1">{d.feature}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{d.note}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Tabela porównawcza */}
        <section className="py-10 lg:py-14 bg-white border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-6">Pełna specyfikacja — tabela porównawcza</h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-sm border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="text-left py-3 px-4 font-semibold text-slate-600 border-b border-slate-200">Parametr</th>
                    <th className="py-3 px-4 text-center font-semibold bg-brand-500 text-slate-900 border-b border-brand-500">Zebra ZT411</th>
                    <th className="py-3 px-4 text-center font-semibold text-slate-700 border-b border-slate-200">Zebra ZT421</th>
                  </tr>
                </thead>
                <tbody>
                  {diffs.map((d, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                      <td className="py-2.5 px-4 text-slate-600 font-medium border-b border-slate-100">{d.feature}</td>
                      <td className={`py-2.5 px-4 text-center border-b border-slate-100 ${d.winner === 'zt411' ? 'bg-brand-50/50 font-medium text-slate-900' : 'text-slate-700'}`}>
                        <Cell val={d.zt411} />
                      </td>
                      <td className={`py-2.5 px-4 text-center border-b border-slate-100 ${d.winner === 'zt421' ? 'bg-amber-50 font-medium text-slate-900' : 'text-slate-700'}`}>
                        <Cell val={d.zt421} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Zastosowania */}
        <section className="py-10 lg:py-14 bg-slate-50 border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-6">Zastosowania — kiedy wybrać który model</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-brand-500 rounded-full" />
                  ZT411 (4&quot;) — zastosowania
                </h3>
                <ul className="space-y-2">
                  {useCasesZT411.map((u, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                      <Check size={14} className="text-brand-700 mt-0.5 shrink-0" />
                      <span>{u}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-slate-700 rounded-full" />
                  ZT421 (6&quot;) — zastosowania
                </h3>
                <ul className="space-y-2">
                  {useCasesZT421.map((u, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                      <Check size={14} className="text-slate-700 mt-0.5 shrink-0" />
                      <span>{u}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-10 lg:py-14 bg-white border-b border-slate-200">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-6">Najczęstsze pytania</h2>
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">Zdecydowany wybór?</h2>
            <p className="text-slate-300 mb-8 leading-relaxed">
              ZT411 kupisz od {zt411Low} zł netto — skonfiguruj wariant 203/300/600 dpi w naszym formularzu.
              Jeśli potrzebujesz ZT421 (6&quot;) — sprawdź ofertę TAKMA.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/#warianty"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-bold text-slate-900 bg-brand-500 rounded-full hover:bg-brand-400 hover:-translate-y-0.5 transition-all"
              >
                Skonfiguruj ZT411
                <ArrowRight size={18} />
              </Link>
              <a
                href="https://takma.com.pl/produkt/zebra-zt421"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-bold text-white border-2 border-white/20 rounded-full hover:bg-white/5 hover:border-white/40 transition-all"
              >
                Zobacz ZT421 w TAKMA
              </a>
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
