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
    q: 'Ile kosztuje drukarka Zebra ZT411 w Polsce?',
    a: `Zebra ZT411 kosztuje od ${_fmt(_low)} zł netto (wariant 203 dpi, Wi-Fi + Bluetooth) do ${_fmt(_high)} zł netto (wariant bezpodkładowy ZeroLiner). Wariant z RFID UHF: ok. 10 490 zł netto. Ceny zawierają drukarkę z zasilaczem i kablem USB, bez taśmy barwiącej.`,
  },
  {
    q: 'Jaką rozdzielczość druku wybrać: 203, 300 czy 600 dpi?',
    a: '203 dpi — standardowe etykiety logistyczne, kody kreskowe, adresy wysyłki. 300 dpi — mniejsze czcionki, QR, DataMatrix, etykiety laboratoryjne. 600 dpi — mikrotekst, znakowanie PCB, etykiety farmaceutyczne, najdrobniejsze kody 2D. W serii ZT400: 600 dpi tylko w ZT411 — ZT421 (6″) nie oferuje tej rozdzielczości.',
  },
  {
    q: 'Czym różni się Zebra ZT411 od ZT421?',
    a: 'ZT411 ma szerokość druku 4" (104 mm), ZT421 ma 6" (168 mm). ZT411 oferuje opcjonalną rozdzielczość 600 dpi, ZT421 tylko 203 i 300 dpi. ZT411 obsługuje druk bezpodkładowy ZeroLiner, ZT421 nie. ZT411 jest lżejsza (16,33 vs 18,14 kg). Dla standardowych etykiet logistycznych — ZT411, dla dużych etykiet paletowych 6" — ZT421.',
  },
  {
    q: 'Czym ZT411 różni się od starszej ZT410?',
    a: 'ZT411 to następca ZT410. Kluczowe różnice: kolorowy ekran dotykowy 4,3" (vs monochromatyczny w ZT410), Wi-Fi 6/6E i Bluetooth 5.3 (vs Wi-Fi 5 i BT 4.1), szybszy procesor, dwa porty USB host (vs jeden), Zebra Link-OS z Print DNA, opcja druku bezpodkładowego ZeroLiner, certyfikat ENERGY STAR. ZT410 została wycofana z produkcji.',
  },
  {
    q: 'Czy ZT411 obsługuje RFID UHF?',
    a: 'Tak. Opcja RFID UHF (ISO/IEC 18000-63, EPC gen. 2 v2.1, RAIN RFID) dostępna jako wariant fabryczny lub zestaw do instalacji u klienta. Technologia kodowania adaptacyjnego automatycznie dobiera optymalne ustawienia dla każdego tagu. Dostępna jest też specjalna wersja RFID On-Metal do znakowania powierzchni metalowych (kontenery, zasoby metalowe).',
  },
  {
    q: 'Czym jest druk bezpodkładowy ZeroLiner w ZT411?',
    a: 'ZeroLiner to technologia druku na etykietach bez podkładu (linerless). Zalety: ~50% więcej etykiet na jednej rolce, brak odpadów z podkładu, redukcja emisji CO2, mniej przestojów na wymianę rolek. ZT411 to jedyna drukarka przemysłowa Zebra obsługująca ZeroLiner. Dostępna jako wariant fabryczny (tylko druk termiczny) lub zestaw do modernizacji istniejących ZT411.',
  },
  {
    q: 'Jakie łączności ma ZT411?',
    a: 'Standard: USB 2.0, RS-232 szeregowy, Ethernet 10/100, Bluetooth 4.2, 2× USB host (do klawiatury, skanera, pendrive z firmware). Opcja: dwupasmowy moduł Wi-Fi 802.11ax (Wi-Fi 6/6E) + Bluetooth 5.3, interfejs równoległy, interfejs aplikatora. Dwa otwarte gniazda umożliwiają instalację dodatkowych kart komunikacyjnych w ciągu kilku minut.',
  },
  {
    q: 'Ile kosztuje Zebra ZT411 vs Honeywell PM45?',
    a: `ZT411 od ${_fmt(_low)} zł netto, Honeywell PM45 od ok. 7 200 zł netto (porównywalny wariant 203 dpi). ZT411 wygrywa: Wi-Fi 6/6E (PM45 tylko Wi-Fi 5), rozdzielczość 600 dpi w opcji (PM45 max 406 dpi), ZeroLiner bezpodkładowy (PM45 brak), Print DNA gratis (bogatszy ekosystem niż Honeywell). PM45 wygrywa: nieco szybszy przy 300 dpi. Dla firm z flotą Zebra — ZT411.`,
  },
  {
    q: 'Jakie języki programowania obsługuje ZT411?',
    a: 'Standardowo: ZPL i ZPL II (Zebra Programming Language — zaawansowane formatowanie etykiet), ZBI 2.0 (BASIC Interpreter dla niezależnych aplikacji drukarkowych). Dodatkowo EPL i EPL2 (Eltron z trybem liniowym — tylko model 203 dpi) dla kompatybilności ze starszymi systemami. Dzięki Unicode ZT411 drukuje w dowolnym języku — polskim, chińskim, arabskim, cyrylicy.',
  },
  {
    q: 'Jak szybka jest Zebra ZT411?',
    a: 'Maksymalna prędkość druku: 356 mm/s (14"/s) przy 203 dpi — najwyższa w klasie drukarek 4" przemysłowych. Przy 300 dpi: ok. 305 mm/s. Przy 600 dpi: ok. 152 mm/s. Krótki czas wydruku pierwszej etykiety (<1 s). Długość ciągłego druku: 3 988 mm (203 dpi), 1 854 mm (300 dpi), 991 mm (600 dpi).',
  },
  {
    q: 'Jakie akcesoria i materiały eksploatacyjne pasują do ZT411?',
    a: 'Taśmy barwiące Wax, Wax-Resin lub Resin (szerokość 51–110 mm, długość do 450 m, rdzeń 25 mm). Głowice drukujące 203/300/600 dpi (wymienne u klienta). Nawijak pełnej rolki, odklejak, obcinak gilotynowy, klawiatura ZKDU do niezależnego druku, interfejs aplikatora. Etykiety certyfikowane Zebra — ciągłe, sztancowane, z czarnymi znacznikami, ZeroLiner.',
  },
  {
    q: 'Gdzie serwisować Zebra ZT411 w Polsce?',
    a: 'Autoryzowany serwis Zebra w Polsce: TAKMA (Poznań, Premier Solution Partner) oraz portal serwis-zebry.pl. Czas naprawy gwarancyjnej: 3–5 dni roboczych. Kontrakty Zebra OneCare: Essential (naprawa 3 dni, priorytet 8×5) lub Select (priorytet 24×7, wymiana urządzenia następnego dnia). TAKMA oferuje wymianę głowic, konserwację prewencyjną, diagnostykę zdalną przez Printer Profile Manager.',
  },
  {
    q: 'Do jakich zastosowań jest Zebra ZT411?',
    a: 'Produkcja (WIP, oznaczenia identyfikacyjne, numery seryjne, etykiety odbiorcze i składowania). Transport i logistyka (kompletacja, wysyłka, przyjmowanie towarów, przeładunek, etykiety zgodności). Handel detaliczny (centra dystrybucji, obsługa zaplecza). Ochrona zdrowia (etykiety laboratoryjne, banki krwi, śledzenie zasobów, apteki). Rekomendowana tam, gdzie wymagana niezawodność 24/7 i duża ilość drukowanych etykiet dziennie.',
  },
  {
    q: 'Jakie są warunki środowiskowe pracy ZT411?',
    a: 'Druk termotransferowy: 5°C do 40°C. Druk termiczny: 0°C do 40°C. Przechowywanie i transport: -40°C do +60°C. Wilgotność pracy: 20–85% bez kondensacji. Wilgotność przechowywania: 5–85%. Metalowa rama i składana pokrywa z dużym przezroczystym okienkiem. Certyfikat ENERGY STAR (energooszczędna). Trwała powłoka ochraniająca głowicę w trybie termicznym.',
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
