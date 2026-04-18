import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getPrices } from '@/data/prices'
import { ArrowRight, Home, ChevronRight, Microscope, Cpu, Pill, Gem, Package, AlertTriangle } from 'lucide-react'

const prices = getPrices()
const variants600 = prices.variants.filter(v => v.pn.startsWith('ZT41146'))
const cheapest600 = variants600.sort((a, b) => a.price - b.price)[0]
const price600 = cheapest600 ? Math.round(cheapest600.price) : 0
const fmtPLN = (n: number) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
const price600Display = price600 ? fmtPLN(price600) : '—'

export const metadata: Metadata = {
  title: `ZT411 600 dpi — drukarka etykiet mikrotekst | od ${price600Display} zł netto`,
  description: `Zebra ZT411 600 dpi: 24 pkt/mm, najmniejsza kreska 0,042 mm. Mikrotekst, kody 2D, PCB, farmacja UDI. Tylko w ZT411. Cena od ${price600Display} zł netto. Partner Zebra — TAKMA.`,
  alternates: { canonical: 'https://www.zt411.pl/600-dpi' },
  openGraph: {
    type: 'article',
    locale: 'pl_PL',
    url: 'https://www.zt411.pl/600-dpi',
    title: 'Zebra ZT411 600 dpi — drukarka do mikrotekstu',
    description: 'Deep dive w rozdzielczość 600 dpi (24 pkt/mm) w drukarce Zebra ZT411. Zastosowania, ograniczenia, cena.',
    images: [{ url: '/images/zt411-hero.jpg', width: 1200, height: 630, alt: 'Zebra ZT411 600 dpi' }],
  },
}

const dpiComparison = [
  {
    dpi: '203',
    pxPerMm: 8,
    minLine: '0,125 mm',
    minText: '3 pt',
    minQr: '8×8 mm',
    speed: '356 mm/s',
    usecase: 'Logistyka, wysyłka, adresy',
    available: 'ZT411, ZT421',
  },
  {
    dpi: '300',
    pxPerMm: 12,
    minLine: '0,083 mm',
    minText: '2 pt',
    minQr: '5×5 mm',
    speed: '305 mm/s',
    usecase: 'GS1 DataMatrix, etykiety laboratoryjne, kosmetyki',
    available: 'ZT411, ZT421',
  },
  {
    dpi: '600',
    pxPerMm: 24,
    minLine: '0,042 mm',
    minText: '1 pt',
    minQr: '2×2 mm',
    speed: '152 mm/s',
    usecase: 'PCB, farmacja UDI, jubilerstwo, mikrotekst',
    available: 'TYLKO ZT411',
    highlight: true,
  },
]

const useCases = [
  {
    icon: Cpu,
    title: 'Elektronika / PCB',
    desc: 'Znakowanie płytek drukowanych PCB wymaga kodów 2D o wymiarze 2-3 mm — niemożliwe w 203/300 dpi bez utraty czytelności. 600 dpi drukuje kody DataMatrix i QR już od 2×2 mm z idealną rozdzielczością dla kamer optycznych.',
  },
  {
    icon: Pill,
    title: 'Farmacja / UDI',
    desc: 'Unique Device Identification (UDI) — wymóg FDA i UE dla wyrobów medycznych. Etykiety na ampułkach i strzykawkach mają ~10×30 mm powierzchni, a muszą zmieścić kod GS1 DataMatrix + tekst (lot, expiry). 600 dpi gwarantuje czytelność.',
  },
  {
    icon: Gem,
    title: 'Jubilerstwo i zegarmistrzostwo',
    desc: 'Etykiety zawieszki jubilerskie (5×15 mm) z numerem seryjnym, wagą i próbą. Mikrotekst wymaga 1 pt czcionki, co praktycznie niemożliwe poniżej 600 dpi.',
  },
  {
    icon: Microscope,
    title: 'Laboratoria i badania',
    desc: 'Etykiety na probówki Eppendorf 0,5/1,5/2 ml mają obwód ~25 mm. Kod kreskowy + ID próbki + data muszą się zmieścić. 600 dpi zapewnia czytelność skanera laboratoryjnego.',
  },
  {
    icon: Package,
    title: 'Znakowanie zgodności',
    desc: 'Drobne etykiety ostrzegawcze CE, FCC, WEEE na miniaturowych produktach (ładowarki, akcesoria). Symbole + tekst w bardzo małej powierzchni.',
  },
]

