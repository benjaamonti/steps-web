export interface PageMetaProps {
  title: string
  description: string
  image?: string
  url?: string
}

export const pageMeta: Record<string, PageMetaProps> = {
  '/': {
    title: 'English Academy | Academia de Inglés en Mar del Plata',
    description: 'Academia de inglés en Mar del Plata con más de 25 años de experiencia. Clases para niños, adolescentes y adultos. Preparación para exámenes internacionales.',
    image: '/images/og/og-home.jpg',
    url: 'https://www.englishacademymardelplata.com/',
  },
  '/nosotros': {
    title: 'Nosotros | English Academy',
    description: 'Conocé nuestra historia, misión y equipo de profesores. Más de 25 años formando estudiantes de inglés en Mar del Plata.',
    image: '/images/og/og-nosotros.jpg',
    url: 'https://www.englishacademymardelplata.com/nosotros',
  },
  '/nuestras-clases': {
    title: 'Nuestras Clases | English Academy',
    description: 'Clases de inglés para todas las edades y niveles. Metodología comunicativa con profesores nativos y certificados.',
    image: '/images/og/og-clases.jpg',
    url: 'https://www.englishacademymardelplata.com/nuestras-clases',
  },
  '/examenes-internacionales': {
    title: 'Exámenes Internacionales | English Academy',
    description: 'Preparación para exámenes Cambridge, IELTS, TOEFL y Trinity. Centro preparador oficial con 94% de tasa de aprobación.',
    image: '/images/og/og-examenes.jpg',
    url: 'https://www.englishacademymardelplata.com/examenes-internacionales',
  },
  '/viajes-a-inglaterra': {
    title: 'Viajes a Inglaterra | English Academy',
    description: 'Viajes de inmersión lingüística a Inglaterra. Viví el idioma en Londres, Oxford, Cambridge y más destinos.',
    image: '/images/og/og-viajes.jpg',
    url: 'https://www.englishacademymardelplata.com/viajes-a-inglaterra',
  },
  '/contacto': {
    title: 'Contacto | English Academy',
    description: 'Contactanos para más información sobre nuestras clases, exámenes internacionales y viajes a Inglaterra.',
    image: '/images/og/og-contacto.jpg',
    url: 'https://www.englishacademymardelplata.com/contacto',
  },
  '/privacidad': {
    title: 'Política de Privacidad | English Academy',
    description: 'Política de privacidad y protección de datos de English Academy Mar del Plata.',
    image: '/images/og/og-default.jpg',
    url: 'https://www.englishacademymardelplata.com/privacidad',
  },
}