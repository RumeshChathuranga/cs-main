interface SectionHeaderProps {
  badge: string
  title: string
  description?: string
  align?: 'center' | 'left'
  dark?: boolean
}

export function SectionHeader({
  badge,
  title,
  description,
  align = 'center',
  dark = false,
}: SectionHeaderProps) {
  const isCenter = align === 'center'

  return (
    <header className={isCenter ? 'text-center' : 'text-left'}>
      <span
        className={`inline-block rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase ${
          dark ? 'bg-brand/15 text-brand' : 'bg-brand/10 text-brand'
        }`}
      >
        {badge}
      </span>
      <h2
        className={`mt-4 text-3xl font-extrabold md:text-4xl ${
          dark ? 'text-white' : 'text-text-primary'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-3 text-base ${
            dark ? 'text-text-subtle' : 'text-text-muted'
          } ${isCenter ? 'mx-auto max-w-2xl' : 'max-w-xl'}`}
        >
          {description}
        </p>
      )}
    </header>
  )
}
