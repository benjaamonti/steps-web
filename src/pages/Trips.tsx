import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Landmark,
  GraduationCap,
  Globe,
  Rocket,
  Plane,
  Home,
  BookOpen,
  Map,
  Shield,
  UserCheck,
  ChevronDown,
} from 'lucide-react'
import { PageMeta } from '@/components/layout/PageMeta'
import { trips, whyEngland, tripIncludes } from '@/data/trips'
import { testimonials } from '@/data/testimonials'
import { pageMeta } from '@/data/pageMeta'
import { Lightbox } from '@/components/ui/Lightbox'
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

const whyEnglandIcons: Record<string, React.ElementType> = {
  Landmark,
  GraduationCap,
  Globe,
  Rocket,
}

const includeIcons: Record<string, React.ElementType> = {
  Plane,
  Home,
  BookOpen,
  Map,
  Shield,
  UserCheck,
}

// Gallery images
const galleryImages = [
  '/images/trips/gallery/1.jpg',
  '/images/trips/gallery/2.jpg',
  '/images/trips/gallery/3.jpg',
  '/images/trips/gallery/4.jpg',
  '/images/trips/gallery/5.jpg',
  '/images/trips/gallery/6.jpg',
  '/images/trips/gallery/7.jpg',
  '/images/trips/gallery/8.jpg',
]

export default function Trips() {
  const [expandedTrip, setExpandedTrip] = useState<number | null>(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [galleryLoaded, setGalleryLoaded] = useState(false)

  const tripTestimonials = testimonials.filter((t) => t.type === 'trip')

  const toggleTrip = (index: number) => {
    setExpandedTrip(expandedTrip === index ? null : index)
  }

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  // Simulate gallery loading
  setTimeout(() => setGalleryLoaded(true), 500)

  return (
    <>
      <PageMeta {...pageMeta['/viajes-a-inglaterra']} />

      {/* Page Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/trips/hero-england.jpg)' }}
        >
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Viajes a Inglaterra
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Viví el idioma en su contexto cultural original. Una experiencia 
              transformadora que acelera tu aprendizaje.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 1 - Qué es un viaje de inmersión */}
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
                ¿Qué es un Viaje de Inmersión?
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Un viaje de inmersión lingüística es mucho más que un viaje turístico. 
                  Es una experiencia educativa donde vivís el idioma inglés las 24 horas 
                  del día: en las clases, con tu familia anfitriona, en las excursiones 
                  y en cada interacción cotidiana.
                </p>
                <p>
                  A diferencia del turismo tradicional, donde el inglés puede ser opcional, 
                  en un viaje de inmersión te ves obligado a comunicarte en inglés constantemente. 
                  Esta necesidad real de comunicación acelera el aprendizaje de manera exponencial.
                </p>
                <p>
                  Nuestros viajes están diseñados para estudiantes de 13 a 18 años con nivel 
                  intermedio de inglés. La combinación de clases formales en escuelas locales 
                  con hablantes nativos y la experiencia de vida diaria en Inglaterra produce 
                  un "salto de nivel" que normalmente llevaría años de clases regulares.
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
                  src="/images/trips/immersion.jpg"
                  alt="Viaje de inmersión"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2 - Por qué Inglaterra */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Por qué Inglaterra
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              El lugar perfecto para vivir una experiencia lingüística auténtica
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12"
          >
            {whyEngland.map((item, index) => {
              const IconComponent = whyEnglandIcons[item.icon] || Globe
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white p-6 rounded-xl shadow-md"
                >
                  <IconComponent className="w-10 h-10 text-[#d65661] mb-4" />
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-primary/5 p-8 rounded-2xl"
          >
            <p className="text-gray-700 text-center leading-relaxed">
              Un viaje de inmersión a Inglaterra no solo mejora tu inglés: te abre 
              la mente a nuevas culturas, te da independencia y confianza, y crea 
              recuerdos que duran toda la vida. Muchos de nuestros alumnos describen 
              el viaje como "la mejor experiencia de mi vida" y "un antes y un después" 
              en su relación con el idioma.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 3 - Nuestros Destinos */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Nuestros Destinos
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Elegí entre las ciudades más emblemáticas de Inglaterra
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {trips.map((trip, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={trip.image}
                    alt={trip.destination}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-primary">
                      {trip.destination}
                    </h3>
                    <span className="text-sm bg-accent/20 text-primary px-3 py-1 rounded-full">
                      {trip.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">
                    <span className="font-medium">Edades:</span> {trip.ageRange}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    <span className="font-medium">Próxima salida:</span> {trip.nextDate}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {trip.highlights.slice(0, 3).map((highlight, hIndex) => (
                      <span
                        key={hIndex}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Expandable Includes */}
                  <button
                    onClick={() => toggleTrip(index)}
                    className="w-full flex items-center justify-between text-accent hover:text-accent-700 font-medium transition-colors duration-200"
                  >
                    <span>¿Qué incluye?</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        expandedTrip === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      expandedTrip === index ? 'max-h-96 mt-4' : 'max-h-0'
                    }`}
                  >
                    <ul className="space-y-2">
                      {trip.includes.map((item, iIndex) => (
                        <li key={iIndex} className="flex items-center text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 4 - Qué incluye el viaje */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Qué incluye el viaje
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Todo lo necesario para una experiencia segura y enriquecedora
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6"
          >
            {tripIncludes.map((item, index) => {
              const IconComponent = includeIcons[item.icon] || Plane
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white p-6 rounded-xl text-center"
                >
                  <IconComponent className="w-10 h-10 text-[#d65661] mx-auto mb-4" />
                  <h3 className="font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Section 5 - Galería */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Momentos de nuestros viajes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Imágenes que capturan la esencia de la experiencia
            </p>
          </motion.div>

          {!galleryLoaded ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <SkeletonImage key={index} aspectRatio="aspect-square" />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="aspect-square overflow-hidden rounded-lg cursor-pointer group"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image}
                    alt={`Galería ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={galleryImages}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={nextImage}
        onPrev={prevImage}
      />

      {/* Section 6 - Testimonios */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Lo que dicen quienes viajaron
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experiencias reales de nuestros alumnos
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {tripTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative bg-white p-8 rounded-xl shadow-md border-l-4 border-accent"
              >
                {/* Decorative Quote */}
                <div className="absolute top-4 right-4 text-[#d65661]/20">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <p className="text-gray-700 italic mb-6 relative z-10">
                  "{testimonial.quote}"
                </p>

                <p className="text-primary font-medium">
                  — {testimonial.author}
                  {testimonial.age && `, ${testimonial.age}`}
                  {testimonial.destination && ` · ${testimonial.destination}`}
                  {testimonial.year && ` · ${testimonial.year}`}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 7 - CTA */}
      <section className="py-20 lg:py-28 bg-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              ¿Querés que tu hijo viva esta experiencia?
            </h2>
            <p className="text-lg text-primary/80 mb-8 max-w-2xl mx-auto">
              Contactanos para recibir información sobre las próximas salidas, 
              requisitos y proceso de inscripción.
            </p>
            <Link
              to="/contacto?subject=Viajes+a+Inglaterra"
              className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200"
            >
              Solicitar información
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}