'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Wrench, Clock, Shield, PhoneCall, ExternalLink } from 'lucide-react'

const TAKMA_ZEBRA_URL = 'https://www.zebra.com/pl/pl/partners/partner-application-locator/partner-details.html?id=001i0000019OwOUAA0&viewType=nav'

const certyfikaty = [
  { src: '/images/certyfikat-1-zebra.png', alt: 'Zebra Premier Solution Partner — Printer Repair Specialist' },
  { src: '/images/certyfikat-3-zebra.png', alt: 'Zebra Premier Solution Partner' },
  { src: '/images/certyfikat-2-zebra.png', alt: 'Zebra Premier Solution Partner — Public Sector Specialist' },
]

export default function Serwis() {
  return (
    <section id="serwis" className="py-8 lg:py-16 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dlaczego TAKMA — zielony box z certyfikatami */}
        <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-xl bg-gradient-to-br from-[#A8F000] to-[#8dbd00] mb-8 lg:mb-10">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="relative z-10 px-5 py-4 sm:px-8 sm:py-5 lg:px-10 lg:py-6 text-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#0A1A2F] tracking-tight mb-1 lg:mb-2">
              Dlaczego TAKMA?
            </h2>
            <p className="text-sm text-[#0A1A2F]/80 font-medium leading-relaxed max-w-2xl mx-auto">
              Jako jeden z nielicznych partnerów Zebra w Polsce posiadamy 3 oficjalne certyfikaty potwierdzające najwyższe kompetencje w sprzedaży i serwisie.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-6 mb-8 lg:mb-10">
          {certyfikaty.map((cert, i) => (
            i === 1 ? (
              <a key={cert.alt} href={TAKMA_ZEBRA_URL} target="_blank" rel="noopener" className="bg-white rounded-xl px-4 py-3 shadow-sm border border-slate-200 hover:shadow-md hover:border-brand-300 transition-all">
                <Image src={cert.src} alt={cert.alt} width={200} height={80} className="h-10 sm:h-12 lg:h-14 w-auto object-contain" />
              </a>
            ) : (
              <div key={cert.alt} className="bg-white rounded-xl px-4 py-3 shadow-sm border border-slate-200">
                <Image src={cert.src} alt={cert.alt} width={200} height={80} className="h-10 sm:h-12 lg:h-14 w-auto object-contain" />
              </div>
            )
          ))}
        </div>

        {/* Serwis info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-slate-50 rounded-2xl border border-slate-200 p-4 sm:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-brand-500/20 rounded-xl flex items-center justify-center">
                <Wrench size={20} className="text-brand-700" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Autoryzowany serwis Zebra</h3>
            </div>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2"><Clock size={16} className="text-brand-600 mt-0.5 flex-shrink-0" /> Naprawa gwarancyjna: 3–5 dni roboczych</li>
              <li className="flex items-start gap-2"><Shield size={16} className="text-brand-600 mt-0.5 flex-shrink-0" /> Oryginalne części Zebra, certyfikowani technicy</li>
              <li className="flex items-start gap-2"><PhoneCall size={16} className="text-brand-600 mt-0.5 flex-shrink-0" /> Wsparcie techniczne: konfiguracja, MDM, DataWedge</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="bg-slate-50 rounded-2xl border border-slate-200 p-4 sm:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-brand-500/20 rounded-xl flex items-center justify-center">
                <ExternalLink size={20} className="text-brand-700" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">serwis-zebry.pl</h3>
            </div>
            <p className="text-sm text-slate-600 mb-4 leading-relaxed">
              Dedykowany portal serwisowy TAKMA dla urządzeń Zebra. Zgłaszanie napraw online, śledzenie statusu, baza wiedzy z instrukcjami i poradnikami konfiguracji.
            </p>
            <ul className="space-y-2 text-sm text-slate-600 mb-4">
              <li>• Zgłoszenie naprawy online 24/7</li>
              <li>• Instrukcje obsługi po polsku (TC22, TC27, ZD421 i inne)</li>
              <li>• Poradniki konfiguracji DataWedge, StageNow, MDM</li>
              <li>• Diagnostyka zdalna przed wysyłką do serwisu</li>
            </ul>
            <a href="https://www.serwis-zebry.pl" target="_blank" rel="noopener" className="inline-flex items-center gap-1 text-sm text-brand-700 font-semibold hover:underline">
              Przejdź do serwis-zebry.pl →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
