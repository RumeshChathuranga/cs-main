import { useMutation, useQueryClient } from '@tanstack/react-query'
import {
  deleteContactMessage,
  submitContactMessage,
  updateMessageStatus,
} from '../../api/contactMessages'
import { queryKeys } from '../../lib/queryKeys'
import type { ContactMessageInsert, ContactMessageStatus } from '../../lib/database.types'

function invalidateMessageQueries(
  queryClient: ReturnType<typeof useQueryClient>,
  id?: string,
) {
  void queryClient.invalidateQueries({ queryKey: queryKeys.contactMessages.all })
  if (id) {
    void queryClient.invalidateQueries({ queryKey: queryKeys.contactMessages.detail(id) })
  }
}

export function useSubmitContactMessage() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: ContactMessageInsert) => submitContactMessage(data),
    onSuccess: (result) => {
      if (!result.error) {
        void queryClient.invalidateQueries({
          queryKey: queryKeys.contactMessages.unreadCount(),
        })
      }
    },
  })
}

export function useUpdateMessageStatus() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, status }: { id: string; status: ContactMessageStatus }) =>
      updateMessageStatus(id, status),
    onSuccess: (_data, { id }) => invalidateMessageQueries(queryClient, id),
  })
}

export function useDeleteContactMessage() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: string) => deleteContactMessage(id),
    onSuccess: (_data, id) => invalidateMessageQueries(queryClient, id),
  })
}

export function useMarkMessageRead() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: string) => updateMessageStatus(id, 'read'),
    onSuccess: (_data, id) => invalidateMessageQueries(queryClient, id),
  })
}
