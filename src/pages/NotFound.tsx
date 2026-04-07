import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PageMeta } from '@/components/layout/PageMeta'

export default function NotFound() {
  const navigate = useNavigate()
  const [countdown, setCountdown] = useState(3)

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          navigate('/')
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [navigate])

  const handleClick = () => {
    navigate('/')
  }

  return (
    <>
      <PageMeta
        title="Página no encontrada | English Academy"
        description="La página que buscás no existe. Serás redirigido al inicio."
      />

      <div
        className="min-h-screen flex items-center justify-center bg-cream cursor-pointer"
        onClick={handleClick}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center px-4"
        >
          {/* 404 Illustration */}
          <div className="mb-8">
            <svg
              className="w-32 h-32 mx-auto text-primary/30"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v2h-2v-2zm0-2h2V7h-2v8z" />
            </svg>
          </div>

          <h1 className="text-6xl lg:text-8xl font-bold text-primary mb-4">
            404
          </h1>
          <h2 className="text-2xl lg:text-3xl font-semibold text-primary mb-4">
            Página no encontrada
          </h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Lo sentimos, la página que estás buscando no existe o ha sido movida.
          </p>

          <div className="text-lg text-gray-500">
            <p>
              Volviendo al inicio en{' '}
              <span className="font-bold text-accent text-2xl">{countdown}</span>...
            </p>
          </div>

          <p className="text-sm text-gray-400 mt-8">
            Hacé clic en cualquier lugar para ir al inicio ahora
          </p>
        </motion.div>
      </div>
    </>
  )
}