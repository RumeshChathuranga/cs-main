import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'
import { useBlogPosts } from '../hooks/useBlogPosts'
import type { BlogPost } from '../lib/database.types'

/* ─── Data ─── */

const CATEGORIES = [
  'All',
  'Exchange Experiences',
  'Leadership',
  'Personal Development',
  'Events & Announcements',
  'Member Stories',
  'Global Impact',
] as const

const CATEGORY_COLORS: Record<string, string> = {
  'Exchange Experiences': '#00bfa5',
  Leadership: '#037ef3',
  'Personal Development': '#7b2fbe',
  'Events & Announcements': '#ff6b35',
  'Member Stories': '#00c853',
  'Global Impact': '#3d5afe',
}

/* ─── Sub-components ─── */

function CategoryBadge({ category }: { category: string }) {
  const color = CATEGORY_COLORS[category] ?? '#037ef3'
  return (
    <span
      className="inline-block rounded-[20px] px-[10px] py-[4px] text-[11px] font-semibold tracking-[0.33px] text-white drop-shadow-[0px_2px_4px_rgba(0,0,0,0.18)]"
      style={{ backgroundColor: color }}
    >
      {category}
    </span>
  )
}

function BlogCard({ post }: { post: BlogPost }) {
  const formattedDate = new Date(post.published_at ?? post.created_at).toLocaleDateString(
    'en-US',
    { month: 'short', day: 'numeric', year: 'numeric' }
  )

  return (
    <Link
      to={`/blog/${post.id}`}
      className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-[0px_4px_20px_0px_rgba(26,26,46,0.08)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0px_8px_32px_0px_rgba(26,26,46,0.14)]"
    >
      {/* Cover image */}
      <div className="relative h-[231px] shrink-0 overflow-hidden">
        {post.cover_image_url ? (
          <img
            src={post.cover_image_url}
            alt={post.title}
            className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className="size-full"
            style={{ background: 'linear-gradient(135deg, #037ef3 0%, #0250a0 100%)' }}
          />
        )}
        {/* Gradient fade at bottom to cleanly separate image from card content */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-white/60 to-transparent" />
        <div className="absolute bottom-3 left-3">
          <CategoryBadge category={post.category} />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col bg-white px-6 pb-0 pt-5">
        <h3 className="mb-0 line-clamp-2 text-[16px] font-bold leading-[1.45] text-[#1a1a2e]">
          {post.title}
        </h3>
        <p className="mb-0 mt-4 line-clamp-3 text-[13.5px] leading-[1.65] text-[#6b7280]">
          {post.excerpt}
        </p>
      </div>

      {/* Author row */}
      <div className="mx-6 mt-auto flex items-center gap-[10px] border-t border-surface py-[17px]">
        {post.author_avatar_url ? (
          <img
            src={post.author_avatar_url}
            alt={post.author_name}
            className="size-8 shrink-0 rounded-full border-2 border-[#e5e7eb] object-cover"
          />
        ) : (
          <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand text-[12px] font-bold text-white">
            {post.author_name.charAt(0)}
          </div>
        )}
        <p className="text-[12.5px] leading-[1.3]">
          <span className="font-semibold text-[#1a1a2e]">{post.author_name}</span>
          <span className="font-normal text-[#6b7280]">
            &nbsp;·&nbsp;{formattedDate}&nbsp;·&nbsp;{post.read_time} min read
          </span>
        </p>
      </div>
    </Link>
  )
}

function BlogCardSkeleton() {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl bg-white shadow-[0px_4px_20px_0px_rgba(26,26,46,0.08)] animate-pulse">
      <div className="h-[231px] bg-[#e5e7eb]" />
      <div className="flex flex-1 flex-col px-6 pb-0 pt-5">
        <div className="h-5 w-3/4 rounded bg-[#e5e7eb]" />
        <div className="mt-2 h-4 w-full rounded bg-[#e5e7eb]" />
        <div className="mt-2 h-4 w-5/6 rounded bg-[#e5e7eb]" />
        <div className="mt-2 h-4 w-2/3 rounded bg-[#e5e7eb]" />
      </div>
      <div className="mx-6 mt-auto flex items-center gap-3 border-t border-surface py-4">
        <div className="size-8 rounded-full bg-[#e5e7eb]" />
        <div className="h-4 w-40 rounded bg-[#e5e7eb]" />
      </div>
    </div>
  )
}

/* ─── Page ─── */

