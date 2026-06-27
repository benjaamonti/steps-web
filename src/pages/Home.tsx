import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronLeft, ChevronRight, GraduationCap, FileText, Plane, Award } from 'lucide-react'
import { PageMeta } from '@/components/layout/PageMeta'
import { siteConfig } from '@/data/siteConfig'
import { testimonials } from '@/data/testimonials'
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
    description: 'Clases para niños, adolescentes y adultos. Metodología comunicativa con profesores certificados.',
    image: '/images/classes/methodology.jpg',
    link: '/nuestras-clases',
  },
  {
    icon: FileText,
    title: 'Exámenes Internacionales',
    description: 'Te brindamos las herramientas necesarias para certificar tu nivel de inglés a nivel internacional. Cursos para PET, FCE y CAE.',
    image: '/images/exams/certificate.jpg',
    link: '/examenes-internacionales',
  },
  {
    icon: Plane,
    title: 'Viajes a Inglaterra',
    description: 'Viajes de inmersión lingüística a Inglaterra y más destinos.',
    image: '/images/trips/immersion.jpg',
    link: '/viajes-a-inglaterra',
  },
]

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
      }, 5000)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isPaused])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
  }

  return (
    <>
      <PageMeta {...pageMeta['/']} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/hero/hero.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/90" />
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
            <motion.p
              variants={itemVariants}
              className="text-xl sm:text-2xl text-white/90 mb-4"
            >
              Te ayudamos a alcanzar tus mejores resultados con una metodología dinámica y efectiva.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-lg text-white/80 mb-10"
            >
              Preparate para tu futuro con nosotros en Mar del Plata.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/nuestras-clases"
                className="w-full sm:w-auto px-8 py-4 bg-accent text-primary font-semibold rounded-lg hover:bg-accent-400 transition-colors duration-200 text-center"
              >
                Ver nuestras clases
              </Link>
              <Link
                to="/contacto"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors duration-200 text-center backdrop-blur-sm"
              >
                Contáctanos
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/60"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </motion.div>
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
              Descubrí todas las opciones que tenemos para ayudarte a dominar el inglés
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
                    className="inline-flex items-center text-accent hover:text-accent-700 font-medium transition-colors duration-200"
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

      {/* Testimonials Carousel */}
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
              Lo que dicen nuestros alumnos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Historias reales de quienes confiaron en nosotros
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-4xl mx-auto"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative bg-cream rounded-2xl p-8 lg:p-12">
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 text-[#d65661]/30">
                <svg
                  className="w-16 h-16"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Testimonial Content */}
              <div className="relative z-10 text-center">
                <p className="text-lg lg:text-xl text-gray-700 italic mb-8 leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </p>

                <div className="flex flex-col items-center">
                  {testimonials[currentTestimonial].photo ? (
                    <img
                      src={testimonials[currentTestimonial].photo}
                      alt={testimonials[currentTestimonial].author}
                      className="w-16 h-16 rounded-full object-cover mb-4"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-xl font-semibold mb-4">
                      {getInitials(testimonials[currentTestimonial].author)}
                    </div>
                  )}
                  <h4 className="font-semibold text-primary">
                    {testimonials[currentTestimonial].author}
                  </h4>
                  <p className="text-gray-500 text-sm">
                    {testimonials[currentTestimonial].role}
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-center space-x-4 mt-8">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200 text-primary hover:text-accent"
                  aria-label="Testimonio anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Dots */}
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-colors duration-200 ${
                        index === currentTestimonial
                          ? 'bg-accent'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Ir al testimonio ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200 text-primary hover:text-accent"
                  aria-label="Siguiente testimonio"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
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
              ¿Listo para empezar?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Contactanos hoy mismo y descubrí el curso de inglés perfecto para vos.
              Tu primera clase de prueba es gratuita.
            </p>
            <Link
              to="/contacto"
              className="inline-block px-8 py-4 bg-accent text-primary font-semibold rounded-lg hover:bg-accent-400 transition-colors duration-200"
            >
              Contactanos ahora
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
