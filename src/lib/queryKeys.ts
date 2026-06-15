export const queryKeys = {
  blogPosts: {
    all: ['blogPosts'] as const,
    list: (filters: { category?: string; status?: 'published' | 'all' }) =>
      ['blogPosts', 'list', filters] as const,
    detail: (id: string) => ['blogPosts', 'detail', id] as const,
  },
  contactMessages: {
    all: ['contactMessages'] as const,
    list: () => ['contactMessages', 'list'] as const,
    detail: (id: string) => ['contactMessages', 'detail', id] as const,
    unreadCount: () => ['contactMessages', 'unreadCount'] as const,
  },
}
