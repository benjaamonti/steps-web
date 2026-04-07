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
    quote: 'El viaje a Oxford fue una experiencia transformadora. No solo mejoré mi inglés enormemente, sino que hice amigos de todo el mundo. ¡Volví con mucha más confianza!',
    author: 'Sofía Ramírez',
    role: 'Viaje a Oxford 2023',
    photo: '/images/testimonials/sofia.jpg',
    type: 'trip',
    age: '16 años',
    destination: 'Oxford',
    year: '2023',
  },
  {
    quote: 'Mi hijo empezó a los 6 años y ahora, con 12, habla inglés con total naturalidad. La metodología para niños es excelente, hacen que aprender sea divertido.',
    author: 'Carolina Pérez',
    role: 'Madre de alumno',
    photo: '/images/testimonials/carolina.jpg',
    type: 'class',
  },
  {
    quote: 'Conseguí mi certificado IELTS con banda 7.5, lo que me permitió ingresar a la universidad en Australia. La preparación intensiva valió cada minuto.',
    author: 'Diego Fernández',
    role: 'IELTS Academic 2023',
    photo: '/images/testimonials/diego.jpg',
    type: 'exam',
  },
  {
    quote: 'Londres superó todas mis expectativas. Las clases en la escuela local, la familia anfitriona y las excursiones hicieron que el aprendizaje fuera natural y divertido.',
    author: 'Valentina López',
    role: 'Viaje a Londres 2022',
    photo: '/images/testimonials/valentina.jpg',
    type: 'trip',
    age: '17 años',
    destination: 'Londres',
    year: '2022',
  },
  {
    quote: 'El Conversation Club me ayudó a perder el miedo a hablar. Ahora puedo mantener conversaciones fluidas en inglés sin sentirme nerviosa.',
    author: 'Ana Silva',
    role: 'Alumna de Conversation Club',
    photo: '/images/testimonials/ana.jpg',
    type: 'class',
  },
  {
    quote: 'Cambridge fue increíble. Caminar por los mismos lugares donde estudiaron tantos científicos y escritores fue inspirador. Mi inglés mejoró muchísimo.',
    author: 'Martín Castro',
    role: 'Viaje a Cambridge 2023',
    photo: '/images/testimonials/martin.jpg',
    type: 'trip',
    age: '15 años',
    destination: 'Cambridge',
    year: '2023',
  },
]