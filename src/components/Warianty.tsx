'use client'

import { useState } from 'react'
import { Star } from 'lucide-react'
import { getPrices, formatPrice } from '@/data/prices'

const prices = getPrices()

const plans = [
  {
    pn: 'ZT41142-T0E0000Z',
    features: ['Rozdzielczość 203 dpi', 'Szerokość druku 4" (104 mm)', 'Wi-Fi 6/6E + Bluetooth 5.3', 'Obcinak gilotynowy', 'Ekran dotykowy 4,3"'],
    defaultActive: true,
  },
  {
    pn: 'ZT41143-T0E0000Z',
    features: ['Rozdzielczość 300 dpi', 'Szerokość druku 4" (104 mm)', 'Wi-Fi 6/6E + Bluetooth 5.3', 'Obcinak gilotynowy', 'QR / DataMatrix małe'],
    defaultActive: false,
  },
  {
    pn: 'ZT41146-T0E0000Z',
    features: ['Rozdzielczość 600 dpi', 'Mikrotekst, PCB, farma', 'Wi-Fi 6/6E + Bluetooth 5.3', 'Obcinak gilotynowy', 'Tylko w ZT411'],
    defaultActive: false,
  },
  {
    pn: 'ZT41142-T0E00C0Z',
    features: ['Rozdzielczość 203 dpi', 'RFID UHF (ISO 18000-63)', 'EPC gen. 2 v2.1 / RAIN', 'Wi-Fi 6/6E + Bluetooth 5.3', 'Kodowanie adaptacyjne'],
    defaultActive: false,
  },
]

function getVariant(pn: string) {
  return prices.variants.find(v => v.pn === pn)
}

export default function Warianty() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  // Aktywna karta: hovered albo domyślna (index 0)
  const activeIdx = hoveredIdx !== null ? hoveredIdx : 0

  return (
    <section id="warianty" className="py-8 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
            Wybierz wariant Zebra ZT411
          </h2>
          <p className="mt-4 text-sm text-slate-500">
            Ceny netto za 1 szt. Przy większej ilości — <a href="#kontakt" className="font-semibold text-slate-700 underline">zapytaj o ofertę projektową</a> z dedykowaną ceną.
          </p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8"
          onMouseLeave={() => setHoveredIdx(null)}
        >
          {plans.map((plan, idx) => {
            const v = getVariant(plan.pn)
            const price = v?.price || 0
            const isAvailable = v?.availability === 'available'
            const stock = v?.stock || 0
            const isActive = activeIdx === idx

            return (
              <div
                key={plan.pn}
                onMouseEnter={() => setHoveredIdx(idx)}
                className={`relative flex flex-col p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'border-brand-500 bg-white shadow-xl sm:scale-105 z-10 sm:-translate-y-1'
                    : 'border-slate-200 bg-white shadow-sm opacity-80'
                }`}
              >
                {/* Badge — tylko na pierwszym */}
                {idx === 0 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-max max-w-full">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-brand-600 to-brand-500 rounded-full blur opacity-30" />
                      <div className="relative flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-brand-500 to-brand-400 rounded-full text-slate-900 text-[10px] font-bold uppercase tracking-wider shadow-sm whitespace-nowrap">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        Najczęściej wybierany
                      </div>
                    </div>
                  </div>
                )}

                <h3 className={`text-sm font-mono font-bold text-center transition-colors duration-300 ${isActive ? 'text-brand-700 mt-2' : 'text-slate-900'}`}>
                  {plan.pn}
                </h3>

                <div className="flex justify-center mt-2">
                  {isAvailable ? (
                    <span className="text-[11px] font-medium text-emerald-600 bg-emerald-50 border border-emerald-200 rounded-full px-2.5 py-0.5">
                      Dostępny ({stock} szt.)
                    </span>
                  ) : (
                    <span className="text-[11px] font-medium text-amber-600 bg-amber-50 border border-amber-200 rounded-full px-2.5 py-0.5">
                      Na zamówienie
                    </span>
                  )}
                </div>

                <div className="my-6 text-center">
                  <span className="text-3xl font-bold text-slate-900">{formatPrice(price)} zł</span>
                  <span className="text-slate-500 ml-2">netto</span>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className={`flex items-start text-sm text-slate-700 ${feature === '—' ? 'invisible' : ''}`}>
                      <span className={`w-1.5 h-1.5 rounded-full mr-3 mt-2 shrink-0 transition-colors duration-300 ${isActive ? 'bg-brand-500' : 'bg-slate-300'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => {
                    window.dispatchEvent(new CustomEvent('selectVariant', { detail: plan.pn }))
                    document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className={`w-full text-center py-3 rounded-xl font-bold transition-all duration-300 transform hover:-translate-y-0.5 ${
                    isActive
                      ? 'bg-gradient-to-r from-brand-500 to-brand-400 text-slate-900 shadow-lg shadow-brand-200'
                      : 'bg-slate-100 text-slate-900'
                  }`}
                >
                  Zapytaj o ofertę
                </button>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
