import { useQuery } from '@tanstack/react-query'
import {
  fetchContactMessage,
  fetchContactMessages,
  getUnreadCount,
} from '../../api/contactMessages'
import { queryKeys } from '../../lib/queryKeys'
import { useAuthStore } from '../../stores/authStore'

export function useContactMessages() {
  const user = useAuthStore((s) => s.user)

  return useQuery({
    queryKey: queryKeys.contactMessages.list(),
    queryFn: fetchContactMessages,
    enabled: Boolean(user),
  })
}

export function useContactMessage(id: string | undefined) {
  return useQuery({
    queryKey: queryKeys.contactMessages.detail(id ?? ''),
    queryFn: () => fetchContactMessage(id!),
    enabled: Boolean(id),
  })
}

export function useUnreadMessageCount() {
  const user = useAuthStore((s) => s.user)

  return useQuery({
    queryKey: queryKeys.contactMessages.unreadCount(),
    queryFn: getUnreadCount,
    enabled: Boolean(user),
  })
}
