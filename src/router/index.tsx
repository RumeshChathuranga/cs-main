import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from '../components/layout/RootLayout'
import { AdminLayout } from '../components/layout/AdminLayout'
import { ProtectedRoute } from '../components/admin/ProtectedRoute'
import { HomePage } from '../pages/HomePage'
import { AboutPage } from '../pages/AboutPage'
import { BlogPage } from '../pages/BlogPage'
import { BlogArticlePage } from '../pages/BlogArticlePage'
import { GlobalVolunteerPage } from '../pages/GlobalVolunteerPage'
import { GlobalTalentPage } from '../pages/GlobalTalentPage'
import { GlobalTeacherPage } from '../pages/GlobalTeacherPage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { AdminLoginPage } from '../pages/admin/AdminLoginPage'
import { AdminDashboardPage } from '../pages/admin/AdminDashboardPage'
import { AdminPostEditorPage } from '../pages/admin/AdminPostEditorPage'

export const router = createBrowserRouter([
  // ── Public website (with Navbar + Footer) ──────────────────────────────
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/blog', element: <BlogPage /> },
      { path: '/blog/:id', element: <BlogArticlePage /> },
      { path: '/programs/global-volunteer', element: <GlobalVolunteerPage /> },
      { path: '/programs/global-talent', element: <GlobalTalentPage /> },
      { path: '/programs/global-teacher', element: <GlobalTeacherPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },

  // ── Admin login (no layout wrapper) ───────────────────────────────────
  { path: '/admin', element: <AdminLoginPage /> },

  // ── Admin panel (sidebar layout, protected) ───────────────────────────
  {
    element: (
      <ProtectedRoute>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: '/admin/dashboard', element: <AdminDashboardPage /> },
      { path: '/admin/posts/new', element: <AdminPostEditorPage /> },
      { path: '/admin/posts/:id/edit', element: <AdminPostEditorPage /> },
    ],
  },
])
