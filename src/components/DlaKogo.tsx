'use client'

import { ShoppingCart, Warehouse, Pill, Wrench, Package, Hotel } from 'lucide-react'

const sectors = [
  { icon: ShoppingCart, title: 'Retail' },
  { icon: Warehouse, title: 'Magazyn i logistyka' },
  { icon: Pill, title: 'Apteka i przychodnia' },
  { icon: Wrench, title: 'Serwis i produkcja' },
  { icon: Package, title: 'E-commerce' },
  { icon: Hotel, title: 'HoReCa' },
]

export default function DlaKogo() {
  return (
    <section id="dla-kogo" className="relative py-6 lg:py-8 bg-white border-b border-slate-200 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {sectors.map((s) => (
            <span key={s.title} className="inline-flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 bg-slate-900 text-white text-sm sm:text-base font-semibold rounded-full border border-slate-900 shadow-sm">
              <s.icon size={16} className="text-brand-500" />
              {s.title}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
