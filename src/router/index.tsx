import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from '../components/layout/RootLayout'
import { HomePage } from '../pages/HomePage'
import { AboutPage } from '../pages/AboutPage'
import { BlogPage } from '../pages/BlogPage'
import { GlobalVolunteerPage } from '../pages/GlobalVolunteerPage'
import { GlobalTalentPage } from '../pages/GlobalTalentPage'
import { NotFoundPage } from '../pages/NotFoundPage'

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/blog', element: <BlogPage /> },
      { path: '/programs/global-volunteer', element: <GlobalVolunteerPage /> },
      { path: '/programs/global-talent', element: <GlobalTalentPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
