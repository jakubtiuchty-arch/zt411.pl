'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle, X, Clock } from 'lucide-react'
import { getPrices, formatPrice } from '@/data/prices'

const prices = getPrices()
const warianty = prices.variants.map(v => ({
  pn: v.pn,
  label: `${v.pn} — ${v.name} — ${formatPrice(v.price)} zł`,
}))

export default function Kontakt() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [selectedVariant, setSelectedVariant] = useState('')
  const [quantity, setQuantity] = useState('1')
  const [addedAccessories, setAddedAccessories] = useState<string[]>([])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const pnFromUrl = params.get('pn')
    if (pnFromUrl && prices.variants.some(v => v.pn === pnFromUrl)) {
      setSelectedVariant(pnFromUrl)
      setTimeout(() => {
        document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }

    function handleVariantSelect(e: CustomEvent<string>) {
      setSelectedVariant(e.detail)
    }
    function handleAccessoryAdd(e: CustomEvent<string>) {
      setAddedAccessories(prev => prev.includes(e.detail) ? prev : [...prev, e.detail])
    }
    window.addEventListener('selectVariant', handleVariantSelect as EventListener)
    window.addEventListener('addAccessory', handleAccessoryAdd as EventListener)
    return () => {
      window.removeEventListener('selectVariant', handleVariantSelect as EventListener)
      window.removeEventListener('addAccessory', handleAccessoryAdd as EventListener)
    }
  }, [])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          company: data.get('company'),
          nip: data.get('nip'),
          phone: data.get('phone'),
          variant: data.get('variant'),
          quantity: data.get('quantity'),
          accessories: addedAccessories,
          message: data.get('message'),
          source: 'zt411.pl',
        }),
      })
      if (!res.ok) throw new Error('send failed')
      setSent(true)
    } catch {
      setSent(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="kontakt" className="py-8 lg:py-16 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
            Zapytaj o ofertę na Zebra ZT411
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Odpowiadamy w ciągu 2 godzin w dni robocze. Podpowiemy konfigurację i policzymy rabat ilościowy.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 space-y-4 shadow-sm">
                {/* Wariant + ilość */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="md:col-span-2">
                    <label htmlFor="variant" className="block text-sm font-medium text-slate-700 mb-1">Wariant ZT411</label>
                    <select
                      id="variant"
                      name="variant"
                      value={selectedVariant}
                      onChange={e => setSelectedVariant(e.target.value)}
                      className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none bg-white"
                    >
                      <option value="">— wybierz wariant —</option>
                      {warianty.map(v => (
                        <option key={v.pn} value={v.pn}>{v.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-slate-700 mb-1">Ilość (szt.)</label>
                    <input type="number" id="quantity" name="quantity" min={1} value={quantity} onChange={e => setQuantity(e.target.value)} className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none" />
                  </div>
                </div>

                {/* Dodane akcesoria */}
                {addedAccessories.length > 0 && (
                  <div className="bg-brand-50 border border-brand-200 rounded-lg p-3">
                    <p className="text-xs font-semibold text-slate-700 mb-2">Dodane akcesoria:</p>
                    <div className="flex flex-wrap gap-2">
                      {addedAccessories.map(pn => (
                        <span key={pn} className="inline-flex items-center gap-1 px-2 py-1 bg-white border border-slate-200 rounded text-xs font-mono text-slate-700">
                          {pn}
                          <button type="button" onClick={() => setAddedAccessories(prev => prev.filter(a => a !== pn))} className="text-slate-400 hover:text-red-500 ml-1">&times;</button>
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Dane kontaktowe */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Imię i nazwisko *</label>
                    <input type="text" id="name" name="name" required className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Telefon *</label>
                    <input type="tel" id="phone" name="phone" required className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">E-mail *</label>
                    <input type="email" id="email" name="email" required className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">Firma</label>
                    <input type="text" id="company" name="company" className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none" />
                  </div>
                </div>

                <div>
                  <label htmlFor="nip" className="block text-sm font-medium text-slate-700 mb-1">NIP (do faktury)</label>
                  <input type="text" id="nip" name="nip" placeholder="np. 782-21-63-526" className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Uwagi / pytania</label>
                  <textarea id="message" name="message" rows={3} placeholder="Np. Potrzebuję wycenę z obcinakiem i 10 rolkami taśmy Wax..." className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none resize-none" />
                </div>

                <button type="submit" disabled={loading} className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-brand-500 text-slate-900 font-bold rounded-lg hover:bg-brand-400 transition-colors disabled:opacity-60">
                  <Send size={16} />
                  {loading ? 'Wysyłanie...' : 'Wyślij zapytanie'}
                </button>
                <p className="text-xs text-slate-400 text-center">Wysyłając formularz wyrażasz zgodę na kontakt w sprawie oferty. Dane przetwarzamy zgodnie z RODO.</p>
            </form>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {sent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setSent(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              onClick={e => e.stopPropagation()}
              className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 text-center"
            >
              <button
                type="button"
                onClick={() => setSent(false)}
                aria-label="Zamknij"
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="mx-auto mb-5 w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center shadow-lg shadow-emerald-200">
                <CheckCircle className="w-9 h-9 text-white" strokeWidth={2.5} />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3">Dziękujemy za zapytanie!</h3>
              <p className="text-slate-600 leading-relaxed mb-5">
                Przygotowujemy dla Ciebie ofertę i wrócimy z odpowiedzią <strong className="text-slate-900">w ciągu maksymalnie 2 godzin</strong> w dni robocze (pon–pt, 7:30–15:30).
              </p>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-500 bg-slate-50 rounded-full px-4 py-2 mb-5 w-fit mx-auto">
                <Clock size={14} className="text-brand-700" />
                <span>Średni czas odpowiedzi: ~45 min</span>
              </div>

              <button
                type="button"
                onClick={() => setSent(false)}
                className="inline-flex items-center justify-center px-6 py-2.5 bg-brand-500 text-slate-900 font-bold rounded-full hover:bg-brand-400 transition-colors"
              >
                Zamknij
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
