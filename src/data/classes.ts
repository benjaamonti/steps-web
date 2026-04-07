export interface MethodologyPillar {
  icon: string
  title: string
  description: string
}

export interface ClassLevel {
  group: 'kids' | 'teens' | 'adults'
  level: string
  ageRange?: string
  description: string
  modality: string[]
  image: string
}

export interface Schedule {
  day: string
  time: string
  level: string
  modality: string
}

export interface FAQ {
  question: string
  answer: string
}

export const methodology = {
  intro: 'Nuestra metodología se basa en el enfoque comunicativo, donde el alumno es el protagonista de su aprendizaje. Creemos que aprender un idioma va más allá de memorizar reglas gramaticales: se trata de comunicarse de manera efectiva en situaciones reales.',
  pillars: [
    {
      icon: 'MessageCircle',
      title: 'Enfoque Comunicativo',
      description: 'Priorizamos la comunicación real desde el primer día. Los alumnos practican speaking y listening en cada clase.',
    },
    {
      icon: 'Users',
      title: 'Clases Reducidas',
      description: 'Grupos de máximo 12 alumnos para garantizar atención personalizada y mayor participación.',
    },
    {
      icon: 'BookOpen',
      title: 'Materiales Actualizados',
      description: 'Utilizamos libros de editoriales internacionales y material auténtico: videos, podcasts y artículos actuales.',
    },
    {
      icon: 'Target',
      title: 'Objetivos Claros',
      description: 'Cada curso tiene metas definidas según el Marco Común Europeo de Referencia (MCER).',
    },
  ] as MethodologyPillar[],
}

export const classLevels: ClassLevel[] = [
  // Kids
  {
    group: 'kids',
    level: 'Starter Kids',
    ageRange: '6-8 años',
    description: 'Primer contacto con el idioma inglés a través de juegos, canciones y actividades lúdicas. Desarrollo de vocabulario básico y comprensión oral.',
    modality: ['Presencial'],
    image: '/images/classes/kids/starter.jpg',
  },
  {
    group: 'kids',
    level: 'Elementary Kids',
    ageRange: '8-10 años',
    description: 'Consolidación de vocabulario, introducción a estructuras gramaticales simples y desarrollo de habilidades de lectoescritura básicas.',
    modality: ['Presencial'],
    image: '/images/classes/kids/elementary.jpg',
  },
  // Teens
  {
    group: 'teens',
    level: 'Pre-Intermediate Teens',
    ageRange: '11-13 años',
    description: 'Ampliación de vocabulario, estructuras gramaticales más complejas y desarrollo de las cuatro habilidades comunicativas.',
    modality: ['Presencial', 'Híbrido'],
    image: '/images/classes/kids/preintermediate.jpg',
  },
  {
    group: 'teens',
    level: 'Intermediate Teens',
    ageRange: '13-15 años',
    description: 'Nivel intermedio con énfasis en comunicación fluida. Preparación para exámenes internacionales de nivel B1.',
    modality: ['Presencial', 'Híbrido'],
    image: '/images/classes/kids/intermediate.jpg',
  },
  {
    group: 'teens',
    level: 'Upper-Intermediate Teens',
    ageRange: '15-17 años',
    description: 'Nivel avanzado para adolescentes. Dominio del idioma en contextos académicos y profesionales. Preparación para FCE.',
    modality: ['Presencial', 'Híbrido'],
    image: '/images/classes/kids/upperintermediate.jpg',
  },
  // Adults
  {
    group: 'adults',
    level: 'Elementary',
    description: 'Fundamentos del idioma para adultos. Vocabulario esencial, estructuras básicas y desarrollo de confianza para comunicarse.',
    modality: ['Presencial', 'Online', 'Híbrido'],
    image: '/images/classes/adults/elementary.jpg',
  },
  {
    group: 'adults',
    level: 'Pre-Intermediate',
    description: 'Consolidación de conocimientos básicos. Mayor fluidez en conversaciones cotidianas y comprensión de textos simples.',
    modality: ['Presencial', 'Online', 'Híbrido'],
    image: '/images/classes/adults/preintermediate.jpg',
  },
  {
    group: 'adults',
    level: 'Intermediate',
    description: 'Nivel intermedio con énfasis en comunicación efectiva. Capacidad para mantener conversaciones sobre diversos temas.',
    modality: ['Presencial', 'Online', 'Híbrido'],
    image: '/images/classes/adults/intermediate.jpg',
  },
  {
    group: 'adults',
    level: 'Upper-Intermediate',
    description: 'Dominio del idioma en contextos variados. Comprensión de textos complejos y expresión de ideas con claridad.',
    modality: ['Presencial', 'Online', 'Híbrido'],
    image: '/images/classes/adults/upperintermediate.jpg',
  },
  {
    group: 'adults',
    level: 'Advanced',
    description: 'Nivel avanzado cercano a la competencia nativa. Uso fluido y flexible del idioma en cualquier contexto.',
    modality: ['Presencial', 'Online', 'Híbrido'],
    image: '/images/classes/adults/advanced.jpg',
  },
  {
    group: 'adults',
    level: 'Conversation Club',
    description: 'Práctica intensiva de speaking en grupos reducidos. Temas variados y actividades dinámicas para ganar fluidez.',
    modality: ['Presencial', 'Online'],
    image: '/images/classes/adults/conversation.jpg',
  },
]

