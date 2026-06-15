import { usePublishedBlogPost, usePublishedBlogPosts } from './queries/useBlogQueries'

/** @deprecated Use usePublishedBlogPosts directly */
export function useBlogPosts(category?: string) {
  const { data: posts = [], isLoading: loading, error } = usePublishedBlogPosts(category)

  return {
    posts,
    loading,
    error: error?.message ?? null,
  }
}

/** @deprecated Use usePublishedBlogPost directly */
export function useBlogPost(id: string) {
  const { data: post = null, isLoading: loading, error } = usePublishedBlogPost(id)

  return {
    post,
    loading,
    error: error?.message ?? null,
  }
}
