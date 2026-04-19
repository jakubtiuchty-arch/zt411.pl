import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import RibbonsTable from '@/components/RibbonsTable'
import { ArrowRight, Home, ChevronRight } from 'lucide-react'
import ribbonsData from '@/data/ribbons.json'

const ribbonsCount = ribbonsData.length

export const metadata: Metadata = {
  title: `Wyszukiwarka taśm Zebra do ZT411 — katalog ${ribbonsCount} wariantów`,
  description: `Przeszukaj katalog ${ribbonsCount} taśm termotransferowych Zebra kompatybilnych z drukarką ZT411. Filtruj po typie (Wosk, Wosk-Żywica, Żywica), szerokości (40-220 mm) i długości (300-900 m).`,
  alternates: { canonical: 'https://www.zt411.pl/tasmy/lista' },
  openGraph: {
    type: 'article',
    locale: 'pl_PL',
    url: 'https://www.zt411.pl/tasmy/lista',
    title: `Wyszukiwarka taśm Zebra do ZT411 — katalog ${ribbonsCount} wariantów`,
    description: `Przeszukaj katalog ${ribbonsCount} taśm Zebra dla ZT411. Filtruj po szerokości, długości i typie. Kopiuj Part Number jednym kliknięciem.`,
    images: [{ url: '/images/zt411-hero.jpg', width: 1200, height: 630, alt: 'Wyszukiwarka taśm Zebra do ZT411' }],
  },
}

export default function TasmyListaPage() {
  const techArticleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: `Lista ${ribbonsCount} taśm termotransferowych Zebra kompatybilnych z ZT411`,
    description: `Kompletny katalog ${ribbonsCount} Part Numbers taśm TT Zebra dla drukarki ZT411 — Wax (1600, 2100, 2300, 5319), Wax-Resin (3200, 3400), Resin (4800, 5095, 5100, ChemResist 8000). Filtrowalna tabela po szerokości, długości, typie.`,
    datePublished: '2026-04-18',
    dateModified: '2026-04-18',
    author: { '@id': 'https://takma.com.pl/#organization' },
    publisher: {
      '@type': 'Organization',
      name: 'TAKMA',
      logo: { '@type': 'ImageObject', url: 'https://takma.com.pl/images/logo-takma.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.zt411.pl/tasmy/lista' },
    image: 'https://www.zt411.pl/images/zt411-hero.jpg',
    keywords: 'lista taśm zebra zt411, part number taśma, wax 1600 części, zebra resin PN, katalog taśm termotransferowych',
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Zebra ZT411', item: 'https://www.zt411.pl' },
      { '@type': 'ListItem', position: 2, name: 'Taśmy TT', item: 'https://www.zt411.pl/tasmy' },
      { '@type': 'ListItem', position: 3, name: 'Pełna lista PN', item: 'https://www.zt411.pl/tasmy/lista' },
    ],
  }

  return (
    <>
      <Header />
      <main>
        {/* Breadcrumb */}
        <nav className="bg-white border-b border-slate-200" aria-label="Breadcrumb">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-1.5 text-xs sm:text-sm">
            <Link href="/" className="text-slate-500 hover:text-slate-700 inline-flex items-center gap-1">
              <Home size={12} /> Zebra ZT411
            </Link>
            <ChevronRight size={12} className="text-slate-400" />
            <Link href="/tasmy" className="text-slate-500 hover:text-slate-700">Taśmy TT</Link>
            <ChevronRight size={12} className="text-slate-400" />
            <span className="text-slate-900 font-medium">Pełna lista PN</span>
          </div>
        </nav>

        {/* Hero */}
        <section className="relative bg-gradient-to-br from-[#0A1A2F] via-slate-900 to-[#142640] py-12 lg:py-16 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
              Wyszukiwarka taśm Zebra<br />
              <span className="text-brand-500">dla drukarki ZT411</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Przeszukaj katalog <strong className="text-white">{ribbonsCount} taśm termotransferowych</strong> kompatybilnych z ZT411.
              Filtruj po typie (Wosk, Wosk-Żywica, Żywica), szerokości i długości rolki. Skopiuj Part Number jednym kliknięciem.
            </p>
          </div>
        </section>

        {/* Filter + table */}
        <section className="py-10 lg:py-14 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <RibbonsTable />
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 lg:py-16 bg-gradient-to-br from-[#0A1A2F] to-slate-900 text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">Zapytaj o wycenę taśm</h2>
            <p className="text-slate-300 mb-8 leading-relaxed">
              Skopiuj Part Numbers i wyślij zapytanie — przygotujemy wycenę z rabatem ilościowym,
              sprawdzimy dostępność i dobierzemy do Twoich etykiet.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/#kontakt"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-bold text-slate-900 bg-brand-500 rounded-full hover:bg-brand-400 hover:-translate-y-0.5 transition-all"
              >
                Wyślij zapytanie
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/tasmy"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-bold text-white border-2 border-white/20 rounded-full hover:bg-white/5 hover:border-white/40 transition-all"
              >
                Wróć do przewodnika
              </Link>
            </div>
          </div>
        </section>

        {/* JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      </main>
      <Footer />
    </>
  )
}