const limitations = [
  {
    title: 'Wolniejszy druk',
    desc: '152 mm/s vs 356 mm/s w 203 dpi — o 57% wolniej. Dla wysokich wolumenów (10 000+ etykiet/dzień) rozważ 300 dpi lub drugą drukarkę.',
  },
  {
    title: 'Krótszy ciągły druk',
    desc: 'Max długość ciągłej etykiety w 600 dpi: 991 mm (vs 3 988 mm w 203 dpi) — większa rozdzielczość wymaga więcej pamięci na etykietę.',
  },
  {
    title: 'Brak RFID On-Metal',
    desc: 'Wariant RFID On-Metal (do znakowania powierzchni metalowych) NIE jest dostępny w 600 dpi — tylko 203 i 300 dpi.',
  },
  {
    title: 'Droższe głowice i serwis',
    desc: 'Głowice 600 dpi mają więcej elementów (2-3× gęstszy układ) — są droższe i wymagają bardziej precyzyjnej kalibracji.',
  },
  {
    title: 'Wymagane precyzyjne nośniki',
    desc: 'Nie każda etykieta termotransferowa ma powłokę pozwalającą na 600 dpi. Używaj tylko nośników certyfikowanych Zebra dla 600 dpi.',
  },
]

const faqs = [
  {
    q: 'Co oznacza rozdzielczość 600 dpi w drukarce etykiet?',
    a: '600 dpi (dots per inch) to 24 punkty drukujące na milimetr. Oznacza to najmniejszą możliwą linię o grubości 0,042 mm — cztery razy cieńszą niż w 203 dpi (0,125 mm). Pozwala drukować kody 2D od 2×2 mm, mikrotekst 1 pt i bardzo drobne detale graficzne. Dla porównania: 203 dpi to standard logistyczny, 300 dpi typowe dla farmacji, 600 dpi dedykowane do elektroniki i UDI.',
  },
  {
    q: 'Kiedy wybrać ZT411 w wariancie 600 dpi?',
    a: 'Wybierz 600 dpi, gdy drukujesz: (1) etykiety elektroniki z kodami 2D < 5 mm, (2) etykiety farmaceutyczne UDI na ampułkach/strzykawkach, (3) etykiety jubilerskie z mikrotekstem, (4) etykiety probówek laboratoryjnych, (5) drobne znakowanie zgodności. W pozostałych przypadkach 300 dpi wystarcza i jest szybsza oraz tańsza.',
  },
  {
    q: 'Czy 600 dpi jest dostępne w ZT421?',
    a: 'Nie. Rozdzielczość 600 dpi jest dostępna wyłącznie w modelu ZT411 (szerokość druku 4"). ZT421 (szerokość 6") oferuje tylko 203 i 300 dpi. Jest to ograniczenie konstrukcyjne — głowica 600 dpi × 168 mm byłaby nieopłacalna ekonomicznie i technicznie trudna w produkcji.',
  },
  {
    q: 'Ile kosztuje ZT411 600 dpi?',
    a: `Wariant bazowy ZT411 600 dpi (ZT41146-T0E0000Z) kosztuje od ${price600Display} zł netto. Różnica vs 300 dpi to ok. 2 000-4 000 zł. Do tego doliczyć: głowica 600 dpi (ok. 1 500-2 000 zł przy wymianie), nośniki certyfikowane 600 dpi (ok. 10-20% droższe niż standardowe), potencjalna częstsza wymiana głowicy przy intensywnej pracy.`,
  },
  {
    q: 'Jak szybko drukuje ZT411 w 600 dpi?',
    a: '152 mm/s (6 ips) — to około 57% szybkości wariantu 203 dpi (356 mm/s). Dla etykiety 50×30 mm oznacza to ok. 5 etykiet/s. Dla 1 000 etykiet dziennie (8h zmiana) to bez problemu — drukarka pracuje ~33 minuty. Przy 10 000+ etykiet/dzień rozważ drugą drukarkę lub niższą rozdzielczość dla części zastosowań.',
  },
  {
    q: 'Jakie nośniki (etykiety) pasują do 600 dpi?',
    a: 'Tylko certyfikowane przez Zebra nośniki dla 600 dpi — mają odpowiednio gładką powłokę umożliwiającą drukowanie drobnych detali. Używanie standardowych etykiet 203/300 dpi w drukarce 600 dpi daje rozmazane rezultaty. Zebra Certified Consumables dla 600 dpi obejmują: etykiety papierowe, poliestrowe, PP — w szerokościach 25-110 mm.',
  },
  {
    q: 'Czy mogę wymienić głowicę 300 dpi na 600 dpi w istniejącej ZT411?',
    a: 'Nie. Rozdzielczość ZT411 jest określona fabrycznie przez kontroler i elektronikę — nie tylko głowicę. Wymaga innej płyty głównej, innego firmware\'u i innego systemu kalibracji. Jeśli kupiłeś ZT41142 (203 dpi) lub ZT41143 (300 dpi), pozostanie ona w tej rozdzielczości. Do 600 dpi trzeba kupić wariant ZT41146 od razu.',
  },
  {
    q: 'Czy 600 dpi działa z RFID?',
    a: 'Tak, ale z ograniczeniem. Standardowy RFID UHF (EPC gen. 2) działa w 600 dpi — można kupić wariant ZT41146 z RFID. JEDNAK wariant RFID On-Metal (do znakowania powierzchni metalowych) NIE jest dostępny w 600 dpi — tylko w 203 i 300 dpi. To ograniczenie konstrukcji specjalnej anteny On-Metal.',
  },
]

