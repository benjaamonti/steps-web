import { Helmet } from 'react-helmet-async'
import { siteConfig } from '@/data/siteConfig'

interface PageMetaProps {
  title: string
  description: string
  image?: string
  url?: string
}

export function PageMeta({ title, description, image, url }: PageMetaProps) {
  const ogImage = image || siteConfig.ogImage
  const canonicalUrl = url || 'https://www.englishacademymardelplata.com'

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://www.englishacademymardelplata.com${ogImage}`} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="es_AR" />
      <meta property="og:site_name" content={siteConfig.businessName} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://www.englishacademymardelplata.com${ogImage}`} />
    </Helmet>
  )
}