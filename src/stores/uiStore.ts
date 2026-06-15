import { create } from 'zustand'

export type ToastType = 'success' | 'error'

export interface Toast {
  id: string
  message: string
  type: ToastType
}

interface UiState {
  toasts: Toast[]
  showToast: (message: string, type: ToastType) => void
  dismissToast: (id: string) => void
}

const TOAST_DURATION_MS = 3000

export const useToastStore = create<UiState>((set, get) => ({
  toasts: [],

  showToast: (message, type) => {
    const id = crypto.randomUUID()
    set({ toasts: [...get().toasts, { id, message, type }] })
    setTimeout(() => get().dismissToast(id), TOAST_DURATION_MS)
  },

  dismissToast: (id) => set({ toasts: get().toasts.filter((t) => t.id !== id) }),
}))
