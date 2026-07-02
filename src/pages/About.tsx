import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Target, Eye, Award, GraduationCap, FileText, Plane, HeartHandshake, Lightbulb, ShieldCheck, UsersRound } from 'lucide-react'
import { PageMeta } from '@/components/layout/PageMeta'
import { awards, isOfficialExamCenter } from '@/data/awards'
import { pageMeta } from '@/data/pageMeta'
import { SkeletonImage } from '@/components/ui/skeletons/SkeletonImage'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

const coreValues = [
  {
    icon: Award,
    title: 'Calidad',
    description: 'Mejora continua de las clases y del material de estudio.',
  },
  {
    icon: HeartHandshake,
    title: 'Empatía',
    description: 'Comprensión de los tiempos de aprendizaje de cada estudiante.',
  },
  {
    icon: Lightbulb,
    title: 'Innovación',
    description: 'Uso de herramientas nuevas y dinámicas modernas en el aula.',
  },
  {
    icon: ShieldCheck,
    title: 'Compromiso',
    description: 'Responsabilidad con el progreso de las personas que estudian en el instituto.',
  },
  {
    icon: UsersRound,
    title: 'Inclusión',
    description: 'Creación de un ambiente de respeto para todos los alumnos.',
  },
]

const whatWeDoCards = [
  {
    icon: GraduationCap,
    title: 'Nuestras Clases',
    description: 'Clases para todas las edades y niveles, con metodología comunicativa y profesores certificados.',
    link: '/nuestras-clases',
  },
  {
    icon: FileText,
    title: 'Exámenes Internacionales',
    description: 'Preparación para Cambridge.',
    link: '/examenes-internacionales',
  },
  {
    icon: Plane,
    title: 'Viajes a Inglaterra',
    description: 'Viajes de inmersión lingüística para vivir el idioma en su contexto cultural original.',
    link: '/viajes-a-inglaterra',
  },
]

export default function About() {
  const [awardsLoaded, setAwardsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAwardsLoaded(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <PageMeta {...pageMeta['/nosotros']} />

      {/* Page Hero */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Quiénes Somos
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Conocé nuestra historia, nuestra misión y el equipo que hace posible tu aprendizaje
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 1 - Quiénes Somos */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                Nuestra Historia
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  English Academy nació de la pasión de Laura Fernández por la enseñanza 
                  del idioma inglés. Lo que comenzó como clases particulares en su living se 
                  transformó con el tiempo en una de las academias de inglés más reconocidas 
                  de Mar del Plata.
                </p>
                <p>
                  Nuestro compromiso con la excelencia académica y la atención personalizada 
                  nos ha permitido mantenernos como referentes en la enseñanza del idioma, 
                  adaptándonos a los cambios tecnológicos sin perder la esencia de un trato 
                  cercano y humano.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/team/laura.jpg"
                  alt="Fundadora de English Academy"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2 - Misión */}
      <section className="py-20 lg:py-28 bg-cream relative overflow-hidden">
        {/* Decorative Quote */}
        <div className="absolute top-10 left-10 text-primary/5">
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-6">
              <Target className="w-10 h-10 text-[#d65661]" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8">
              Nuestra Misión
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed font-medium">
              Facilitar el dominio del idioma inglés para niños y jóvenes, ofreciendo clases dinámicas y metodologías innovadoras con un trato cercano, garantizando que cada estudiante adquiera las competencias necesarias en inglés para alcanzar sus propios objetivos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 3 - Visión */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-6">
              <Eye className="w-10 h-10 text-[#d65661]" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8">
              Nuestra Visión
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed font-medium">
              Ser el instituto de inglés de referencia en Mar del Plata por la calidad de las clases y el trato con los alumnos, para que más personas tengan mejores oportunidades de estudio y trabajo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 3.5 - Nuestros Valores */}
      <section className="py-20 lg:py-28 bg-cream relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <Award className="w-10 h-10 text-[#d65661]" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">
              Nuestros Valores
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-primary/5 flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <value.icon className="w-8 h-8 text-[#d65661]" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 4 - Qué Hacemos */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Qué Hacemos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ofrecemos una variedad de servicios diseñados para ayudarte a dominar el inglés
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {whatWeDoCards.map((card, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-accent"
              >
                <card.icon className="w-12 h-12 text-[#d65661] mb-6" />
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 mb-6">{card.description}</p>
                <Link
                  to={card.link}
                  className="inline-flex items-center text-[#d65661] hover:text-[#b54650] font-medium transition-colors duration-200"
                >
                  Ver más
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 7 - Reconocimientos y Avales */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Reconocimientos y Avales
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Contamos con el respaldo de las principales instituciones del mundo angloparlante
            </p>
            {isOfficialExamCenter && (
              <div className="inline-flex items-center space-x-2 bg-accent text-primary px-4 py-2 rounded-full mt-4">
                <Award className="w-5 h-5" />
                <span className="font-semibold">Centro Examinador Oficial</span>
              </div>
            )}
          </motion.div>

          {!awardsLoaded ? (
            <div className="flex flex-wrap justify-center gap-8">
              {Array.from({ length: 6 }).map((_, index) => (
                <SkeletonImage key={index} className="w-32 h-16" />
              ))}
            </div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap justify-center items-center gap-8 lg:gap-12"
            >
              {awards.map((award, index) => (
                <motion.a
                  key={index}
                  variants={itemVariants}
                  href={award.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center"
                  title={award.description}
                >
                  <div className="w-32 h-16 lg:w-40 lg:h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                    <img
                      src={award.logo}
                      alt={award.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <span className="text-xs text-gray-500 mt-2 text-center group-hover:text-primary transition-colors duration-200">
                    {award.name}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </>
  )
}
