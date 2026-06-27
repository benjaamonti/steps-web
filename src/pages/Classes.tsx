import { useState, type ElementType } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MessageCircle, Users, BookOpen, Target, ChevronDown } from 'lucide-react'
import { PageMeta } from '@/components/layout/PageMeta'
import { methodology, classLevels, faq } from '@/data/classes'
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

const levelGroups = [
  { key: 'kids', title: 'Kids', badge: 'K', badgeClass: 'bg-accent text-primary' },
  { key: 'juniors', title: 'Juniors', badge: 'J', badgeClass: 'bg-primary text-white' },
  { key: 'teens', title: 'Teens', badge: 'T', badgeClass: 'bg-accent text-primary' },
  { key: 'exams', title: 'Exams', badge: 'E', badgeClass: 'bg-primary text-white' },
] as const

export default function Classes() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  const iconMap: Record<string, ElementType> = {
    MessageCircle,
    Users,
    BookOpen,
    Target,
  }

  return (
    <>
      <PageMeta {...pageMeta['/nuestras-clases']} />

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

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
          >
            {methodology.pillars.map((pillar, index) => {
              const IconComponent = iconMap[pillar.icon] || BookOpen

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-cream p-6 rounded-xl"
                >
                  <IconComponent className="w-10 h-10 text-[#d65661] mb-4" />
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
              Todos nuestros niveles son presenciales y están pensados para acompañar cada etapa del aprendizaje.
            </p>
          </motion.div>

          <div className="space-y-14">
            {levelGroups.map((group) => {
              const levels = classLevels.filter((level) => level.group === group.key)
              const gridClass =
                group.key === 'kids'
                  ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
                  : group.key === 'juniors'
                  ? 'grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto'
                  : group.key === 'teens'
                  ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
                  : 'grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto'

              return (
                <motion.div
                  key={group.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-semibold text-primary mb-6 flex items-center">
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 ${group.badgeClass}`}>
                      {group.badge}
                    </span>
                    {group.title}
                  </h3>
                  <div className={gridClass}>
                    {levels.map((level, index) => (
                      <motion.div
                        key={level.level}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
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
                          {level.ageRange && (
                            <p className="text-sm text-accent">{level.ageRange}</p>
                          )}
                          <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                            {level.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

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
