import { motion } from 'framer-motion'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from 'lucide-react'
import { SiInstagram, SiFacebook, SiWhatsapp } from '@icons-pack/react-simple-icons'
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

export default function Contact() {
  const whatsappUrl = siteConfig.whatsappUrl

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
            {/* Left Column - WhatsApp Card */}
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
                  Hacé clic en la tarjeta para abrir WhatsApp directamente.
                </p>
              </motion.div>

              <motion.a
                variants={itemVariants}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-whatsapp/20 bg-white p-6 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
                aria-label={`Abrir WhatsApp de ${siteConfig.businessName}`}
              >
                <div className="flex h-14 w-14 items-center justify-center text-[#d65661]">
                  <SiWhatsapp className="h-7 w-7 text-[#d65661]" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-primary">WhatsApp</p>
                  <p className="text-sm text-gray-600">Escribinos directo al chat</p>
                </div>
              </motion.a>

              {/* Social Links */}
              <motion.div variants={itemVariants} className="mt-8 bg-cream p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-primary mb-6">Seguinos</h3>
                <div className="flex flex-col space-y-4">
                  {siteConfig.social.instagram && (
                    <a
                      href={siteConfig.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 text-gray-600 hover:text-[#d65661] transition-colors duration-200"
                    >
                      <SiInstagram className="w-6 h-6 text-[#d65661] flex-shrink-0" />
                      <span>{siteConfig.social.instagramHandle}</span>
                    </a>
                  )}
                  {siteConfig.social.facebook && (
                    <a
                      href={siteConfig.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 text-gray-600 hover:text-[#d65661] transition-colors duration-200"
                    >
                      <SiFacebook className="w-6 h-6 text-[#d65661] flex-shrink-0" />
                      <span>{siteConfig.social.facebookHandle}</span>
                    </a>
                  )}
                </div>
              </motion.div>

              {/* Map */}
              <motion.div variants={itemVariants} className="mt-8 rounded-2xl overflow-hidden bg-cream">
                <div className="p-6 pb-4">
                  <h3 className="text-xl font-bold text-primary">
                    Encontranos en el mapa
                  </h3>
                </div>
                <iframe
                  src={siteConfig.mapsUrl}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de Steps"
                />
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
                    <MapPin className="w-6 h-6 text-[#d65661] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-primary">Dirección</span>
                      <a
                        href={siteConfig.contact.googleMapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-gray-600 hover:text-[#d65661] transition-colors duration-200"
                      >
                        {siteConfig.contact.address}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-[#d65661] flex-shrink-0" />
                    <div>
                      <span className="font-medium text-primary">Teléfono</span>
                      <a
                        href={`tel:${siteConfig.contact.phone}`}
                        className="block text-gray-600 hover:text-[#d65661] transition-colors duration-200"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-[#d65661] flex-shrink-0" />
                    <div>
                      <span className="font-medium text-primary">Email</span>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="block text-gray-600 hover:text-[#d65661] transition-colors duration-200"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </li>
                </ul>
              </motion.div>

              {/* Opening Hours */}
              <motion.div variants={itemVariants} className="bg-cream p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-primary mb-6">
                  Horarios de atención
                </h3>
                <ul className="space-y-4">
                  {siteConfig.hours.map((hour, index) => (
                    <li key={index} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
                      <div className="flex items-center space-x-4">
                        <Clock className="w-6 h-6 text-[#d65661] flex-shrink-0" />
                        <span className="text-gray-600 font-medium sm:font-normal">{hour.day}</span>
                      </div>
                      <span className="font-medium text-primary pl-10 sm:pl-0 text-sm sm:text-base">{hour.time}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>


            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
