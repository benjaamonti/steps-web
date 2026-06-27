export interface Award {
  name: string
  logo: string
  url: string
  description: string
}

export const awards: Award[] = [
  {
    name: 'Cambridge Assessment English',
    logo: '/images/awards/cambridge.png',
    url: 'https://www.cambridgeenglish.org/',
    description: 'Centro preparador oficial de exámenes Cambridge.',
  },

  {
    name: 'English UK',
    logo: '/images/awards/english-uk.png',
    url: 'https://www.englishuk.com/',
    description: 'Miembro de la asociación de escuelas de inglés del Reino Unido.',
  },
  {
    name: 'AILA',
    logo: '/images/awards/aila.png',
    url: 'https://www.aila.info/',
    description: 'Asociación Internacional de Lingüística Aplicada.',
  },
  {
    name: 'APIBA',
    logo: '/images/awards/apiba.png',
    url: 'https://www.apiba.org.ar/',
    description: 'Asociación de Profesores de Inglés de Buenos Aires.',
  },
]

export const isOfficialExamCenter = false