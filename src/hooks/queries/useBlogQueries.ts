import { useQuery } from '@tanstack/react-query'
import {
  fetchAllPosts,
  fetchPostById,
  fetchPublishedPost,
  fetchPublishedPosts,
} from '../../api/blog'
import { queryKeys } from '../../lib/queryKeys'

export function usePublishedBlogPosts(category?: string) {
  return useQuery({
    queryKey: queryKeys.blogPosts.list({ status: 'published', category }),
    queryFn: () => fetchPublishedPosts(category),
  })
}

export function usePublishedBlogPost(id: string) {
  return useQuery({
    queryKey: queryKeys.blogPosts.detail(id),
    queryFn: () => fetchPublishedPost(id),
    enabled: Boolean(id),
  })
}

export function useAdminBlogPosts() {
  return useQuery({
    queryKey: queryKeys.blogPosts.list({ status: 'all' }),
    queryFn: fetchAllPosts,
  })
}

export function useAdminBlogPost(id: string | undefined) {
  return useQuery({
    queryKey: queryKeys.blogPosts.detail(id ?? ''),
    queryFn: () => fetchPostById(id!),
    enabled: Boolean(id),
  })
}
