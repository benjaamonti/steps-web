# Steps School of English · sitio web

Sitio de Steps, instituto de inglés para chicos y adolescentes en Mar del Plata. React + TypeScript + Vite + Tailwind, publicado en GitHub Pages en `benjamonti.me` (pronto `steps.com.ar`).

## Pendientes

### TODO en el código

Están marcados con `TODO`; buscalos en el proyecto.

- [ ] `src/data/classes.ts`: preguntas frecuentes por completar: ¿Cuánto cuesta? · ¿Qué libros usan? · ¿Hay cursos para adultos? · ¿Sigue el curso online de B2 First?
- [ ] `src/data/testimonials.ts`: los testimonios de viaje 2 y 3 (Sofi y Eze) son resúmenes. Reemplazarlos por la cita exacta de los videos de Instagram y confirmar el permiso de las familias.

### Para hacer

- [ ] Subir las imágenes que faltan (sección Imágenes → Falta subir).
- [ ] Migrar el dominio a `steps.com.ar` (sección Dominio).
- [ ] Volver a mostrar "Lo que dicen quienes viajaron" cuando tengas los testimonios. Los textos van en `src/data/testimonials.ts`; la sección está comentada en `Trips.tsx`: descomentá el bloque, el import de `testimonials` y la línea de `tripTestimonials`.

### Textos para revisar

- [ ] Ahora se preparan A1, A2 y B1 además de B2 y C1, pero estos textos nombran solo B2 First y C1 Advanced, y algunos mencionan Movers:
  - Tarjeta "Exámenes Internacionales" de Inicio (`previewCards` en `Home.tsx`).
  - Pregunta "¿Qué pasa después de 6th Level?" (`classes.ts`).
  - Descripción de Kids 4 (`classes.ts`): "pueden rendir Movers".
- [ ] Exámenes: el botón final dice "Solicitar diagnóstico gratuito", pero el texto ya no dice que sea gratis.
- [ ] Footer: dice "Más de 25 años formando estudiantes…" (`experienceYears` en `siteConfig.ts`) y ¿Quiénes somos? dice "más de 30 años".
- [ ] SEO: las descripciones de `src/data/pageMeta.ts` siguen con texto de la plantilla ("niños, adolescentes y adultos", "profesores nativos y certificados", "Londres, Oxford, Cambridge y más destinos").
- [ ] Página 404: el título de la pestaña dice "Página no encontrada | English Academy" (`NotFound.tsx`).

### Mejoras sugeridas

- [ ] Niveles: `line-clamp-3` en `Classes.tsx` corta las descripciones a 3 líneas. Con los textos actuales se cortan 4 tarjetas en un celular de 390px (Kids 1, Kids 3, Kids 4 y Juniors 1), 13 a 640px y 8 a 1024px. Con `line-clamp-5` se ven completas en todos los anchos (medido de 360 a 1440px).
- [ ] Exámenes: el paso 5 del proceso ("Entrega de certificados") muestra el mismo ícono que el paso 1, porque `'Certificate'` no está en `processIcons` (`Exams.tsx`).
- [ ] Galerías: al ampliar una foto, el alt es genérico ("Imagen 3"); las miniaturas sí tienen el correcto. Se cambia en `Lightbox.tsx`.
- [ ] Limpieza: borrar las imágenes sin uso y los restos de la plantilla (secciones al final).

## Comandos

| Comando | Para qué |
|---|---|
| `npm install` | Instalar dependencias (la primera vez) |
| `npm run dev` | Ver el sitio en local mientras editás |
| `npm run build` | Compilar a `dist/`. Si compila sin errores, se puede publicar |
| `npm run preview` | Ver la versión compilada |
| `npm run lint` | Revisar el código |

**Publicar:** es automático. Cada push a `main` corre `.github/workflows/deploy.yml`, que compila y sube el sitio a GitHub Pages.

## Páginas

