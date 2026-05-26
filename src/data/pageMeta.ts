export interface PageMetaProps {
  title: string
  description: string
  image?: string
  url?: string
}

export const pageMeta: Record<string, PageMetaProps> = {
  '/': {
    title: 'Steps | School of English',
    description: 'Academia de inglés en Mar del Plata. Clases para niños, adolescentes y adultos. Preparación para exámenes internacionales.',
    image: '/images/og/og-home.jpg',
    url: 'https://www.englishacademymardelplata.com/',
  },
  '/nosotros': {
    title: 'Nosotros | Steps',
    description: 'Conocé nuestra historia, misión y equipo de profesores en Mar del Plata.',
    image: '/images/og/og-nosotros.jpg',
    url: 'https://www.englishacademymardelplata.com/nosotros',
  },
  '/nuestras-clases': {
    title: 'Nuestras Clases | Steps',
    description: 'Clases de inglés para todas las edades y niveles. Metodología comunicativa con profesores nativos y certificados.',
    image: '/images/og/og-clases.jpg',
    url: 'https://www.englishacademymardelplata.com/nuestras-clases',
  },
  '/examenes-internacionales': {
    title: 'Exámenes Internacionales | Steps',
    description: 'Preparación para exámenes Cambridge e internacionales.',
    image: '/images/og/og-examenes.jpg',
    url: 'https://www.englishacademymardelplata.com/examenes-internacionales',
  },
  '/viajes-a-inglaterra': {
    title: 'Viajes a Inglaterra | Steps',
    description: 'Viajes de inmersión lingüística a Inglaterra. Viví el idioma en Londres, Oxford, Cambridge y más destinos.',
    image: '/images/og/og-viajes.jpg',
    url: 'https://www.englishacademymardelplata.com/viajes-a-inglaterra',
  },
  '/contacto': {
    title: 'Contacto | Steps',
    description: 'Contactanos para más información sobre nuestras clases, exámenes internacionales y viajes a Inglaterra.',
    image: '/images/og/og-contacto.jpg',
    url: 'https://www.englishacademymardelplata.com/contacto',
  },
}
