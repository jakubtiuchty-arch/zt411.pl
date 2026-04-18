'use client'

import { useState, useMemo } from 'react'
import { Search, Copy, Check, X, SlidersHorizontal } from 'lucide-react'
import ribbonsData from '@/data/ribbons.json'

type Ribbon = {
  pn: string
  type: string
  category: string
  widthMm: number
  lengthM: number
  desc: string
}

const ribbons = ribbonsData as Ribbon[]

// Nicer display names for types
const typeNames: Record<string, string> = {
  '1600Wax': 'Wosk 1600 Economy',
  '2100Wax': 'Wosk 2100 Performance',
  '2300Wax': 'Wosk 2300 Standard',
  '5319Wax': 'Wosk 5319 Performance',
  '3200WaxResin': 'Wosk-Żywica 3200',
  '3400WaxResin': 'Wosk-Żywica 3400',
  '4800Resin': 'Żywica 4800',
  '5095Resin': 'Żywica 5095',
  '5100Resin': 'Żywica 5100 Premium',
  'ChemResist': 'Żywica ChemResist 8000',
}

const categoryNames: Record<string, string> = {
  'Wax': 'Wosk',
  'Wax/Resin': 'Wosk-Żywica',
  'Resin': 'Żywica',
}

const CAT_ORDER: Record<string, number> = { 'Wax': 0, 'Wax/Resin': 1, 'Resin': 2 }

const uniqueValues = <K extends keyof Ribbon>(key: K): Ribbon[K][] => {
  return Array.from(new Set(ribbons.map(r => r[key]))).sort((a, b) => {
    if (typeof a === 'number' && typeof b === 'number') return a - b
    return String(a).localeCompare(String(b))
  })
}

