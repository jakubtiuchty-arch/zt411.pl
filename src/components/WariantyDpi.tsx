'use client'

import { Star } from 'lucide-react'
import { getPrices, formatPrice } from '@/data/prices'

const prices = getPrices()

type Config = {
  features: string[]
}

const PN_CONFIG: Record<string, Config> = {
  T0E:  { features: [] },
  T0EC: { features: ['Wi-Fi 6/6E + Bluetooth'] },
  T1E:  { features: ['Odklejak'] },
  T2E:  { features: ['Gilotyna (cutter)'] },
  T3E:  { features: ['Odklejak', 'Nawijak podkładu'] },
  T4E:  { features: ['Odklejak', 'Nawijak etykiet'] },
  D9E:  { features: ['Gilotyna linerless', 'Druk termiczny bezpośredni', 'ZeroLiner (bez podkładu)'] },
}

const BESTSELLER_PN = 'ZT41142-T0E0000Z'

const DPI_SPEED: Record<number, string> = { 203: '356 mm/s', 300: '305 mm/s', 600: '152 mm/s' }
const DPI_PREFIX: Record<number, string> = { 203: 'ZT41142', 300: 'ZT41143', 600: 'ZT41146' }

type Props = { dpi: 203 | 300 | 600 }

function configKey(pn: string, prefix: string): string {
  const suffix = pn.replace(prefix + '-', '').slice(0, 4)
  return suffix.replace(/0+$/, '')
}

export default function WariantyDpi({ dpi }: Props) {
  const prefix = DPI_PREFIX[dpi]
  const speed = DPI_SPEED[dpi]

  const variants = prices.variants
    .filter(v => v.pn.startsWith(prefix))
    .map(v => {
      const key = configKey(v.pn, prefix)
      const config = PN_CONFIG[key] ?? { features: [] }
      const allFeatures = [
        `${dpi} dpi`,
        ...config.features,
        speed,
        'Ethernet + USB + BT 4.2',
        '2× USB host',
      ]
      return { v, config, key, allFeatures }
    })

  const gridCols = variants.length <= 3
    ? 'grid-cols-1 sm:grid-cols-3'
    : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'

  return (
    <section id="warianty" className="py-10 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 lg:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
            Warianty Zebra ZT411 {dpi} dpi
          </h2>
          <p className="mt-3 text-sm text-slate-500">
            <strong className="text-slate-700">{variants.length}</strong> {variants.length === 1 ? 'wariant' : (variants.length < 5 ? 'warianty' : 'wariantów')} · {speed} · Ceny netto —{' '}
            <a href="/#kontakt" className="font-semibold text-slate-700 underline">zapytaj o ofertę projektową</a>
          </p>
        </div>

        <div className={`grid ${gridCols} gap-3 lg:gap-4`}>
          {variants.map(({ v, allFeatures }) => {
            const price = v?.price || 0
            const isAvailable = v?.availability === 'available'
            const stock = v?.stock || 0
            const isBestseller = v.pn === BESTSELLER_PN

            return (
              <div
                key={v.pn}
                className={`relative flex flex-col p-4 rounded-xl border transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${
                  isBestseller
                    ? 'border-brand-500 bg-gradient-to-b from-brand-50/40 to-white shadow-md'
                    : 'border-slate-200 bg-white'
                }`}
              >
                {isBestseller && (
                  <div className="absolute -top-2.5 left-4">
                    <div className="flex items-center gap-1 px-2 py-0.5 bg-gradient-to-r from-brand-500 to-brand-400 rounded-full text-slate-900 text-[9px] font-bold uppercase tracking-wider shadow-sm">
                      <Star className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />
                      Bestseller
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-2 mb-3">
                  <div className="font-mono text-sm font-bold text-slate-900 truncate">{v.pn}</div>
                  <span className="relative group/tip inline-flex items-center">
                    <span
                      tabIndex={0}
                      aria-label="Co to za wariant?"
                      className="shrink-0 w-5 h-5 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center text-[10px] font-bold text-slate-600 cursor-help transition-colors"
                    >
                      ?
                    </span>
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 p-3 bg-slate-900 text-white text-[12px] rounded-lg shadow-lg opacity-0 invisible group-hover/tip:opacity-100 group-hover/tip:visible transition-all z-50 leading-relaxed pointer-events-none">
                      <span className="block text-[10px] text-slate-400 uppercase tracking-wider font-semibold mb-1.5">Konfiguracja</span>
                      <span className="block space-y-1">
                        {allFeatures.map((f, i) => (
                          <span key={i} className="flex items-start gap-1.5">
                            <span className="text-brand-500 mt-0.5">•</span>
                            <span>{f}</span>
                          </span>
                        ))}
                      </span>
                      <span className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45 -mt-1" />
                    </span>
                  </span>
                </div>

                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-xl font-bold text-slate-900">{formatPrice(price)} zł</span>
                  <span className="text-xs text-slate-500">netto</span>
                </div>

                <div className="flex items-center justify-between mb-3">
                  {isAvailable ? (
                    <span className="text-[10px] font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-2 py-0.5">
                      {stock} szt. w magazynie
                    </span>
                  ) : (
                    <span className="text-[10px] font-medium text-amber-700 bg-amber-50 border border-amber-200 rounded-full px-2 py-0.5">
                      Na zamówienie
                    </span>
                  )}
                </div>

                <a
                  href={`/?pn=${encodeURIComponent(v.pn)}#kontakt`}
                  onClick={(e) => {
                    const el = document.getElementById('kontakt')
                    if (el) {
                      e.preventDefault()
                      window.dispatchEvent(new CustomEvent('selectVariant', { detail: v.pn }))
                      el.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="mt-auto text-center py-2 rounded-lg text-sm font-semibold bg-brand-500 text-slate-900 hover:bg-brand-400 transition-all"
                >
                  Zapytaj o ofertę
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
