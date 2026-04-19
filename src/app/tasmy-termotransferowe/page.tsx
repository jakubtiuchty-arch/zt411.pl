import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ArrowRight, Home, ChevronRight, Droplet, FlameKindling, Shield, Info } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Taśmy termotransferowe do Zebra ZT411 — Wax, Wax-Resin, Resin',
  description: 'Taśmy TT Zebra do ZT411: Wax, Wax-Resin, Resin (10 artykułów). Długości 300-900 m, szerokość 40-220 mm. Dobór per etykieta i warunki pracy.',
  alternates: { canonical: 'https://www.zt411.pl/tasmy-termotransferowe' },
  openGraph: {
    type: 'article',
    locale: 'pl_PL',
    url: 'https://www.zt411.pl/tasmy-termotransferowe',
    title: 'Taśmy termotransferowe Zebra ZT411 — Wax, Wax-Resin, Resin',
    description: 'Dobór taśmy termotransferowej do Zebra ZT411 — jaki Wax, Wax-Resin, Resin dla jakiej etykiety. Długości 300-900 m.',
    images: [{ url: '/images/zt411-hero.jpg', width: 1200, height: 630, alt: 'Taśmy termotransferowe Zebra ZT411' }],
  },
}

const tapes = [
  {
    category: 'WAX',
    name: 'WAX 1600',
    sub: 'Economy',
    lengths: '300, 450 m',
    widths: '60–220 mm',
    speed: 'do 254 mm/s',
    applications: 'Etykiety wysyłkowe, magazynowe, półkowe, retail. Papier powlekany i niepowlekany.',
    industries: ['Logistyka', 'Retail', 'E-commerce'],
    badge: 'Ekonomiczna',
  },
  {
    category: 'WAX',
    name: 'WAX 2100',
    sub: 'Performance (resin-enhanced)',
    lengths: '450, 600 m',
    widths: '40–220 mm',
    speed: 'do 356 mm/s (14 ips)',
    applications: 'Szybkie druki, duże wolumeny. Lepsza odporność na ścieranie niż zwykły wosk.',
    industries: ['Logistyka wysokowydajna', 'Paletowanie', 'Cross-docking'],
    badge: 'Szybka',
  },
  {
    category: 'WAX',
    name: 'WAX 2300',
    sub: 'Standard',
    lengths: '300, 450, 900 m',
    widths: '40–220 mm',
    speed: 'do 305 mm/s (12 ips)',
    applications: 'Bardzo dobra jakość obróconych kodów kreskowych. Standard magazynowy.',
    industries: ['Magazyn', 'Wysyłka', 'Retail'],
    badge: 'Rolka 900 m',
  },
  {
    category: 'WAX',
    name: 'WAX 5319',
    sub: 'Performance',
    lengths: '450 m',
    widths: '60–131 mm',
    speed: 'do 203 mm/s (8 ips)',
    applications: 'Gęste kody kreskowe, rotated ladder barcodes, drobny tekst, grafika wysokiej rozdzielczości.',
    industries: ['Farmacja', 'Laboratoria', 'Precyzyjne znakowanie'],
    badge: 'Precyzyjna',
  },
  {
    category: 'WAX/RESIN',
    name: 'WAX/RESIN 3200',
    sub: 'High Performance',
    lengths: '300, 450 m',
    widths: '40–220 mm',
    speed: 'do 203 mm/s',
    applications: 'Papier powlekany + syntetyki matowe. Odporność na rozpuszczalniki, chemię, wodę, kwasy/zasady. UL/cUL.',
    industries: ['Przemysł chemiczny', 'Beczki', 'Outdoor'],
    badge: 'UL/cUL',
  },
  {
    category: 'WAX/RESIN',
    name: 'WAX/RESIN 3400',
    sub: 'High Performance',
    lengths: '450 m',
    widths: '40–220 mm',
    speed: 'do 203 mm/s (8 ips)',
    applications: 'Gęste, trwałe obrazy na papierze powlekanym i syntetykach. Automotive, huty, tagowanie stali.',
    industries: ['Automotive', 'Huty', 'Dobra kapitałowe'],
    badge: 'Uniwersalna',
  },
  {
    category: 'RESIN',
    name: 'RESIN 4800',
    sub: 'Performance',
    lengths: '450 m',
    widths: '40–220 mm',
    speed: 'do 152 mm/s (6 ips)',
    applications: 'Matowe i błyszczące syntetyki. Doskonała odporność chemiczna i ścieranie. Gęste kody, grafika HR. UL/cUL.',
    industries: ['Przemysł chemiczny', 'Automotive'],
    badge: 'UL/cUL',
  },
  {
    category: 'RESIN',
    name: 'RESIN 5095',
    sub: 'High Performance',
    lengths: '300, 450 m',
    widths: '40–220 mm',
    speed: 'do 152 mm/s',
    applications: 'Błyszczące syntetyki. Skrajnie ciężkie warunki: wilgoć, wysoka/niska temp., chemia, tarcie. UL/cUL.',
    industries: ['Beczki chemiczne', 'Outdoor', 'Magazyny mroźne'],
    badge: 'Wytrzymała',
  },
  {
    category: 'RESIN',
    name: 'RESIN 5100',
    sub: 'Premium',
    lengths: '450 m',
    widths: '40–154 mm',
    speed: 'do 152 mm/s',
    applications: 'Ekstremalne temperatury + chemia + ścieranie. PCB, zamiennik etykiet laminowanych, Z-Supreme. UL/cUL.',
    industries: ['Elektronika', 'PCB', 'Ekstremalne warunki'],
    badge: 'Premium',
  },
  {
    category: 'RESIN',
    name: 'RESIN ChemResist 8000',
    sub: 'Ekstremalna odporność chemiczna',
    lengths: '300 m',
    widths: '110 mm',
    speed: 'do 152 mm/s',
    applications: 'Ekstremalna odporność na aceton, ksylen, silne rozpuszczalniki. Laboratoria, chemia, farmacja.',
    industries: ['Laboratoria', 'Chemia', 'Farmacja'],
    badge: 'Aceton/ksylen',
  },
]

