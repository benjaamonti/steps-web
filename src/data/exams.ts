export interface CefrLevel {
  code: string
  label: string
  description: string
  highlighted: boolean
}

export interface ExamLevel {
  code: string
  fullName: string
  cefr: string
  idealFor: string
}

export interface Exam {
  name: string
  logo: string
  provider: string
  type: string
  format: string
  skills: string[]
  levels: ExamLevel[]
  validity: string
  recognizedBy: string
  bestFor: string
  ourPreparation: string
}

export interface ExamProcess {
  step: number
  icon: string
  title: string
  description: string
}

export interface ComparisonRow {
  exam: string
  provider: string
  levels: string
  validity: string
  idealFor: string
  highlighted?: boolean
}

export const cefrLevels: CefrLevel[] = [
  {
    code: 'A1',
    label: 'Beginner',
    description: 'Puede comprender y usar expresiones familiares y cotidianas.',
    highlighted: false,
  },
  {
    code: 'A2',
    label: 'Elementary',
    description: 'Puede comunicarse en situaciones simples y rutinarias.',
    highlighted: true,
  },
  {
    code: 'B1',
    label: 'Intermediate',
    description: 'Puede producir textos simples y mantener conversaciones sobre temas familiares.',
    highlighted: true,
  },
  {
    code: 'B2',
    label: 'Upper-Intermediate',
    description: 'Puede interactuar con fluidez y comprender textos complejos.',
    highlighted: true,
  },
  {
    code: 'C1',
    label: 'Advanced',
    description: 'Puede expresarse espontáneamente y usar el idioma con flexibilidad.',
    highlighted: true,
  },
  {
    code: 'C2',
    label: 'Proficiency',
    description: 'Puede comprender prácticamente todo lo que escucha o lee con facilidad.',
    highlighted: true,
  },
]

export const exams: Exam[] = [
  {
    name: 'Cambridge',
    logo: '/images/exams/cambridge.svg',
    provider: 'Cambridge Assessment English',
    type: 'Certificación por nivel',
    format: 'Paper-based o Computer-based',
    skills: ['Reading', 'Writing', 'Listening', 'Speaking', 'Use of English'],
    levels: [
      { code: 'KET', fullName: 'Key English Test', cefr: 'A2', idealFor: 'Primer certificado oficial' },
      { code: 'PET', fullName: 'Preliminary English Test', cefr: 'B1', idealFor: 'Nivel intermedio' },
      { code: 'FCE', fullName: 'First Certificate in English', cefr: 'B2', idealFor: 'Nivel intermedio-alto' },
      { code: 'CAE', fullName: 'Certificate in Advanced English', cefr: 'C1', idealFor: 'Nivel avanzado' },
      { code: 'CPE', fullName: 'Certificate of Proficiency in English', cefr: 'C2', idealFor: 'Nivel de maestría' },
    ],
    validity: 'Permanente (no vence)',
    recognizedBy: '+25,000 universidades, empleadores y gobiernos',
    bestFor: 'Quienes buscan una certificación de nivel específico reconocida mundialmente',
    ourPreparation: 'Cursos específicos de 3-6 meses con simulacros semanales y material oficial Cambridge.',
  },

]

export const comparisonTable: ComparisonRow[] = [
  { exam: 'Cambridge KET', provider: 'Cambridge', levels: 'A2', validity: 'Permanente', idealFor: 'Primer certificado oficial', highlighted: true },
  { exam: 'Cambridge PET', provider: 'Cambridge', levels: 'B1', validity: 'Permanente', idealFor: 'Nivel intermedio', highlighted: true },
  { exam: 'Cambridge FCE', provider: 'Cambridge', levels: 'B2', validity: 'Permanente', idealFor: 'Nivel intermedio-alto', highlighted: true },
  { exam: 'Cambridge CAE', provider: 'Cambridge', levels: 'C1', validity: 'Permanente', idealFor: 'Nivel avanzado', highlighted: true },
  { exam: 'Cambridge CPE', provider: 'Cambridge', levels: 'C2', validity: 'Permanente', idealFor: 'Nivel de maestría', highlighted: false },

]

export const examProcess: ExamProcess[] = [
  {
    step: 1,
    icon: 'ClipboardCheck',
    title: 'Diagnóstico inicial',
    description: 'Evaluamos tu nivel actual y definimos qué examen y cuándo es el ideal para vos.',
  },
  {
    step: 2,
    icon: 'Calendar',
    title: 'Plan de preparación',
    description: 'Diseñamos un plan personalizado con clases específicas y material oficial del examen.',
  },
  {
    step: 3,
    icon: 'FileQuestion',
    title: 'Simulacros',
    description: 'Practicás con exámenes reales de años anteriores en condiciones de examen.',
  },
  {
    step: 4,
    icon: 'Award',
    title: 'Examen oficial',
    description: 'Te inscribimos y acompañamos hasta el día del examen en el centro oficial.',
  },
  {
    step: 5,
    icon: 'Certificate',
    title: 'Resultado y certificación',
    description: 'Recibís tu certificado oficial reconocido internacionalmente.',
  },
]