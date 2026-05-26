import { createBrowserRouter, Outlet } from 'react-router-dom'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollToTop } from '@/components/layout/ScrollToTop'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'

// Pages
import Home from '@/pages/Home'
import About from '@/pages/About'
import Classes from '@/pages/Classes'
import Exams from '@/pages/Exams'
import Trips from '@/pages/Trips'
import Contact from '@/pages/Contact'
import Privacy from '@/pages/Privacy'
import NotFound from '@/pages/NotFound'

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'nosotros',
          element: <About />,
        },
        {
          path: 'nuestras-clases',
          element: <Classes />,
        },
        {
          path: 'examenes-internacionales',
          element: <Exams />,
        },
        {
          path: 'viajes-a-inglaterra',
          element: <Trips />,
        },
        {
          path: 'contacto',
          element: <Contact />,
        },
        {
          path: 'privacidad',
          element: <Privacy />,
        },
        {
          path: '*',
          element: <NotFound />,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
)
