import { Link } from 'react-router-dom'
import { MapPin, Mail, Clock } from 'lucide-react'
import { SiInstagram, SiFacebook, SiWhatsapp } from '@icons-pack/react-simple-icons'
import { siteConfig } from '@/data/siteConfig'

const navLinks = [
  { path: '/', label: 'Inicio' },
  { path: '/nuestras-clases', label: 'Nuestras Clases' },
  { path: '/examenes-internacionales', label: 'Exámenes Internacionales' },
  { path: '/viajes-a-inglaterra', label: 'Viajes a Inglaterra' },
  { path: '/contacto', label: 'Contacto' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#16495d] text-white border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block">
              <img
                src="/images/logo.svg"
                alt={siteConfig.businessName}
                className="h-10 w-auto transition-all duration-300"
                style={{
                  filter: 'brightness(0) invert(1)',
                }}
              />
            </Link>
            <p className="mt-4 text-white/80 text-sm leading-relaxed">
              {siteConfig.experienceText}
            </p>

          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Navegación</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/80 hover:text-[#d65661] transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#d65661] flex-shrink-0 mt-0.5" />
                <a
                  href={siteConfig.contact.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-[#d65661] transition-colors duration-200 text-sm"
                >
                  {siteConfig.contact.address}
                </a>
              </li>
              {siteConfig.social.whatsapp && (
                <li className="flex items-center space-x-3">
                  <SiWhatsapp className="w-5 h-5 text-[#d65661] flex-shrink-0" />
                  <a
                    href={siteConfig.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-[#d65661] transition-colors duration-200 text-sm"
                  >
                    {siteConfig.contact.whatsappDisplay}
                  </a>
                </li>
              )}
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#d65661] flex-shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-white/80 hover:text-[#d65661] transition-colors duration-200 text-sm"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              {siteConfig.social.instagram && (
                <li className="flex items-center space-x-3">
                  <SiInstagram className="w-5 h-5 text-[#d65661] flex-shrink-0" />
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-[#d65661] transition-colors duration-200 text-sm"
                  >
                    {siteConfig.social.instagramHandle}
                  </a>
                </li>
              )}
              {siteConfig.social.facebook && (
                <li className="flex items-center space-x-3">
                  <SiFacebook className="w-5 h-5 text-[#d65661] flex-shrink-0" />
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-[#d65661] transition-colors duration-200 text-sm"
                  >
                    {siteConfig.social.facebookHandle}
                  </a>
                </li>
              )}

            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Horarios</h3>
            <ul className="space-y-3">
              {siteConfig.hours.map((hour, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-[#d65661] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-medium text-sm">{hour.day}</span>
                    <span className="text-white/80 text-sm block">{hour.time}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm text-center">
              © {currentYear} {siteConfig.businessName}. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}