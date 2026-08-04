import { siteConfig } from './siteConfig'

export interface PageMetaProps {
  title: string
  description: string
  image?: string
  url?: string
}

export const pageMeta: Record<string, PageMetaProps> = {
  '/': {
    title: `${siteConfig.businessName} | School of English`,
    description: 'Academia de inglés en Mar del Plata. Clases para niños, adolescentes y adultos. Preparación para exámenes internacionales.',
    image: '/images/og/og-home.jpg',
    url: `${siteConfig.siteUrl}/`,
  },
  '/nuestras-clases': {
    title: `Nuestras Clases | ${siteConfig.businessName}`,
    description: 'Clases de inglés para todas las edades y niveles. Metodología comunicativa con profesores nativos y certificados.',
    image: '/images/og/og-clases.jpg',
    url: `${siteConfig.siteUrl}/nuestras-clases`,
  },
  '/examenes-internacionales': {
    title: `Exámenes Internacionales | ${siteConfig.businessName}`,
    description: 'Preparación para exámenes Cambridge e internacionales.',
    image: '/images/og/og-examenes.jpg',
    url: `${siteConfig.siteUrl}/examenes-internacionales`,
  },
  '/viajes-a-inglaterra': {
    title: `Viajes a Inglaterra | ${siteConfig.businessName}`,
    description: 'Viajes de inmersión lingüística a Inglaterra. Viví el idioma en Londres, Oxford, Cambridge y más destinos.',
    image: '/images/og/og-viajes.jpg',
    url: `${siteConfig.siteUrl}/viajes-a-inglaterra`,
  },
  '/contacto': {
    title: `Contacto | ${siteConfig.businessName}`,
    description: 'Contactanos para más información sobre nuestras clases, exámenes internacionales y viajes a Inglaterra.',
    image: '/images/og/og-contacto.jpg',
    url: `${siteConfig.siteUrl}/contacto`,
  },
}

