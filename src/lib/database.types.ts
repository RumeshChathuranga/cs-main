export type BlogPostStatus = 'draft' | 'published'

export type BlogPostCategory =
  | 'Exchange Experiences'
  | 'Leadership'
  | 'Personal Development'
  | 'Events & Announcements'
  | 'Member Stories'
  | 'Global Impact'

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string // rich HTML from TipTap
  category: BlogPostCategory
  cover_image_url: string | null
  author_name: string
  author_avatar_url: string | null
  read_time: number // minutes
  status: BlogPostStatus
  published_at: string | null // ISO timestamp
  created_at: string
  updated_at: string
  created_by: string | null
}

export type BlogPostInsert = Omit<BlogPost, 'id' | 'created_at' | 'updated_at'> & {
  id?: string
  created_at?: string
  updated_at?: string
}
export type BlogPostUpdate = Partial<BlogPost>

// Supabase Database type for the client
export interface Database {
  public: {
    Tables: {
      blog_posts: {
        Row: BlogPost
        Insert: BlogPostInsert
        Update: BlogPostUpdate
        Relationships: []
      }
    }
    Views: Record<never, never>
    Functions: Record<never, never>
    Enums: Record<never, never>
    CompositeTypes: Record<never, never>
  }
}
