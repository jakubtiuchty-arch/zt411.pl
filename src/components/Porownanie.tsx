'use client'

import { useState } from 'react'
import { Check, X, ChevronDown } from 'lucide-react'
import { getPrices } from '@/data/prices'

const _low = Math.round(Math.min(...getPrices().variants.map(v => v.price)))
const _fmt = (n: number) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

const models = [
  { name: 'Zebra ZT411', link: '#warianty', highlight: true, specs: { 'Cena od': `od ${_fmt(_low)} zł`, 'Szerokość druku': '4" (104 mm)', 'Rozdzielczość': '203 / 300 / 600 dpi', 'Szybkość druku': '356 mm/s', 'Ekran': 'Dotykowy 4,3" kolor', 'Wi-Fi': 'Wi-Fi 6/6E (opcja)', 'Bluetooth': 'BT 5.3 (opcja)', 'RFID UHF': true, 'Bezpodkładowy': true, 'Języki': 'ZPL, ZPL II, EPL, ZBI', 'Pamięć': '256 MB / 512 MB', 'ENERGY STAR': true, 'Waga': '16,33 kg' } },
  { name: 'Zebra ZT231', link: 'https://takma.com.pl/produkt/zebra-zt231', highlight: false, specs: { 'Cena od': 'od 4 290 zł', 'Szerokość druku': '4" (104 mm)', 'Rozdzielczość': '203 / 300 dpi', 'Szybkość druku': '305 mm/s', 'Ekran': 'Kolor 4,3" (opcja)', 'Wi-Fi': 'Wi-Fi 5 (opcja)', 'Bluetooth': 'BT 4.2', 'RFID UHF': false, 'Bezpodkładowy': false, 'Języki': 'ZPL, ZPL II, EPL', 'Pamięć': '256 MB / 512 MB', 'ENERGY STAR': false, 'Waga': '14,5 kg' } },
  { name: 'Honeywell PM45', link: 'https://takma.com.pl/produkt/honeywell-pm45', highlight: false, specs: { 'Cena od': 'od 7 200 zł', 'Szerokość druku': '4" (108 mm)', 'Rozdzielczość': '203 / 300 / 406 dpi', 'Szybkość druku': '300 mm/s', 'Ekran': 'Kolor 3,5"', 'Wi-Fi': 'Wi-Fi 5', 'Bluetooth': 'BT 5.0', 'RFID UHF': true, 'Bezpodkładowy': false, 'Języki': 'Fingerprint, ZSim2, DPL', 'Pamięć': '512 MB / 512 MB', 'ENERGY STAR': false, 'Waga': '15,9 kg' } },
  { name: 'SATO CL4NX Plus', link: 'https://takma.com.pl/produkt/sato-cl4nx', highlight: false, specs: { 'Cena od': 'od 8 990 zł', 'Szerokość druku': '4" (104 mm)', 'Rozdzielczość': '203 / 305 / 609 dpi', 'Szybkość druku': '356 mm/s', 'Ekran': 'Kolor 3,5"', 'Wi-Fi': 'Wi-Fi 5 (opcja)', 'Bluetooth': 'BT 4.0', 'RFID UHF': true, 'Bezpodkładowy': false, 'Języki': 'SBPL, SZPL, SDPL', 'Pamięć': '512 MB / 512 MB', 'ENERGY STAR': false, 'Waga': '15,0 kg' } },
]

const rows = ['Cena od', 'Szerokość druku', 'Rozdzielczość', 'Szybkość druku', 'Ekran', 'Wi-Fi', 'Bluetooth', 'RFID UHF', 'Bezpodkładowy', 'Języki', 'ENERGY STAR', 'Waga'] as const

function CellValue({ val }: { val: string | boolean }) {
  if (val === true) return <Check size={14} className="text-emerald-500 mx-auto" />
  if (val === false) return <X size={14} className="text-slate-300 mx-auto" />
  return <span>{val as string}</span>
}

export default function Porownanie() {
  const [open, setOpen] = useState(false)

  return (
    <section id="porownanie" className="py-8 lg:py-12 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between group">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Porównanie z konkurencją
          </h2>
          <span className="flex items-center gap-1 text-sm font-semibold text-slate-900 bg-brand-500 px-4 py-1.5 rounded-full group-hover:bg-brand-400 transition-colors">
            {open ? 'Ukryj' : 'Pokaż tabelę'}
            <ChevronDown size={18} className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
          </span>
        </button>

        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? 'max-h-[800px] opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'}`}>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-xs sm:text-sm border-collapse min-w-[600px]">
              <thead>
                <tr>
                  <th className="text-left py-2.5 px-3 bg-slate-50 text-slate-500 font-medium" />
                  {models.map(m => (
                    <th key={m.name} className={`py-2.5 px-3 text-center font-semibold ${m.highlight ? 'bg-brand-500 text-slate-900' : 'bg-slate-50 text-slate-700'}`}>
                      <a href={m.link} target={m.link.startsWith('http') ? '_blank' : undefined} rel={m.link.startsWith('http') ? 'noopener' : undefined} className="hover:underline">
                        {m.name}
                      </a>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, ri) => (
                  <tr key={row} className={ri % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                    <td className="py-2 px-3 text-slate-600 font-medium border-b border-slate-100">{row}</td>
                    {models.map(m => (
                      <td key={m.name + row} className={`py-2 px-3 text-center border-b border-slate-100 ${m.highlight ? 'bg-brand-50/50 font-medium text-slate-900' : 'text-slate-700'}`}>
                        <CellValue val={m.specs[row as keyof typeof m.specs]} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