export const schedules: Schedule[] = [
  { day: 'Lunes y Miércoles', time: '9:00 - 10:30', level: 'Elementary / Pre-Intermediate', modality: 'Presencial' },
  { day: 'Lunes y Miércoles', time: '18:00 - 19:30', level: 'Intermediate / Upper-Intermediate', modality: 'Presencial' },
  { day: 'Lunes y Miércoles', time: '19:45 - 21:15', level: 'Advanced / Conversation Club', modality: 'Presencial' },
  { day: 'Martes y Jueves', time: '9:00 - 10:30', level: 'Pre-Intermediate / Intermediate', modality: 'Presencial' },
  { day: 'Martes y Jueves', time: '18:00 - 19:30', level: 'Elementary / Pre-Intermediate', modality: 'Presencial' },
  { day: 'Martes y Jueves', time: '19:45 - 21:15', level: 'Intermediate / Upper-Intermediate', modality: 'Presencial' },
  { day: 'Miércoles', time: '19:00 - 20:30', level: 'Conversation Club', modality: 'Online' },
  { day: 'Sábados', time: '10:00 - 12:00', level: 'Todos los niveles', modality: 'Presencial' },
]

export const faq: FAQ[] = [
  {
    question: '¿Cómo sé qué nivel me corresponde?',
    answer: 'Realizamos una evaluación de nivel gratuita y sin compromiso. Consiste en una prueba escrita breve y una conversación con uno de nuestros profesores para evaluar tus habilidades de speaking. Al finalizar, te recomendamos el nivel más adecuado para vos.',
  },
  {
    question: '¿Cuántos alumnos hay por clase?',
    answer: 'Nuestros grupos son reducidos, con un máximo de 12 alumnos por clase. Esto nos permite dar atención personalizada a cada estudiante y garantizar que todos participen activamente durante las clases.',
  },
  {
    question: '¿Puedo cambiar de nivel durante el año?',
    answer: 'Sí, si el profesor considera que has progresado lo suficiente como para pasar al siguiente nivel, podés cambiar en cualquier momento del año. No hay costo adicional por el cambio de nivel.',
  },
  {
    question: '¿Hay clases de prueba?',
    answer: 'Sí, ofrecemos una clase de prueba gratuita para que conozcas nuestra metodología y decidas si te gusta antes de inscribirte. Podés coordinarla contactándonos por WhatsApp o teléfono.',
  },
  {
    question: '¿Qué materiales se usan?',
    answer: 'Trabajamos con libros de editoriales internacionales reconocidas como Cambridge, Oxford y Pearson. Además, complementamos con material auténtico: artículos, videos, podcasts y recursos digitales interactivos.',
  },
  {
    question: '¿Emiten certificados?',
    answer: 'Sí, al finalizar cada nivel entregamos un certificado de asistencia y aprobación que indica el nivel alcanzado según el Marco Común Europeo de Referencia (MCER).',
  },
]