export default function Dpi600Page() {
  const techArticleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Zebra ZT411 600 dpi — drukarka do mikrotekstu, PCB i farmacji UDI',
    description: 'Przewodnik po rozdzielczości 600 dpi w drukarce Zebra ZT411. Porównanie 203/300/600 dpi, zastosowania w elektronice, farmacji i jubilerstwie, ograniczenia, cena.',
    datePublished: '2026-04-18',
    dateModified: '2026-04-18',
    author: { '@type': 'Organization', name: 'TAKMA', url: 'https://takma.com.pl' },
    publisher: {
      '@type': 'Organization',
      name: 'TAKMA',
      logo: { '@type': 'ImageObject', url: 'https://takma.com.pl/images/logo-takma.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.zt411.pl/600-dpi' },
    image: 'https://www.zt411.pl/images/zt411-hero.jpg',
    about: { '@type': 'Product', name: 'Zebra ZT411 600 dpi', url: 'https://www.zt411.pl/600-dpi' },
    keywords: 'zebra zt411 600 dpi, drukarka 600 dpi, mikrotekst drukarka, etykiety pcb, udi drukarka, zebra mikrotekst',
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
      { '@type': 'ListItem', position: 2, name: '600 dpi', item: 'https://www.zt411.pl/600-dpi' },
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
            <span className="text-slate-900 font-medium">600 dpi</span>
          </div>
        </nav>

        {/* Hero */}
        <section className="relative bg-gradient-to-br from-[#0A1A2F] via-slate-900 to-[#142640] py-14 lg:py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-500/10 border border-brand-500/30 rounded-full text-brand-500 text-xs font-bold uppercase tracking-wider mb-4">
              <Microscope size={12} /> Feature deep dive
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
              <span className="text-brand-500">Zebra ZT411 600 dpi</span><br />
              Mikrotekst, kody 2D, PCB, farmacja UDI
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              <strong className="text-white">24 pkt/mm, najmniejsza kreska 0,042 mm</strong>.
              Najwyższa rozdzielczość w klasie 4&quot; przemysłowej — dedykowana do znakowania elektroniki, wyrobów medycznych UDI,
              jubilerstwa i mikroskopijnych etykiet laboratoryjnych.
              <br /><strong className="text-brand-500">Dostępna wyłącznie w ZT411.</strong>
            </p>
            {price600Display !== '—' && (
              <div className="mt-6 inline-flex items-center gap-3 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full">
                <span className="text-xs text-slate-400 uppercase tracking-wider">Wariant 600 dpi</span>
                <span className="text-lg font-bold text-white">od {price600Display} zł netto</span>
              </div>
            )}
          </div>
        </section>

        {/* Passage: co to 600 dpi */}
        <section className="py-10 lg:py-14 bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-4">Co oznacza 600 dpi w drukarce etykiet?</h2>
            <p className="text-slate-700 leading-relaxed">
              <strong>600 dpi (dots per inch) to 24 punkty drukujące na milimetr</strong>.
              Najmniejsza możliwa linia ma grubość <strong>0,042 mm</strong> — cztery razy cieńsza niż w 203 dpi.
              Pozwala drukować kody 2D od 2×2 mm, mikrotekst 1 pt i bardzo drobne elementy graficzne.
              Jest to najwyższa rozdzielczość dostępna w drukarkach przemysłowych 4&quot; na rynku.
              Zebra ZT411 to jedyna drukarka z tej serii oferująca 600 dpi — ZT421 (6&quot;) takiej opcji nie ma.
            </p>
          </div>
        </section>

        {/* Porównanie rozdzielczości */}
        <section className="py-10 lg:py-14 bg-slate-50 border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-2">Porównanie rozdzielczości: 203 vs 300 vs 600 dpi</h2>
            <p className="text-sm text-slate-600 mb-6">Co praktycznie zyskujesz przy wyższej rozdzielczości — najmniejsze drukowalne elementy.</p>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-sm border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="text-left py-3 px-4 font-semibold text-slate-600 border-b border-slate-200">Parametr</th>
                    <th className="py-3 px-4 text-center font-semibold text-slate-700 border-b border-slate-200">203 dpi</th>
                    <th className="py-3 px-4 text-center font-semibold text-slate-700 border-b border-slate-200">300 dpi</th>
                    <th className="py-3 px-4 text-center font-semibold bg-brand-500 text-slate-900 border-b border-brand-500">600 dpi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2.5 px-4 text-slate-600 font-medium border-b border-slate-100">Punkty / mm</td>
                    {dpiComparison.map((d, i) => (
                      <td key={i} className={`py-2.5 px-4 text-center border-b border-slate-100 ${d.highlight ? 'bg-brand-50/50 font-medium text-slate-900' : 'text-slate-700'}`}>
                        {d.pxPerMm}
                      </td>
                    ))}
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="py-2.5 px-4 text-slate-600 font-medium border-b border-slate-100">Najmniejsza kreska</td>
                    {dpiComparison.map((d, i) => (
                      <td key={i} className={`py-2.5 px-4 text-center border-b border-slate-100 ${d.highlight ? 'bg-brand-50/50 font-medium text-slate-900' : 'text-slate-700'}`}>
                        {d.minLine}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 text-slate-600 font-medium border-b border-slate-100">Min. czcionka</td>
                    {dpiComparison.map((d, i) => (
                      <td key={i} className={`py-2.5 px-4 text-center border-b border-slate-100 ${d.highlight ? 'bg-brand-50/50 font-medium text-slate-900' : 'text-slate-700'}`}>
                        {d.minText}
                      </td>
                    ))}
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="py-2.5 px-4 text-slate-600 font-medium border-b border-slate-100">Min. kod QR / DataMatrix</td>
                    {dpiComparison.map((d, i) => (
                      <td key={i} className={`py-2.5 px-4 text-center border-b border-slate-100 ${d.highlight ? 'bg-brand-50/50 font-medium text-slate-900' : 'text-slate-700'}`}>
                        {d.minQr}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 text-slate-600 font-medium border-b border-slate-100">Szybkość druku</td>
                    {dpiComparison.map((d, i) => (
                      <td key={i} className={`py-2.5 px-4 text-center border-b border-slate-100 ${d.highlight ? 'bg-brand-50/50 font-medium text-slate-900' : 'text-slate-700'}`}>
                        {d.speed}
                      </td>
                    ))}
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="py-2.5 px-4 text-slate-600 font-medium border-b border-slate-100">Typowe zastosowanie</td>
                    {dpiComparison.map((d, i) => (
                      <td key={i} className={`py-2.5 px-4 text-center text-xs border-b border-slate-100 ${d.highlight ? 'bg-brand-50/50 font-medium text-slate-900' : 'text-slate-700'}`}>
                        {d.usecase}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 text-slate-600 font-medium">Dostępność</td>
                    {dpiComparison.map((d, i) => (
                      <td key={i} className={`py-2.5 px-4 text-center text-xs ${d.highlight ? 'bg-brand-50/50 font-bold text-brand-700' : 'text-slate-700'}`}>
                        {d.available}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Zastosowania */}
        <section className="py-10 lg:py-14 bg-white border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-6">Zastosowania 600 dpi w ZT411</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {useCases.map((u, i) => (
                <div key={i} className="bg-slate-50 rounded-xl border border-slate-200 p-5">
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

        {/* Ograniczenia */}
        <section className="py-10 lg:py-14 bg-amber-50/30 border-b border-amber-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-2 flex items-center gap-2">
              <AlertTriangle size={24} className="text-amber-600" /> Ograniczenia 600 dpi
            </h2>
            <p className="text-sm text-slate-600 mb-6">Wyższa rozdzielczość ma swoje kompromisy — zanim kupisz, zweryfikuj.</p>
            <ul className="space-y-3">
              {limitations.map((l, i) => (
                <li key={i} className="bg-white rounded-xl border border-amber-200 p-4 lg:p-5">
                  <h3 className="font-semibold text-slate-900 mb-1">{l.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{l.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-10 lg:py-14 bg-white border-b border-slate-200">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-6">FAQ — ZT411 600 dpi</h2>
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">Zamów wariant ZT411 600 dpi</h2>
            <p className="text-slate-300 mb-8 leading-relaxed">
              Dostępne konfiguracje: odrywanie (ZT41146-T0E0000Z), odklejak z nawijakiem (T4), gilotyna linerless (D9).
              Zapytaj o wycenę z certyfikowanymi nośnikami dla 600 dpi.
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
                Zapytaj o 600 dpi
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
