'use client'

import { motion } from 'framer-motion'

const specs = [
  { label: 'Technologia druku', value: 'Termotransferowa i termiczna bezpośrednia' },
  { label: 'Rozdzielczość', value: '203 dpi (8 pkt./mm), 300 dpi (opcja), 600 dpi (opcja — tylko ZT411)' },
  { label: 'Maksymalna szerokość druku', value: '104 mm (4,09")' },
  { label: 'Maksymalna szybkość druku', value: '356 mm/s (14"/s)' },
  { label: 'Długość druku', value: '203 dpi: 3 988 mm · 300 dpi: 1 854 mm · 600 dpi: 991 mm' },
  { label: 'Ekran', value: 'Kolorowy dotykowy 4,3", intuicyjne menu z ikonami' },
  { label: 'Pamięć', value: '256 MB SDRAM + 512 MB liniowy Flash' },
  { label: 'Konstrukcja', value: 'Metalowa rama, składana pokrywa z przezroczystym okienkiem' },
  { label: 'Głowica drukująca', value: 'Cienkowarstwowa z technologią E3 Element Energy Equalizer' },
  { label: 'Interfejsy standard', value: 'USB 2.0 · RS-232 szeregowy · Ethernet 10/100 · Bluetooth 4.2 · 2× USB host' },
  { label: 'Interfejsy opcjonalne', value: 'Dwupasmowy Wi-Fi 802.11ax (6/6E) + BT 5.3 · Parallel · Aplikator' },
  { label: 'RFID UHF (opcja)', value: 'EPC gen. 2 v2.1, ISO/IEC 18000-63, RAIN RFID, On-Metal' },
  { label: 'Druk bezpodkładowy (opcja)', value: 'ZeroLiner — +50% etykiet na rolkę, tylko ZT411' },
  { label: 'Szerokość nośników', value: '25,4 mm do 114 mm (odrywanie/obcinak) · 25,4–108 mm (odklejak)' },
  { label: 'Max średnica rolki', value: '203 mm na rdzeniu 76 mm' },
  { label: 'Rodzaje nośników', value: 'Ciągłe, sztancowane, z nacięciami, z czarnymi znacznikami, ZeroLiner' },
  { label: 'Taśma barwiąca', value: 'Długość 450 m · szerokość 51–110 mm · rdzeń 25 mm' },
  { label: 'Języki programowania', value: 'ZPL, ZPL II, ZBI 2.0, EPL/EPL2 (tylko 203 dpi)' },
  { label: 'Kody kreskowe liniowe', value: 'Code 39, Code 128, UPC/EAN, Codabar, Interleaved 2z5, Postnet i in.' },
  { label: 'Kody 2D', value: 'DataMatrix, QR Code, PDF417, MaxiCode, Aztec, MicroPDF, RSS-14' },
  { label: 'Zasilanie', value: 'Zasilacz samonastawny 100-240 V AC, 50-60 Hz (ENERGY STAR)' },
  { label: 'Temperatura pracy', value: '5°C do 40°C (termotransfer) · 0°C do 40°C (termiczny)' },
  { label: 'Temperatura przechowywania', value: '-40°C do +60°C' },
  { label: 'Wilgotność pracy', value: '20% do 85% bez kondensacji' },
  { label: 'Wymiary (ZT411)', value: '495 × 269 × 324 mm' },
  { label: 'Waga', value: '16,33 kg (ZT411 podstawowy)' },
  { label: 'Zgodność', value: 'IEC 62368 klasa B, EN 55032, EN 55035, CE, FCC, cTUVus, ICES-003(B)' },
  { label: 'Zarządzanie', value: 'Zebra Print DNA · Link-OS · Printer Profile Manager · SOTI MobiControl · AirWatch' },
]

export default function Specyfikacja() {
  return (
    <section id="specyfikacja" className="py-8 lg:py-16 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-6 lg:mb-12">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
            Pełna specyfikacja techniczna
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="mt-4 text-base sm:text-lg text-slate-600">
            Zebra ZT411 — dane techniczne z karty katalogowej producenta (Zebra Technologies, 2026).
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              {specs.map((s, i) => (
                <div key={s.label} className={`flex flex-col sm:flex-row ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'} ${i < specs.length - 1 ? 'border-b border-slate-100' : ''}`}>
                  <div className="w-full sm:w-[40%] py-2 sm:py-3 px-3 sm:px-4 text-xs sm:text-sm font-medium text-slate-500 sm:text-slate-600">{s.label}</div>
                  <div className="w-full sm:w-[60%] pb-2 sm:py-3 px-3 sm:px-4 text-sm text-slate-900">{s.value}</div>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
