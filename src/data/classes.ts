export interface MethodologyPillar {
  icon: string
  title: string
  description: string
}

export interface ClassLevel {
  group: 'kids' | 'juniors' | 'teens' | 'exams'
  level: string
  description: string
  image: string
}

export interface FAQ {
  question: string
  answer: string
}

export const methodology = {
  intro: 'En Steps el inglés se usa desde la primera clase. Cada nivel trabaja con proyectos que terminan en algo concreto: una obra de teatro, un museo, un noticiero, una feria de países o un juicio simulado. Así los chicos usan el idioma para crear, presentar y compartir.',
  pillars: [
    {
      icon: 'MessageCircle',
      title: 'Aprender jugando',
      description: 'Juegos, canciones y cuentos en los niveles Kids. En Teens siguen aprendiendo con juegos, pero mucho más complejos.',
    },
    {
      icon: 'Users',
      title: 'Open Classes',
      description: 'Abrimos el aula para que las familias vean lo que aprendieron sus hijos y jueguen con ellos.',
    },
    {
      icon: 'BookOpen',
      title: 'Pantallas interactivas',
      description: 'Nuestras aulas tienen pantallas interactivas para trabajar con juegos, videos y actividades digitales en cada clase.',
    },
    {
      icon: 'Target',
      title: 'Proyectos en cada nivel',
      description: 'Masterchef Kids, Zootopia, Matilda, Bake Off, talk shows, debates y mock trials: cada grupo tiene su proyecto del año.',
    },
  ] as MethodologyPillar[],
}

export const classLevels: ClassLevel[] = [
  // Kids
  {
    group: 'kids',
    level: 'Little Steps',
    description: 'Primer contacto con el inglés a través de cuentos, juegos y canciones. A fin de año preparan una Open Class para sus familias.',
    image: '/images/classes/levels/little-steps.jpg',
  },
  {
    group: 'kids',
    level: 'First Steps',
    description: 'Nivel exclusivo para chicos de segundo grado. Aprenden jugando, con clases dinámicas y participativas.',
    image: '/images/classes/levels/first-steps.jpg',
  },
  {
    group: 'kids',
    level: 'Kids 1',
    description: 'Nivel inicial para chicos de 3º y 4º grado. Cocinan en Masterchef Kids, arman el Big Sandwich de Pete the Cat y hacen obras de teatro.',
    image: '/images/classes/levels/kids-1.jpg',
  },
  {
    group: 'kids',
    level: 'Kids 2',
    description: 'Trabajan con películas como Zootopia y The Lego Movie, arman su Family Cooking Book y se animan a un Talent Show.',
    image: '/images/classes/levels/kids-2.jpg',
  },
  {
    group: 'kids',
    level: 'Kids 3',
    description: 'Leen y actúan Matilda, inventan su propia ciudad con If I Were a City… e investigan animales marinos y la historia de Mar del Plata.',
    image: '/images/classes/levels/kids-3.jpg',
  },
  {
    group: 'kids',
    level: 'Kids 4',
    description: 'Escriben textos comparativos sobre animales, montan su propio museo y pueden rendir Movers, el examen de Cambridge para chicos.',
    image: '/images/classes/levels/kids-4.jpg',
  },
  // Juniors
  {
    group: 'juniors',
    level: 'Juniors 1',
    description: 'El paso de Kids a Teens, con más lectura y vocabulario. En Juniors resolvieron junto a sus familias el misterio de The Canterville Ghost.',
    image: '/images/classes/levels/juniors-1.jpg',
  },
  {
    group: 'juniors',
    level: 'Juniors 2',
    description: 'Investigan y presentan su propio Museo de Animales Argentinos, todo en inglés.',
    image: '/images/classes/levels/juniors-2.jpg',
  },
  // Teens
  {
    group: 'teens',
    level: '1st level',
    description: 'Arrancan Teens con la World Fair: investigan un país y lo presentan con comidas, música y juegos.',
    image: '/images/classes/levels/1st-level.jpg',
  },
  {
    group: 'teens',
    level: '2nd level',
    description: 'Hacen noticieros de cuentos clásicos (Fairy Tale News), campañas y una Time Capsule del año.',
    image: '/images/classes/levels/2nd-level.jpg',
  },
  {
    group: 'teens',
    level: '3rd level',
    description: 'Talk shows, sketches de comedia y su propio noticiero. Desde este nivel pueden sumarse al viaje a Inglaterra.',
    image: '/images/classes/levels/3rd-level.jpg',
  },
  {
    group: 'teens',
    level: '4th level',
    description: 'Bake Off y Cookie Competition, versiones propias de cuentos clásicos y un Game Day que organizan para Kids 2 y Kids 3.',
    image: '/images/classes/levels/4th-level.jpg',
  },
  {
    group: 'teens',
    level: '5th level',
    description: 'Debates inspirados en Freedom Writers y mock trials, como el juicio por el robo del Louvre.',
    image: '/images/classes/levels/5th-level.jpg',
  },
  {
    group: 'teens',
    level: '6th level',
    description: 'Escriben sus guiones y presentan obras de títeres para los niveles más chicos. Es el último nivel de Teens.',
    image: '/images/classes/levels/6th-level.jpg',
  },
  {
    group: 'exams',
    level: 'B2 First',
    description: 'Preparación específica con tres clases semanales de 90 minutos, simulacros y seguimiento personalizado.',
    image: '/images/classes/levels/b2-first.jpg',
  },
  {
    group: 'exams',
    level: 'C1 Advanced',
    description: 'El examen que sigue a B2 First, con la misma modalidad: tres clases de 90 minutos por semana y simulacros de examen.',
    image: '/images/classes/levels/c1-advanced.jpg',
  },
]

// TODO FAQ pendientes de completar con datos de Steps: ¿Cuánto cuesta? · ¿Qué libros usan? · ¿Hay cursos para adultos? · ¿Sigue el curso online de B2 First?
export const faq: FAQ[] = [
  {
    question: '¿Desde qué edad pueden empezar?',
    answer: 'A partir de primer grado de escuela primaria',
  },
  {
    question: 'Mi hijo ya sabe inglés, ¿en qué nivel entra?',
    answer: 'El primer paso es determinar cuánto es lo que sabe. Escribinos por Whatsapp y coordinamos para realizar una nivelación para ubicarlo en el grupo que le corresponde.',
  },
  {
    question: '¿Cuándo comienzan y terminan las clases?',
    answer: 'Las clases comienzan el mismo día que las escuelas primarias y terminan a mediados de diciembre.',
  },
  {
    question: '¿Cómo puedo ver lo que aprende mi hijo?',
    answer: 'Enviamos un boletín trimestral donde te informamos del progreso en las distintas habilidades de la lengua.Durante el año cada grupo prepara una Open Class: las familias vienen al aula, juegan con los chicos y ven sus proyectos en inglés.',
  },
  {
    question: '¿Qué pasa después de 6th Level?',
    answer: 'Pueden prepararse para B2 First y después para C1 Advanced, los exámenes de la Universidad de Cambridge. Antes, en Kids 4, los chicos también pueden rendir Movers.',
  },
  {
    question: '¿Dónde se rinden los exámenes de Cambridge?',
    answer: 'Se rinden con Buenos Aires Open Centre, centro examinador de Cambridge, que elige una sede distinta cada año. Steps fue sede en años anteriores.',
  },
]
