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
  {
    name: 'IELTS',
    logo: '/images/exams/ielts.svg',
    provider: 'British Council, IDP y Cambridge',
    type: 'Academic o General Training',
    format: 'Paper-based o Computer-based',
    skills: ['Listening', 'Reading', 'Writing', 'Speaking'],
    levels: [
      { code: 'Band 1-9', fullName: 'International English Language Testing System', cefr: 'A2-C2', idealFor: 'Todos los niveles según puntuación' },
    ],
    validity: '2 años',
    recognizedBy: '+11,000 organizaciones en 140 países',
    bestFor: 'Estudiantes que planean estudiar en el extranjero o emigrar a países angloparlantes',
    ourPreparation: 'Curso intensivo de 8 semanas enfocado en estrategias de examen y práctica de speaking.',
  },
  {
    name: 'TOEFL',
    logo: '/images/exams/toefl.svg',
    provider: 'Educational Testing Service (ETS)',
    type: 'iBT (Internet-based Test)',
    format: 'Computer-based',
    skills: ['Reading', 'Listening', 'Speaking', 'Writing'],
    levels: [
      { code: '0-120', fullName: 'Test of English as a Foreign Language', cefr: 'A1-C2', idealFor: 'Todos los niveles según puntuación' },
    ],
    validity: '2 años',
    recognizedBy: '+11,000 universidades en 150 países',
    bestFor: 'Estudiantes que aplican a universidades estadounidenses',
    ourPreparation: 'Curso de 10 semanas con enfoque en las habilidades requeridas por universidades de EE.UU.',
  },
  {
    name: 'Trinity',
    logo: '/images/exams/trinity.svg',
    provider: 'Trinity College London',
    type: 'GESE (Speaking) o ISE (Integrated)',
    format: 'Face-to-face con examinador',
    skills: ['Speaking', 'Listening', 'Reading', 'Writing (ISE)'],
    levels: [
      { code: 'GESE 1-12', fullName: 'Graded Examinations in Spoken English', cefr: 'A1-C2', idealFor: 'Evaluación progresiva de speaking' },
      { code: 'ISE I-III', fullName: 'Integrated Skills in English', cefr: 'B1-C1', idealFor: 'Evaluación integrada de habilidades' },
    ],
    validity: 'Permanente (no vence)',
    recognizedBy: 'Reconocido en UK y muchos países europeos',
    bestFor: 'Quienes buscan evaluación gradual y personalizada del speaking',
    ourPreparation: 'Sesiones individuales de práctica de speaking con feedback detallado.',
  },
]

export const comparisonTable: ComparisonRow[] = [
  { exam: 'Cambridge KET', provider: 'Cambridge', levels: 'A2', validity: 'Permanente', idealFor: 'Primer certificado oficial', highlighted: true },
  { exam: 'Cambridge PET', provider: 'Cambridge', levels: 'B1', validity: 'Permanente', idealFor: 'Nivel intermedio', highlighted: true },
  { exam: 'Cambridge FCE', provider: 'Cambridge', levels: 'B2', validity: 'Permanente', idealFor: 'Nivel intermedio-alto', highlighted: true },
  { exam: 'Cambridge CAE', provider: 'Cambridge', levels: 'C1', validity: 'Permanente', idealFor: 'Nivel avanzado', highlighted: true },
  { exam: 'Cambridge CPE', provider: 'Cambridge', levels: 'C2', validity: 'Permanente', idealFor: 'Nivel de maestría', highlighted: false },
  { exam: 'IELTS Academic', provider: 'British Council/IDP', levels: 'A2-C2', validity: '2 años', idealFor: 'Estudio en el extranjero', highlighted: true },
  { exam: 'IELTS General', provider: 'British Council/IDP', levels: 'A2-C2', validity: '2 años', idealFor: 'Migración y trabajo', highlighted: false },
  { exam: 'TOEFL iBT', provider: 'ETS', levels: 'A1-C2', validity: '2 años', idealFor: 'Universidades de EE.UU.', highlighted: true },
  { exam: 'Trinity GESE', provider: 'Trinity College', levels: 'A1-C2', validity: 'Permanente', idealFor: 'Evaluación de speaking', highlighted: false },
  { exam: 'Trinity ISE', provider: 'Trinity College', levels: 'B1-C1', validity: 'Permanente', idealFor: 'Habilidades integradas', highlighted: false },
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