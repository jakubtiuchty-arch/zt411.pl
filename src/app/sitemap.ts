import type { MetadataRoute } from 'next'
import { getPrices } from '@/data/prices'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(getPrices().lastSync)
  const base = 'https://www.zt411.pl'

  return [
    {
      url: base,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${base}/vs/zt421`,
      lastModified: new Date('2026-04-18'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${base}/zt411-rfid`,
      lastModified: new Date('2026-04-18'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/zeroliner`,
      lastModified: new Date('2026-04-18'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/600-dpi`,
      lastModified: new Date('2026-04-18'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/300-dpi`,
      lastModified: new Date('2026-04-18'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/203-dpi`,
      lastModified: new Date('2026-04-18'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/tasmy`,
      lastModified: new Date('2026-04-18'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/tasmy/lista`,
      lastModified: new Date('2026-04-18'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]
}
