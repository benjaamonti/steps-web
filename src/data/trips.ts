import type { FAQ } from './classes'

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
    title: 'Preparación previa',
    description: 'Antes de viajar nos juntamos en Steps para conocer la historia y la cultura de Inglaterra y Francia, con viajeros de años anteriores. Es un sello de nuestros viajes.',
  },
  {
    icon: 'GraduationCap',
    title: 'Clases en una summer school',
    description: 'Dos semanas de clases de inglés en un colegio británico, con compañeros de otros países.',
  },
  {
    icon: 'Globe',
    title: 'Excursiones',
    description: 'Oxford, Cambridge, Bath, Londres, Canterbury, Stratford-upon-Avon, los estudios de Harry Potter y Stonehenge, según el año.',
  },
  {
    icon: 'Rocket',
    title: 'Group leaders de Steps',
    description: 'Los group leaders de Steps, entre ellos John, acompañan al grupo durante todo el viaje.',
  },
]

export const tripIncludes: TripInclude[] = [
  {
    icon: 'Plane',
    title: 'Organización',
    description: 'Junto a Together, que organiza viajes de estudio desde 1986.',
  },
  {
    icon: 'Home',
    title: 'Alojamiento',
    description: 'Residencia en el colegio donde hacen la summer school.',
  },
  {
    icon: 'BookOpen',
    title: 'Clases',
    description: 'Clases de inglés en la summer school durante dos semanas.',
  },
  {
    icon: 'Map',
    title: 'Actividades y excursiones',
    description: 'Actividades por la tarde y visitas a ciudades y lugares históricos.',
  },
  {
    icon: 'Shield',
    title: 'Preparación',
    description: 'Reuniones en Mar del Plata antes de viajar.',
  },
  {
    icon: 'UserCheck',
    title: 'Acompañamiento',
    description: 'Group leaders de Steps durante todo el viaje.',
  },
]

export const tripFaq: FAQ[] = [
  {
    question: '¿Quién puede viajar?',
    answer: 'Chicos que tengan entre 13 y 17 años al momento de viajar y estén en 3rd Level o un nivel superior.',
  },
  {
    question: '¿Cuándo es el próximo viaje?',
    answer: 'En julio de 2028. Antes hacemos una reunión informativa para contar el destino, las fechas, el programa de estudios y las actividades. Escribinos por WhatsApp para coordinar una entrevista.',
  },
  {
    question: '¿Quién acompaña al grupo?',
    answer: 'Group leaders de Steps, entre ellos John, que viajan con los chicos durante todo el viaje. Antes de cada viaje participan de la capacitación para líderes que organiza Together.',
  },
  {
    question: '¿Cómo se preparan antes de viajar?',
    answer: 'Nos juntamos en Steps para conocer la historia y la cultura de Inglaterra y Francia, con viajeros de años anteriores. En la última reunión con las familias entregamos la documentación y repasamos las excursiones y las reglas en destino.',
  },
  {
    question: '¿Dónde se alojan?',
    answer: 'En la residencia del colegio donde hacen la summer school, junto a chicos de otros países.',
  },
]