'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Radio, Leaf, Microscope, ScanBarcode, Rocket, FlameKindling, GitCompareArrows, ArrowRight } from 'lucide-react'

const cards = [
  {
    href: '/zt411-rfid',
    icon: Radio,
    title: 'RFID UHF',
    desc: 'EPC gen. 2 v2.1, ISO/IEC 18000-63. Adaptive Encoding automatycznie dobiera ustawienia tagu. Wariant On-Metal do powierzchni metalowych.',
    label: 'Funkcja',
  },
  {
    href: '/zeroliner',
    icon: Leaf,
    title: 'ZeroLiner — druk bezpodkładowy',
    desc: '+50% etykiet na rolkę, zero odpadów podkładu, redukcja CO2. Unikalna technologia Zebra dostępna tylko w ZT411.',
    label: 'Funkcja',
  },
  {
    href: '/600-dpi',
    icon: Microscope,
    title: 'Rozdzielczość 600 dpi',
    desc: '24 pkt/mm, najmniejsza kreska 0,042 mm. Dedykowana do PCB, farmacji UDI, jubilerstwa i etykiet laboratoryjnych.',
    label: 'Rozdzielczość',
  },
  {
    href: '/300-dpi',
    icon: ScanBarcode,
    title: 'Rozdzielczość 300 dpi',
    desc: 'Najpopularniejszy wariant. GS1 DataMatrix, etykiety kosmetyczne, laboratoryjne i farmaceutyczne. 305 mm/s.',
    label: 'Rozdzielczość',
  },
  {
    href: '/203-dpi',
    icon: Rocket,
    title: 'Rozdzielczość 203 dpi',
    desc: 'Najszybszy i najtańszy wariant — 356 mm/s. Standard dla logistyki, e-commerce, wysyłek kurierskich i magazynu.',
    label: 'Rozdzielczość',
  },
  {
    href: '/tasmy',
    icon: FlameKindling,
    title: 'Taśmy termotransferowe',
    desc: 'Przewodnik po 10 typach taśm Zebra + wyszukiwarka 94 konkretnych Part Numbers. Wosk, Wosk-Żywica, Żywica.',
    label: 'Materiały',
  },
]

export default function PoznajZT411() {
  return (
    <section id="poznaj" className="py-10 lg:py-16 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
            Poznaj Zebra ZT411 bliżej
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Kluczowe funkcje, rozdzielczości i materiały — szczegółowe przewodniki po każdym aspekcie drukarki.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {cards.map((c, i) => (
            <motion.div
              key={c.href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Link
                href={c.href}
                className="group block h-full bg-white rounded-2xl border border-slate-200 p-5 lg:p-6 hover:border-brand-500 hover:shadow-lg hover:shadow-brand-500/5 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-11 h-11 rounded-xl bg-brand-500/10 flex items-center justify-center group-hover:bg-brand-500/20 transition-colors">
                    <c.icon size={20} className="text-brand-700" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    {c.label}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-brand-700 transition-colors">
                  {c.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {c.desc}
                </p>
                <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 group-hover:gap-2.5 transition-all">
                  Dowiedz się więcej
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Porównanie — osobna karta przez pełną szerokość */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-5"
        >
          <Link
            href="/vs/zt421"
            className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-5 lg:p-6 bg-white border border-slate-200 rounded-2xl hover:border-brand-500 hover:shadow-lg hover:shadow-brand-500/5 transition-all"
          >
            <div className="shrink-0 w-11 h-11 rounded-xl bg-slate-900 text-brand-500 flex items-center justify-center">
              <GitCompareArrows size={20} />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-700 transition-colors">
                Zebra ZT411 vs ZT421 — pełne porównanie
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Która drukarka z serii ZT400 jest właściwa? 16 różnic, tabela specyfikacji, zastosowania per model, FAQ.
              </p>
            </div>
            <div className="shrink-0 inline-flex items-center gap-1.5 text-sm font-bold text-slate-900 group-hover:text-brand-700 transition-colors">
              Zobacz porównanie
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
