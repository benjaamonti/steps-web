# English Academy - Sitio Web Oficial

Sitio web de la academia de inglés English Academy, ubicada en Mar del Plata, Argentina.

## 🗺️ Rutas de la web

| URL                         | Archivo                   | Descripción                              |
|-----------------------------|---------------------------|------------------------------------------|
| /                           | pages/Home.tsx            | Hero, highlights, previews, testimonios  |
| /nosotros                   | pages/About.tsx           | 7 secciones: historia, misión, visión,   |
|                             |                           | qué hacemos, stats, equipo, reconocim.   |
| /nuestras-clases            | pages/Classes.tsx         | Metodología, niveles kids/teens/adults   |
| /examenes-internacionales   | pages/Exams.tsx           | CEFR, comparativa, tabla, stats, proceso |
| /viajes-a-inglaterra        | pages/Trips.tsx           | Inmersión, destinos, galería, quotes     |
| /contacto                   | pages/Contact.tsx         | Builder WhatsApp, info, mapa             |
| /privacidad                 | pages/Privacy.tsx         | Política de privacidad                   |
| *                           | pages/NotFound.tsx        | Auto-redirect a / con countdown 3s       |

### Para agregar una nueva ruta:

1. Crear componente en `src/pages/`
2. Agregar entrada en `src/router/index.tsx`
3. Agregar NavLink en `src/components/layout/Navbar.tsx`
4. Agregar entrada en `src/data/pageMeta.ts`

## ⚙️ siteConfig.ts - fuente única de verdad

| Campo | Qué controla | Ejemplo |
|-------|--------------|---------|
| `businessName` | Nombre de la academia | `'English Academy'` |
| `tagline` | Slogan principal | `'Aprendé inglés de verdad...'` |
| `tabTitle` | Título de pestaña | `'English Academy \| Academia...'` |
| `metaDescription` | Meta descripción SEO | `'Academia de inglés en Mar del Plata...'` |
| `primaryColor` | Color principal (hex) | `'#1e3a5f'` |
| `accentColor` | Color de acento (hex) | `'#c9a227'` |
| `themeColor` | Color del tema móvil | `'#1e3a5f'` |
| `whatsapp` | Número sin + | `'5492236123456'` |
| `whatsappDefaultMessage` | Mensaje por defecto WA | `'Hola, me comunico desde la web...'` |
| `showExamStats` | Mostrar/ocultar gráficos | `true` / `false` |
| `contact.address` | Dirección física | `'Calle Falsa 123...'` |
| `contact.phone` | Teléfono | `'+54 9 2236 123456'` |
| `contact.email` | Email | `'info@...'` |
| `hours` | Horarios de atención | Array de objetos |
| `social.instagram` | URL Instagram | `'https://instagram.com/...'` |
| `social.facebook` | URL Facebook | `'https://facebook.com/...'` |
| `stats.years` | Años de experiencia | `25` |
| `stats.students` | Alumnos formados | `3500` |
| `stats.passRate` | % tasa aprobación | `94` |
| `stats.trips` | Viajes realizados | `45` |

## 🖼️ Cómo cambiar el LOGO

### Opción A - Logo de texto (default)

Editar `businessName` en `src/data/siteConfig.ts`:

```typescript
export const siteConfig = {
  businessName: 'Tu Nombre', // Cambiar esto
  // ...
}
```

### Opción B - Logo imagen

1. Reemplazar `/public/images/logo.svg` con tu logo
2. Editar `src/components/layout/Navbar.tsx`:

```tsx
// Reemplazar esto:
<span className="text-xl lg:text-2xl font-bold">
  {siteConfig.businessName}
</span>

// Por esto:
<img 
  src="/images/logo.svg" 
  alt={siteConfig.businessName}
  className="h-8 lg:h-10"
/>
```

## 🦸 Cómo cambiar el HERO

### Imagen:
Reemplazar `/public/images/hero/hero.jpg`

**Recomendaciones:**
- Resolución: 1920×1080px mínimo
- Formato: JPG o WebP
- Tamaño: < 500KB
- Contenido: Imagen relacionada con educación/inglés

### Texto:
Editar en `src/data/siteConfig.ts`:

```typescript
export const siteConfig = {
  tagline: 'Tu nuevo slogan aquí',
  // ...
}
```

### CTAs:
Editar en `src/pages/Home.tsx`, buscar la sección Hero y modificar:

```tsx
<Link to="/nuestras-clases">Ver nuestras clases</Link>
<Link to="/contacto">Contáctanos</Link>
```

