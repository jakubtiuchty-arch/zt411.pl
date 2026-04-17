import pricesData from './prices.json'

export interface Variant {
  pn: string
  name: string
  price: number
  availability?: string
  stock?: number
}

export interface PricesData {
  lastSync: string
  variants: Variant[]
}

export function getPrices(): PricesData {
  return pricesData as PricesData
}

export function getVariantPrice(pn: string): number | null {
  const variant = pricesData.variants.find(v => v.pn === pn)
  return variant ? variant.price : null
}

export function formatPrice(n: number): string {
  return n.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}
