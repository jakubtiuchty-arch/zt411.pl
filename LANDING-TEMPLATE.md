# tc22.pl — Landing Page Template

Ten projekt służy jako **wzorzec** dla kolejnych landing page produktów (Zebra ZT411, MC9400, drukarki, skanery Datalogic, itp.). Jeden schemat = szybki launch.

## Stack

- Next.js 14 App Router + TypeScript + React 18
- Tailwind CSS 3.4 (brand green `#A8F000`)
- framer-motion (animacje scroll)
- lucide-react (ikony)
- resend (formularz → mail)
- Vercel (hosting + cron jobs)

## Struktura one-pagera

```
<Header />            sticky: top bar (email/tel) + nav
<Hero />              bg image + "od X zł netto" + 3 bullety + CTA
<DlaKogo />           6 sector badges (białe tło, ciemne pigułki)
<Przewagi />          4 key features (dark slate-900)
<Porownanie />        accordion — tabela vs konkurencja
<Warianty />          4 kart cenowych, interaktywne hover
<BonusSection />      gratis banner (navy #0A1A2F)
<Akcesoria />         4 karty akcesoriów
<Specyfikacja />      pełna tabela parametrów
<Serwis />            3 certyfikaty Zebra + info o serwisie TAKMA
<Kontakt />           formularz + Resend + modal success
<FAQ />               accordion — 14 Q&A na dole
<Footer />            4 kolumny linków + TAKMA watermark
```

## Design system

### Kolory

- `brand-500` = `#A8F000` (zielony Zebra) — primary CTA/accent
- `#0A1A2F` — navy dark (header emaila, BonusSection)
- `slate-*` — Tailwind default neutralne
- Alternating bg sekcji: white → slate-50 → slate-900 → white

### Typografia

- Font: Inter (Google, subset latin+latin-ext)
- H1: `text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight`
- H2: `text-2xl sm:text-3xl lg:text-4xl font-bold`
- Body: `text-sm lg:text-base text-slate-600`
- Part numbers: `font-mono`

### Spacing

- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Sekcja: `py-8 lg:py-16`
- Separator: `border-y border-slate-200`
- Card: `bg-white shadow-sm border border-slate-200 rounded-2xl`

