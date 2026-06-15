import { AlertCircle, CheckCircle } from 'lucide-react'
import { useToastStore } from '../../stores/uiStore'

export function ToastContainer() {
  const toasts = useToastStore((s) => s.toasts)

  if (toasts.length === 0) return null

  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={[
            'flex items-center gap-3 rounded-xl px-5 py-3 text-[14px] font-medium text-white shadow-lg transition-all',
            toast.type === 'success' ? 'bg-[#00c853]' : 'bg-red-500',
          ].join(' ')}
        >
          {toast.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
          {toast.message}
        </div>
      ))}
    </div>
  )
}
