'use client'

import { useState } from 'react'
import { Check, X, ChevronDown } from 'lucide-react'
import { getPrices } from '@/data/prices'

const _low = Math.round(Math.min(...getPrices().variants.map(v => v.price)))
const _fmt = (n: number) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

const models = [
  { name: 'Zebra TC22', link: '#warianty', highlight: true, specs: { 'Cena od': `od ${_fmt(_low)} zł`, 'Skaner': 'SE4710 / SE55 (7,6 m)', 'Ekran': '6" FHD+ (1080×2160)', 'Procesor': 'Qualcomm 5430, 2.1 GHz', 'RAM / Flash': '6/64 lub 8/128 GB', 'Bateria': '3 800 / 5 200 mAh', 'Hot-swap': true, 'IP': 'IP68/IP65', 'Upadki': '1,5 m na beton', 'Wi-Fi': 'Wi-Fi 6/6E', 'Android': 'Do v16', 'Waga': '236 g', 'Mobility DNA': true } },
  { name: 'Datalogic Memor 12', link: 'https://www.takma.com.pl/produkt/datalogic-memor-12', highlight: false, specs: { 'Cena od': '2 687 zł', 'Skaner': 'Halogen 2D + Green Spot', 'Ekran': '6" FHD+ (1080×2160)', 'Procesor': 'QCx4490, 2.4 GHz', 'RAM / Flash': '6/64 GB', 'Bateria': '4 000 mAh', 'Hot-swap': true, 'IP': 'IP65/IP67', 'Upadki': '1,3 m (1,5 m z boot)', 'Wi-Fi': 'Wi-Fi 6/6E', 'Android': 'Do v18', 'Waga': '245 g', 'Mobility DNA': false } },
  { name: 'M3 SM24', link: 'https://www.takma.com.pl/produkt/m3-sm24', highlight: false, specs: { 'Cena od': '3 123 zł', 'Skaner': 'CM60E 2D', 'Ekran': '6" HD+ (720×1440)', 'Procesor': 'SM6225, 2.4 GHz', 'RAM / Flash': '8/128 GB', 'Bateria': '4 000 / 6 000 mAh', 'Hot-swap': true, 'IP': 'IP67', 'Upadki': '1,5 m (1,8 m z boot)', 'Wi-Fi': 'Wi-Fi 6E', 'Android': 'Do v18', 'Waga': '240 g', 'Mobility DNA': false } },
  { name: 'Honeywell CT32', link: 'https://www.takma.com.pl/produkt/honeywell-ct32', highlight: false, specs: { 'Cena od': '3 389 zł', 'Skaner': 'FlexRange (do 11 m)', 'Ekran': '6" FHD (1080×2160)', 'Procesor': 'QCS4490, 2.4 GHz', 'RAM / Flash': '6/128 lub 8/128 GB', 'Bateria': '4 500 mAh', 'Hot-swap': true, 'IP': 'IP65/IP68', 'Upadki': '1,8 m (z boot)', 'Wi-Fi': 'Wi-Fi 6E', 'Android': 'Do v18', 'Waga': '269 g', 'Mobility DNA': false } },
]

const rows = ['Cena od', 'Skaner', 'Ekran', 'RAM / Flash', 'Bateria', 'Hot-swap', 'IP', 'Upadki', 'Android', 'Waga', 'Mobility DNA'] as const

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
