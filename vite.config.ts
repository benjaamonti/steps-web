import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import sitemap from 'vite-plugin-sitemap'

const siteUrl = process.env.VITE_SITE_URL ?? 'https://benjamonti.me'

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    sitemap({
      hostname: siteUrl,
      // '/' no va acá: el plugin ya la toma de index.html
      dynamicRoutes: [
        '/nuestras-clases',
        '/examenes-internacionales',
        '/viajes-a-inglaterra',
        '/contacto',
      ],
      exclude: ['/404'],
      robots: [{ userAgent: '*', allow: '/', disallow: '/404' }],
      changefreq: 'monthly',
      priority: {
        '/': 1.0,
        '/nuestras-clases': 0.9,
        '/examenes-internacionales': 0.9,
        '/viajes-a-inglaterra': 0.8,
        '/contacto': 0.7,
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