const decisionTree = [
  {
    material: 'Papier powlekany (standard)',
    environment: 'Wewnątrz budynku, bez chemii',
    useFor: 'Logistyka, magazyn, wysyłki, retail',
    recommended: ['WAX 1600 (ekonomia)', 'WAX 2300 (standard)', 'WAX 2100 (szybki druk)'],
  },
  {
    material: 'Papier powlekany',
    environment: 'Umiarkowana chemia, wilgoć',
    useFor: 'Przemysł lekki, automotive lekki',
    recommended: ['WAX/RESIN 3200', 'WAX/RESIN 3400'],
  },
  {
    material: 'Syntetyki matowe (PP, PE)',
    environment: 'Wewnątrz + krótkie ekspozycje',
    useFor: 'Etykiety produktowe, kosmetyki',
    recommended: ['WAX/RESIN 3200', 'RESIN 4800'],
  },
  {
    material: 'Syntetyki błyszczące (PET)',
    environment: 'Ciężkie warunki',
    useFor: 'Chemia, outdoor, mroźnie',
    recommended: ['RESIN 5095', 'RESIN 4800'],
  },
  {
    material: 'Ekstremalne warunki',
    environment: 'Wysokie temperatury, PCB, laboratorium',
    useFor: 'Elektronika, laboratoria',
    recommended: ['RESIN 5100 Premium', 'RESIN ChemResist 8000'],
  },
  {
    material: 'Farma / laboratorium',
    environment: 'Kontakt z acetonem, ksylenem',
    useFor: 'Probówki, odczynniki',
    recommended: ['RESIN ChemResist 8000'],
  },
]

