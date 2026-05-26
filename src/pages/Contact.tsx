import { motion } from 'framer-motion'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
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

export default function Contact() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}`

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
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp/10 text-whatsapp transition-colors duration-200 group-hover:bg-whatsapp">
                  <svg
                    className="h-7 w-7 text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="text-lg font-semibold text-primary">WhatsApp</p>
                  <p className="text-sm text-gray-600">Escribinos directo al chat</p>
                  <p className="mt-1 text-sm font-medium text-whatsapp">
                    wa.me/{siteConfig.whatsapp}
                  </p>
                </div>
              </motion.a>

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
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
