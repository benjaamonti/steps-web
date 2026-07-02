// --- Base Configuration Values ---
// Edit these core values to update contact info, handles, and URLs across the entire site.
const businessName = 'Steps'
const siteUrl = 'https://www.steps.qzz.io'
const experienceYears = 25

// Address details
const addressStreet = 'Av. Fortunato de la Plaza 2667'
const addressPostalCode = 'B7603FLI'
const addressLocality = 'Mar del Plata'
const addressRegion = 'Provincia de Buenos Aires'
const addressCountry = 'AR'
const fullAddress = `${addressStreet}, ${addressPostalCode} ${addressLocality}, ${addressRegion}`

// Contact & Social Usernames (without '@' or link prefixes)
const phone = '223 484-2215'
const email = 'info@steps.com.ar'
const whatsappNumber = '5492234389267'
const whatsappDisplay = '+54 9 223 438-9267'
const whatsappDefaultMessage = 'Hola, me comunico desde la web y quisiera obtener más información.'
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappDefaultMessage)}`
const instagramUsername = 'stepsmdp'
const facebookUsername = 'steps.school.of.english'

// --- Exported Site Configuration ---
export const siteConfig = {
  businessName,
  tagline: 'Aprendé inglés y disfrutá del proceso',
  tabTitle: `${businessName} | School of English`,
  metaDescription: `Academia de inglés en ${addressLocality}. Clases para niños y adolescentes. Preparación para exámenes internacionales Cambridge. Viajes de inmersión a Inglaterra.`,
  siteUrl,
  experienceYears,
  experienceText: `Más de ${experienceYears} años formando estudiantes de inglés en ${addressLocality}.`,
  primaryColor: '#1d3d5d',
  accentColor: '#e47f71',
  themeColor: '#1d3d5d',
  ogImage: '/images/og/og-default.jpg',
  mapsUrl: `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`,
  whatsapp: whatsappNumber,
  whatsappUrl,
  whatsappDefaultMessage,
  contact: {
    address: fullAddress,
    addressStreet,
    addressLocality,
    addressRegion,
    addressCountry,
    phone,
    email,
    whatsappDisplay,
  },
  hours: [
    { day: 'Lunes a Viernes', time: '9:00 - 21:00' },
    { day: 'Sábados', time: '9:00 - 13:00' },
  ],
  social: {
    instagram: `https://instagram.com/${instagramUsername}`,
    instagramHandle: `@${instagramUsername}`,
    instagramUsername,
    facebook: `https://facebook.com/${facebookUsername}`,
    facebookHandle: `@${facebookUsername}`,
    facebookUsername,
    whatsapp: whatsappUrl,
  },
}


