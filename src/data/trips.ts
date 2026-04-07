export interface Trip {
  destination: string
  duration: string
  includes: string[]
  image: string
  highlights: string[]
  ageRange: string
  nextDate: string
}

export interface WhyEnglandItem {
  icon: string
  title: string
  description: string
}

export interface TripInclude {
  icon: string
  title: string
  description: string
}

export const trips: Trip[] = [
  {
    destination: 'Londres',
    duration: '3 semanas',
    includes: [
      'Vuelo internacional',
      'Alojamiento en familia anfitriona',
      'Clases en escuela local',
      'Excursiones culturales',
      'Seguro de viaje',
      'Coordinador acompañante',
    ],
    image: '/images/trips/london.jpg',
    highlights: [
      'Big Ben y Houses of Parliament',
      'Tower of London',
      'British Museum',
      'Camden Market',
      'Thames River Cruise',
      'West End Theatre',
    ],
    ageRange: '14-18 años',
    nextDate: 'Julio 2025',
  },
  {
    destination: 'Oxford',
    duration: '2-3 semanas',
    includes: [
      'Vuelo internacional',
      'Alojamiento en residencia universitaria',
      'Clases en escuela local',
      'Tour por universidades',
      'Seguro de viaje',
      'Coordinador acompañante',
    ],
    image: '/images/trips/oxford.jpg',
    highlights: [
      'Christ Church College',
      'Bodleian Library',
      'Punting en el río Cherwell',
      'Ashmolean Museum',
      'Cotswolds day trip',
      'University tours',
    ],
    ageRange: '15-18 años',
    nextDate: 'Julio 2025',
  },
  {
    destination: 'Cambridge',
    duration: '2-3 semanas',
    includes: [
      'Vuelo internacional',
      'Alojamiento en familia anfitriona',
      'Clases en escuela local',
      'Tour por colleges',
      'Seguro de viaje',
      'Coordinador acompañante',
    ],
    image: '/images/trips/cambridge.jpg',
    highlights: [
      'King\'s College Chapel',
      'Punting en el río Cam',
      'Fitzwilliam Museum',
      'Botanic Garden',
      'Mathematical Bridge',
      'College tours',
    ],
    ageRange: '14-18 años',
    nextDate: 'Enero 2026',
  },
  {
    destination: 'Brighton',
    duration: '2-3 semanas',
    includes: [
      'Vuelo internacional',
      'Alojamiento en familia anfitriona',
      'Clases en escuela local',
      'Actividades de playa',
      'Seguro de viaje',
      'Coordinador acompañante',
    ],
    image: '/images/trips/brighton.jpg',
    highlights: [
      'Brighton Pier',
      'Royal Pavilion',
      'The Lanes',
      'Seven Sisters cliffs',
      'Beach activities',
      'Sea Life Centre',
    ],
    ageRange: '13-17 años',
    nextDate: 'Enero 2026',
  },
  {
    destination: 'Stratford-upon-Avon',
    duration: '2 semanas',
    includes: [
      'Vuelo internacional',
      'Alojamiento en familia anfitriona',
      'Clases en escuela local',
      'Teatros shakespearianos',
      'Seguro de viaje',
      'Coordinador acompañante',
    ],
    image: '/images/trips/stratford.jpg',
    highlights: [
      'Shakespeare\'s Birthplace',
      'Royal Shakespeare Theatre',
      'Anne Hathaway\'s Cottage',
      'River Avon cruise',
      'Warwick Castle',
      'Theatre workshops',
    ],
    ageRange: '14-18 años',
    nextDate: 'Julio 2026',
  },
]

export const whyEngland: WhyEnglandItem[] = [
  {
    icon: 'Landmark',
    title: 'Origen del idioma',
    description: 'Inglaterra es el lugar donde nació el idioma inglés. Aprender aquí significa sumergirse en la cultura que dio origen a la lengua.',
  },
  {
    icon: 'GraduationCap',
    title: 'Escuelas con hablantes nativos',
    description: 'Las escuelas cuentan con profesores nativos certificados que garantizan una enseñanza de calidad y acento auténtico.',
  },
  {
    icon: 'Globe',
    title: 'Experiencia cultural única',
    description: 'Desde museos mundialmente famosos hasta pueblos históricos, cada día es una oportunidad de aprendizaje cultural.',
  },
  {
    icon: 'Rocket',
    title: 'Salto de nivel en semanas',
    description: 'La inmersión total permite progresar el equivalente a un año de clases regulares en solo 2-3 semanas.',
  },
]

export const tripIncludes: TripInclude[] = [
  {
    icon: 'Plane',
    title: 'Vuelo internacional',
    description: 'Pasajes de ida y vuelta con equipaje incluido.',
  },
  {
    icon: 'Home',
    title: 'Alojamiento',
    description: 'Familia anfitriona cuidadosamente seleccionada o residencia.',
  },
  {
    icon: 'BookOpen',
    title: 'Clases en escuela local',
    description: '20 lecciones semanales con profesores nativos certificados.',
  },
  {
    icon: 'Map',
    title: 'Excursiones',
    description: 'Visitas culturales y actividades incluidas en el programa.',
  },
  {
    icon: 'Shield',
    title: 'Seguro completo',
    description: 'Cobertura médica, de equipaje y cancelación del viaje.',
  },
  {
    icon: 'UserCheck',
    title: 'Coordinador',
    description: 'Acompañante de la academia durante todo el viaje.',
  },
]