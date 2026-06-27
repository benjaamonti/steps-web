import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
} from 'recharts'
import {
  Globe,
  FileText,
  GraduationCap,
  ClipboardCheck,
  Calendar,
  FileQuestion,
  Award,
} from 'lucide-react'
import { PageMeta } from '@/components/layout/PageMeta'
import { cefrLevels, examProcess } from '@/data/exams'
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

const processIcons: Record<string, React.ElementType> = {
  ClipboardCheck,
  Calendar,
  FileQuestion,
  Award,
}

export default function Exams() {
  return (
    <>
      <PageMeta {...pageMeta['/examenes-internacionales']} />

      {/* Page Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/exams/hero-exams.jpg)' }}
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
              Exámenes Internacionales
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Preparación para las certificaciones más reconocidas del mundo. 
              Abrí puertas a universidades, empleos y oportunidades internacionales.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 1 - Qué son los exámenes */}
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
                ¿Qué son los Exámenes Internacionales?
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Los exámenes internacionales son certificaciones oficiales que acreditan 
                  tu nivel de inglés de manera objetiva y estandarizada. A diferencia de 
                  las notas escolares, estas certificaciones son reconocidas por universidades, 
                  empleadores y gobiernos de todo el mundo.
                </p>
                <p>
                  Las certificaciones Cambridge, por ejemplo, tienen validez permanente: 
                  una vez que aprobás, tu certificado no vence. Esto significa que podés 
                  usarlo toda tu vida para demostrar tu dominio del idioma.
                </p>
                <p>
                  Estas certificaciones son aceptadas por más de 25,000 instituciones 
                  en todo el mundo, incluyendo universidades de prestigio como Harvard, 
                  Oxford y Cambridge, así como empresas multinacionales y organismos gubernamentales.
                </p>
              </div>

              {/* Highlight Chips */}
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center space-x-2 bg-accent/20 text-primary px-4 py-2 rounded-full">
                  <Globe className="w-5 h-5" />
                  <span className="font-medium text-sm">Reconocidos mundialmente</span>
                </div>
                <div className="flex items-center space-x-2 bg-accent/20 text-primary px-4 py-2 rounded-full">
                  <FileText className="w-5 h-5" />
                  <span className="font-medium text-sm">Validez permanente</span>
                </div>
                <div className="flex items-center space-x-2 bg-accent/20 text-primary px-4 py-2 rounded-full">
                  <GraduationCap className="w-5 h-5" />
                  <span className="font-medium text-sm">+25,000 instituciones</span>
                </div>
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
                  src="/images/exams/Award.jpg"
                  alt="Certificado internacional"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2 - Marco CEFR */}
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
              Los niveles del idioma: Marco Común Europeo (MCER)
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              El Marco Común Europeo de Referencia para las Lenguas (MCER o CEFR en inglés) 
              es el estándar internacional que define los niveles de competencia lingüística. 
              Es utilizado por exámenes, empleadores y universidades de todo el mundo.
            </p>
          </motion.div>

          {/* CEFR Ladder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto space-y-3"
          >
            {cefrLevels.map((level, index) => (
              <motion.div
                key={level.code}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`flex items-center p-4 rounded-lg ${
                  level.highlighted
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-600'
                }`}
              >
                <div
                  className={`w-16 h-16 rounded-lg flex items-center justify-center text-2xl font-bold mr-6 ${
                    level.highlighted ? 'bg-accent text-primary' : 'bg-gray-200'
                  }`}
                >
                  {level.code}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{level.label}</h3>
                  <p className={level.highlighted ? 'text-white/80' : 'text-gray-500'}>
                    {level.description}
                  </p>
                </div>
                {level.highlighted && (
                  <div className="hidden sm:flex items-center space-x-2 text-[#d65661]">
                    <Award className="w-5 h-5" />
                    <span className="text-sm font-medium">Preparamos</span>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center text-gray-500 mt-8 text-sm"
          >
            Los niveles A2-B2 corresponden a KET, PET y FCE de Cambridge. 
            Los niveles C1-C2 corresponden a CAE y CPE.
          </motion.p>
        </div>
      </section>



      {/* Section 6 - Proceso de Preparación */}
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
              Nuestro Proceso de Preparación
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Te acompañamos en cada paso hasta obtener tu certificación
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Timeline Line - Desktop */}
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-primary/20" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {examProcess.map((step, _index) => {
                const IconComponent = processIcons[step.icon] || ClipboardCheck
                return (
                  <motion.div
                    key={step.step}
                    variants={itemVariants}
                    className="relative text-center"
                  >
                    {/* Step Number */}
                    <div className="w-24 h-24 mx-auto bg-primary rounded-full flex items-center justify-center mb-4 relative z-10">
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>

                    <h3 className="font-semibold text-primary mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 7 - CTA */}
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
              ¿Qué examen es el tuyo?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Hacemos un diagnóstico gratuito para orientarte sobre cuál es el examen 
              más adecuado para tu nivel y objetivos.
            </p>
            <Link
              to="/contacto?subject=Exámenes+Internacionales"
              className="inline-block px-8 py-4 bg-accent text-primary font-semibold rounded-lg hover:bg-accent-400 transition-colors duration-200"
            >
              Solicitar diagnóstico gratuito
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
