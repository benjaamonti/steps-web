export interface Testimonial {
  quote: string
  author: string
  role: string
  photo?: string
  type: 'class' | 'exam' | 'trip'
  age?: string
  destination?: string
  year?: string
}

export const testimonials: Testimonial[] = [
  {
    quote: 'La metodología de la academia me permitió avanzar rápidamente. En solo un año pasé de nivel básico a intermedio alto. Los profesores son excelentes y las clases son muy dinámicas.',
    author: 'María González',
    role: 'Alumna de clases para adultos',
    photo: '/images/testimonials/maria.jpg',
    type: 'class',
  },
  {
    quote: 'Gracias a la preparación de English Academy, aprobé el First Certificate con una B. El apoyo constante de los profesores y los simulacros fueron clave para mi éxito.',
    author: 'Lucas Martínez',
    role: 'Aprobado FCE 2023',
    photo: '/images/testimonials/lucas.jpg',
    type: 'exam',
  },
  {
    quote: 'Quizás nos crucemos con alguno de ustedes por acá en una década.',
    author: 'Marco',
    role: 'Exalumno',
    type: 'trip',
    destination: 'Exalumno',
    year: 'viajó en 2012',
  },
  {
    quote: 'Mi hijo empezó a los 6 años y ahora, con 12, habla inglés con total naturalidad. La metodología para niños es excelente, hacen que aprender sea divertido.',
    author: 'Carolina Pérez',
    role: 'Madre de alumno',
    photo: '/images/testimonials/carolina.jpg',
    type: 'class',
  },

  // TODO: los testimonios 2 y 3 son resúmenes; reemplazar por la cita exacta de los videos de Instagram y confirmar permiso de las familias.
  {
    quote: 'Mi consejo para los próximos viajeros: en las reuniones, escuchen con atención todo lo que dice John.',
    author: 'Sofi',
    role: 'Viaje a Reading 2026',
    type: 'trip',
    destination: 'Reading',
    year: '2026',
  },
  {
    quote: 'El Conversation Club me ayudó a perder el miedo a hablar. Ahora puedo mantener conversaciones fluidas en inglés sin sentirme nerviosa.',
    author: 'Ana Silva',
    role: 'Alumna de Conversation Club',
    photo: '/images/testimonials/ana.jpg',
    type: 'class',
  },
  {
    quote: 'El inglés salió del aula: en el colegio, con amigos nuevos, conociendo otras culturas. Un simple "Where are you from?" puede ser el comienzo de una amistad.',
    author: 'Eze',
    role: 'Viaje a Reading 2026',
    type: 'trip',
    destination: 'Reading',
    year: '2026',
  },
]