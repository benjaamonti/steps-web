import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import sitemap from 'vite-plugin-sitemap'

const siteUrl = process.env.VITE_SITE_URL ?? 'https://www.englishacademymardelplata.com'

export default defineConfig({
  base: '/Steps-web/',
  plugins: [
    react(),
    sitemap({
      hostname: siteUrl,
      dynamicRoutes: [
        '/',
        '/nosotros',
        '/nuestras-clases',
        '/examenes-internacionales',
        '/viajes-a-inglaterra',
        '/contacto',
        '/privacidad',
      ],
      changefreq: 'monthly',
      priority: {
        '/': 1.0,
        '/nuestras-clases': 0.9,
        '/examenes-internacionales': 0.9,
        '/viajes-a-inglaterra': 0.8,
        '/nosotros': 0.7,
        '/contacto': 0.7,
        '/privacidad': 0.3,
      },
      lastmod: new Date(),
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
