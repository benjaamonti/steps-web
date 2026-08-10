import { createBrowserRouter, Outlet } from 'react-router-dom'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollToTop } from '@/components/layout/ScrollToTop'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'

// Pages
import Home from '@/pages/Home'
import Classes from '@/pages/Classes'
import Exams from '@/pages/Exams'
import Trips from '@/pages/Trips'
import Contact from '@/pages/Contact'
import NotFound from '@/pages/NotFound'

function Layout() {
  return (
    <div className="min-h-[100dvh] flex flex-col">
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
