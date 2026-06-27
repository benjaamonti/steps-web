export interface TeamMember {
  name: string
  role: string
  photo: string
  certifications: string[]
  bio: string
}

export const team: TeamMember[] = [
  {
    name: 'Laura Fernández',
    role: 'Directora y Fundadora',
    photo: '/images/team/laura.jpg',
    certifications: ['MA TESOL', 'DELTA', 'Cambridge CPE'],
    bio: 'Fundó English Academy con la visión de crear un espacio donde aprender inglés fuera una experiencia enriquecedora.',
  },
  {
    name: 'James Wilson',
    role: 'Coordinador Académico',
    photo: '/images/team/james.jpg',
    certifications: ['CELTA', 'DELTA', 'MA Applied Linguistics'],
    bio: 'Nativo de Manchester, UK. Lidera el desarrollo académico de la institución y supervisa la calidad de la enseñanza. Especialista en preparación de exámenes internacionales.',
  },
  {
    name: 'María Elena Sosa',
    role: 'Profesora Senior - Adultos',
    photo: '/images/team/maria-elena.jpg',
    certifications: ['CELTA', 'Cambridge CAE', 'Diploma en Fonética'],
    bio: 'Se especializa en clases para adultos y preparación de exámenes avanzados. Su metodología dinámica motiva a los estudiantes a superarse constantemente.',
  },
  {
    name: 'Tom Anderson',
    role: 'Profesor - Teens & Exams',
    photo: '/images/team/tom.jpg',
    certifications: ['CELTA', 'PGCE'],
    bio: 'Nativo de Londres. Apasionado por trabajar con adolescentes, logra que las clases sean divertidas y efectivas. Especialista en preparación FCE y CAE.',
  },
  {
    name: 'Carolina Méndez',
    role: 'Profesora - Kids & Teens',
    photo: '/images/team/carolina.jpg',
    certifications: ['CELTA', 'Diploma en Educación Infantil', 'YLE Specialist'],
    bio: 'Especialista en enseñanza para niños y adolescentes. Sus clases son creativas, lúdicas y adaptadas a cada grupo de edad. Certificada en Young Learners English.',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Profesora - Conversation & Business',
    photo: '/images/team/sarah.jpg',
    certifications: ['DELTA', 'MA TESOL', 'Certificación Business English'],
    bio: 'Nativa de Edimburgo, Escocia. Especialista en inglés para negocios y conversation classes. Ayuda a profesionales a alcanzar fluidez en contextos laborales.',
  },
  {
    name: 'Pablo Rodríguez',
    role: 'Coordinador de Viajes',
    photo: '/images/team/pablo.jpg',
    certifications: ['Lic. en Turismo', 'Proficiency', 'First Aid Certified'],
    bio: 'Organiza y acompaña los viajes de inmersión desde 2010. Su experiencia garantiza que cada viaje sea seguro, educativo y memorable para los estudiantes.',
  },
  {
    name: 'Emma Thompson',
    role: 'Profesora - Kids',
    photo: '/images/team/emma.jpg',
    certifications: ['CELTA', 'Diploma Montessori', 'Storytelling Certification'],
    bio: 'Nativa de Bristol, UK. Especialista en enseñanza para niños pequeños. Utiliza cuentos, canciones y juegos para crear un ambiente de aprendizaje natural y divertido.',
  },
]