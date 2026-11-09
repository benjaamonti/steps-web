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

{/* const recognitions = [
  {
    logo: '/images/awards/oxford-quality.png',
    alt: 'Oxford Quality, Oxford University Press',
    title: 'Programa Oxford Quality',
    description: 'Seleccionados por Oxford University Press por nuestra calidad académica.',
  },
  {
    logo: '/images/awards/cambridge-preparation-centre.png',
    alt: 'Cambridge English Preparation Centre',
    title: 'Centro de preparación oficial de Cambridge',
    description: 'Preparamos e inscribimos a nuestros alumnos a través de Buenos Aires Open Centre, y fuimos sede de exámenes en Steps.',
  },
] */}

const previewCards = [
  {
    icon: GraduationCap,
    title: 'Nuestras Clases',
    description: 'Niveles para niños y adolescentes, en grupos reducidos, con pantallas interactivas en todas nuestras aulas, proyectos y clases abiertas con las familias.',
    image: '/images/home/clases.jpg',
    alt: 'Little Steps en una Open Class',
    link: '/nuestras-clases',
  },
  {
    icon: FileText,
    title: 'Exámenes Internacionales',
    description: 'Preparación de exánmenes internacionales de la Universidad de Cambridge.',
    image: '/images/home/examenes.jpg',
    alt: 'Alumnos con sus certificados de Cambridge',
    link: '/examenes-internacionales',
  },
  {
    icon: Plane,
    title: 'Viajes a Inglaterra',
    description: 'Dos semanas en una summer school británica, excursiones por Inglaterra y, en muchos viajes, cierre en París. Para niños de 13 a 17 años. Próximo viaje: julio 2028.',
    image: '/images/home/viajes.jpg',
    alt: 'Alumnos de Steps en Londres',
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
                  Steps es un instituto de inglés para niños y adolescentes en Mar del Plata, con más de 30 años de trayectoria.
                </p>
                <p>
                  En Steps se aprende haciendo. Cada grupo prepara proyectos en inglés (obras de teatro, museos, ferias, debates) y abrimos el aula a las familias en nuestras Open Classes para mostrar lo que aprendieron. Trabajamos con grupos reducidos y atención personalizada.
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

      {/* Recognitions 
      <section className="py-20 lg:py-28 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {recognitions.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-xl text-center"
              >
                <img
                  src={item.logo}
                  alt={item.alt}
                  className="h-16 w-auto object-contain mx-auto mb-4"
                />
                <h3 className="font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

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
              Clases para cada edad, preparación para los exámenes Internacionales de la Universidad de Cambridge y viajes de estudio a Inglaterra.
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
                    alt={card.alt}
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
