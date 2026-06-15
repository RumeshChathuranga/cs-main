import { Link } from 'react-router-dom'
import { useBlogPosts } from '../hooks/useBlogPosts'
import type { BlogPost } from '../lib/database.types'
import { Reveal } from './motion/Reveal'
import { Stagger, StaggerItem } from './motion/Stagger'

const CATEGORY_STYLES: Record<string, { color: string; bg: string }> = {
  'Exchange Experiences': { color: 'text-teal', bg: 'bg-teal-100' },
  Leadership: { color: 'text-brand', bg: 'bg-blue-100' },
  'Personal Development': { color: 'text-purple-600', bg: 'bg-purple-100' },
  'Events & Announcements': { color: 'text-orange-600', bg: 'bg-orange-100' },
  'Member Stories': { color: 'text-green-600', bg: 'bg-green-100' },
  'Global Impact': { color: 'text-indigo-600', bg: 'bg-indigo-100' },
}

const DEFAULT_CATEGORY_STYLE = { color: 'text-brand', bg: 'bg-blue-100' }

function formatPostDate(post: BlogPost) {
  const date = new Date(post.published_at ?? post.created_at).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
  return `${date} · ${post.read_time} min read`
}

function BlogCardSkeleton() {
  return (
    <article className="animate-pulse overflow-hidden rounded-2xl border border-black/6 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06),0_1px_6px_rgba(0,0,0,0.04)]">
      <div className="h-[200px] bg-gray-200" />
      <div className="p-6">
        <div className="h-5 w-3/4 rounded bg-gray-200" />
        <div className="mt-3 h-4 w-full rounded bg-gray-200" />
        <div className="mt-2 h-4 w-5/6 rounded bg-gray-200" />
        <div className="border-surface mt-5 flex items-center gap-2.5 border-t pt-4">
          <div className="size-[34px] rounded-full bg-gray-200" />
          <div className="flex-1 space-y-2">
            <div className="h-3 w-24 rounded bg-gray-200" />
            <div className="h-3 w-32 rounded bg-gray-200" />
          </div>
        </div>
      </div>
    </article>
  )
}

function HomeBlogCard({ post }: { post: BlogPost }) {
  const categoryStyle = CATEGORY_STYLES[post.category] ?? DEFAULT_CATEGORY_STYLE

  return (
    <article className="group overflow-hidden rounded-2xl border border-black/6 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06),0_1px_6px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-lg">
      <div className="relative h-[200px] overflow-hidden">
        {post.cover_image_url ? (
          <img
            src={post.cover_image_url}
            alt={post.title}
            className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div
            className="size-full"
            style={{ background: 'linear-gradient(135deg, #037ef3 0%, #0250a0 100%)' }}
          />
        )}
        <span
          className={`absolute top-3.5 left-3.5 rounded-full px-2.5 py-1 text-[11px] font-bold tracking-wide uppercase ${categoryStyle.bg} ${categoryStyle.color}`}
        >
          {post.category}
        </span>
      </div>

      <div className="p-6">
        <h3 className="text-text-primary text-[17px] leading-snug font-bold">{post.title}</h3>
        <p className="text-text-muted mt-3 text-sm leading-relaxed">{post.excerpt}</p>

        <div className="border-surface mt-5 flex items-center gap-2.5 border-t pt-4">
          {post.author_avatar_url ? (
            <img
              src={post.author_avatar_url}
              alt={post.author_name}
              className="border-brand size-[34px] rounded-full border-2 object-cover"
            />
          ) : (
            <div className="bg-brand flex size-[34px] shrink-0 items-center justify-center rounded-full border-2 border-transparent text-[12px] font-bold text-white">
              {post.author_name.charAt(0)}
            </div>
          )}
          <div className="min-w-0 flex-1">
            <p className="text-text-primary truncate text-[13px] font-semibold">
              {post.author_name}
            </p>
            <p className="text-text-faint text-xs">{formatPostDate(post)}</p>
          </div>
          <Link
            to={`/blog/${post.id}`}
            className="text-brand hover:text-brand-dark shrink-0 text-[13px] font-semibold"
          >
            Read →
          </Link>
        </div>
      </div>
    </article>
  )
}

export function Blog() {
  const { posts: allPosts, loading } = useBlogPosts()
  const posts = allPosts.slice(0, 3)

  return (
    <section id="blog" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <header>
              <span className="bg-brand/10 text-brand inline-block rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase">
                From Our Members
              </span>
              <h2 className="text-text-primary mt-4 text-3xl font-extrabold md:text-4xl">
                Latest Stories
              </h2>
            </header>
            <Link
              to="/blog"
              className="border-brand text-brand hover:text-brand-dark border-b-2 pb-1.5 text-[15px] font-bold transition-colors"
            >
              View All →
            </Link>
          </div>
        </Reveal>

        <Stagger className="mt-12 grid gap-6 lg:grid-cols-3">
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <StaggerItem key={i}>
                  <BlogCardSkeleton />
                </StaggerItem>
              ))
            : posts.map((post) => (
                <StaggerItem key={post.id}>
                  <HomeBlogCard post={post} />
                </StaggerItem>
              ))}
        </Stagger>
      </div>
    </section>
  )
}
