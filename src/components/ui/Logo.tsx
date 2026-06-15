import { Link } from 'react-router-dom'
import { images } from '../../assets/images'

interface LogoProps {
  variant?: 'default' | 'white'
  size?: 'sm' | 'md' | 'lg'
}

export function Logo({ variant = 'default', size = 'md' }: LogoProps) {
  const isWhite = variant === 'white'

  const dims = {
    sm: { icon: 32, title: 11, sub: 8 },
    md: { icon: 40, title: 13, sub: 9 },
    lg: { icon: 48, title: 15, sub: 10 },
  }[size]

  return (
    <Link to="/" className="group flex items-center gap-3">
      {/* Icon container — clean gradient background, no background image */}
      <div
        className="relative shrink-0 overflow-hidden rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_4px_14px_rgba(3,126,243,0.45)]"
        style={{
          width: dims.icon,
          height: dims.icon,
          background: 'linear-gradient(135deg, #0a6fd4 0%, #037ef3 50%, #38a5ff 100%)',
          boxShadow: '0 2px 8px rgba(3,126,243,0.30)',
        }}
      >
        {/* Subtle inner highlight arc */}
        <span
          className="pointer-events-none absolute -top-2 -right-2 size-3/4 rounded-full"
          style={{
            background:
              'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.25), transparent 70%)',
          }}
        />

        {/* AIESEC CS logo mark */}
        <img
          src={images.logo}
          alt="AIESEC in Colombo South"
          className="absolute inset-0 size-full object-contain p-[8%]"
        />
      </div>

      {/* Text wordmark */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-extrabold tracking-[1.1px] transition-colors ${
            isWhite ? 'text-white' : 'group-hover:text-brand text-[#1a1a2e]'
          }`}
          style={{ fontSize: dims.title }}
        >
          AIESEC
        </span>
        <span
          className="text-brand font-semibold tracking-[0.5px]"
          style={{ fontSize: dims.sub, marginTop: 2 }}
        >
          IN COLOMBO SOUTH
        </span>
      </div>
    </Link>
  )
}
