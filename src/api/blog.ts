import { supabase } from '../lib/supabase'
import { STATIC_BLOG_POSTS } from '../data/staticBlogPosts'
import type { BlogPost } from '../lib/database.types'

export function isSupabaseConfigured() {
  const url = import.meta.env.VITE_SUPABASE_URL as string
  return url && url !== 'https://your-project-id.supabase.co'
}

export async function fetchPublishedPosts(category?: string): Promise<BlogPost[]> {
  if (!isSupabaseConfigured()) {
    const filtered =
      category && category !== 'All'
        ? STATIC_BLOG_POSTS.filter((p) => p.category === category)
        : STATIC_BLOG_POSTS
    return filtered as unknown as BlogPost[]
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
  if (error) throw new Error(error.message)
  return (data ?? []) as BlogPost[]
}

export async function fetchPublishedPost(id: string): Promise<BlogPost | null> {
  if (!isSupabaseConfigured()) {
    const found = STATIC_BLOG_POSTS.find((p) => String(p.id) === id) ?? null
    return found as unknown as BlogPost | null
  }

  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('id', id)
    .eq('status', 'published')
    .single()

  if (error) throw new Error(error.message)
  return data as BlogPost | null
}

export async function fetchAllPosts(): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) throw new Error(error.message)
  return (data ?? []) as BlogPost[]
}

export async function fetchPostById(id: string): Promise<BlogPost | null> {
  const { data, error } = await supabase.from('blog_posts').select('*').eq('id', id).single()

  if (error) throw new Error(error.message)
  return data as BlogPost | null
}

export interface BlogPostSavePayload {
  title: string
  excerpt: string
  content: string
  category: BlogPost['category']
  cover_image_url: string
  author_name: string
  author_avatar_url: string
  read_time: number
  status: 'draft' | 'published'
  published_at: string | null
  updated_at: string
  created_by: string | null
}

export async function createPost(
  payload: BlogPostSavePayload & { created_at: string },
): Promise<void> {
  const { error } = await supabase
    .from('blog_posts')
    .insert([{ ...payload, created_at: payload.created_at }] as object[])
  if (error) throw new Error(error.message)
}

export async function updatePost(id: string, payload: BlogPostSavePayload): Promise<void> {
  const { error } = await supabase
    .from('blog_posts')
    .update(payload as object)
    .eq('id', id)
  if (error) throw new Error(error.message)
}

export async function deletePost(id: string): Promise<void> {
  const { error } = await supabase.from('blog_posts').delete().eq('id', id)
  if (error) throw new Error(error.message)
}

export async function togglePublish(post: BlogPost): Promise<'draft' | 'published'> {
  const newStatus = post.status === 'published' ? 'draft' : 'published'
  const { error } = await supabase
    .from('blog_posts')
    .update({
      status: newStatus,
      published_at: newStatus === 'published' ? new Date().toISOString() : null,
      updated_at: new Date().toISOString(),
    } as object)
    .eq('id', post.id)

  if (error) throw new Error(error.message)
  return newStatus
}
