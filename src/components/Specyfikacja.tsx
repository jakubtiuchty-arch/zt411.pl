'use client'

import { motion } from 'framer-motion'

const specs = [
  { label: 'System operacyjny', value: 'Android (aktualizacja do Android 16)' },
  { label: 'Procesor', value: 'Qualcomm 5430 hex-core, 2,1 GHz' },
  { label: 'Wyświetlacz', value: '6,0" FHD+ (1080×2160), 450 nit, Gorilla Glass' },
  { label: 'Pamięć RAM / Flash', value: '6 GB / 64 GB lub 8 GB / 128 GB + microSD do 2 TB' },
  { label: 'Skaner', value: 'SE4710 (standard, do 35 cm) lub SE55 (advanced, 10 cm–7,6 m)' },
  { label: 'Kamera', value: '16 MP (tył, autofocus, LED) + 5 MP (przód)' },
  { label: 'Bateria', value: '3 800 mAh / 5 200 mAh, wymienna hot-swap, PowerPrecision' },
  { label: 'Wi-Fi', value: 'Wi-Fi 6/6E (802.11ax), 2×2 MU-MIMO, 2,4/5/6 GHz, do 2,4 Gbps' },
  { label: 'Bluetooth', value: 'Bluetooth 5.2' },
  { label: 'NFC', value: 'ISO 14443 A/B, Mifare, FeliCa, Apple VAS, Google SmartTap' },
  { label: 'USB', value: 'USB 3.1 Type-C SuperSpeed (data + charging)' },
  { label: 'IP / odporność', value: 'IP68 + IP65, MIL-STD-810H, tumble 500×0,5 m' },
  { label: 'Upadki', value: '1,5 m na beton (z etui ochronnym)' },
  { label: 'Temperatura pracy', value: '-10°C do +50°C' },
  { label: 'Temperatura składowania', value: '-40°C do +70°C' },
  { label: 'Wymiary', value: '165 × 76,3 × 12,5 mm' },
  { label: 'Waga', value: '236 g (z baterią standardową 3 800 mAh)' },
  { label: 'RFID UHF', value: 'Opcja: Zebra RFD40 Sled (przez eConnex lub BT)' },
  { label: 'Mobility DNA', value: 'DataWedge, StageNow, Device Tracker, LifeGuard' },
  { label: 'MDM', value: 'SOTI, VMware, Microsoft Intune, Zebra DNA Cloud' },
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
            Zebra TC22 — dane techniczne z datasheet producenta (Zebra Technologies, 2024).
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
