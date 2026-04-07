import { Link } from 'react-router-dom'
import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react'
import { siteConfig } from '@/data/siteConfig'

const navLinks = [
  { path: '/', label: 'Inicio' },
  { path: '/nosotros', label: 'Nosotros' },
  { path: '/nuestras-clases', label: 'Nuestras Clases' },
  { path: '/examenes-internacionales', label: 'Exámenes Internacionales' },
  { path: '/viajes-a-inglaterra', label: 'Viajes a Inglaterra' },
  { path: '/contacto', label: 'Contacto' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-bold text-white">
                {siteConfig.businessName}
              </span>
            </Link>
            <p className="mt-4 text-white/80 text-sm leading-relaxed">
              Más de 25 años formando estudiantes de inglés en Mar del Plata. 
              Clases para todas las edades, exámenes internacionales y viajes de inmersión.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center space-x-3 mt-6">
              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-white/80 hover:text-accent transition-colors duration-200"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="text-sm">Instagram</span>
                </a>
              )}
            </div>
            {siteConfig.social.facebook && (
              <div className="flex items-center space-x-3 mt-2">
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-white/80 hover:text-accent transition-colors duration-200"
                >
                  <Facebook className="w-5 h-5" />
                  <span className="text-sm">Facebook</span>
                </a>
              </div>
            )}
            {siteConfig.social.whatsapp && (
              <div className="flex items-center space-x-3 mt-2">
                <a
                  href={siteConfig.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-white/80 hover:text-whatsapp transition-colors duration-200"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span className="text-sm">WhatsApp</span>
                </a>
              </div>
            )}
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Navegación</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/80 hover:text-accent transition-colors duration-200 text-sm"
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
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm">{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-white/80 hover:text-accent transition-colors duration-200 text-sm"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-white/80 hover:text-accent transition-colors duration-200 text-sm"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Horarios</h3>
            <ul className="space-y-3">
              {siteConfig.hours.map((hour, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
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
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm text-center md:text-left">
              © {currentYear} {siteConfig.businessName}. Todos los derechos reservados.
            </p>
            <Link
              to="/privacidad"
              className="text-white/60 hover:text-accent transition-colors duration-200 text-sm"
            >
              Política de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}