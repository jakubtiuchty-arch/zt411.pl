import Link from 'next/link'
import { BadgePercent, BookOpen, Wrench, ArrowRight } from 'lucide-react'

export default function PodstronaInfo() {
  return (
    <section className="py-10 lg:py-14 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {/* Oferta projektowa */}
          <div className="rounded-2xl border border-brand-500/30 bg-gradient-to-br from-brand-500/5 to-white p-5 lg:p-6">
            <div className="flex items-center gap-2 mb-3">
              <BadgePercent size={22} className="text-brand-700" />
              <h3 className="text-lg lg:text-xl font-bold text-slate-900">Większa liczba? Oferta projektowa</h3>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed mb-4">
              Podane ceny dotyczą <strong>1 sztuki</strong>. Przy zakupie 5, 10 lub 50+ drukarek założymy dedykowany projekt i znacząco obniżymy cenę za sztukę — dodatkowo zoptymalizujemy konfigurację pod Twoje etykiety i proces.
            </p>
            <Link
              href="/#kontakt"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-500 text-slate-900 rounded-lg text-sm font-semibold hover:bg-brand-400 transition-colors"
            >
              Zapytaj o ofertę projektową
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Serwis / instrukcje */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 lg:p-6">
            <div className="flex items-center gap-2 mb-3">
              <Wrench size={22} className="text-slate-700" />
              <h3 className="text-lg lg:text-xl font-bold text-slate-900">Masz już ZT411? Wsparcie TAKMA</h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Autoryzowany serwis Zebra, instrukcje po polsku, poradniki diagnostyki i konfiguracji na <a href="https://www.serwis-zebry.pl" target="_blank" rel="noopener" className="font-semibold text-slate-900 underline">serwis-zebry.pl</a>.
            </p>
            <div className="space-y-2">
              <a
                href="https://www.serwis-zebry.pl/instrukcje/zebra-zt411"
                target="_blank"
                rel="noopener"
                className="flex items-start gap-2 p-2.5 bg-white border border-slate-200 rounded-lg hover:border-brand-500 transition-colors group"
              >
                <BookOpen size={16} className="text-brand-700 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-slate-900 group-hover:text-brand-700">Instrukcja obsługi ZT411</div>
                  <div className="text-xs text-slate-500 mt-0.5">Uruchomienie, konfiguracja, ZPL, rozwiązywanie problemów</div>
                </div>
              </a>
              <a
                href="https://www.serwis-zebry.pl/blog/serwis-drukarki-zebra-zt411-zt421-diagnostyka-naprawa"
                target="_blank"
                rel="noopener"
                className="flex items-start gap-2 p-2.5 bg-white border border-slate-200 rounded-lg hover:border-brand-500 transition-colors group"
              >
                <Wrench size={16} className="text-brand-700 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-slate-900 group-hover:text-brand-700">Diagnostyka i naprawa</div>
                  <div className="text-xs text-slate-500 mt-0.5">Najczęstsze usterki, autodiagnostyka, kiedy do serwisu</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
