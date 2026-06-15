import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import type { BlogPost } from '../lib/database.types'

// Static fallback posts shown while Supabase is not yet configured
import { STATIC_BLOG_POSTS } from '../data/staticBlogPosts'

function isSupabaseConfigured() {
  const url = import.meta.env.VITE_SUPABASE_URL as string
  return url && url !== 'https://your-project-id.supabase.co'
}

export function useBlogPosts(category?: string) {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true)
      setError(null)

      if (!isSupabaseConfigured()) {
        // Filter static data to match category if provided
        const filtered =
          category && category !== 'All'
            ? STATIC_BLOG_POSTS.filter((p) => p.category === category)
            : STATIC_BLOG_POSTS
        setPosts(filtered as unknown as BlogPost[])
        setLoading(false)
        return
      }

      let query = supabase
        .from('blog_posts')
        .select('*')
        .eq('status', 'published')
        .order('published_at', { ascending: false })

      if (category && category !== 'All') {
        query = query.eq('category', category)
      }

      const { data, error } = await query
      if (error) {
        setError(error.message)
      } else {
        setPosts((data ?? []) as BlogPost[])
      }
      setLoading(false)
    }

    fetchPosts()
  }, [category])

  return { posts, loading, error }
}

export function useBlogPost(id: string) {
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return

    async function fetchPost() {
      setLoading(true)
      setError(null)

      if (!isSupabaseConfigured()) {
        const found = STATIC_BLOG_POSTS.find((p) => String(p.id) === id) ?? null
        setPost(found as unknown as BlogPost)
        setLoading(false)
        return
      }

      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', id)
        .eq('status', 'published')
        .single()

      if (error) {
        setError(error.message)
      } else {
        setPost(data as BlogPost | null)
      }
      setLoading(false)
    }

    fetchPost()
  }, [id])

  return { post, loading, error }
}
