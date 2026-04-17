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