## 🪟 Título de la pestaña del navegador

Controlado por `siteConfig.tabTitle`:

```typescript
export const siteConfig = {
  tabTitle: 'English Academy | Academia de Inglés en Mar del Plata',
  // ...
}
```

## 🌐 Redes sociales

Configurar en `siteConfig.social`:

```typescript
export const siteConfig = {
  social: {
    instagram: 'https://instagram.com/tuusuario',
    facebook: 'https://facebook.com/tuusuario',
    whatsapp: 'https://wa.me/5492236XXXXXX',
  },
  // ...
}
```

**Aparecen en:**
- Navbar (iconos)
- Sección Equipo en /nosotros (con labels)
- Columna derecha de /contacto (con labels)
- Footer (con labels)

**Para ocultar un ícono:** dejar vacío `''`

## 💬 WhatsApp

| Configuración | Descripción | Ejemplo |
|---------------|-------------|---------|
| `siteConfig.whatsapp` | Número sin + | `'5492236123456'` |
| `siteConfig.whatsappDefaultMessage` | Mensaje botón flotante | `'Hola, me comunico desde la web...'` |

El builder de `/contacto` genera el mensaje dinámicamente — no requiere cambios.

## 📊 Estadísticas de exámenes

### Para ocultar la sección:

```typescript
export const siteConfig = {
  showExamStats: false, // Oculta gráficos
  // ...
}
```

### Para actualizar datos:

Editar `src/data/exams.ts`:

```typescript
export const examStats = {
  approvalRates: [
    { exam: 'KET', rate: 98 },
    { exam: 'PET', rate: 96 },
    // ...
  ],
  levelDistribution: [
    { level: 'A1-A2', count: 45 },
    // ...
  ],
  yearlyPassed: [
    { year: 2024, passed: 218 },
    // ...
  ],
}
```

### Para eliminar definitivamente:

1. Borrar `src/components/sections/ExamStats.tsx` (si existe)
2. `npm uninstall recharts`
3. Eliminar bloque `stats` de `exams.ts`
4. Eliminar `showExamStats` de `siteConfig.ts`

## 🏆 Reconocimientos — awards.ts

```typescript
export const awards: Award[] = [
  {
    name: 'Cambridge Assessment English',
    logo: '/images/awards/cambridge.png',
    url: 'https://www.cambridgeenglish.org/',
    description: 'Centro preparador oficial',
  },
  // ...
]
```

**Logos:** PNG o SVG con fondo transparente, alto mínimo 80px, < 100KB.

**Carpeta:** `/public/images/awards/`

## 👥 Equipo — team.ts

```typescript
export const team: TeamMember[] = [
  {
    name: 'Laura Fernández',
    role: 'Directora',
    photo: '/images/team/laura.jpg',
    certifications: ['MA TESOL', 'DELTA'],
    bio: 'Fundó English Academy en 1999...',
  },
  // ...
]
```

**Fotos:** Cuadradas, 400×400px, JPG optimizado.

## 📸 Testimonios — testimonials.ts

```typescript
export const testimonials: Testimonial[] = [
  {
    quote: 'La metodología me permitió avanzar rápidamente...',
    author: 'María González',
    role: 'Alumna',
    photo: '/images/testimonials/maria.jpg', // Opcional
    type: 'class', // 'class' | 'exam' | 'trip'
    // Solo para type: 'trip':
    age: '16 años',
    destination: 'Oxford',
    year: '2023',
  },
  // ...
]
```

**Fotos:** 200×200px cuadradas. Dejar `photo: ''` para avatar con iniciales.

⚠️ **Importante:** Obtener consentimiento escrito antes de publicar fotos de personas. Consentimiento de padres/tutores obligatorio para menores.

## 📸 Fotos de clases — /public/images/classes/

```
/public/images/classes/
├── methodology.jpg        # Horizontal, 16:9, mínimo 1280×720px
├── kids/                  # Escenas de aula, cálidas y reales
│   ├── starter.jpg
│   ├── elementary.jpg
│   ├── preintermediate.jpg
│   ├── intermediate.jpg
│   └── upperintermediate.jpg
└── adults/
    ├── elementary.jpg
    ├── preintermediate.jpg
    ├── intermediate.jpg
    ├── upperintermediate.jpg
    ├── advanced.jpg
    └── conversation.jpg
```

⚠️ **Importante:** Autorización de padres/tutores obligatoria para fotos de menores.

