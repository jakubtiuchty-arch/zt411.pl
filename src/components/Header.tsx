'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const navLinks = [
  { href: '#warianty', label: 'Warianty' },
  { href: '#akcesoria', label: 'Akcesoria' },
  { href: '#serwis', label: 'Serwis' },
  { href: '#faq', label: 'FAQ' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-brand-700 text-white text-xs md:text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center gap-4">
            <a href="mailto:takma@takma.com.pl" className="hover:text-brand-200 underline transition-colors">
              takma@takma.com.pl
            </a>
            <a href="tel:+48601828711" className="hover:text-brand-200 underline transition-colors">
              601 828 711
            </a>
        </div>
      </div>

      {/* Main Nav */}
      <div className={`bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm transition-all duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-1.5">
            <a href="#" className="flex items-center gap-2">
              <Image src="/images/takma_logo.png" alt="TAKMA — Centrum Systemów Mobilnych" width={120} height={36} className="h-16 w-auto" />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map(l => (
                <a key={l.href} href={l.href} className="text-slate-700 hover:text-slate-900 transition-colors text-sm font-medium">{l.label}</a>
              ))}
              <a href="#kontakt" className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-brand-500 text-slate-900 hover:bg-brand-400 text-sm font-bold transition-colors">
                Zapytaj o ofertę
              </a>
            </nav>

            {/* Mobile */}
            <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-slate-300 text-slate-700" aria-label="Menu">
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden border-t border-slate-200 bg-white overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 grid gap-3">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-slate-700 font-medium block">{l.label}</a>
          ))}
          <a href="#kontakt" onClick={() => setOpen(false)} className="inline-flex justify-center px-4 py-2 rounded-md bg-brand-500 text-slate-900 hover:bg-brand-400 font-bold transition-colors">
            Zapytaj o ofertę
          </a>
        </div>
      </div>
    </header>
  )
}
