import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../stores/authStore'

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth()
  const location = useLocation()

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f5f7fa]">
        <div className="border-brand size-8 animate-spin rounded-full border-4 border-t-transparent" />
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/admin" state={{ from: location }} replace />
  }

  return <>{children}</>
}