## 🔖 Favicon

Reemplazar archivos placeholder en `/public/`:

- `favicon.ico` — 32×32px
- `favicon.svg` — Vector para navegadores modernos
- `apple-touch-icon.png` — 180×180px para iOS
- `favicon-96x96.png` — 96×96px para Android

**Herramienta recomendada:** https://realfavicongenerator.net

`siteConfig.themeColor` → color de barra en Chrome mobile.

## 🌐 Dominio y CNAME

1. Editar `public/CNAME` con el dominio real (una línea, sin https://):

```
www.tudominio.com
```

2. Editar `public/robots.txt`:

```
Sitemap: https://www.tudominio.com/sitemap.xml
```

3. Editar `VITE_SITE_URL` en `.env`:

```
VITE_SITE_URL=https://www.tudominio.com
```

4. Configurar DNS:
   - CNAME: `www` → `USERNAME.github.io`
   - O registros A para dominio apex:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153

## 🔍 SEO

### Schema.org en index.html

Reemplazar todos los `PLACEHOLDER_` con datos reales:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "English Academy",
  "url": "https://www.tudominio.com",
  "logo": "https://www.tudominio.com/images/logo.svg",
  // ...
}
</script>
```

### Meta tags por página

Editar `src/data/pageMeta.ts`:

```typescript
export const pageMeta: Record<string, PageMetaProps> = {
  '/': {
    title: 'Título de la home',
    description: 'Descripción SEO',
    image: '/images/og/og-home.jpg',
    url: 'https://www.tudominio.com/',
  },
  // ...
}
```

### OG Images

Reemplazar placeholders en `/public/images/og/`:

- `og-home.jpg` — 1200×630px
- `og-nosotros.jpg`
- `og-clases.jpg`
- `og-examenes.jpg`
- `og-viajes.jpg`
- `og-contacto.jpg`
- `og-default.jpg`

## 🚀 Deploy

### Desarrollo local:

```bash
npm install
npm run dev
```

### Build:

```bash
npm run build
```

### Deploy a GitHub Pages:

```bash
npm run deploy
```

### Checklist primer deploy:

- [ ] Dominio real en `public/CNAME`
- [ ] PLACEHOLDER_DOMAIN reemplazado en `robots.txt` e `index.html`
- [ ] `VITE_SITE_URL` configurado en `.env`
- [ ] GitHub Pages habilitado: Settings → Pages → Branch: gh-pages
- [ ] Dominio personalizado configurado en Settings → Pages
- [ ] "Enforce HTTPS" activado cuando propague el DNS

## 📁 Estructura del proyecto

```
/
├── public/
│   ├── CNAME
│   ├── 404.html
│   ├── robots.txt
│   ├── favicon.*
│   ├── apple-touch-icon.png
│   └── images/
│       ├── hero/
│       ├── og/
│       ├── classes/
│       ├── exams/
│       ├── trips/
│       ├── team/
│       ├── awards/
│       └── testimonials/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── PageMeta.tsx
│   │   │   └── ScrollToTop.tsx
│   │   └── ui/
│   │       ├── WhatsAppButton.tsx
│   │       ├── BackToTop.tsx
│   │       ├── Lightbox.tsx
│   │       └── skeletons/
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Classes.tsx
│   │   ├── Exams.tsx
│   │   ├── Trips.tsx
│   │   ├── Contact.tsx
│   │   ├── Privacy.tsx
│   │   └── NotFound.tsx
│   ├── data/
│   │   ├── siteConfig.ts
│   │   ├── pageMeta.ts
│   │   ├── classes.ts
│   │   ├── exams.ts
│   │   ├── trips.ts
│   │   ├── awards.ts
│   │   ├── team.ts
│   │   └── testimonials.ts
│   ├── hooks/
│   │   └── useScrollReveal.ts
│   ├── router/
│   │   └── index.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .env.example
├── vite.config.ts
├── tailwind.config.ts
├── package.json
└── README.md
```

## 🛠️ Tecnologías

- **React 18** + TypeScript
- **Vite** — bundler y dev server
- **Tailwind CSS** — estilos
- **shadcn/ui** — componentes UI
- **React Router v6** — enrutamiento
- **Framer Motion** — animaciones
- **Recharts** — gráficos (exámenes)
- **react-helmet-async** — meta tags
- **vite-plugin-sitemap** — sitemap.xml

## 📄 Licencia

Este proyecto es propiedad de English Academy. Todos los derechos reservados.