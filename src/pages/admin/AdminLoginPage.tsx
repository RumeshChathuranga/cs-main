import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Eye, EyeOff, Lock, Mail, AlertCircle } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'
import { images } from '../../assets/images'

export function AdminLoginPage() {
  const { signIn, user, loading } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from =
    (location.state as { from?: { pathname: string } })?.from?.pathname ?? '/admin/dashboard'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  // Redirect if already logged in
  useEffect(() => {
    if (!loading && user) {
      navigate(from, { replace: true })
    }
  }, [user, loading, navigate, from])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !password) return

    setSubmitting(true)
    setError('')
    const { error } = await signIn(email.trim(), password)
    if (error) {
      setError('Invalid email or password. Please try again.')
    }
    setSubmitting(false)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#f5f7fa] px-4">
      {/* Card */}
      <div className="w-full max-w-[440px] overflow-hidden rounded-2xl bg-white shadow-[0px_8px_40px_rgba(26,26,46,0.12)]">
        {/* Header bar */}
        <div
          className="px-8 py-6 text-center"
          style={{ background: 'linear-gradient(135deg, #037ef3 0%, #0250a0 100%)' }}
        >
          <div className="mb-3 flex justify-center">
            <div
              className="relative size-12 overflow-hidden rounded-xl"
              style={{
                background: 'linear-gradient(135deg, #0a6fd4 0%, #037ef3 50%, #38a5ff 100%)',
                boxShadow: '0 4px 14px rgba(3,126,243,0.5)',
              }}
            >
              <span
                className="pointer-events-none absolute -top-2 -right-2 size-3/4 rounded-full"
                style={{
                  background:
                    'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.25), transparent 70%)',
                }}
              />
              <img
                src={images.logo}
                alt="AIESEC in Colombo South"
                className="absolute inset-0 size-full object-contain p-[8%]"
              />
            </div>
          </div>
          <p className="text-[11px] font-semibold tracking-[0.88px] text-white/80">
            AIESEC IN COLOMBO SOUTH
          </p>
          <h1 className="mt-1 text-[22px] font-extrabold text-white">Content Admin</h1>
          <p className="mt-1 text-[13px] text-white/70">Sign in to manage blog posts</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8">
          {error && (
            <div className="mb-5 flex items-start gap-3 rounded-lg bg-red-50 px-4 py-3">
              <AlertCircle size={16} className="mt-0.5 shrink-0 text-red-500" />
              <p className="text-[13px] text-red-700">{error}</p>
            </div>
          )}

          {/* Email */}
          <div className="mb-4">
            <label className="text-navy mb-1.5 block text-[13px] font-semibold">
              Email address
            </label>
            <div className="relative">
              <Mail
                size={16}
                className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-[#9ca3af]"
              />
              <input
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="editor@example.com"
                className="text-navy focus:border-brand focus:ring-brand/20 h-[46px] w-full rounded-xl border border-[#e5e7eb] bg-[#fafafa] pr-4 pl-10 text-[14px] placeholder:text-[#9ca3af] focus:ring-2 focus:outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="text-navy mb-1.5 block text-[13px] font-semibold">Password</label>
            <div className="relative">
              <Lock
                size={16}
                className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-[#9ca3af]"
              />
              <input
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="text-navy focus:border-brand focus:ring-brand/20 h-[46px] w-full rounded-xl border border-[#e5e7eb] bg-[#fafafa] pr-11 pl-10 text-[14px] placeholder:text-[#9ca3af] focus:ring-2 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="hover:text-navy absolute top-1/2 right-3 -translate-y-1/2 text-[#9ca3af]"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting || !email || !password}
            className="bg-brand hover:bg-brand-dark flex h-[46px] w-full items-center justify-center rounded-xl text-[15px] font-semibold text-white transition-all disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? (
              <span className="size-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
            ) : (
              'Sign in'
            )}
          </button>
        </form>
      </div>

      <p className="mt-6 text-[12px] text-[#9ca3af]">
        Access restricted to authorised AIESEC CS editors only.
      </p>
    </div>
  )
}