### Animacje (każda sekcja)

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: i * 0.1 }}
/>
```

## Data layer — ceny dynamiczne

**Jedno źródło prawdy:** `src/data/prices.json` synchronizowany codziennie z API Ingram o 6:00.

```ts
import { getPrices } from '@/data/prices'
const prices = getPrices()
const low = Math.round(Math.min(...prices.variants.map(v => v.price)))
```

Używane w:
- `layout.tsx` → metadata + Product schema
- `Hero.tsx` → "od X zł"
- `FAQ.tsx` → ceny w odpowiedziach
- `Porownanie.tsx` → tabela
- `Warianty.tsx` → karty cenowe
- `Kontakt.tsx` → dropdown wariantów
- `sitemap.ts` → lastmod

**Cron (vercel.json):**
```json
{ "crons": [{ "path": "/api/cron/sync-prices", "schedule": "0 6 * * *" }] }
```

## SEO/AEO/GEO

### Meta (layout.tsx)

- Title **≤60 znaków**
- Description **≤155 znaków**
- OG image 1200×630 (lub większy z dobrym ratio)
- Canonical + metadataBase na finalną domenę

### JSON-LD (5 typów w layout.tsx)

1. **Organization + LocalBusiness** — TAKMA z adresem i telefonem
2. **Product + AggregateOffer** — 7 Offers dynamic z prices.variants
3. **FAQPage** — **MUSI BYĆ 1:1 z widocznym FAQ.tsx** (inaczej spam)
4. **WebPage** — z dateModified (z prices.lastSync) + author → Organization
5. **BreadcrumbList** — 3 poziomy: TAKMA → Terminale → Produkt

### Pliki

- `robots.txt` — 18 AI crawlerów (GPTBot, ClaudeBot, PerplexityBot, Applebot-Extended, Amazonbot, Bytespider, CCBot, Google-Extended, ...)
- `llms.txt` — streszczenie dla LLM (tabela cenowa, parametry, kontakt)
- `llms-full.txt` — pełny content strony (~350 linii)
- `src/app/sitemap.ts` — dynamiczny, lastmod z prices.lastSync

### Co NIE robić

- ❌ Fake opinie / AggregateRating bez realnych danych
- ❌ FAQ schema ≠ widoczny FAQ (spam penalty)
- ❌ Hardkodowane ceny w komponentach
- ❌ Manualne `<link rel="icon">` + `src/app/favicon.ico` (konflikt)

## Resend (formularz)

### `/api/contact/route.ts`

- Env: `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`
- HTML email: navy gradient header + brand-500 "NEW" badge + CTA "Zadzwoń/Odpowiedz"

### Gmail dark-mode compatibility

```html
<meta name="color-scheme" content="light only">
<meta name="supported-color-schemes" content="light only">
<!-- NIE używaj #ffffff — Gmail odwraca. Zamiast tego #f8fafc -->
<div style="color:#f8fafc"><font color="#f8fafc">tekst</font></div>
<td bgcolor="#0A1A2F" style="background:#0A1A2F">...
```

## Jak zbudować nowy landing (np. zt411.pl)

```bash
cp -r /Users/jakubtiuchty/tc22.pl /Users/jakubtiuchty/zt411
cd /Users/jakubtiuchty/zt411
rm -rf .next node_modules .git
npm install
git init && git remote add origin <nowy-repo-url>
```

### Podmień content (w tej kolejności):

1. **`package.json`** → `"name": "zt411.pl"`
2. **`src/data/prices.json`** → warianty ZT411 z Ingrama
3. **`src/data/prices.ts`** — bez zmian (generyczny)
4. **`public/images/`** → grafiki ZT411
5. **`src/components/Hero.tsx`** → nazwa, 3 bullet features, bg image
6. **`src/components/Przewagi.tsx`** → 4 key features ZT411 (np. rozdzielczość, szybkość druku, taśmy)
7. **`src/components/Porownanie.tsx`** → konkurencja (Zebra ZT231, TSC MH241, Honeywell PM45)
8. **`src/components/Warianty.tsx`** → 4 kluczowe PN
9. **`src/components/Specyfikacja.tsx`** → 20 parametrów ZT411
10. **`src/components/Akcesoria.tsx`** → taśmy, ribbony, głowice
11. **`src/components/FAQ.tsx`** → 14 pytań ZT411 (long-tail!)
12. **`src/components/Serwis.tsx`** — zostaw TAKMA, zmień nazwę produktu
13. **`src/components/Footer.tsx`** → linki do `takma.com.pl/produkt/zebra-zt411`
14. **`src/app/layout.tsx`** → metadata + JSON-LD (name, SKU prefix, sameAs datasheet URL)
15. **`public/llms.txt`** i **`public/llms-full.txt`** → pełny content ZT411
16. **`public/robots.txt`** — bez zmian (AI crawlers)

### Deploy

1. `git push origin main` → Vercel
2. Vercel Settings → Env Variables:
   ```
   RESEND_API_KEY=re_...
   CONTACT_TO_EMAIL=jakub.tiuchty@takma.com.pl
   CONTACT_FROM_EMAIL=kontakt@zt411.pl
   ```
3. Settings → Deployment Protection → Disabled (lub Standard — wtedy custom domain publiczna)
4. Settings → Domains → `zt411.pl`
5. DNS w nazwa.pl: A `@` → `76.76.21.21`, CNAME `www` → `cname.vercel-dns.com`

## Checklist pre-launch

- [ ] Title ≤60, description ≤155
- [ ] Ceny tylko z prices.json (grep w kodzie: żaden hardcoded)
- [ ] FAQ schema = widoczny FAQ.tsx (1:1)
- [ ] Canonical + OG URL = finalna domena
- [ ] OG image 1200×630
- [ ] 5 typów JSON-LD (Org, Product, FAQ, WebPage, Breadcrumb)
- [ ] robots.txt + sitemap.xml + llms.txt + llms-full.txt dostępne
- [ ] Resend env vars w Vercel (wszystkie środowiska)
- [ ] Cron sync-prices zarejestrowany
- [ ] Custom domain + DNS propagated
- [ ] [Rich Results Test](https://search.google.com/test/rich-results) przeszedł bez błędów
- [ ] [PageSpeed Insights](https://pagespeed.web.dev/) Core Web Vitals OK (LCP/INP/CLS)
- [ ] Google Search Console → domena + sitemap
- [ ] Bing Webmaster Tools → domena + sitemap
- [ ] Hard refresh Cmd+Shift+R na produkcji → favicon poprawny

## Zasady projektowe (NIE zmieniaj bez dyskusji)

- **One-pager** (nie multi-page) — B2B sprzęt, one-scroll decyzja
- **FAQ na dole** (nie na górze) — progresja treści
- **Kontakt nad FAQ** — primary CTA
- **Akordeony** zamknięte domyślnie, ale content w SSR DOM (crawlery widzą)
- **Dynamic pricing** z prices.json (zero hardkodowania)
- **Modal success** (nie alert) — nowoczesny UX
- **Cross-linking TAKMA ↔ serwis-zebry.pl** w footerze
