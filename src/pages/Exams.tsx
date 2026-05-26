import { useState } from 'react'
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
import { cefrLevels, exams, comparisonTable, examProcess } from '@/data/exams'
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
  const [activeExam, setActiveExam] = useState(0)

  const currentExam = exams[activeExam]

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
                  <div className="hidden sm:flex items-center space-x-2 text-accent">
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

      {/* Section 3 - Comparativa de Exámenes */}
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
              ¿Qué examen es el indicado para vos?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Compará las diferentes opciones y elegí la que mejor se adapte a tus objetivos
            </p>
          </motion.div>

          {/* Exam Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-2 mb-8"
          >
            {exams.map((exam, index) => (
              <button
                key={exam.name}
                onClick={() => setActiveExam(index)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeExam === index
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {exam.name}
              </button>
            ))}
          </motion.div>

          {/* Exam Detail Card */}
          <motion.div
            key={activeExam}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-cream rounded-2xl p-8 lg:p-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={currentExam.logo}
                    alt={currentExam.name}
                    className="h-12 object-contain"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-primary">
                      {currentExam.name}
                    </h3>
                    <p className="text-gray-500">{currentExam.provider}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="font-semibold text-primary">Tipo:</span>
                    <span className="text-gray-600 ml-2">{currentExam.type}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-primary">Formato:</span>
                    <span className="text-gray-600 ml-2">{currentExam.format}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-primary">Validez:</span>
                    <span className="text-gray-600 ml-2">{currentExam.validity}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-primary">Reconocido por:</span>
                    <span className="text-gray-600 ml-2">{currentExam.recognizedBy}</span>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold text-primary mb-2">Habilidades evaluadas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentExam.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-white px-3 py-1 rounded-full text-sm text-gray-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-primary mb-4">Niveles disponibles:</h4>
                <div className="space-y-3">
                  {currentExam.levels.map((level, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-semibold text-primary">{level.code}</span>
                          <span className="text-gray-500 ml-2">{level.fullName}</span>
                        </div>
                        <span className="bg-accent/20 text-primary px-2 py-1 rounded text-sm">
                          {level.cefr}
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm mt-1">{level.idealFor}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">Nuestra preparación:</h4>
                  <p className="text-gray-600 text-sm">{currentExam.ourPreparation}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4 - Tabla Comparativa */}
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
              Comparativa rápida
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Resumen de las características principales de cada examen
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="overflow-x-auto"
          >
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-4 py-3 text-left rounded-tl-lg">Examen</th>
                  <th className="px-4 py-3 text-left">Organismo</th>
                  <th className="px-4 py-3 text-left">Niveles</th>
                  <th className="px-4 py-3 text-left">Validez</th>
                  <th className="px-4 py-3 text-left rounded-tr-lg">Ideal para</th>
                </tr>
              </thead>
              <tbody>
                {comparisonTable.map((row, index) => (
                  <tr
                    key={index}
                    className={`${
                      row.highlighted ? 'bg-accent/20' : index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    } hover:bg-accent/10 transition-colors duration-200`}
                  >
                    <td className="px-4 py-3 font-medium text-primary">{row.exam}</td>
                    <td className="px-4 py-3 text-gray-600">{row.provider}</td>
                    <td className="px-4 py-3 text-gray-600">{row.levels}</td>
                    <td className="px-4 py-3 text-gray-600">{row.validity}</td>
                    <td className="px-4 py-3 text-gray-600">{row.idealFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
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
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-primary font-bold text-sm z-20">
                      {step.step}
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
