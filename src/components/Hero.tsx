'use client'

import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { getPrices } from '@/data/prices'

const prices = getPrices()
const lowPrice = Math.round(Math.min(...prices.variants.map(v => v.price)))
const formatPLN = (n: number) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[500px] lg:min-h-[600px] bg-gradient-to-br from-[#0A1A2F] via-slate-900 to-[#142640]">
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

      <div className="absolute top-20 -right-20 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 -left-10 w-80 h-80 bg-brand-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 lg:pt-20 lg:pb-24">
        <div className="max-w-xl lg:max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-brand-500/10 border border-brand-500/30 rounded-full mb-4"
          >
            <span className="w-1.5 h-1.5 bg-brand-500 rounded-full animate-pulse" />
            <span className="text-[11px] font-bold text-brand-500 tracking-wider uppercase">Seria ZT400 · Przemysłowa</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight tracking-tight"
          >
            Drukarka przemysłowa{' '}
            <span className="text-brand-500 block sm:inline">Zebra ZT411</span>
            <span className="block text-xl sm:text-2xl mt-3 font-normal text-slate-300">
              Termotransferowa 4&quot;, do 600 dpi — od {formatPLN(lowPrice)} zł netto
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-base sm:text-lg text-slate-300 max-w-xl font-medium"
          >
            Nowy poziom wydajności, elastyczności i łatwości obsługi. Trwała metalowa konstrukcja
            z kolorowym ekranem dotykowym 4,3&quot;. Autoryzowany partner Zebra — TAKMA, od 2001 r.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 space-y-2 lg:space-y-3 text-white"
          >
            {[
              'Rozdzielczości: 203 / 300 / 600 dpi — najdrobniejszy mikrotekst',
              'Szybkość druku do 356 mm/s (14"/s) — najwyższa w klasie',
              'Opcje: Wi-Fi 6/6E, RFID UHF, druk bezpodkładowy ZeroLiner',
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="mt-0.5 h-5 w-5 flex-none">
                  <CheckCircle className="w-5 h-5 text-brand-500" strokeWidth={2} />
                </div>
                <span className="font-medium text-sm sm:text-base">{item}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#warianty"
              className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-slate-900 transition-all duration-200 bg-brand-500 rounded-full hover:bg-brand-400 hover:shadow-lg hover:shadow-brand-500/30 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500"
            >
              <span>Zobacz warianty i ceny</span>
              <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
              <div className="absolute inset-0 -z-10 rounded-full bg-brand-500 opacity-20 blur-lg transition-opacity duration-200 group-hover:opacity-40" />
            </a>
            <a
              href="#specyfikacja"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white border-2 border-white/20 rounded-full hover:bg-white/5 hover:border-white/40 transition-all"
            >
              Specyfikacja
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
