import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'BTMob Android RAT',
    short_name: 'BTMob',
    description: 'Advanced Remote Administration Tool for Android.',
    start_url: '/',
    display: 'standalone',
    background_color: '#050505',
    theme_color: '#00ff88',
    icons: [
      {
        src: '/icon.png',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
