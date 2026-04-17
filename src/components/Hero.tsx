'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { getPrices } from '@/data/prices'

const prices = getPrices()
const lowPrice = Math.round(Math.min(...prices.variants.map(v => v.price)))
const formatPLN = (n: number) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[500px] lg:min-h-[600px]">
      {/* Background Image */}
      <Image
        src="/images/tc22_hero_2.webp"
        alt="Zebra TC22 — terminal mobilny w środowisku magazynowym"
        fill
        className="object-cover object-[60%_50%] sm:object-[75%_50%]"
        priority
      />

      {/* Overlay — mocniejszy po lewej dla czytelności tekstu */}
      <div className="absolute inset-0 bg-black/50 lg:bg-transparent lg:bg-gradient-to-r lg:from-black/75 lg:from-20% lg:via-black/40 lg:via-45% lg:to-transparent lg:to-65%" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 lg:pt-20 lg:pb-24">
        <div className="max-w-xl lg:max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight tracking-tight"
          >
            Terminal mobilny{' '}
            <span className="text-brand-500 block sm:inline">Zebra TC22</span>
            <span className="block text-xl sm:text-2xl mt-3 font-normal text-slate-300">
              Wi-Fi 6E, skaner 1D/2D, IP68 — od {formatPLN(lowPrice)} zł netto
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-base sm:text-lg text-slate-300 max-w-xl font-medium"
          >
            Wytrzymały kolektor danych klasy enterprise z ekranem 6&quot; FHD+ i procesorem Qualcomm 5430.
            Autoryzowany partner Zebra — TAKMA, od 2001 r.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 space-y-2 lg:space-y-3 text-white"
          >
            {[
              'Skaner SE4710 lub SE55 Advanced Range (do 7,6 m)',
              'Bateria hot-swap 3 800 / 5 200 mAh — wymiana w 5 sekund',
              'IP68 + MIL-STD-810H — upadki z 1,5 m na beton',
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
          </motion.div>
        </div>
      </div>
    </section>
  )
}
