import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://btmob.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    // In a real Black Hat scenario, you would dynamically generate 
    // hundreds of these for different keywords.
  ];
}
