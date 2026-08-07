import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { SiInstagram, SiFacebook, SiWhatsapp } from '@icons-pack/react-simple-icons'
import { siteConfig } from '@/data/siteConfig'

const navLinks = [
  { path: '/', label: 'Inicio' },
  { path: '/nuestras-clases', label: 'Nuestras Clases' },
  { path: '/examenes-internacionales', label: 'Exámenes Internacionales' },
  { path: '/viajes-a-inglaterra', label: 'Viajes a Inglaterra' },
  { path: '/contacto', label: 'Contacto' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-black/20 backdrop-blur-md'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/images/logo.svg"
              alt={siteConfig.businessName}
              className="h-8 w-auto lg:h-10 shrink-0 transition-all duration-300"
              style={{
                filter: isScrolled ? 'none' : 'brightness(0) invert(1)',
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? isScrolled
                        ? 'text-primary bg-primary/10'
                        : 'text-white bg-white/20'
                      : isScrolled
                      ? 'text-gray-700 hover:text-primary hover:bg-gray-100'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Social Icons - Desktop */}
          <div className="hidden lg:flex items-center space-x-2">
            {siteConfig.social.instagram && (
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-all duration-200 ${
                  isScrolled
                    ? 'text-gray-600 hover:text-primary hover:bg-gray-100'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
                aria-label="Instagram"
              >
                <SiInstagram className="w-5 h-5" />
              </a>
            )}
            {siteConfig.social.facebook && (
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-all duration-200 ${
                  isScrolled
                    ? 'text-gray-600 hover:text-primary hover:bg-gray-100'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
                aria-label="Facebook"
              >
                <SiFacebook className="w-5 h-5" />
              </a>
            )}
            {siteConfig.social.whatsapp && (
              <a
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-all duration-200 ${
                  isScrolled
                    ? 'text-gray-600 hover:text-whatsapp hover:bg-gray-100'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
                aria-label="WhatsApp"
              >
                <SiWhatsapp className="w-5 h-5" />
              </a>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors duration-200 ${
              isScrolled
                ? 'text-gray-700 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t shadow-lg"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-md text-base font-medium transition-all duration-200 ${
                        isActive
                          ? 'text-primary bg-primary/10'
                          : 'text-gray-700 hover:text-primary hover:bg-gray-100'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>

              {/* Social Icons - Mobile */}
              <div className="flex items-center justify-center space-x-4 mt-6 pt-6 border-t">
                {siteConfig.social.instagram && (
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full text-gray-600 hover:text-primary hover:bg-gray-100 transition-all duration-200"
                    aria-label="Instagram"
                  >
                    <SiInstagram className="w-6 h-6" />
                  </a>
                )}
                {siteConfig.social.facebook && (
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full text-gray-600 hover:text-primary hover:bg-gray-100 transition-all duration-200"
                    aria-label="Facebook"
                  >
                    <SiFacebook className="w-6 h-6" />
                  </a>
                )}
                {siteConfig.social.whatsapp && (
                  <a
                    href={siteConfig.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full text-gray-600 hover:text-whatsapp hover:bg-gray-100 transition-all duration-200"
                    aria-label="WhatsApp"
                  >
                    <SiWhatsapp className="w-6 h-6" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}