| URL | Archivo | Secciones, en orden |
|---|---|---|
| `/` | `src/pages/Home.tsx` | Hero · ¿Quiénes somos? · Reconocimientos · ¿Qué ofrecemos? · ¿Empezamos? |
| `/nuestras-clases` | `src/pages/Classes.tsx` | Encabezado · Nuestra Metodología · Proyectos y Open Classes · Nuestros Niveles · Preguntas Frecuentes · Llamado final |
| `/examenes-internacionales` | `src/pages/Exams.tsx` | Encabezado · ¿Qué son los Exámenes Internacionales? · Niveles MCER · Proceso de Preparación · Llamado final |
| `/viajes-a-inglaterra` | `src/pages/Trips.tsx` | Encabezado · ¿Qué es un Viaje de Inmersión? · Por qué viajar con Steps · Qué incluye el viaje · Galería · Testimonios (comentada por ahora) · Preguntas frecuentes · Llamado final |
| `/contacto` | `src/pages/Contact.tsx` | Encabezado · WhatsApp, redes y mapa · Datos de contacto y horarios |
| cualquier otra | `src/pages/NotFound.tsx` | 404 que vuelve al inicio a los 3 segundos |

## Dónde está cada texto

Los títulos de sección, bajadas, párrafos y llamados finales están escritos directo en cada página (`src/pages/`). Las listas (tarjetas, niveles, ítems, preguntas) están en `src/data/` o en un array al principio de la página. Para encontrar un texto, lo más rápido es buscarlo en todo el proyecto (Ctrl+Shift+F en VS Code).

| Qué | Dónde |
|---|---|
| Teléfono, email, dirección, WhatsApp, Instagram, Facebook, horarios y mapa | `src/data/siteConfig.ts` |
| Mensaje que se precarga al abrir WhatsApp | `siteConfig.ts` → `whatsappDefaultMessage` |
| Frase grande del hero | `siteConfig.ts` → `tagline` |
| Frase del footer ("Más de 25 años…") | `siteConfig.ts` → `experienceYears` (el número) y `experienceText` (la frase) |
| Franja de reconocimientos y tarjetas de "¿Qué ofrecemos?" | `recognitions` y `previewCards`, al principio de `Home.tsx` |
| Metodología, niveles (descripción y foto) y preguntas de Clases | `src/data/classes.ts`. En la tarjeta de cada nivel se ven hasta 3 líneas de descripción (`line-clamp-3` en `Classes.tsx`) |
| Nombres de los grupos de niveles (Kids, Juniors, Teens, Exams) | `levelGroups`, al principio de `Classes.tsx` |
| Fotos de "Proyectos y Open Classes" | `projectImages`, al principio de `Classes.tsx` |
| Niveles MCER y pasos del proceso | `src/data/exams.ts`. `highlighted: true` pinta la fila de azul y le agrega "Preparamos" |
| "Por qué viajar con Steps", "Qué incluye el viaje" y preguntas del viaje | `src/data/trips.ts` → `whyEngland`, `tripIncludes`, `tripFaq` |
| Fotos de la galería de viajes | `galleryImages`, al principio de `Trips.tsx` |
| Testimonios | `src/data/testimonials.ts`. Solo se usan los `type: 'trip'`, en Viajes (la sección está comentada por ahora) |
| Título de la pestaña y texto que aparece en Google y al compartir el link | `src/data/pageMeta.ts`, uno por página |
| Menú de arriba | `navLinks` en `src/components/layout/Navbar.tsx` |
| Footer | `src/components/layout/Footer.tsx` (tiene su propia lista `navLinks`) |
| Colores | `tailwind.config.ts` (`primary`, `accent`, `cream`). El coral de íconos y links (`#d65661`) y el fondo del footer (`#16495d`) están escritos directo en los componentes |

