import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getPrices } from '@/data/prices'
import { ArrowRight, Home, ChevronRight, Leaf, TrendingUp, Recycle, Scissors, Clock, Package } from 'lucide-react'

const prices = getPrices()
const linerlessVariants = prices.variants.filter(v => v.pn.includes('D9'))
const cheapestLinerless = linerlessVariants.sort((a, b) => a.price - b.price)[0]
const linerlessPrice = cheapestLinerless ? Math.round(cheapestLinerless.price) : 0
const fmtPLN = (n: number) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
const linerlessPriceDisplay = linerlessPrice ? fmtPLN(linerlessPrice) : '—'

export const metadata: Metadata = {
  title: `ZT411 Linerless — druk bezpodkładowy | od ${linerlessPriceDisplay} zł`,
  description: `ZT411 Linerless: druk bez podkładu. +50% etykiet na rolkę, zero odpadów, redukcja CO2. Gilotyna linerless. Od ${linerlessPriceDisplay} zł netto.`,
  alternates: { canonical: 'https://www.zt411.pl/zt411-linerless' },
  openGraph: {
    type: 'article',
    locale: 'pl_PL',
    url: 'https://www.zt411.pl/zt411-linerless',
    title: 'Zebra ZT411 Linerless — druk bezpodkładowy',
    description: 'Kompletny przewodnik po technologii druku bezpodkładowego (linerless) w drukarce Zebra ZT411. ROI, ESG, zestaw upgrade.',
    images: [{ url: '/images/zt411-hero.jpg', width: 1200, height: 630, alt: 'Zebra ZT411 Linerless druk bezpodkładowy' }],
  },
}

const specs = [
  { label: 'Dostępność', value: 'Wyłącznie w ZT411 (brak w ZT421, ZT231, ZD-series)' },
  { label: 'Technologia druku', value: 'Tylko termiczny bezpośredni (direct thermal) — bez taśmy barwiącej' },
  { label: 'Rozdzielczości', value: '203, 300 i 600 dpi — wszystkie warianty' },
  { label: 'Mechanizm', value: 'Dedykowana gilotyna linerless (symbol D9 w Part Number)' },
  { label: 'Konstrukcja', value: 'Antyadhezyjna ścieżka nośnika — brak gromadzenia kleju' },
  { label: 'Oszczędność etykiet', value: 'Do +50% etykiet na standardowej rolce vs. z podkładem' },
  { label: 'Odpad', value: 'Zero (bez podkładu silikonowego do utylizacji)' },
  { label: 'Zestaw upgrade', value: 'Field Installable Kit dla istniejących ZT411 (instalacja ~60 min u klienta)' },
  { label: 'Nośniki', value: 'Certyfikowane media linerless Zebra (testowane i atestowane)' },
  { label: 'Szerokość nośnika', value: '25,4–114 mm (standard ZT411)' },
]

const roiScenarios = [
  {
    volume: '1 000 etykiet/dzień',
    volumeDetail: 'Mała apteka / lokalny sklep',
    standard: '8 rolek/mies.',
    linerless: '5,3 rolek/mies.',
    saving: '~33% rolek',
    savingCost: 'ok. 150 zł/mies.',
  },
  {
    volume: '5 000 etykiet/dzień',
    volumeDetail: 'Średni magazyn / centrum dystrybucji',
    standard: '40 rolek/mies.',
    linerless: '26,6 rolek/mies.',
    saving: '~33% rolek',
    savingCost: 'ok. 750 zł/mies.',
  },
  {
    volume: '10 000 etykiet/dzień',
    volumeDetail: 'Duży e-commerce / cross-docking',
    standard: '80 rolek/mies.',
    linerless: '53,3 rolek/mies.',
    saving: '~33% rolek',
    savingCost: 'ok. 1 500 zł/mies.',
  },
  {
    volume: '20 000 etykiet/dzień',
    volumeDetail: 'Fulfillment center',
    standard: '160 rolek/mies.',
    linerless: '106,6 rolek/mies.',
    saving: '~33% rolek',
    savingCost: 'ok. 3 000 zł/mies.',
  },
]

