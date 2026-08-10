import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronRight, GraduationCap, FileText, Plane, Award } from 'lucide-react'
import { PageMeta } from '@/components/layout/PageMeta'
import { siteConfig } from '@/data/siteConfig'
import { pageMeta } from '@/data/pageMeta'

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

const previewCards = [
  {
    icon: GraduationCap,
    title: 'Nuestras Clases',
    description: 'Clases para niños, adolescentes con grupos reducidos.',
    image: '/images/classes/methodology.jpg',
    link: '/nuestras-clases',
  },
  {
    icon: FileText,
    title: 'Exámenes Internacionales',
    description: 'Te brindamos las herramientas necesarias para certificar tu nivel de inglés a nivel internacional. Cursos para B1 Preliminary, B2 First y C1 Advanced',
    image: '/images/exams/certificate.jpg',
    link: '/examenes-internacionales',
  },
  {
    icon: Plane,
    title: 'Viajes a Inglaterra',
    description: 'Viajes de estudio al Reino Unido.',
    image: '/images/trips/immersion.jpg',
    link: '/viajes-a-inglaterra',
  },
]

export default function Home() {
  return (
    <>
      <PageMeta {...pageMeta['/']} />

      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/hero/hero.jpg)' }}
        >
          {/* <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/90" /> */}
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6"
            >
              {siteConfig.tagline}
            </motion.h1>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/nuestras-clases"
                className="w-full sm:w-auto px-8 py-4 bg-accent text-primary font-semibold rounded-lg hover:bg-accent-400 transition-colors duration-200 text-center"
              >
                Nuestras clases
              </Link>
              <Link
                to="/contacto"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors duration-200 text-center backdrop-blur-sm"
              >
                Contactanos
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer focus:outline-none"
          onClick={() => document.getElementById('about-us')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/60 hover:text-white transition-colors duration-200"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </motion.button>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/2"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                ¿Quiénes somos?
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Con años de experiencia en la enseñanza del idioma inglés, nos dedicamos a brindar un espacio donde el aprendizaje se convierte en una experiencia enriquecedora y dinámica.
                </p>
                <p>
                  Nuestra historia se basa en el compromiso con cada uno de nuestros alumnos, acompañándolos paso a paso para que puedan alcanzar sus metas y comunicarse con confianza en un mundo globalizado.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full lg:w-1/2"
            >
              <div className="aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl relative">
                <img
                  src="/images/about/history.jpg"
                  alt="Quiénes somos"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Preview Cards */}
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
              ¿Qué ofrecemos?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descubrí todas las opciones que tenemos para vos
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {previewCards.map((card, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-accent"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <card.icon className="w-6 h-6 text-[#d65661]" />
                    <h3 className="text-xl font-semibold text-primary">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">{card.description}</p>
                  <Link
                    to={card.link}
                    className="inline-flex items-center text-[#d65661] hover:text-[#b54650] font-medium transition-colors duration-200"
                  >
                    Ver más
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Award className="w-16 h-16 text-[#d65661] mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              ¿Empezamos?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              ¡Contactanos para empezar tu nivelación!
            </p>
            <Link
              to="/contacto"
              className="inline-block px-8 py-4 bg-accent text-primary font-semibold rounded-lg hover:bg-accent-400 transition-colors duration-200"
            >
              ¡Escribinos!
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
