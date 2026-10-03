import { MetadataRoute } from 'next'
import { blogPosts } from './blog/data'
import { suburbLocations } from './locations/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const blogRoutes = blogPosts.map((post) => ({
    url: `https://www.brisbanecomputerfix.com/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const locationRoutes = suburbLocations.map((loc) => ({
    url: `https://www.brisbanecomputerfix.com/locations/${loc.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: 'https://www.brisbanecomputerfix.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://www.brisbanecomputerfix.com/services',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://www.brisbanecomputerfix.com/services/pc-repair',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.brisbanecomputerfix.com/services/mac-repair',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.brisbanecomputerfix.com/services/data-recovery',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.brisbanecomputerfix.com/services/it-support',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.brisbanecomputerfix.com/services/screen-replacement',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://www.brisbanecomputerfix.com/services/laptop-battery-replacement',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://www.brisbanecomputerfix.com/services/laptop-fan-replacement',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://www.brisbanecomputerfix.com/pricing',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://www.brisbanecomputerfix.com/locations',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://www.brisbanecomputerfix.com/about',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: 'https://www.brisbanecomputerfix.com/contact',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.9,
    },
    {
      url: 'https://www.brisbanecomputerfix.com/faq',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.brisbanecomputerfix.com/testimonials',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.brisbanecomputerfix.com/services/custom-pc-build',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.brisbanecomputerfix.com/services/cyber-security',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://www.brisbanecomputerfix.com/services/small-business-web-design',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...blogRoutes,
    ...locationRoutes,
  ]
}