export default function RibbonsTable() {
  const [query, setQuery] = useState('')
  const [catFilter, setCatFilter] = useState<string>('all')
  const [typeFilter, setTypeFilter] = useState<string>('all')
  const [widthFilter, setWidthFilter] = useState<number | 'all'>('all')
  const [lengthFilter, setLengthFilter] = useState<number | 'all'>('all')
  const [copied, setCopied] = useState<string | null>(null)

  const categories = (uniqueValues('category') as string[]).sort((a, b) => (CAT_ORDER[a] ?? 9) - (CAT_ORDER[b] ?? 9))
  const types = uniqueValues('type') as string[]
  const widths = uniqueValues('widthMm') as number[]
  const lengths = uniqueValues('lengthM') as number[]

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return ribbons.filter(r => {
      if (catFilter !== 'all' && r.category !== catFilter) return false
      if (typeFilter !== 'all' && r.type !== typeFilter) return false
      if (widthFilter !== 'all' && r.widthMm !== widthFilter) return false
      if (lengthFilter !== 'all' && r.lengthM !== lengthFilter) return false
      if (q && !r.pn.toLowerCase().includes(q) && !r.desc.toLowerCase().includes(q) && !(typeNames[r.type] || '').toLowerCase().includes(q)) return false
      return true
    })
  }, [query, catFilter, typeFilter, widthFilter, lengthFilter])

  function copyPn(pn: string) {
    navigator.clipboard.writeText(pn)
    setCopied(pn)
    setTimeout(() => setCopied(null), 1500)
  }

  function resetFilters() {
    setQuery('')
    setCatFilter('all')
    setTypeFilter('all')
    setWidthFilter('all')
    setLengthFilter('all')
  }

  const activeFilters = [
    catFilter !== 'all',
    typeFilter !== 'all',
    widthFilter !== 'all',
    lengthFilter !== 'all',
    query.trim().length > 0,
  ].filter(Boolean).length

  return (
    <div className="space-y-5">
      {/* Search + reset */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Szukaj PN lub opisu (np. 110, Wax 1600, 450m)..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none bg-white"
          />
        </div>
        {activeFilters > 0 && (
          <button
            onClick={resetFilters}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-slate-700 transition-colors whitespace-nowrap"
          >
            <X size={14} /> Wyczyść ({activeFilters})
          </button>
        )}
      </div>

      {/* Filter dropdowns */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <div>
          <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">Kategoria</label>
          <select
            value={catFilter}
            onChange={e => setCatFilter(e.target.value)}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none bg-white"
          >
            <option value="all">Wszystkie ({ribbons.length})</option>
            {categories.map(c => {
              const count = ribbons.filter(r => r.category === c).length
              return <option key={c} value={c}>{categoryNames[c] || c} ({count})</option>
            })}
          </select>
        </div>

        <div>
          <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">Typ taśmy</label>
          <select
            value={typeFilter}
            onChange={e => setTypeFilter(e.target.value)}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none bg-white"
          >
            <option value="all">Wszystkie</option>
            {types.map(t => {
              const count = ribbons.filter(r => r.type === t).length
              return <option key={t} value={t}>{typeNames[t] || t} ({count})</option>
            })}
          </select>
        </div>

        <div>
          <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">Szerokość</label>
          <select
            value={widthFilter}
            onChange={e => setWidthFilter(e.target.value === 'all' ? 'all' : Number(e.target.value))}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none bg-white"
          >
            <option value="all">Wszystkie</option>
            {widths.map(w => (
              <option key={w} value={w}>{w} mm</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">Długość</label>
          <select
            value={lengthFilter}
            onChange={e => setLengthFilter(e.target.value === 'all' ? 'all' : Number(e.target.value))}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none bg-white"
          >
            <option value="all">Wszystkie</option>
            {lengths.map(l => (
              <option key={l} value={l}>{l} m</option>
            ))}
          </select>
        </div>
      </div>

      {/* Results counter */}
      <div className="flex items-center gap-2 text-sm text-slate-600">
        <SlidersHorizontal size={14} className="text-slate-400" />
        Znaleziono <strong className="text-slate-900">{filtered.length}</strong> z <strong className="text-slate-900">{ribbons.length}</strong> taśm
      </div>

      {/* Results table */}
      {filtered.length === 0 ? (
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 text-center">
          <p className="text-sm text-slate-500">Brak wyników. <button onClick={resetFilters} className="text-brand-700 font-semibold underline">Wyczyść filtry</button></p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-sm border-collapse min-w-[640px]">
            <thead>
              <tr className="bg-slate-50">
                <th className="text-left py-3 px-4 font-semibold text-slate-600 border-b border-slate-200">Part Number</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-600 border-b border-slate-200">Typ</th>
                <th className="py-3 px-4 text-center font-semibold text-slate-600 border-b border-slate-200">Szerokość</th>
                <th className="py-3 px-4 text-center font-semibold text-slate-600 border-b border-slate-200">Długość</th>
                <th className="py-3 px-4 text-center font-semibold text-slate-600 border-b border-slate-200">Akcja</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((r, i) => (
                <tr key={r.pn} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                  <td className="py-2.5 px-4 border-b border-slate-100">
                    <div className="font-mono font-semibold text-slate-900">{r.pn}</div>
                  </td>
                  <td className="py-2.5 px-4 border-b border-slate-100 text-slate-700">
                    {typeNames[r.type] || r.type}
                  </td>
                  <td className="py-2.5 px-4 text-center border-b border-slate-100 text-slate-700 whitespace-nowrap">
                    {r.widthMm} mm
                  </td>
                  <td className="py-2.5 px-4 text-center border-b border-slate-100 text-slate-700 whitespace-nowrap">
                    {r.lengthM} m
                  </td>
                  <td className="py-2.5 px-4 text-center border-b border-slate-100 whitespace-nowrap">
                    <button
                      onClick={() => copyPn(r.pn)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-slate-100 hover:bg-brand-500 hover:text-slate-900 text-slate-700 rounded-full text-xs font-semibold transition-colors"
                      title="Kopiuj Part Number do schowka"
                    >
                      {copied === r.pn ? (
                        <><Check size={12} /> Skopiowano</>
                      ) : (
                        <><Copy size={12} /> Kopiuj PN</>
                      )}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
