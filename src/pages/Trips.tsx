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
} from 'lucide-react'
import { PageMeta } from '@/components/layout/PageMeta'
import { whyEngland, tripIncludes, tripFaq } from '@/data/trips'
// import { testimonials } from '@/data/testimonials'
import { pageMeta } from '@/data/pageMeta'
import { Gallery, type GalleryImage } from '@/components/ui/Gallery'
import { FaqList } from '@/components/ui/FaqList'

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
const galleryImages: GalleryImage[] = [
  { src: '/images/trips/gallery/1.jpg', alt: 'Oxford, Bridge of Sighs' },
  { src: '/images/trips/gallery/2.jpg', alt: 'Oxford, Radcliffe Camera' },
  { src: '/images/trips/gallery/3.jpg', alt: 'Grupo de Steps con su bandera, 2026' },
  { src: '/images/trips/gallery/4.jpg', alt: 'Chinatown, Londres' },
  { src: '/images/trips/gallery/5.jpg', alt: 'King\'s College, Cambridge' },
  { src: '/images/trips/gallery/6.jpg', alt: 'Sacré-Cœur, París' },
  { src: '/images/trips/gallery/7.jpg', alt: 'Stonehenge' },
  { src: '/images/trips/gallery/8.jpg', alt: 'Torre Eiffel, París' },
]

export default function Trips() {
  // const tripTestimonials = testimonials.filter((t) => t.type === 'trip')

  return (
    <>
      <PageMeta {...pageMeta['/viajes-a-inglaterra']} />

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
              Viajes a Inglaterra
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Dos semanas de clases en una summer school británica, excursiones por
              Inglaterra y, en muchos viajes, cierre en París. Para chicos de 13 a 17 años.
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
                  Steps organiza viajes educativos al Reino Unido junto a Together. El grupo
                  viaja en julio y pasa dos semanas en una summer school internacional: clases
                  de inglés, actividades por la tarde, chicos de otros países y excursiones.
                </p>
                <p>
                  En 2026 el grupo estuvo en Leighton Park Summer School, en Reading. En 2022
                  y 2024 viajamos a Bishop's Stortford College, y en 2019 a Clifton College,
                  en Bristol.
                </p>
                <p>
                  Pueden viajar chicos de entre 13 y 17 años al momento del viaje que estén en
                  3rd Level o un nivel superior. El próximo viaje es en julio de 2028: el grupo
                  ya está confirmado y todavía hay lugar.
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
                  alt="Grupo de Steps durante el viaje 2026"
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
              Por qué viajar con Steps
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Un viaje que preparamos y acompañamos de principio a fin
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
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

          <Gallery images={galleryImages} />
        </div>
      </section>

      {/* Section 6 - Testimonios: oculta hasta tener las citas (ver TODO en src/data/testimonials.ts).
          Para mostrarla, descomentá este bloque, el import de testimonials y tripTestimonials.
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
      */}

      {/* Section 7 - Preguntas frecuentes */}
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
              Preguntas frecuentes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lo que más nos preguntan las familias sobre el viaje
            </p>
          </motion.div>

          <FaqList items={tripFaq} />
        </div>
      </section>

      {/* Section 8 - CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              ¿Querés que tu hijo viva esta experiencia?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Ya estamos preparando el viaje de julio 2028. Escribinos y te contamos
              fechas, requisitos y cuándo es la próxima reunión informativa.
            </p>
            <Link
              to="/contacto?subject=Viajes+a+Inglaterra"
              className="inline-block px-8 py-4 bg-accent text-primary font-semibold rounded-lg hover:bg-accent-400 transition-colors duration-200"
            >
              Solicitar información
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}