**Íconos:** los ítems de `src/data/` dicen qué ícono usan (`icon: 'Users'`, con los nombres de [lucide.dev](https://lucide.dev/icons)). Si ponés uno nuevo, agregalo también al mapa de íconos de la página (`iconMap`, `processIcons`, `whyEnglandIcons` o `includeIcons`); si no está en el mapa, se muestra el ícono por defecto.

## Imágenes

Todas van en `public/images/`, y las rutas de esta sección son relativas a esa carpeta. En el código se escriben sin `public`: el archivo `public/images/home/clases.jpg` es `/images/home/clases.jpg`.

- Usá el nombre exacto, en minúsculas y con la misma extensión. En GitHub Pages `Foto.JPG` y `foto.jpg` son archivos distintos.
- Las fotos de iPhone suelen venir en `.heic`, que no todos los navegadores muestran: exportalas como JPG.
- Las fotos del celular pesan varios MB. Antes de subirlas, achicalas a unos 1600 px de ancho (el hero, 1920 px) y comprimilas, por ejemplo con squoosh.app.
- Las fotos se recortan para llenar el formato indicado, así que conviene que lo importante quede en el centro.
- Para cambiar una foto que ya está, reemplazá el archivo con el mismo nombre. Si le cambiás el nombre o la carpeta, cambiá también la ruta en el archivo que indica cada sección.

### Falta subir

Hasta que estén, en esos lugares se ve una imagen rota.

- [x] `awards/oxford-quality.png`
- [ ] `awards/cambridge-preparation-centre.png`
- [ ] `home/clases.jpg`, `home/examenes.jpg` y `home/viajes.jpg`
- [ ] `classes/projects/1.jpg` a `8.jpg`
- [ ] `classes/levels/`: las 16 fotos de niveles

### Inicio (rutas en `src/pages/Home.tsx`)

| Archivo | Qué va | Formato |
|---|---|---|
| `hero/hero.jpg` | Fondo del hero | Pantalla completa |
| `about/history.jpg` | ¿Quiénes somos? | 16:9 en celular, 4:3 en compu |
| `awards/oxford-quality.png` | Logo Oxford Quality | 64 px de alto, ancho libre. PNG con fondo transparente o blanco |
| `awards/cambridge-preparation-centre.png` | Logo Cambridge English Preparation Centre | Igual que el anterior |
| `home/clases.jpg` | Tarjeta "Nuestras Clases": Little Steps en una Open Class | 16:9 |
| `home/examenes.jpg` | Tarjeta "Exámenes Internacionales": alumnos con sus certificados de Cambridge | 16:9 |
| `home/viajes.jpg` | Tarjeta "Viajes a Inglaterra": alumnos de Steps en Londres | 16:9 |

### Nuestras Clases (rutas en `src/pages/Classes.tsx` y `src/data/classes.ts`)

| Archivo | Qué va | Formato |
|---|---|---|
| `classes/methodology.jpg` | Metodología: alumnos usando la pantalla interactiva | 16:9 |
| `classes/projects/1.jpg` a `8.jpg` | Galería "Proyectos y Open Classes" (lista abajo) | Cuadrada; al tocarla se ve entera |
| `classes/levels/*.jpg` | Una foto por nivel (lista abajo) | 4:3 |

Proyectos, en orden:

1. Animals Open Class de Kids con las familias
2. Kids 3 y una clase inspirada en Matilda
3. Kids 2 y su Family Cooking Book
4. Kids 4 convierte el Playroom en sala de teatro
5. Kids 3 y sus maquetas inspiradas en Elementos
6. Country Fair de 1st Level
7. Talk show de 3rd Level
8. Mock trial de 5th Level

Niveles: `little-steps.jpg`, `first-steps.jpg`, `kids-1.jpg`, `kids-2.jpg`, `kids-3.jpg`, `kids-4.jpg`, `juniors-1.jpg`, `juniors-2.jpg`, `1st-level.jpg`, `2nd-level.jpg`, `3rd-level.jpg`, `4th-level.jpg`, `5th-level.jpg`, `6th-level.jpg`, `b2-first.jpg`, `c1-advanced.jpg`.

### Exámenes Internacionales (ruta en `src/pages/Exams.tsx`)

| Archivo | Qué va | Formato |
|---|---|---|
| `exams/certificate.jpg` | ¿Qué son los Exámenes Internacionales?: entrega de certificados en Steps | 4:3 |

### Viajes a Inglaterra (rutas en `src/pages/Trips.tsx`)

| Archivo | Qué va | Formato |
|---|---|---|
| `trips/immersion.jpg` | ¿Qué es un Viaje de Inmersión?: el grupo en el viaje 2026 | 4:3 |
| `trips/gallery/1.jpg` a `8.jpg` | Galería (lista abajo) | Cuadrada; al tocarla se ve entera |

Galería, en orden:

1. Oxford, Bridge of Sighs
2. Oxford, Radcliffe Camera
3. Grupo de Steps con su bandera, 2026
4. Chinatown, Londres
5. King's College, Cambridge
6. Sacré-Cœur, París
7. Stonehenge
8. Torre Eiffel, París

### Generales

| Archivo | Qué es | Ruta en |
|---|---|---|
| `logo.svg` | Logo del menú y del footer (en el footer se ve blanco) | `Navbar.tsx`, `Footer.tsx` |
| `og/og-home.jpg`, `og-clases.jpg`, `og-examenes.jpg`, `og-viajes.jpg`, `og-contacto.jpg` | Vista previa al compartir el link de cada página (WhatsApp, redes). 1200×630 | `src/data/pageMeta.ts` |
| `og/og-default.jpg` | Vista previa de las páginas sin imagen propia (la 404) | `siteConfig.ts` → `ogImage` |
| Favicons, en `public/` y no en `images/`: `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png`, `android-chrome-192x192.png`, `android-chrome-512x512.png` | Ícono de la pestaña y del acceso directo en el celular | `index.html`, `public/site.webmanifest` |

### Imágenes sin uso

No aparecen en ninguna página; se pueden borrar sin romper nada:

- Carpetas enteras: `team/`, `testimonials/`, `classes/kids/`, `classes/adults/`
- En `exams/`: todo menos `certificate.jpg`
- En `hero/`: todo menos `hero.jpg`
- En `trips/`: todo menos `immersion.jpg` y `gallery/`
- `og/og-nosotros.jpg`

## Componentes propios

| Archivo | Qué hace |
|---|---|
| `src/components/ui/Gallery.tsx` | Grilla de fotos con visor ampliado. La usan Clases y Viajes; recibe `images` (`src` y `alt` de cada foto) |
| `src/components/ui/FaqList.tsx` | Preguntas desplegables. La usan Clases y Viajes; recibe `items` (`question` y `answer`) |
| `src/components/ui/WhatsAppButton.tsx` | Botón flotante de WhatsApp, solo en celular |
| `src/components/layout/PageMeta.tsx` | Título de la pestaña, descripción y datos para Google y redes |
| `src/components/layout/Navbar.tsx`, `Footer.tsx` | Menú y pie de página |

Si cambiás `Gallery.tsx` o `FaqList.tsx`, el cambio se ve en las dos páginas. El resto de `src/components/ui/` son componentes de la librería shadcn que el sitio no usa.

## Dominio

Hoy el sitio está en `https://benjamonti.me` (`www.benjamonti.me` redirige ahí). `steps.qzz.io` era un dominio de prueba y ya no se usa. Pronto se migra a `steps.com.ar`.

Para migrar:

1. En el proveedor del dominio, apuntar el DNS a GitHub Pages: registros A a `185.199.108.153`, `185.199.109.153`, `185.199.110.153` y `185.199.111.153`, y un CNAME de `www` a `<usuario>.github.io`.
2. GitHub → Settings → Pages → Custom domain: poner el dominio nuevo. Esto es lo que define dónde se publica; Pages admite un solo dominio, así que `benjamonti.me` deja de mostrar el sitio.
3. Cambiar el dominio en el código y hacer push:
   - `vite.config.ts` → `siteUrl`: dominio de `sitemap.xml` y `robots.txt`.
   - `src/data/siteConfig.ts` → `siteUrl`: links canónicos e imágenes al compartir.
   - `public/CNAME`: con el deploy por GitHub Actions no se usa, pero conviene dejarlo igual para no confundirse.
4. Cuando el DNS propague, activar "Enforce HTTPS" en Settings → Pages.

`sitemap.xml` y `robots.txt` no están en `public/`: los genera `vite-plugin-sitemap` en cada build, con la configuración de `vite.config.ts`.

`public/404.html` y el script de `index.html` hacen que funcionen las URLs internas en GitHub Pages (por ejemplo, entrar directo a `/contacto`). No hace falta tocarlos.

## Agregar una página

1. Crear el archivo en `src/pages/`.
2. Agregar la ruta en `src/router/index.tsx`.
3. Agregar el link en `navLinks` de `Navbar.tsx` y de `Footer.tsx`.
4. Agregar título y descripción en `src/data/pageMeta.ts`.
5. Agregar la URL en `dynamicRoutes` de `vite.config.ts`, para el sitemap.

## Restos de la plantilla

El sitio arrancó de una plantilla genérica. Esto quedó en el código pero no se muestra en ningún lado, así que editarlo no cambia nada:

- `src/data/awards.ts` y `src/data/team.ts`
- `trips` en `src/data/trips.ts`; `exams` y `comparisonTable` en `src/data/exams.ts`
- En `testimonials.ts`: los testimonios `type: 'class'` y `'exam'`, y el campo `photo`
- En `siteConfig.ts`: `tabTitle`, `primaryColor`, `accentColor` y `themeColor`. El color de la barra del navegador en celular está en `index.html` y en `site.webmanifest`
- `src/App.css` e `info.md`
