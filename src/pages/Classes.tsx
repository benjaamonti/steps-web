import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MessageCircle, Users, BookOpen, Target, ChevronDown, MapPin, Monitor, Layers } from 'lucide-react'
import { PageMeta } from '@/components/layout/PageMeta'
import { methodology, classLevels, schedules, faq } from '@/data/classes'
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

const modalityIcons: Record<string, React.ElementType> = {
  'Presencial': MapPin,
  'Online': Monitor,
  'Híbrido': Layers,
}

export default function Classes() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const kidsLevels = classLevels.filter((l) => l.group === 'kids' || l.group === 'teens')
  const adultLevels = classLevels.filter((l) => l.group === 'adults')

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  return (
    <>
      <PageMeta {...pageMeta['/nuestras-clases']} />

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
              Nuestras Clases
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Clases de inglés para todas las edades y niveles. Aprendé de manera efectiva y divertida.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 1 - Metodología */}
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
                Nuestra Metodología
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                {methodology.intro}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/classes/methodology.jpg"
                  alt="Nuestra metodología"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Pillars */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
          >
            {methodology.pillars.map((pillar, index) => {
              const IconComponent =
                {
                  MessageCircle,
                  Users,
                  BookOpen,
                  Target,
                }[pillar.icon] || BookOpen

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-cream p-6 rounded-xl"
                >
                  <IconComponent className="w-10 h-10 text-accent mb-4" />
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{pillar.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Section 2 - Nuestros Niveles */}
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
              Nuestros Niveles
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Realizamos una evaluación de nivel gratuita para ubicarte en el curso más adecuado para vos.
            </p>
          </motion.div>

          {/* Kids & Teens */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-semibold text-primary mb-6 flex items-center">
              <span className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-primary text-sm font-bold mr-3">
                K
              </span>
              Kids & Teens
            </h3>
            <div className="overflow-x-auto pb-4 -mx-4 px-4 lg:mx-0 lg:px-0">
              <div className="flex space-x-6 lg:grid lg:grid-cols-5 min-w-max lg:min-w-0">
                {kidsLevels.map((level, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="w-72 lg:w-auto flex-shrink-0 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={level.image}
                        alt={level.level}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-primary">{level.level}</h4>
                      {level.ageRange && (
                        <p className="text-sm text-accent">{level.ageRange}</p>
                      )}
                      <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                        {level.description}
                      </p>
                      <div className="flex flex-wrap gap-1 mt-3">
                        {level.modality.map((mod, modIndex) => (
                          <span
                            key={modIndex}
                            className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded"
                          >
                            {mod}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Adults */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-primary mb-6 flex items-center">
              <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                A
              </span>
              Adultos
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {adultLevels.map((level, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={level.image}
                      alt={level.level}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-primary">{level.level}</h4>
                    <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                      {level.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {level.modality.map((mod, modIndex) => (
                        <span
                          key={modIndex}
                          className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded"
                        >
                          {mod}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3 - Horarios y Modalidades */}
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
              Horarios y Modalidades
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Elegí la opción que mejor se adapte a tu rutina
            </p>
          </motion.div>

          {/* Modalities */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <motion.div variants={itemVariants} className="bg-cream p-6 rounded-xl text-center">
              <MapPin className="w-10 h-10 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-primary mb-2">Presencial</h3>
              <p className="text-gray-600 text-sm">
                Clases en nuestras aulas con interacción cara a cara y material didáctico.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-cream p-6 rounded-xl text-center">
              <Monitor className="w-10 h-10 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-primary mb-2">Online</h3>
              <p className="text-gray-600 text-sm">
                Clases en vivo por videollamada con la misma calidad y seguimiento.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-cream p-6 rounded-xl text-center">
              <Layers className="w-10 h-10 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-primary mb-2">Híbrido</h3>
              <p className="text-gray-600 text-sm">
                Combinación de clases presenciales y online para mayor flexibilidad.
              </p>
            </motion.div>
          </motion.div>

          {/* Schedule Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="overflow-x-auto"
          >
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-4 py-3 text-left rounded-tl-lg">Día</th>
                  <th className="px-4 py-3 text-left">Horario</th>
                  <th className="px-4 py-3 text-left">Nivel</th>
                  <th className="px-4 py-3 text-left rounded-tr-lg">Modalidad</th>
                </tr>
              </thead>
              <tbody>
                {schedules.map((schedule, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? 'bg-cream' : 'bg-white'
                    } hover:bg-accent/10 transition-colors duration-200`}
                  >
                    <td className="px-4 py-3 text-gray-700">{schedule.day}</td>
                    <td className="px-4 py-3 text-gray-700">{schedule.time}</td>
                    <td className="px-4 py-3 text-gray-700">{schedule.level}</td>
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center space-x-1 text-sm">
                        {(() => {
                          const Icon = modalityIcons[schedule.modality] || MapPin
                          return <Icon className="w-4 h-4 text-accent" />
                        })()}
                        <span className="text-gray-700">{schedule.modality}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Section 4 - FAQ Accordion */}
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
              Preguntas Frecuentes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Todo lo que necesitás saber sobre nuestras clases
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto space-y-4"
          >
            {faq.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-medium text-primary">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-accent transition-transform duration-300 ${
                      openFaqIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaqIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 pb-4 text-gray-600">{item.answer}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 5 - CTA */}
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
              ¿Querés empezar o tenés dudas?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Contactanos y te ayudamos a elegir el curso perfecto para vos.
              Tu primera clase de prueba es gratuita.
            </p>
            <Link
              to="/contacto?subject=Inscripción+a+clases"
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