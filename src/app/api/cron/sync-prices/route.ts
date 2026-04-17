import { NextResponse } from 'next/server'
import { writeFileSync } from 'fs'
import { join } from 'path'

const ZT411_PART_NUMBERS = [
  // 203 dpi
  'ZT41142-T0E0000Z',
  'ZT41142-T0EC000Z',
  'ZT41142-T1E0000Z',
  'ZT41142-T2E0000Z',
  'ZT41142-T3E0000Z',
  'ZT41142-T4E0000Z',
  'ZT41142-D9E0000Z',
  // 300 dpi
  'ZT41143-T0E0000Z',
  'ZT41143-T1E0000Z',
  'ZT41143-T2E0000Z',
  'ZT41143-T3E0000Z',
  'ZT41143-T4E0000Z',
  'ZT41143-D9E0000Z',
  // 600 dpi
  'ZT41146-T0E0000Z',
  'ZT41146-T4E0000Z',
  'ZT41146-D9E0000Z',
]

const TAKMA_STOCK_API = 'https://www.takma.com.pl/api/stock'
const CRON_SECRET = process.env.CRON_SECRET || ''

export async function GET(request: Request) {
  const authHeader = request.headers.get('authorization')
  if (CRON_SECRET && authHeader !== `Bearer ${CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const pnParam = ZT411_PART_NUMBERS.join(',')
    const res = await fetch(`${TAKMA_STOCK_API}?pn=${pnParam}`, {
      headers: { 'User-Agent': 'zt411.pl price-sync/1.0' },
      next: { revalidate: 0 },
    })

    if (!res.ok) {
      throw new Error(`Stock API failed: ${res.status}`)
    }

    const data = await res.json()

    if (!data.results || data.results.length === 0) {
      return NextResponse.json({ success: false, error: 'No results from stock API' }, { status: 500 })
    }

    const variants = data.results
      .filter((r: { found: boolean; price: number }) => r.found && r.price > 0)
      .map((r: { partNumber: string; price: number; availability: string; totalStock: number }) => ({
        pn: r.partNumber,
        name: getVariantName(r.partNumber),
        price: Math.round(r.price * 100) / 100,
        availability: r.availability,
        stock: r.totalStock,
      }))

    const pricesData = {
      lastSync: new Date().toISOString(),
      variants,
    }

    const filePath = join(process.cwd(), 'src', 'data', 'prices.json')
    writeFileSync(filePath, JSON.stringify(pricesData, null, 2))

    return NextResponse.json({
      success: true,
      synced: variants.length,
      lastSync: pricesData.lastSync,
      variants: variants.map((v: { pn: string; price: number }) => ({ pn: v.pn, price: v.price })),
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }, { status: 500 })
  }
}

function getVariantName(pn: string): string {
  const names: Record<string, string> = {
    'ZT41142-T0E0000Z': 'ZT411 203 dpi, odrywanie',
    'ZT41142-T0EC000Z': 'ZT411 203 dpi, odrywanie + Wi-Fi',
    'ZT41142-T1E0000Z': 'ZT411 203 dpi, odklejak',
    'ZT41142-T2E0000Z': 'ZT411 203 dpi, gilotyna',
    'ZT41142-T3E0000Z': 'ZT411 203 dpi, odklejak + nawijak podkładu',
    'ZT41142-T4E0000Z': 'ZT411 203 dpi, odklejak + nawijak etykiet',
    'ZT41142-D9E0000Z': 'ZT411 203 dpi, gilotyna linerless',
    'ZT41143-T0E0000Z': 'ZT411 300 dpi, odrywanie',
    'ZT41143-T1E0000Z': 'ZT411 300 dpi, odklejak',
    'ZT41143-T2E0000Z': 'ZT411 300 dpi, gilotyna',
    'ZT41143-T3E0000Z': 'ZT411 300 dpi, odklejak + nawijak podkładu',
    'ZT41143-T4E0000Z': 'ZT411 300 dpi, odklejak + nawijak etykiet',
    'ZT41143-D9E0000Z': 'ZT411 300 dpi, gilotyna linerless',
    'ZT41146-T0E0000Z': 'ZT411 600 dpi, odrywanie',
    'ZT41146-T4E0000Z': 'ZT411 600 dpi, odklejak + nawijak etykiet',
    'ZT41146-D9E0000Z': 'ZT411 600 dpi, gilotyna linerless',
  }
  return names[pn] || pn
}