export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [searchTerm, setSearchTerm] = useState('')

  const { posts: allPosts, loading } = useBlogPosts()

  const filteredPosts = useMemo(() => {
    return allPosts.filter((post) => {
      const matchesCategory =
        activeCategory === 'All' || post.category === activeCategory
      const matchesSearch =
        searchTerm.trim() === '' ||
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.author_name.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [allPosts, activeCategory, searchTerm])

  return (
    <>
      {/* ══ HERO ══ */}
      <section
        className="relative overflow-hidden py-[88px]"
        style={{ background: 'linear-gradient(165deg, #037ef3 0%, #0250a0 100%)' }}
      >
        {/* Decorative circles */}
        <div className="pointer-events-none absolute top-[-60px] right-[92px] size-[280px] rounded-[140px] bg-white/5" />
        <div className="pointer-events-none absolute bottom-0 left-[-40px] size-[220px] translate-y-1/4 rounded-[110px] bg-white/4" />
        {/* Decorative accent squares */}
        <div className="pointer-events-none absolute left-[123px] top-[164px] size-3 rounded-[6px] bg-white/25" />
        <div className="pointer-events-none absolute right-[192px] top-[82px] size-2 rounded-[4px] bg-white/20" />

        <div className="relative mx-auto flex max-w-[720px] flex-col items-center gap-0 text-center">
          {/* Badge */}
          <div className="mb-[28px] inline-flex rounded-[24px] border border-white/22 bg-white/12 px-[18px] py-[7px]">
            <span className="text-[12px] font-semibold tracking-[0.72px] text-white">
              AIESEC IN COLOMBO SOUTH
            </span>
          </div>

          <h1 className="text-[52px] font-extrabold leading-[1.18] tracking-[-0.52px] text-white">
            Our Stories &amp; Insights
          </h1>

          <p className="mt-[20px] max-w-[560px] text-[18px] leading-[1.7] text-white/80">
            Experiences, leadership journeys, and updates from AIESEC in Colombo South —
            stories that inspire, connect, and move the world forward.
          </p>
        </div>
      </section>

      {/* ══ FILTER & SEARCH BAR ══ */}
      <section className="sticky top-0 z-20 border-b border-[#f0f1f5] bg-white shadow-[0px_2px_6px_rgba(0,0,0,0.04)]">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-4 px-8 pb-px pt-5">
          {/* Category pills */}
          <div className="flex flex-wrap gap-[10px]">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={[
                    'rounded-[24px] border px-[21px] py-[9px] text-[13px] font-semibold leading-normal transition-all duration-200',
                    isActive
                      ? 'border-brand bg-brand text-white drop-shadow-[0px_4px_7px_rgba(3,126,243,0.3)]'
                      : 'border-brand bg-white text-brand hover:bg-brand/5',
                  ].join(' ')}
                >
                  {cat}
                </button>
              )
            })}
          </div>

          {/* Search */}
          <div className="flex justify-center pb-[20px]">
            <div className="relative w-[520px]">
              <Search
                size={17}
                className="pointer-events-none absolute left-[16px] top-1/2 -translate-y-1/2 text-[#1a1a2e]/40"
              />
              <input
                type="text"
                placeholder="Search articles…"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="h-[45px] w-full rounded-[12px] border border-[#e5e7eb] bg-[#fafafa] pl-[44px] pr-4 text-[14px] text-[#1a1a2e] placeholder:text-[#1a1a2e]/50 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══ ARTICLES GRID ══ */}
      <section className="bg-surface px-8 pb-20 pt-14">
        <div className="mx-auto max-w-[1280px]">
          {/* Count */}
          {!loading && (
            <p className="mb-8 text-[14px] text-[#6b7280]">
              Showing{' '}
              <span className="font-bold text-[#1a1a2e]">{filteredPosts.length}</span>{' '}
              {filteredPosts.length === 1 ? 'article' : 'articles'}
            </p>
          )}

          {loading ? (
            <div className="grid grid-cols-1 gap-[23px] sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <BlogCardSkeleton key={i} />
              ))}
            </div>
          ) : filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 gap-[23px] sm:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4 py-24 text-center">
              <div className="flex size-16 items-center justify-center rounded-full bg-brand/10">
                <Search size={28} className="text-brand" />
              </div>
              <p className="text-[18px] font-semibold text-[#1a1a2e]">No articles found</p>
              <p className="max-w-xs text-[14px] text-[#6b7280]">
                Try a different search term or select a different category.
              </p>
              <button
                onClick={() => {
                  setActiveCategory('All')
                  setSearchTerm('')
                }}
                className="mt-2 rounded-lg bg-brand px-6 py-2.5 text-[14px] font-semibold text-white hover:bg-brand-dark transition-colors"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
