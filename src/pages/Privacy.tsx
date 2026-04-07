import { motion } from 'framer-motion'
import { PageMeta } from '@/components/layout/PageMeta'
import { siteConfig } from '@/data/siteConfig'
import { pageMeta } from '@/data/pageMeta'

export default function Privacy() {
  return (
    <>
      <PageMeta {...pageMeta['/privacidad']} />

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
              Política de Privacidad
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Tu privacidad es importante para nosotros
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto prose prose-lg"
          >
            <p className="text-gray-600 mb-8">
              Última actualización: {new Date().toLocaleDateString('es-AR')}
            </p>

            <div className="space-y-8 text-gray-600">
              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  1. Información que recopilamos
                </h2>
                <p>
                  En {siteConfig.businessName}, recopilamos la siguiente información cuando 
                  nos contactás a través de nuestro sitio web:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Nombre y apellido</li>
                  <li>Número de teléfono (cuando nos contactás por WhatsApp)</li>
                  <li>Consulta o mensaje que nos enviés</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  2. Cómo usamos tu información
                </h2>
                <p>Utilizamos la información recopilada para:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Responder a tus consultas y solicitudes de información</li>
                  <li>Proporcionarte información sobre nuestros cursos y servicios</li>
                  <li>Coordinar inscripciones y evaluaciones de nivel</li>
                  <li>Enviarte información relevante sobre la academia (solo con tu consentimiento)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  3. Protección de datos
                </h2>
                <p>
                  Nos comprometemos a proteger tu información personal. Implementamos 
                  medidas de seguridad adecuadas para proteger tus datos contra acceso 
                  no autorizado, alteración, divulgación o destrucción.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  4. Compartir información
                </h2>
                <p>
                  No vendemos, comercializamos ni transferimos tu información personal 
                  a terceros. Tu información solo es utilizada internamente por nuestro 
                  equipo para los fines descritos en esta política.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  5. Cookies
                </h2>
                <p>
                  Nuestro sitio web puede utilizar cookies para mejorar tu experiencia 
                  de navegación. Las cookies son pequeños archivos que se almacenan en 
                  tu dispositivo y nos ayudan a entender cómo utilizás nuestro sitio.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  6. Tus derechos
                </h2>
                <p>Tenés derecho a:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Acceder a tu información personal</li>
                  <li>Solicitar la corrección de datos incorrectos</li>
                  <li>Solicitar la eliminación de tus datos</li>
                  <li>Retirar tu consentimiento para el uso de tus datos</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  7. Cambios en esta política
                </h2>
                <p>
                  Podemos actualizar esta política de privacidad periódicamente. Te 
                  recomendamos revisar esta página regularmente para estar informado 
                  sobre cualquier cambio.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  8. Contacto
                </h2>
                <p>
                  Si tenés alguna pregunta sobre esta política de privacidad o sobre 
                  cómo manejamos tus datos personales, podés contactarnos a través de:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Email: {siteConfig.contact.email}</li>
                  <li>Teléfono: {siteConfig.contact.phone}</li>
                  <li>Dirección: {siteConfig.contact.address}</li>
                </ul>
              </section>
            </div>

            <div className="mt-12 p-6 bg-cream rounded-xl">
              <p className="text-sm text-gray-500">
                <strong>Nota importante:</strong> Esta política de privacidad es un 
                modelo y debe ser revisada y adaptada por un profesional legal para 
                asegurar su cumplimiento con la legislación aplicable, incluyendo la 
                Ley de Protección de Datos Personales de Argentina (Ley 25.326).
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}