'use client'

import { motion } from 'framer-motion'
import { Wifi, ScanBarcode, Shield, BatteryCharging } from 'lucide-react'

const features = [
  { id: '01', icon: Wifi, title: 'Wi-Fi 6E', stat: '2,4 Gbps', desc: 'Tri-band 2,4/5/6 GHz, 2×2 MU-MIMO. Stabilne połączenie w gęstych sieciach z 50+ urządzeniami.' },
  { id: '02', icon: ScanBarcode, title: 'Skaner SE55', stat: 'do 7,6 m', desc: 'Advanced Range z zieloną kropką. Skanuje kody na regałach do 7,6 m bez drabiny.' },
  { id: '03', icon: Shield, title: 'IP68 + MIL-STD', stat: '1,5 m drop', desc: 'Pyłoszczelny, zanurzenie 1 m/30 min. Upadki z 1,5 m na beton. -10°C do +50°C.' },
  { id: '04', icon: BatteryCharging, title: 'Hot-swap bateria', stat: '5 s wymiany', desc: 'Wymiana bez wyłączania. 3 800 mAh (~10 h) lub 5 200 mAh (~14 h).' },
]

export default function Przewagi() {
  return (
    <section id="przewagi" className="py-8 lg:py-16 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-6 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Kluczowe parametry Zebra TC22
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="relative group text-center"
            >
              {/* Icon in circle */}
              <div className="relative inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-brand-500/30 mb-5 group-hover:border-brand-500 transition-all duration-300">
                <div className="w-11 h-11 sm:w-14 sm:h-14 bg-brand-500/10 rounded-full flex items-center justify-center group-hover:bg-brand-500/20 transition-colors">
                  <f.icon size={24} className="text-brand-500" />
                </div>
                {/* Number badge */}
                <div className="absolute -top-1 -right-1 w-6 h-6 sm:w-7 sm:h-7 bg-brand-500 rounded-full flex items-center justify-center text-slate-900 font-bold text-xs shadow-md">
                  {f.id}
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-1">{f.title}</h3>
              <span className="text-sm font-bold text-brand-500 block mb-2">{f.stat}</span>
              <p className="text-slate-400 leading-relaxed text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
