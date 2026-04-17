import { NextResponse } from 'next/server'
import { writeFileSync } from 'fs'
import { join } from 'path'

const TC22_PART_NUMBERS = [
  'WLMT0-T22B6ABC2-A6',
  'WLMT0-T22B6ABE2-A6',
  'WLMT0-T22B8ABC8-A6',
  'WLMT0-T22B6CBC2-A6',
  'WLMT0-T22B8ABD8-A6',
  'WLMT0-T22B6CBE2-A6',
  'WLMT0-T22B8CBD8-A6',
]

const TAKMA_STOCK_API = 'https://www.takma.com.pl/api/stock'
const CRON_SECRET = process.env.CRON_SECRET || ''

export async function GET(request: Request) {
  const authHeader = request.headers.get('authorization')
  if (CRON_SECRET && authHeader !== `Bearer ${CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const pnParam = TC22_PART_NUMBERS.join(',')
    const res = await fetch(`${TAKMA_STOCK_API}?pn=${pnParam}`, {
      headers: { 'User-Agent': 'tc22.pl price-sync/1.0' },
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
    'WLMT0-T22B6ABC2-A6': 'TC22 SE4710, 6/64 GB, 3800 mAh',
    'WLMT0-T22B6ABE2-A6': 'TC22 SE4710, 6/64 GB, 5200 mAh',
    'WLMT0-T22B8ABC8-A6': 'TC22 SE4710, 8/128 GB, RFID-ready',
    'WLMT0-T22B6CBC2-A6': 'TC22 SE55, 6/64 GB, 3800 mAh',
    'WLMT0-T22B8ABD8-A6': 'TC22 SE4710, 8/128 GB, RFID+BLE',
    'WLMT0-T22B6CBE2-A6': 'TC22 SE55, 6/64 GB, 5200 mAh',
    'WLMT0-T22B8CBD8-A6': 'TC22 SE55, 8/128 GB, RFID+BLE',
  }
  return names[pn] || pn
}
