import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  MessageCircle,
} from 'lucide-react'
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

const asuntoOptions = [
  'Información general',
  'Inscripción a clases',
  'Exámenes internacionales',
  'Viajes a Inglaterra',
  'Otro',
]

export default function Contact() {
  const [searchParams] = useSearchParams()
  const [nombre, setNombre] = useState('')
  const [asunto, setAsunto] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [showPreview, setShowPreview] = useState(false)

  // Read subject from URL params
  useEffect(() => {
    const subject = searchParams.get('subject')
    if (subject) {
      const decoded = decodeURIComponent(subject.replace(/\+/g, ' '))
      const matchingOption = asuntoOptions.find(
        (opt) => opt.toLowerCase() === decoded.toLowerCase()
      )
      if (matchingOption) {
        setAsunto(matchingOption)
      }
    }
  }, [searchParams])

  // Build WhatsApp message
  const builtMessage = `Hola! Soy ${nombre || '[tu nombre]'}${asunto ? `. Motivo: ${asunto}` : ''}.${mensaje ? `\n\n${mensaje}` : ''}`

  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(builtMessage)}`

  // Show preview when user starts typing
  useEffect(() => {
    if (nombre || mensaje) {
      setShowPreview(true)
    }
  }, [nombre, mensaje])

  return (
    <>
      <PageMeta {...pageMeta['/contacto']} />

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
              Contacto
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Estamos aquí para ayudarte. Escribinos por WhatsApp y te respondemos a la brevedad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Message Builder */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants} className="mb-8">
                <h2 className="text-2xl font-bold text-primary mb-2">
                  Escribinos por WhatsApp
                </h2>
                <p className="text-gray-600">
                  Completá los campos y te redirigimos a WhatsApp con el mensaje listo.
                </p>
              </motion.div>

              {/* Form Fields (Visual Only) */}
              <motion.div variants={itemVariants} className="space-y-6">
                {/* Nombre */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Tu nombre"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-200"
                  />
                </div>

                {/* Asunto */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Asunto
                  </label>
                  <select
                    value={asunto}
                    onChange={(e) => setAsunto(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-200"
                  >
                    <option value="">Seleccionar asunto</option>
                    {asuntoOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Mensaje */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje libre
                  </label>
                  <textarea
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    placeholder="Contanos más sobre tu consulta..."
                    maxLength={300}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-200 resize-none"
                  />
                  <p className="text-right text-sm text-gray-500 mt-1">
                    {mensaje.length}/300
                  </p>
                </div>
              </motion.div>

              {/* Live Preview */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: showPreview ? 1 : 0,
                  height: showPreview ? 'auto' : 0,
                }}
                transition={{ duration: 0.3 }}
                className="mt-8 overflow-hidden"
              >
                <p className="text-sm text-gray-600 mb-2">Así verá tu mensaje:</p>
                <div className="bg-[#DCF8C6] rounded-lg p-4 rounded-tl-none max-w-sm">
                  <p className="text-gray-800 whitespace-pre-wrap text-sm">
                    {builtMessage}
                  </p>
                  <p className="text-right text-xs text-gray-500 mt-2">
                    {new Date().toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div variants={itemVariants} className="mt-8">
                <motion.a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-3 px-8 py-4 bg-whatsapp text-white font-semibold rounded-lg hover:bg-whatsapp-dark transition-colors duration-200"
                  style={{
                    boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg
                    className="w-6 h-6 animate-pulse-slow"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>Abrir WhatsApp</span>
                </motion.a>
                <p className="text-center text-sm text-gray-500 mt-4">
                  Te redirigiremos a WhatsApp con el mensaje pre-cargado.
                  <br />
                  Podés editarlo antes de enviarlo.
                </p>
              </motion.div>
            </motion.div>

            {/* Right Column - Contact Info */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Contact Details */}
              <motion.div variants={itemVariants} className="bg-cream p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-primary mb-6">
                  Información de contacto
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-primary">Dirección</span>
                      <p className="text-gray-600">{siteConfig.contact.address}</p>
                    </div>
                  </li>
                  <li className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-accent flex-shrink-0" />
                    <div>
                      <span className="font-medium text-primary">Teléfono</span>
                      <a
                        href={`tel:${siteConfig.contact.phone}`}
                        className="block text-gray-600 hover:text-accent transition-colors duration-200"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-accent flex-shrink-0" />
                    <div>
                      <span className="font-medium text-primary">Email</span>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="block text-gray-600 hover:text-accent transition-colors duration-200"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </li>
                </ul>
              </motion.div>

              {/* Opening Hours */}
              <motion.div variants={itemVariants} className="bg-cream p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-primary mb-6 flex items-center">
                  <Clock className="w-6 h-6 text-accent mr-2" />
                  Horarios de atención
                </h3>
                <ul className="space-y-3">
                  {siteConfig.hours.map((hour, index) => (
                    <li key={index} className="flex justify-between">
                      <span className="text-gray-600">{hour.day}</span>
                      <span className="font-medium text-primary">{hour.time}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Secondary WhatsApp Button */}
              <motion.div variants={itemVariants}>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                    siteConfig.whatsappDefaultMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 w-full px-6 py-3 border-2 border-whatsapp text-whatsapp font-medium rounded-lg hover:bg-whatsapp hover:text-white transition-colors duration-200"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp rápido</span>
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div variants={itemVariants}>
                <h3 className="text-lg font-bold text-primary mb-4">Seguinos</h3>
                <div className="flex space-x-4">
                  {siteConfig.social.instagram && (
                    <a
                      href={siteConfig.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors duration-200"
                    >
                      <Instagram className="w-6 h-6" />
                      <span>Instagram</span>
                    </a>
                  )}
                  {siteConfig.social.facebook && (
                    <a
                      href={siteConfig.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors duration-200"
                    >
                      <Facebook className="w-6 h-6" />
                      <span>Facebook</span>
                    </a>
                  )}
                </div>
              </motion.div>

              {/* Map */}
              <motion.div variants={itemVariants} className="rounded-2xl overflow-hidden">
                <iframe
                  src={siteConfig.mapsUrl}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de English Academy"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