const esgBenefits = [
  {
    icon: Recycle,
    title: 'Zero odpadów podkładu',
    desc: 'Podkład silikonowy standardowych etykiet trafia na wysypisko — jest trudny do recyklingu. Linerless eliminuje ten strumień odpadów w 100%.',
  },
  {
    icon: Leaf,
    title: 'Redukcja emisji CO2',
    desc: 'Mniejsza liczba rolek = mniej transportu między dostawcą a magazynem. Dodatkowo produkcja podkładu silikonowego jest energochłonna.',
  },
  {
    icon: Package,
    title: 'Mniej miejsca magazynowego',
    desc: 'Rolka linerless mieści 50% więcej etykiet przy tym samym wymiarze. Mniej rolek w magazynie = większa gęstość SKU na półce.',
  },
  {
    icon: Clock,
    title: 'Mniej przestojów produkcji',
    desc: 'Operator wymienia rolkę rzadziej. Dla produkcji 24/7 z 10 000 etykiet dziennie to ok. 2 wymiany rolki mniej na dobę (~15 min zaoszczędzone).',
  },
]

const useCases = [
  'Apteki i sieci farmaceutyczne — etykiety leków receptowych (RX)',
  'E-commerce fulfillment — etykiety wysyłkowe bez trwałych oznaczeń',
  'Magazyny spożywcze — etykiety chłodnicze (cold chain)',
  'Cross-docking kurierski — etykiety logistyczne jednorazowe',
  'Restauracje i gastronomia — etykiety dat ważności (day-dot)',
  'Szpitale — etykiety próbek laboratoryjnych, woreczki z lekami',
  'Centra dystrybucji eco-oriented — korporacyjny ESG commitment',
  'Sektor publiczny — placówki z priorytetem redukcji odpadów',
]

const faqs = [
  {
    q: 'Co to jest druk bezpodkładowy (linerless)?',
    a: 'Linerless to technologia druku etykiet bez silikonowego podkładu — klej jest od razu na spodzie etykiety, a antyadhezyjna powłoka na wierzchu zapobiega zlepianiu w rolce. Zalety: +50% etykiet na rolkę, zero odpadów z podkładu, redukcja CO2, rzadsze wymiany rolki. ZT411 to jedyna drukarka przemysłowa Zebra obsługująca linerless.',
  },
  {
    q: 'Czy linerless działa w trybie termotransferowym (z taśmą)?',
    a: 'Nie. Linerless działa wyłącznie w trybie druku termicznego bezpośredniego (direct thermal) — bez taśmy barwiącej. Etykiety termiczne mają krótszy czas życia (6-12 miesięcy) niż termotransferowe (wiele lat), dlatego linerless jest dedykowany do krótkich cykli — wysyłki, logistyka, day-dot, RX.',
  },
  {
    q: 'Ile kosztuje wariant ZT411 Linerless?',
    a: `Cena waha się od ${linerlessPriceDisplay} zł netto (wariant 203 dpi ZT41142-D9E0000Z) do ok. 12 000 zł netto (wariant 600 dpi ZT41146-D9E0000Z). Dodatkowo trzeba kupić certyfikowane media linerless Zebra — ich cena jest porównywalna do standardowych etykiet termicznych, ale rolka mieści +50% sztuk.`,
  },
  {
    q: 'Czy można dokupić linerless do istniejącej ZT411?',
    a: 'Tak. Zebra oferuje zestaw upgrade (Field Installable Kit) do istniejących drukarek ZT411 — montaż zajmuje ok. 60 minut u klienta, nie wymaga specjalistycznych narzędzi. Po upgrade drukarka obsługuje zarówno standardowe media termotransferowe, jak i linerless (fabryczny wariant jest tylko direct thermal — bez możliwości powrotu do termotransferu).',
  },
  {
    q: 'Jakie etykiety pasują do ZT411 Linerless?',
    a: 'Tylko certyfikowane media linerless Zebra — mają odpowiednią powłokę antyadhezyjną i klej dostosowany do antyadhezyjnej ścieżki drukarki. Używanie etykiet niecertyfikowanych grozi gromadzeniem kleju w głowicy i obcinaku, co skraca życie tych komponentów. Zebra gwarantuje kompatybilność z wersjami linerless w rozmiarach 25,4-114 mm.',
  },
  {
    q: 'Ile etykiet zmieści się na rolce linerless vs standardowej?',
    a: 'Rolka linerless o tej samej średnicy zewnętrznej mieści +50% etykiet w porównaniu do standardowej rolki z podkładem. Przykład dla etykiety 100×150 mm: rolka standardowa ~1 000 etykiet, rolka linerless ~1 500 etykiet. Oznacza to mniej wymian rolek w trakcie zmiany — szczególnie istotne dla produkcji 24/7.',
  },
  {
    q: 'Czy linerless to standardowa opcja Zebry?',
    a: 'Tak, druk linerless jest oficjalną technologią Zebra Technologies, dostępną w ofercie ZT411 od kilku lat. Wszystkie komponenty są wspierane przez serwis Zebra na normalnych warunkach gwarancyjnych (3 lata) i kontrakty OneCare. TAKMA jako Premier Partner Zebra oferuje pełne wsparcie wdrożeniowe — dobór etykiet, konfigurację drukarki, szkolenie operatorów.',
  },
  {
    q: 'Jak linerless wpływa na koszt TCO w 3 lata?',
    a: 'Dla magazynu 5 000 etykiet/dzień oszczędność rolek wynosi ~33% (26,6 vs 40 rolek/mies.). W ciągu 3 lat to ok. 480 rolek mniej — oszczędność ok. 27 000 zł. Dodając redukcję czasu wymiany rolek (~45 minut/mies.) i zmniejszone odpady, całkowita oszczędność TCO dla średniego magazynu wynosi 30 000-40 000 zł w 3 lata.',
  },
]

