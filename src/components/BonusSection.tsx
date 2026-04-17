'use client'

import { Gift } from 'lucide-react'

export default function BonusSection() {
  return (
    <section className="relative bg-[#0A1A2F] border-y border-[#142640] py-5 lg:py-6 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-500 rounded-full shrink-0">
            <Gift className="w-6 h-6 text-slate-900" />
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-bold text-white leading-tight">
              Do każdego TC22 <span className="text-brand-500">GRATIS:</span> szkło ochronne na ekran + ładowarka USB-C
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}
