export interface MethodologyPillar {
  icon: string
  title: string
  description: string
}

export interface ClassLevel {
  group: 'kids' | 'juniors' | 'teens' | 'exams'
  level: string
  ageRange?: string
  description: string
  image: string
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
    level: 'Little Steps',
    ageRange: '6-7 años',
    description: 'Primer acercamiento al inglés con juegos, canciones y actividades guiadas para construir confianza desde el inicio.',
    image: '/images/classes/kids/starter.jpg',
  },
  {
    group: 'kids',
    level: 'First Steps',
    ageRange: '7-8 años',
    description: 'Consolidación de vocabulario básico, rutinas simples y primeras estructuras para comunicarse en clase.',
    image: '/images/classes/kids/elementary.jpg',
  },
  {
    group: 'kids',
    level: 'Kids 1',
    ageRange: '8-9 años',
    description: 'Desarrollo de comprensión oral y escrita con actividades dinámicas y vocabulario cotidiano.',
    image: '/images/classes/kids/preintermediate.jpg',
  },
  {
    group: 'kids',
    level: 'Kids 2',
    ageRange: '9-10 años',
    description: 'Avance en lectura, escritura y expresión oral con mayor autonomía y práctica guiada.',
    image: '/images/classes/kids/intermediate.jpg',
  },
  {
    group: 'kids',
    level: 'Kids 3',
    ageRange: '10-11 años',
    description: 'Profundización de contenidos y estructuras para ganar fluidez y seguridad al comunicarse.',
    image: '/images/classes/kids/upperintermediate.jpg',
  },
  {
    group: 'kids',
    level: 'Kids 4',
    ageRange: '11-12 años',
    description: 'Nivel de cierre de la etapa kids con más lectura, producción oral y preparación para juniors.',
    image: '/images/classes/kids/intermediate.jpg',
  },
  // Juniors
  {
    group: 'juniors',
    level: 'Juniors 1',
    ageRange: '12-13 años',
    description: 'Transición hacia niveles más analíticos, con foco en comunicación, gramática y vocabulario ampliado.',
    image: '/images/classes/adults/preintermediate.jpg',
  },
  {
    group: 'juniors',
    level: 'Juniors 2',
    ageRange: '13-14 años',
    description: 'Desarrollo de fluidez, comprensión lectora y producción escrita para consolidar el paso a teens.',
    image: '/images/classes/adults/intermediate.jpg',
  },
  // Teens
  {
    group: 'teens',
    level: '1st level',
    ageRange: '14-15 años',
    description: 'Inicio del ciclo teens con práctica integral de las cuatro habilidades y comunicación más espontánea.',
    image: '/images/classes/adults/elementary.jpg',
  },
  {
    group: 'teens',
    level: '2nd level',
    ageRange: '15-16 años',
    description: 'Profundización de gramática, lectura y speaking con mayor independencia en el uso del idioma.',
    image: '/images/classes/adults/preintermediate.jpg',
  },
  {
    group: 'teens',
    level: '3rd level',
    ageRange: '16-17 años',
    description: 'Mayor precisión y fluidez para expresarse en contextos académicos y cotidianos con soltura.',
    image: '/images/classes/adults/intermediate.jpg',
  },
  {
    group: 'teens',
    level: '4th level',
    ageRange: '17 años',
    description: 'Consolidación del nivel intermedio alto con énfasis en comprensión y producción más compleja.',
    image: '/images/classes/adults/upperintermediate.jpg',
  },
  {
    group: 'teens',
    level: '5th level',
    ageRange: '17+ años',
    description: 'Preparación avanzada con foco en argumentación, escritura y comunicación académica.',
    image: '/images/classes/adults/advanced.jpg',
  },
  {
    group: 'teens',
    level: '6th level',
    ageRange: '17+ años',
    description: 'Nivel de cierre teens para llegar con seguridad a la preparación de exámenes internacionales.',
    image: '/images/classes/adults/conversation.jpg',
  },
  {
    group: 'exams',
    level: 'B2 First',
    description: 'Preparación específica para el examen B2 First con foco en estrategia, práctica y confianza en examen.',
    image: '/images/exams/certificate.jpg',
  },
  {
    group: 'exams',
    level: 'C1 Advanced',
    description: 'Preparación específica para el examen C1 Advanced con práctica intensiva de todas las partes del examen.',
    image: '/images/exams/hero-exams.jpg',
  },
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