'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Plus, Check } from 'lucide-react'
import { useState } from 'react'

const accessories = [
  { pn: 'BTRY-TC2L-2XMAXX-01', name: 'Akumulator 3800 mAh', desc: 'Bateria standardowa hot-swap, ~10 h pracy', price: 270, image: '/images/BTRY-TC2L-2XMAXX-01.png', available: true },
  { pn: 'BTRY-TC2L-3XMAXX-01', name: 'Akumulator 5200 mAh', desc: 'Bateria rozszerzona hot-swap, ~14 h pracy', price: 401, image: '/images/BTRY-TC2L-3XMAXX-01.png', available: false },
  { pn: 'SG-TC2L-BOOT-01', name: 'Etui ochronne (boot)', desc: 'Gumowy bumper, upadki do 1,8 m', price: 175, image: '/images/SG-TC2L-BOOT-01.png', available: true },
  { pn: 'TRG-TC2L-SNP1-01', name: 'Trigger handle', desc: 'Rękojeść pistoletowa do skanowania', price: 818, image: '/images/TRG-TC2L-SNP1-01.png', available: true },
]

function AccessoryCard({ acc }: { acc: typeof accessories[0] }) {
  const [added, setAdded] = useState(false)

  function handleAdd() {
    setAdded(true)
    window.dispatchEvent(new CustomEvent('addAccessory', { detail: acc.pn }))
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-4 flex flex-col shadow-sm hover:shadow-md transition-shadow">
      <div className="bg-white rounded-xl p-4 mb-3 flex items-center justify-center h-40">
        <Image src={acc.image} alt={acc.name} width={160} height={160} className="object-contain h-32 w-auto" />
      </div>

      <p className="text-xs text-slate-400 uppercase tracking-wider font-medium">Zebra</p>
      <h3 className="font-bold text-slate-900 text-sm mb-1">{acc.name}</h3>

      {acc.available ? (
        <span className="text-xs text-emerald-600 font-medium border border-emerald-200 bg-emerald-50 rounded-full px-2 py-0.5 w-fit mb-3">Dostępny</span>
      ) : (
        <span className="text-xs text-amber-600 font-medium border border-amber-200 bg-amber-50 rounded-full px-2 py-0.5 w-fit mb-3">Na zamówienie</span>
      )}

      <div className="mt-auto">
        <div className="flex gap-2">
          <button
            onClick={handleAdd}
            disabled={added}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-sm font-bold transition-all ${
              added
                ? 'bg-emerald-100 text-emerald-700 cursor-default'
                : 'bg-brand-500 text-slate-900 hover:bg-brand-400 hover:-translate-y-0.5'
            }`}
          >
            {added ? <><Check size={16} /> Dodano</> : <><Plus size={16} /> Dodaj do zapytania</>}
          </button>
        </div>

        <p className="text-[10px] text-slate-400 font-mono mt-2 text-center">{acc.pn}</p>
      </div>
    </div>
  )
}

export default function Akcesoria() {
  return (
    <section id="akcesoria" className="py-8 lg:py-16 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-6 lg:mb-12">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
            Akcesoria do Zebra TC22
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {accessories.map((acc, i) => (
            <motion.div key={acc.pn} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}>
              <AccessoryCard acc={acc} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
