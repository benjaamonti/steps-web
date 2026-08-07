import { motion } from 'framer-motion'
import { siteConfig } from '@/data/siteConfig'
import { SiWhatsapp } from '@icons-pack/react-simple-icons'
import { useIsMobile } from '@/hooks/use-mobile'

export function WhatsAppButton() {
  const isMobile = useIsMobile()

  if (!isMobile) {
    return null
  }

  const whatsappUrl = siteConfig.whatsappUrl

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Contactar por WhatsApp"
    >
      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden lg:block">
        Escribinos por WhatsApp
        <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 border-4 border-transparent border-l-gray-800" />
      </span>

      {/* Button */}
      <div
        className="w-14 h-14 rounded-full bg-whatsapp opacity-100 flex items-center justify-center shadow-lg hover:shadow-whatsapp/50 transition-shadow duration-300 overflow-hidden"
        style={{
          backgroundColor: 'rgb(37 211 102)',
          boxShadow: '0 4px 20px rgba(37, 211, 102, 0.45)',
        }}
      >
        <SiWhatsapp className="w-7 h-7 text-white animate-pulse-slow" />
      </div>
    </motion.a>
  )
}