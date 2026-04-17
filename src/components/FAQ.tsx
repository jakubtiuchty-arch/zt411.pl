'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { getPrices } from '@/data/prices'

const _prices = getPrices()
const _low = Math.round(Math.min(..._prices.variants.map(v => v.price)))
const _high = Math.round(Math.max(..._prices.variants.map(v => v.price)))
const _fmt = (n: number) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

const faqs = [
  {
    q: 'Jaka jest cena terminala Zebra TC22 w Polsce?',
    a: `Zebra TC22 kosztuje od ${_fmt(_low)} zł netto (konfiguracja SE4710, 6/64 GB, bateria 3 800 mAh) do ${_fmt(_high)} zł netto (SE55 Advanced Range, 8/128 GB, RFID-ready, BLE). Wersja z 5G/GPS — Zebra TC27 — zaczyna się od 3 254 zł netto. Ceny obejmują urządzenie z baterią, bez akcesoriów. Ceny netto PLN, aktualizowane na bieżąco.`,
  },
  {
    q: 'Czym Zebra TC22 różni się od modelu TC27?',
    a: 'TC22 i TC27 mają identyczny procesor (Qualcomm 5430), ekran (6" FHD+), skanery, wytrzymałość IP68 i kompatybilne akcesoria. Jedyna różnica: TC22 pracuje wyłącznie przez Wi-Fi 6/6E, natomiast TC27 dodaje moduł 5G/4G LTE z dual SIM (nano + eSIM) oraz GPS/GNSS z dokładnością 1–3 m. TC22 wybierz do pracy wewnątrz budynku (magazyn, sklep). TC27 — dla pracowników terenowych (kurierzy, serwisanci, inspektorzy).',
  },
  {
    q: 'Który skaner wybrać — SE4710 czy SE55?',
    a: 'SE4710 to standardowy skaner 1D/2D z zasięgiem do 35 cm — idealny do codziennego skanowania produktów na półkach, w kasie lub w aptece. SE55 Advanced Range sięga od 10 cm do 7,6 metra — skanuje etykiety na wysokich regałach magazynowych bez użycia drabiny. Różnica cenowa wynosi ok. 500 zł. Rekomendacja: SE55 dla magazynów z regałami powyżej 2 m, SE4710 dla retailu i pracy na poziomie ręki.',
  },
  {
    q: 'Czy TC22 jest wodoodporny i wytrzymały?',
    a: 'Tak — TC22 posiada podwójną certyfikację IP68 (pyłoszczelność + zanurzenie do 1 m na 30 min) oraz IP65 (silny strumień wody). Spełnia normy MIL-STD-810H: upadki z 1,5 m na beton (z etui), 500 tumble z 0,5 m, szok termiczny od -10°C do +50°C, wilgotność 95%. Wyświetlacz i okienko skanera chronione Corning Gorilla Glass.',
  },
  {
    q: 'Jak długo wytrzymuje bateria i czy można ją wymienić?',
    a: 'Bateria standardowa 3 800 mAh zapewnia ok. 10 godzin typowej pracy (Wi-Fi + skanowanie). Bateria rozszerzona 5 200 mAh — ok. 14 godzin. Obie są wymienne metodą hot-swap: pracownik wymienia baterię w 5 sekund bez wyłączania terminala i utraty danych. Technologia PowerPrecision podaje stan baterii w czasie rzeczywistym.',
  },
  {
    q: 'Jaki system Android ma TC22 i jak długo będzie wspierany?',
    a: 'TC22 jest dostarczany z aktualnym Androidem i posiada gwarancję producenta na aktualizację do Androida 16 (3 generacje OS). Zebra LifeGuard zapewnia comiesięczne łatki bezpieczeństwa przez cały cykl życia urządzenia. Dostępne wersje: GMS (Google Play) i AOSP (bez Google). Zarządzanie flotą przez SOTI, VMware, Intune lub Zebra DNA Cloud.',
  },
  {
    q: 'Czy Zebra TC22 może czytać tagi RFID?',
    a: 'TC22 nie ma wbudowanego czytnika RFID UHF, ale warianty z 8-pinowym złączem eConnex (oznaczone „RFID-ready") obsługują nakładkę Zebra RFD40 UHF Sled — odczyt 100–700 tagów/sekundę z odległości do 9 m. Modele z 2-pinowym złączem łączą się z RFD40 przez Bluetooth. Wbudowany NFC (13,56 MHz) działa we wszystkich wariantach — obsługuje karty lojalnościowe, Apple VAS i Google SmartTap.',
  },
  {
    q: 'Ile kosztuje Zebra TC22 vs Honeywell CT32?',
    a: `Zebra TC22 zaczyna się od ${_fmt(_low)} zł netto — Honeywell CT32 od 3 389 zł netto. CT32 jest o ~27% droższy w wersji bazowej, ale oferuje dłuższą ścieżkę Android (do v18 vs v16) i skaner FlexRange z zasięgiem 11 m. TC22 jest lżejszy (236 vs 269 g), ma większy ekosystem Mobility DNA (gratis) i najszerszą sieć serwisową Zebra w Polsce. Dla firm szukających najniższego TCO — TC22. Dla projektów z perspektywą 6+ lat — CT32 wart rozważenia.`,
  },
  {
    q: 'Ile kosztuje Zebra TC22 vs TC53e?',
    a: `TC22 od ${_fmt(_low)} zł netto, TC53e od ok. 4 500 zł netto. TC53e to klasa premium: bateria 4 680/7 000 mAh (vs 3 800/5 200 mAh), procesor QCS4490 2,4 GHz (vs 5430 2,1 GHz), Android do v17, nowszy skaner SE4720. TC22 wystarczy dla 80% zastosowań magazynowych i retailowych. TC53e rekomendowany dla wymagających środowisk z 3-zmianową pracą i potrzebą najdłuższego cyklu baterii.`,
  },
  {
    q: 'Czy mogę korzystać z płatności zbliżeniowych NFC na TC22?',
    a: 'Tak — wbudowany NFC (ISO 14443 A/B, Mifare, FeliCa) obsługuje płatności contactless po integracji z aplikacją POS. TC22 jest certyfikowany Apple VAS i Google SmartTap — skanuje bilety, karty lojalnościowe, karty podarunkowe i boarding passy z Apple Wallet / Google Wallet. Przydatne w retail, hotelarstwie i obsłudze eventów.',
  },
  {
    q: 'Jakie oprogramowanie jest dołączone do TC22?',
    a: 'Każdy TC22 zawiera darmowy pakiet Mobility DNA Professional: DataWedge (skanowanie kodów bez programowania — kody trafiają bezpośrednio do pola tekstowego), StageNow (masowa konfiguracja floty z jednego profilu), Device Tracker (lokalizacja zagubionego terminala w budynku), LifeGuard (comiesięczne łatki bezpieczeństwa). Żaden konkurent nie oferuje takiego pakietu w cenie urządzenia.',
  },
  {
    q: 'Gdzie serwisować Zebra TC22 w Polsce?',
    a: 'Autoryzowany serwis Zebra w Polsce: TAKMA oraz serwis-zebry.pl. Czas naprawy gwarancyjnej: 3–5 dni roboczych. Opcjonalne kontrakty OneCare (Z1AE-TC2L-*): Essential (naprawa 3 dni), Select (naprawa+wymiana baterii), TC Cloud (zarządzanie zdalne). TAKMA zapewnia też diagnostykę przed zakupem i pomoc przy konfiguracji floty.',
  },
  {
    q: 'Ile urządzeń TC22 mogę ładować jednocześnie?',
    a: 'Dostępne stacje ładowania: 1-slot (CRD-TC2L-BS1CO-01) do pojedynczego stanowiska, 5-slot (CRD-TC2L-BS5CO-01) z Ethernet do każdego urządzenia, ładowarka 4 baterii (SAC-TC2L-4SCHG-01). Dla floty 20+ urządzeń: 4× stacja 5-slot + 2× ładowarka 4 baterii. Zasilanie: dedykowany zasilacz 50 W (1-slot) lub 108 W (5-slot/ładowarka).',
  },
  {
    q: 'Jakie są alternatywy dla Zebra TC22 na rynku?',
    a: `Główne alternatywy w segmencie entry/mid-range: Honeywell CT32 (od 3 389 zł, Android do v18, FlexRange 11 m), Zebra TC53e (od ~4 500 zł, premium z baterią 7 000 mAh), Datalogic Memor 12 (od ~4 490 zł, Android 13, ładowanie Qi), Samsung Galaxy XCover (od ~1 500 zł, smartfon — brak profesjonalnego skanera i Mobility DNA). TC22 (od ${_fmt(_low)} zł netto) oferuje najlepszy stosunek cena/wydajność z darmowym Mobility DNA i najszerszą siecią serwisową Zebra w Polsce.`,
  },
]

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(index === 0)

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      className="border-b border-slate-200 last:border-0"
    >
      <button onClick={() => setOpen(!open)} className="w-full flex items-start justify-between gap-4 py-4 text-left group">
        <h3 className="font-medium text-slate-900 group-hover:text-brand-700 transition-colors text-sm md:text-base">{faq.q}</h3>
        <ChevronDown size={18} className={`text-slate-400 flex-shrink-0 mt-0.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}>
            <p className="pb-4 text-sm text-slate-600 leading-relaxed pr-8 bg-slate-50 -mx-5 px-5 py-3 rounded-xl">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [sectionOpen, setSectionOpen] = useState(false)

  return (
    <section id="faq" className="py-8 lg:py-12 bg-slate-50 border-y border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={() => setSectionOpen(!sectionOpen)} className="w-full flex items-center justify-between group">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Najczęściej zadawane pytania
          </h2>
          <span className="flex items-center gap-1 text-sm font-semibold text-slate-900 bg-brand-500 px-4 py-1.5 rounded-full group-hover:bg-brand-400 transition-colors">
            {sectionOpen ? 'Ukryj' : `Pokaż ${faqs.length} pytań`}
            <ChevronDown size={18} className={`transition-transform duration-300 ${sectionOpen ? 'rotate-180' : ''}`} />
          </span>
        </button>

        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${sectionOpen ? 'max-h-[5000px] opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'}`}>
          <div className="bg-white rounded-2xl border border-slate-200 divide-y divide-slate-200 px-5">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