const faqs = [
  {
    q: 'Jaka taśma termotransferowa pasuje do Zebra ZT411?',
    a: 'Do ZT411 pasują taśmy TT Zebra w rolkach 300, 450, 600 i 900 m (maksymalna długość), z rdzeniem wewnętrznym 25 mm (1"), orientacja face-out (tusz na zewnątrz). Szerokość: 51-110 mm standardowo. Dostępne trzy typy: Wax (tania, standardowa), Wax-Resin (chemia lekka), Resin (ekstremalne warunki). Pełna kompatybilność z 10 artykułami Zebra.',
  },
  {
    q: 'Która taśma jest najtańsza dla drukarki ZT411?',
    a: 'Najtańsza opcja to WAX 1600 Economy — wystarcza dla standardowych etykiet wysyłkowych, magazynowych i retailowych (papier, wewnątrz budynku, bez chemii). W kategorii uniwersalnej (Wax-Resin) warty rozważenia jest WAX/RESIN 3400 — dobra wartość dla automotive i przemysłu. Aktualne ceny i dostępność — skontaktuj się z TAKMA.',
  },
  {
    q: 'Kiedy wybrać taśmę Wax, kiedy Wax-Resin, kiedy Resin?',
    a: 'Wax — dla etykiet papierowych używanych wewnątrz budynku, bez kontaktu z chemią (logistyka, magazyn, retail). Wax-Resin — pośrednia wytrzymałość, papier powlekany + syntetyki matowe, lekka chemia (przemysł, automotive, etykiety trwałe). Resin — najwyższa odporność, tylko syntetyki, ekstremalne warunki (chemia, PCB, outdoor, wysokie temperatury).',
  },
  {
    q: 'Czy rolka 900 m zmieści się w ZT411?',
    a: 'Tak — Zebra ZT411 obsługuje rolki taśm do 900 m długości (maksymalny rozmiar) na rdzeniu 25 mm. Dostępna w artykule WAX 2300. Rolka 900 m oznacza rzadsze wymiany (30 000-60 000 etykiet na jednej rolce), co przekłada się na mniejsze przestoje produkcji i niższy koszt etykiety jednostkowej.',
  },
  {
    q: 'Jak sprawdzić czy taśma ma certyfikację UL/cUL?',
    a: 'Certyfikacja UL/cUL (Underwriters Laboratories) gwarantuje odporność etykiety na określone warunki środowiskowe (temperatura, chemia, tarcie). W ofercie Zebra UL/cUL mają: WAX/RESIN 3200, RESIN 4800, RESIN 5095, RESIN 5100. Wymagana w USA/Kanadzie dla etykiet na urządzeniach elektrycznych, chemii, automotive.',
  },
  {
    q: 'Jakie taśmy są do etykiet laboratoryjnych z kontaktem z rozpuszczalnikami?',
    a: 'Dla ekspozycji na aceton, ksylen i silne rozpuszczalniki używa się RESIN ChemResist 8000 — dedykowana taśma chemiczna Zebra. Dla umiarkowanych warunków laboratoryjnych (krótki kontakt z rozpuszczalnikami) wystarczy RESIN 5095 lub 5100. Etykieta musi być też na syntetyku (PET, PP) — papier nie wytrzyma.',
  },
  {
    q: 'Jaka taśma do druku kodów 2D (QR, DataMatrix)?',
    a: 'Dla gęstych kodów 2D i drobnego tekstu najlepsze są: WAX 5319 (papier) lub WAX/RESIN 3400 (syntetyki) — oferują najwyższą jakość przy 8 ips. Dla 600 dpi (mikrotekst, PCB) użyj RESIN 5100 na syntetykach. Generalnie im wyższa rozdzielczość drukarki, tym lepiej stosować taśmy "High Performance" lub "Premium".',
  },
  {
    q: 'Czy taśmy innych producentów pasują do ZT411?',
    a: 'Technicznie tak — geometria rdzenia (25 mm) i orientacja (face-out) jest standardem branżowym. Zebra certyfikuje jednak tylko własne taśmy — użycie taśm innych producentów może skracać żywotność głowicy drukującej, powodować interferencje z czujnikami i unieważniać gwarancję. Dla kontraktów OneCare wymagane są certyfikowane konsumabilia Zebra.',
  },
]

const category = (c: string) => {
  if (c === 'WAX') return { color: 'text-amber-700', bg: 'bg-amber-50', border: 'border-amber-200', name: 'Wosk (Wax)' }
  if (c === 'WAX/RESIN') return { color: 'text-orange-700', bg: 'bg-orange-50', border: 'border-orange-200', name: 'Wosk-Żywica (Wax/Resin)' }
  return { color: 'text-slate-700', bg: 'bg-slate-100', border: 'border-slate-200', name: 'Żywica (Resin)' }
}