export default function Zt411LinerlessPage() {
  const techArticleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Zebra ZT411 Linerless — druk bezpodkładowy',
    description: 'Kompletny przewodnik po technologii druku bezpodkładowego (linerless) w drukarce Zebra ZT411. Specyfikacja, ROI dla różnych wolumenów, korzyści ESG, zestaw upgrade dla istniejących ZT411.',
    datePublished: '2026-04-18',
    dateModified: '2026-04-20',
    author: { '@id': 'https://takma.com.pl/#organization' },
    publisher: {
      '@type': 'Organization',
      name: 'TAKMA',
      logo: { '@type': 'ImageObject', url: 'https://takma.com.pl/images/logo-takma.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.zt411.pl/zt411-linerless' },
    image: 'https://www.zt411.pl/images/zt411-hero.jpg',
    about: { '@type': 'Product', name: 'Zebra ZT411 Linerless', url: 'https://www.zt411.pl/zt411-linerless' },
    keywords: 'zebra zt411 linerless, druk bezpodkładowy, linerless, etykiety bez podkładu, ESG drukarka',
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
      { '@type': 'ListItem', position: 2, name: 'Linerless', item: 'https://www.zt411.pl/zt411-linerless' },
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
            <span className="text-slate-900 font-medium">Linerless</span>
          </div>
        </nav>

        {/* Hero */}
        <section className="relative bg-black py-14 lg:py-20 overflow-hidden">
          <div
            className="absolute inset-0 bg-no-repeat bg-right"
            style={{ backgroundImage: 'url(/images/zt411_zeroliner_hero.webp)', backgroundSize: 'contain' }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/30 to-black" aria-hidden="true" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.7)' }}>
            <div className="max-w-full lg:max-w-[55%] text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                <span className="text-brand-500">Zebra ZT411 Linerless</span><br />
                Druk etykiet bez podkładu
              </h1>
              <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
                <strong className="text-white">+50% etykiet na rolkę</strong>, zero odpadów z podkładu silikonowego,
                redukcja emisji CO2. Druk linerless to unikalna technologia Zebra dostępna wyłącznie w drukarkach ZT411.
                Dedykowana gilotyna linerless (D9) i antyadhezyjna ścieżka nośnika.
              </p>
              {linerlessPriceDisplay !== '—' && (
                <div className="mt-6 inline-flex items-center gap-3 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full">
                  <span className="text-xs text-slate-400 uppercase tracking-wider">Wariant Linerless</span>
                  <span className="text-lg font-bold text-white">od {linerlessPriceDisplay} zł netto</span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Co to jest — passage citable */}
        <section className="py-10 lg:py-14 bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-4">Czym jest druk bezpodkładowy (linerless)?</h2>
            <p className="text-slate-700 leading-relaxed">
              Standardowe etykiety samoprzylepne składają się z dwóch warstw — etykiety z klejem oraz silikonowego podkładu (linera), który zabezpiecza klej.
              Po odklejeniu etykiety podkład trafia na śmietnik. <strong>Druk bezpodkładowy (linerless)</strong> eliminuje podkład — etykieta jest cienką taśmą,
              która w rolce ma antyadhezyjną powłokę na wierzchu, a klej na spodzie. To oszczędza <strong>~50% miejsca w rolce</strong> i eliminuje odpady
              silikonowego podkładu. W drukarkach ZT411 dostępna jest wyłącznie fabryczna wersja linerless (symbol D9 w Part Number).
            </p>
          </div>
        </section>

        {/* Specyfikacja */}
        <section className="py-10 lg:py-14 bg-slate-50 border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-6">Specyfikacja Linerless w ZT411</h2>
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
              {specs.map((s, i) => (
                <div key={s.label} className={`flex flex-col sm:flex-row ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'} ${i < specs.length - 1 ? 'border-b border-slate-100' : ''}`}>
                  <div className="w-full sm:w-[40%] py-3 px-4 text-sm font-medium text-slate-500">{s.label}</div>
                  <div className="w-full sm:w-[60%] py-3 px-4 text-sm text-slate-900">{s.value}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-900">
              <strong>Ważne:</strong> Wariant fabryczny Linerless obsługuje <strong>wyłącznie druk termiczny bezpośredni</strong> —
              nie można używać taśmy termotransferowej. Etykiety termiczne mają krótszy czas życia (6-12 mies.) niż termotransferowe (lata),
              dlatego linerless jest dedykowany do krótkich cykli: wysyłki, day-dot, RX, logistyka.
            </div>
          </div>
        </section>

        {/* ROI — tabela */}
        <section className="py-10 lg:py-14 bg-white border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-2 flex items-center gap-2">
              <TrendingUp size={24} className="text-brand-700" /> ROI — oszczędność rolek
            </h2>
            <p className="text-sm text-slate-600 mb-6">
              Przy 250 etykietach na rolce standardowej i 375 na rolce linerless (różnica ~50%). Ceny rolek orientacyjne — 45 zł/szt.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-sm border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="text-left py-3 px-4 font-semibold text-slate-600 border-b border-slate-200">Wolumen</th>
                    <th className="py-3 px-4 text-center font-semibold text-slate-700 border-b border-slate-200">Rolki standard</th>
                    <th className="py-3 px-4 text-center font-semibold bg-brand-500 text-slate-900 border-b border-brand-500">Rolki Linerless</th>
                    <th className="py-3 px-4 text-center font-semibold text-emerald-700 border-b border-slate-200">Oszczędność</th>
                  </tr>
                </thead>
                <tbody>
                  {roiScenarios.map((r, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                      <td className="py-3 px-4 border-b border-slate-100">
                        <div className="font-semibold text-slate-900">{r.volume}</div>
                        <div className="text-xs text-slate-500">{r.volumeDetail}</div>
                      </td>
                      <td className="py-3 px-4 text-center text-slate-700 border-b border-slate-100">{r.standard}</td>
                      <td className="py-3 px-4 text-center font-medium text-slate-900 bg-brand-50/50 border-b border-slate-100">{r.linerless}</td>
                      <td className="py-3 px-4 text-center border-b border-slate-100">
                        <div className="font-bold text-emerald-700">{r.saving}</div>
                        <div className="text-xs text-emerald-600">{r.savingCost}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ESG — korzyści środowiskowe */}
        <section className="py-10 lg:py-14 bg-slate-50 border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Leaf size={24} className="text-emerald-600" /> ESG — korzyści środowiskowe
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {esgBenefits.map((b, i) => (
                <div key={i} className="bg-white rounded-xl border border-slate-200 p-5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center mb-3">
                    <b.icon size={20} className="text-emerald-700" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1">{b.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section className="py-10 lg:py-14 bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-6">Dla kogo Linerless — zastosowania</h2>
            <ul className="grid sm:grid-cols-2 gap-2">
              {useCases.map((u, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-700 p-3 bg-slate-50 rounded-lg">
                  <Scissors size={14} className="text-brand-700 mt-0.5 shrink-0" />
                  <span>{u}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-10 lg:py-14 bg-slate-50 border-b border-slate-200">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-6">FAQ — Zebra ZT411 Linerless</h2>
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">Zamów wariant ZT411 Linerless</h2>
            <p className="text-slate-300 mb-8 leading-relaxed">
              Dostępne rozdzielczości 203, 300 i 600 dpi (symbol D9 w Part Number). Dla istniejących ZT411 —
              zestaw upgrade do instalacji u klienta. Certyfikowane media linerless Zebra.
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
                Zapytaj o Linerless
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
