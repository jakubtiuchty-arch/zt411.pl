import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Home, ChevronRight, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Zebra ZT411 — porównania z innymi drukarkami',
  description: 'Porównania Zebra ZT411 z alternatywnymi drukarkami przemysłowymi: ZT421 (6″), Honeywell PM45, starszy model ZT410. Parametry, ceny, kiedy wybrać który model.',
  alternates: { canonical: 'https://www.zt411.pl/vs' },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://www.zt411.pl/vs',
    title: 'Zebra ZT411 — porównania z innymi drukarkami',
    description: 'Porównania Zebra ZT411 z ZT421, PM45, ZT410. Który model wybrać i dlaczego.',
  },
}

const comparisons = [
  {
    href: '/vs/zt421',
    title: 'ZT411 vs ZT421',
    sub: '4″ vs 6″ — szerokość druku',
    desc: 'ZT411 (104 mm) vs ZT421 (168 mm). Kiedy wystarczy 4″, kiedy potrzebujesz 6″.',
    available: true,
  },
]

export default function VsIndexPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Zebra ZT411', item: 'https://www.zt411.pl' },
      { '@type': 'ListItem', position: 2, name: 'Porównania', item: 'https://www.zt411.pl/vs' },
    ],
  }

  return (
    <>
      <Header />
      <main>
        <nav className="bg-white border-b border-slate-200" aria-label="Breadcrumb">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-1.5 text-xs sm:text-sm">
            <Link href="/" className="text-slate-500 hover:text-slate-700 inline-flex items-center gap-1">
              <Home size={12} /> Zebra ZT411
            </Link>
            <ChevronRight size={12} className="text-slate-400" />
            <span className="text-slate-900 font-medium">Porównania</span>
          </div>
        </nav>

        <section className="relative bg-gradient-to-br from-[#0A1A2F] via-slate-900 to-[#142640] py-14 lg:py-20 overflow-hidden">
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
              <span className="text-brand-500">Zebra ZT411</span> — porównania z innymi drukarkami
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Rozważasz zakup ZT411 i nie jesteś pewien czy to właściwy wybór? Poniżej porównania z alternatywnymi modelami — parametry, ceny i kiedy wybrać który.
            </p>
          </div>
        </section>

        <section className="py-10 lg:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              {comparisons.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="group p-6 rounded-2xl border border-slate-200 bg-white hover:border-brand-500 hover:shadow-md transition-all"
                >
                  <h2 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-brand-700">{c.title}</h2>
                  <p className="text-sm text-brand-700 font-semibold mb-3">{c.sub}</p>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">{c.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 group-hover:text-brand-700">
                    Zobacz porównanie
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}

              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
                <h3 className="text-base font-bold text-slate-900 mb-2">Nie wiesz który model wybrać?</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  Doradzimy, która drukarka pasuje do Twojego procesu — szerokość etykiet, wolumen, rodzaj nośników, RFID, integracja z MDM/ERP.
                </p>
                <Link
                  href="/#kontakt"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-500 text-slate-900 rounded-lg text-sm font-semibold hover:bg-brand-400 transition-colors"
                >
                  Skontaktuj się z nami
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      </main>
      <Footer />
    </>
  )
}