export default function TasmyPage() {
  const techArticleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Taśmy termotransferowe do Zebra ZT411 — przewodnik kompatybilności',
    description: 'Kompletny przewodnik po taśmach TT Zebra do drukarki ZT411. 10 kompatybilnych artykułów z 3 kategorii: Wax, Wax-Resin, Resin. Długości 300-900 m, szerokości 40-220 mm.',
    datePublished: '2026-04-18',
    dateModified: '2026-04-18',
    author: { '@id': 'https://takma.com.pl/#organization' },
    publisher: {
      '@type': 'Organization',
      name: 'TAKMA',
      logo: { '@type': 'ImageObject', url: 'https://takma.com.pl/images/logo-takma.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.zt411.pl/tasmy-termotransferowe' },
    image: 'https://www.zt411.pl/images/zt411-hero.jpg',
    keywords: 'taśma termotransferowa zt411, zebra wax 1600, zebra wax 2300, resin 5095, wax resin 3400, taśma TT zebra',
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
      { '@type': 'ListItem', position: 2, name: 'Taśmy TT', item: 'https://www.zt411.pl/tasmy-termotransferowe' },
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
            <span className="text-slate-900 font-medium">Taśmy TT</span>
          </div>
        </nav>

        {/* Hero */}
        <section className="relative bg-black py-14 lg:py-20 overflow-hidden">
          <div
            className="absolute inset-0 bg-no-repeat bg-right"
            style={{ backgroundImage: 'url(/images/zt411_tasmy_hero.webp)', backgroundSize: 'contain' }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/30 to-black" aria-hidden="true" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.7)' }}>
            <div className="max-w-full lg:max-w-[55%] text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                Taśmy termotransferowe do <span className="text-brand-500">Zebra ZT411</span>
              </h1>
              <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
                <strong className="text-white">10 kompatybilnych artykułów Zebra</strong> w 3 kategoriach: Wax, Wax-Resin, Resin.
                Długości 300, 450, 600 i 900 m. Szerokości 40–220 mm. Rdzeń 25 mm (1&quot;). Przewodnik doboru per etykieta i warunki.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link
                  href="/tasmy-termotransferowe/lista"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-slate-900 bg-brand-500 rounded-full hover:bg-brand-400 transition-all"
                >
                  Przeszukaj katalog 94 taśm →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Passage */}
        <section className="py-10 lg:py-14 bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-4">Co to taśma termotransferowa i jakie pasują do ZT411?</h2>
            <p className="text-slate-700 leading-relaxed">
              <strong>Taśma termotransferowa (TT ribbon)</strong> to rolka folii pokryta barwnikiem, który pod wpływem ciepła głowicy drukującej
              przenosi się na etykietę. Zebra oferuje trzy kategorie taśm: <strong>Wax</strong> (najtańsze, do papieru i standardowych warunków),
              <strong> Wax-Resin</strong> (uniwersalne, papier + syntetyki, lekka chemia) i <strong>Resin</strong> (najbardziej wytrzymałe, tylko syntetyki,
              odporne na chemię, temperaturę i ścieranie).
              <br /><br />
              Do ZT411 pasują rolki <strong>300, 450, 600 i 900 m</strong> z rdzeniem 25 mm (1&quot;) w orientacji face-out (tusz na zewnątrz).
              Łącznie 10 artykułów z katalogu Zebra: 4× Wax, 2× Wax-Resin, 4× Resin.
            </p>
          </div>
        </section>

        {/* Decision tree */}
        <section className="py-10 lg:py-14 bg-slate-50 border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-2">Jaką taśmę wybrać — szybki decision tree</h2>
            <p className="text-sm text-slate-600 mb-6">Zacznij od materiału etykiety i warunków środowiskowych.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {decisionTree.map((d, i) => (
                <div key={i} className="bg-white rounded-xl border border-slate-200 p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-brand-500 text-slate-900 flex items-center justify-center font-bold text-xs">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{d.material}</h3>
                      <p className="text-xs text-slate-500">{d.environment}</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mb-3 pl-11">
                    <strong className="text-slate-900">Dla:</strong> {d.useFor}
                  </p>
                  <div className="pl-11">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">Rekomendacje</p>
                    <div className="flex flex-wrap gap-1.5">
                      {d.recommended.map((r, j) => (
                        <span key={j} className="inline-block px-2 py-0.5 bg-brand-50 border border-brand-200 rounded-full text-xs font-medium text-slate-900">
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tabela 10 taśm */}
        <section className="py-10 lg:py-14 bg-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-2">10 taśm Zebra kompatybilnych z ZT411</h2>
            <p className="text-sm text-slate-600 mb-6">
              Przegląd typów taśm. Szukasz konkretnego wariantu?&nbsp;
              <Link href="/tasmy-termotransferowe/lista" className="text-brand-700 underline underline-offset-2 font-semibold">
                Otwórz wyszukiwarkę z filtrem (94 taśmy) →
              </Link>
            </p>
            <div className="space-y-3">
              {tapes.map((t, i) => {
                const cat = category(t.category)
                return (
                  <div key={i} className="bg-white rounded-xl border border-slate-200 p-5 lg:p-6 hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`inline-block px-2.5 py-0.5 ${cat.bg} ${cat.color} text-[10px] font-bold uppercase tracking-wider rounded-full border ${cat.border}`}>
                            {cat.name}
                          </span>
                          {t.badge && (
                            <span className="inline-block px-2.5 py-0.5 bg-brand-500 text-slate-900 text-[10px] font-bold uppercase tracking-wider rounded-full">
                              {t.badge}
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg font-bold text-slate-900">{t.name}</h3>
                        <p className="text-sm text-slate-500">{t.sub}</p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed mb-3">{t.applications}</p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                      <div>
                        <div className="text-slate-400 uppercase tracking-wider mb-0.5">Długości</div>
                        <div className="font-semibold text-slate-900">{t.lengths}</div>
                      </div>
                      <div>
                        <div className="text-slate-400 uppercase tracking-wider mb-0.5">Szerokości</div>
                        <div className="font-semibold text-slate-900">{t.widths}</div>
                      </div>
                      <div>
                        <div className="text-slate-400 uppercase tracking-wider mb-0.5">Prędkość</div>
                        <div className="font-semibold text-slate-900">{t.speed}</div>
                      </div>
                      <div>
                        <div className="text-slate-400 uppercase tracking-wider mb-0.5">Branże</div>
                        <div className="font-semibold text-slate-900 text-[11px]">{t.industries.join(', ')}</div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* 3 kategorie — szybki wybór */}
        <section className="py-10 lg:py-14 bg-slate-50 border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-6">3 kategorie taśm Zebra — różnice</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
              <div className="bg-white rounded-2xl border border-slate-200 p-5 lg:p-6">
                <div className="w-11 h-11 rounded-xl bg-amber-50 flex items-center justify-center mb-3">
                  <Droplet size={20} className="text-amber-700" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Wax (Wosk)</h3>
                <p className="text-xs text-amber-700 font-semibold mb-2">Podstawowe · Szybkie · Papier</p>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  Barwnik wosku dobrze przylega do papieru powlekanego. Najszybszy druk.
                  Nie wytrzyma chemii ani syntetyków.
                </p>
                <div className="text-xs text-slate-500">
                  <strong>Dla:</strong> Logistyka, magazyn, retail, wysyłki. Papier powlekany.
                </div>
                <div className="text-xs text-slate-500 mt-2">
                  <strong>Kiedy:</strong> Krótki okres życia etykiety (1-6 mies.), wewnątrz.
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-5 lg:p-6">
                <div className="w-11 h-11 rounded-xl bg-orange-50 flex items-center justify-center mb-3">
                  <FlameKindling size={20} className="text-orange-700" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Wax/Resin</h3>
                <p className="text-xs text-orange-700 font-semibold mb-2">Uniwersalne · Pośrednia wytrzymałość</p>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  Mix wosku i żywicy — papier powlekany + syntetyki matowe.
                  Lekka chemia, woda, tarcie. Złoty środek.
                </p>
                <div className="text-xs text-slate-500">
                  <strong>Dla:</strong> Automotive, chemia lekka, kosmetyki, FMCG.
                </div>
                <div className="text-xs text-slate-500 mt-2">
                  <strong>Kiedy:</strong> Etykieta musi przetrwać kontakt z wodą, rozpuszczalnikami, tarcie.
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-5 lg:p-6">
                <div className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center mb-3">
                  <Shield size={20} className="text-slate-700" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Resin (Żywica)</h3>
                <p className="text-xs text-slate-700 font-semibold mb-2">Najdroższe · Ekstremalna wytrzymałość</p>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  100% żywica, tylko syntetyki (PET, PP, PE).
                  Odporna na aceton, ksylen, wysokie temp., UV, ścieranie. UL/cUL.
                </p>
                <div className="text-xs text-slate-500">
                  <strong>Dla:</strong> Elektronika, PCB, chemia przemysłowa, laboratoria.
                </div>
                <div className="text-xs text-slate-500 mt-2">
                  <strong>Kiedy:</strong> Etykieta musi przetrwać lata w ekstremalnych warunkach.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Kompatybilność techniczna */}
        <section className="py-10 lg:py-14 bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Info size={22} className="text-brand-700" />
              Kompatybilność z ZT411 — parametry techniczne
            </h2>
            <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
              <div className="flex flex-col sm:flex-row border-b border-slate-100">
                <div className="w-full sm:w-[40%] py-3 px-4 text-sm font-medium text-slate-500">Długość rolki</div>
                <div className="w-full sm:w-[60%] py-3 px-4 text-sm text-slate-900">300 m · 450 m · 600 m · 900 m (max)</div>
              </div>
              <div className="flex flex-col sm:flex-row border-b border-slate-100 bg-slate-50/60">
                <div className="w-full sm:w-[40%] py-3 px-4 text-sm font-medium text-slate-500">Szerokość taśmy</div>
                <div className="w-full sm:w-[60%] py-3 px-4 text-sm text-slate-900">40–220 mm (dopasować do szerokości etykiety)</div>
              </div>
              <div className="flex flex-col sm:flex-row border-b border-slate-100">
                <div className="w-full sm:w-[40%] py-3 px-4 text-sm font-medium text-slate-500">Rdzeń wewnętrzny</div>
                <div className="w-full sm:w-[60%] py-3 px-4 text-sm text-slate-900">25 mm (1&quot;) — standard Zebra przemysłowa</div>
              </div>
              <div className="flex flex-col sm:flex-row border-b border-slate-100 bg-slate-50/60">
                <div className="w-full sm:w-[40%] py-3 px-4 text-sm font-medium text-slate-500">Orientacja</div>
                <div className="w-full sm:w-[60%] py-3 px-4 text-sm text-slate-900">Face-out (tusz na zewnątrz rolki)</div>
              </div>
              <div className="flex flex-col sm:flex-row border-b border-slate-100">
                <div className="w-full sm:w-[40%] py-3 px-4 text-sm font-medium text-slate-500">Kolor</div>
                <div className="w-full sm:w-[60%] py-3 px-4 text-sm text-slate-900">Czarny (standard), kolorowe na zamówienie</div>
              </div>
              <div className="flex flex-col sm:flex-row bg-slate-50/60">
                <div className="w-full sm:w-[40%] py-3 px-4 text-sm font-medium text-slate-500">Nie pasują do ZT411</div>
                <div className="w-full sm:w-[60%] py-3 px-4 text-sm text-slate-900">Rolki 30, 50, 74 m (to kartridże dla ZD420 / desktop)</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-10 lg:py-14 bg-slate-50 border-b border-slate-200">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-6">FAQ — Taśmy termotransferowe ZT411</h2>
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">Potrzebujesz taśm do ZT411?</h2>
            <p className="text-slate-300 mb-8 leading-relaxed">
              TAKMA jest autoryzowanym partnerem Zebra — pełna oferta taśm TT w magazynie.
              Pomożemy dobrać taśmę do konkretnej etykiety i warunków pracy.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/#kontakt"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-bold text-slate-900 bg-brand-500 rounded-full hover:bg-brand-400 hover:-translate-y-0.5 transition-all"
              >
                Zapytaj o taśmy i etykiety
                <ArrowRight size={18} />
              </Link>
              <a
                href="https://takma.com.pl/kategoria/tasmy-termotransferowe"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-bold text-white border-2 border-white/20 rounded-full hover:bg-white/5 hover:border-white/40 transition-all"
              >
                Sklep TAKMA — taśmy
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
