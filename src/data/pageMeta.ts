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
    description: 'Academia de inglés en Mar del Plata. Cursos para niños y adolescentes. Preparación para exámenes internacionales de Cambridge y viajes educativos a Inglaterra.',
    image: '/images/og/og-home.jpg',
    url: `${siteConfig.siteUrl}/`,
  },
  '/nuestras-clases': {
    title: `Nuestras Clases | ${siteConfig.businessName}`,
    description: 'Cursos de inglés para niños y adolescentes, en grupos reducidos y con clases dinámicas, juego, tecnología y proyectos.',
    image: '/images/og/og-clases.jpg',
    url: `${siteConfig.siteUrl}/nuestras-clases`,
  },
  '/examenes-internacionales': {
    title: `Exámenes Internacionales | ${siteConfig.businessName}`,
    description: 'Cursos de preparación para los exámenes internacionales de la Universidad de Cambridge, como B2 First y C1 Advanced.',
    image: '/images/og/og-examenes.jpg',
    url: `${siteConfig.siteUrl}/examenes-internacionales`,
  },
  '/viajes-a-inglaterra': {
    title: `Viajes a Inglaterra | ${siteConfig.businessName}`,
    description: 'Viajes educativos a Inglaterra que combinan aprendizaje, cultura y nuevas experiencias.',
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

