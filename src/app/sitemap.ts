import type { MetadataRoute } from 'next'
import { getPrices } from '@/data/prices'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(getPrices().lastSync)

  return [
    {
      url: 'https://tc22.pl',
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ]
}
