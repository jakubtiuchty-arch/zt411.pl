'use client'

import { Factory, Truck, ShoppingCart, HeartPulse, FlaskConical, Tag } from 'lucide-react'

const sectors = [
  { icon: Factory, title: 'Produkcja' },
  { icon: Truck, title: 'Transport i logistyka' },
  { icon: ShoppingCart, title: 'Handel detaliczny' },
  { icon: HeartPulse, title: 'Ochrona zdrowia' },
  { icon: FlaskConical, title: 'Laboratoria' },
  { icon: Tag, title: 'Znakowanie zgodności' },
]

export default function DlaKogo() {
  return (
    <section id="dla-kogo" className="relative py-6 lg:py-8 bg-white border-b border-slate-200 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-nowrap justify-start lg:justify-center gap-2 lg:gap-2.5 overflow-x-auto scrollbar-hide -mx-4 sm:-mx-6 lg:mx-0 px-4 sm:px-6 lg:px-0">
          {sectors.map((s) => (
            <span key={s.title} className="inline-flex items-center gap-1.5 lg:gap-2 px-3 lg:px-4 py-1.5 lg:py-2 bg-slate-900 text-white text-xs lg:text-sm font-semibold rounded-full border border-slate-900 shadow-sm whitespace-nowrap flex-shrink-0">
              <s.icon size={14} className="text-brand-500 flex-shrink-0" />
              {s.title}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
