'use client'

import { useState } from 'react'
import { Star } from 'lucide-react'
import { getPrices, formatPrice } from '@/data/prices'

const prices = getPrices()

const plans = [
  {
    pn: 'WLMT0-T22B6ABC2-A6',
    features: ['Skaner SE4710 (do 35 cm)', '6 GB / 64 GB', 'Bateria 3 800 mAh (~10 h)', 'Wi-Fi 6/6E + BT 5.2 + NFC', '—'],
    defaultActive: true,
  },
  {
    pn: 'WLMT0-T22B8ABD8-A6',
    features: ['Skaner SE4710 (do 35 cm)', '8 GB / 128 GB', 'Bateria 3 800 mAh (~10 h)', 'Lokalizator BLE', 'Złącze RFID 8-pin (eConnex)'],
    defaultActive: false,
  },
  {
    pn: 'WLMT0-T22B6CBE2-A6',
    features: ['Skaner SE55 Advanced (do 7,6 m)', '6 GB / 64 GB', 'Bateria 5 200 mAh (~14 h)', 'Wi-Fi 6/6E + BT 5.2 + NFC', '—'],
    defaultActive: false,
  },
  {
    pn: 'WLMT0-T22B8CBD8-A6',
    features: ['Skaner SE55 Advanced (do 7,6 m)', '8 GB / 128 GB', 'Bateria 3 800 mAh (~10 h)', 'Lokalizator BLE', 'Złącze RFID 8-pin (eConnex)'],
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
            Wybierz wariant Zebra TC22
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
                      {feature === 'Lokalizator BLE' ? (
                        <span className="inline">
                          Lokalizator BLE{' '}
                          <span className="relative group/tip inline-flex items-center align-middle">
                            <span className="w-4 h-4 bg-slate-200 rounded-full inline-flex items-center justify-center text-[10px] font-bold text-slate-600 cursor-help">?</span>
                            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 p-2.5 bg-slate-900 text-white text-xs rounded-lg shadow-lg opacity-0 invisible group-hover/tip:opacity-100 group-hover/tip:visible transition-all z-50 leading-relaxed pointer-events-none">
                              Wbudowany nadajnik BLE pozwala lokalizować terminal w budynku za pomocą Zebra Device Tracker — znajdziesz zagubione urządzenie na mapie.
                              <span className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45 -mt-1" />
                            </span>
                          </span>
                        </span>
                      ) : feature.includes('eConnex') ? (
                        <span className="inline">
                          Złącze RFID 8-pin (eConnex){' '}
                          <span className="relative group/tip inline-flex items-center align-middle">
                            <span className="w-4 h-4 bg-slate-200 rounded-full inline-flex items-center justify-center text-[10px] font-bold text-slate-600 cursor-help">?</span>
                            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 p-2.5 bg-slate-900 text-white text-xs rounded-lg shadow-lg opacity-0 invisible group-hover/tip:opacity-100 group-hover/tip:visible transition-all z-50 leading-relaxed pointer-events-none">
                              Złącze 8-pin umożliwia podłączenie nakładki Zebra RFD40 UHF RFID Sled — odczyt do 700 tagów/s z odległości do 9 m.
                              <span className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45 -mt-1" />
                            </span>
                          </span>
                        </span>
                      ) : feature}
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
