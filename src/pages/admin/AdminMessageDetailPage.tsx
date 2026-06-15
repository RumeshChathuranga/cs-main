import { useEffect, useRef } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  Mail,
  Archive,
  CheckCircle,
  Clock,
  User,
  Trash2,
} from 'lucide-react'
import { useContactMessage } from '../../hooks/queries/useContactMessageQueries'
import {
  useDeleteContactMessage,
  useMarkMessageRead,
  useUpdateMessageStatus,
} from '../../hooks/mutations/useContactMessageMutations'
import { useToastStore } from '../../stores/uiStore'
import type { ContactMessageStatus } from '../../lib/database.types'

const STATUS_LABELS: Record<ContactMessageStatus, string> = {
  new: 'New',
  read: 'Read',
  replied: 'Replied',
  archived: 'Archived',
}

const STATUS_STYLES: Record<ContactMessageStatus, string> = {
  new: 'bg-blue-50 text-brand',
  read: 'bg-gray-50 text-[#6b7280]',
  replied: 'bg-green-50 text-[#00c853]',
  archived: 'bg-orange-50 text-[#9ca3af]',
}

export function AdminMessageDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const showToast = useToastStore((s) => s.showToast)

  const { data: message, isLoading: loading, error } = useContactMessage(id)
  const updateStatusMutation = useUpdateMessageStatus()
  const deleteMessageMutation = useDeleteContactMessage()
  const markReadMutation = useMarkMessageRead()
  const markedRef = useRef<string | null>(null)

  useEffect(() => {
    if (!message || message.status !== 'new') return
    if (markedRef.current === message.id) return
    markedRef.current = message.id
    void markReadMutation.mutate(message.id)
  }, [message, markReadMutation])

  const handleStatusUpdate = async (status: ContactMessageStatus) => {
    if (!message) return
    try {
      await updateStatusMutation.mutateAsync({ id: message.id, status })
      showToast(`Marked as ${STATUS_LABELS[status].toLowerCase()}.`, 'success')
    } catch {
      showToast('Failed to update status.', 'error')
    }
  }

  const handleDelete = async () => {
    if (!message) return
    if (!window.confirm(`Delete message from ${message.name}? This cannot be undone.`)) return

    try {
      await deleteMessageMutation.mutateAsync(message.id)
      navigate('/admin/messages')
    } catch {
      showToast('Failed to delete message.', 'error')
    }
  }

  const mailtoHref = message
    ? `mailto:${message.email}?subject=${encodeURIComponent(`Re: ${message.subject}`)}&body=${encodeURIComponent(`Hi ${message.name},\n\nThank you for contacting AIESEC in Colombo South.\n\n`)}`
    : '#'

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <div className="border-brand size-8 animate-spin rounded-full border-4 border-t-transparent" />
      </div>
    )
  }

  if (error || !message) {
    return (
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-navy text-[18px] font-semibold">Message not found</p>
        <Link
          to="/admin/messages"
          className="text-brand mt-4 inline-flex items-center gap-2 text-[14px] font-medium"
        >
          <ArrowLeft size={16} />
          Back to inbox
        </Link>
      </div>
    )
  }

  const displayMessage =
    message.status === 'new' && markReadMutation.isSuccess
      ? { ...message, status: 'read' as const }
      : message

  return (
    <div className="mx-auto max-w-2xl">
      <Link
        to="/admin/messages"
        className="hover:text-brand mb-6 inline-flex items-center gap-2 text-[14px] font-medium text-[#6b7280] transition-colors"
      >
        <ArrowLeft size={16} />
        Back to inbox
      </Link>

      <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
        <div className="border-b border-[#f0f1f5] px-8 py-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-navy text-[22px] font-extrabold">{displayMessage.subject}</h1>
              <p className="mt-2 flex items-center gap-2 text-[13px] text-[#9ca3af]">
                <Clock size={14} />
                {new Date(displayMessage.created_at).toLocaleString('en-US', {
                  weekday: 'long',
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                  hour: 'numeric',
                  minute: '2-digit',
                })}
              </p>
            </div>
            <span
              className={[
                'shrink-0 rounded-full px-3 py-1 text-[12px] font-semibold',
                STATUS_STYLES[displayMessage.status],
              ].join(' ')}
            >
              {STATUS_LABELS[displayMessage.status]}
            </span>
          </div>
        </div>

        <div className="space-y-4 border-b border-[#f0f1f5] px-8 py-6">
          <div className="flex items-center gap-3">
            <div className="bg-brand/10 flex size-10 items-center justify-center rounded-full">
              <User size={18} className="text-brand" />
            </div>
            <div>
              <p className="text-navy text-[15px] font-semibold">{displayMessage.name}</p>
              <a
                href={`mailto:${displayMessage.email}`}
                className="text-brand text-[13px] hover:underline"
              >
                {displayMessage.email}
              </a>
            </div>
          </div>
        </div>

        <div className="px-8 py-6">
          <p className="text-[11px] font-bold tracking-[1.1px] text-[#9ca3af] uppercase">Message</p>
          <p className="text-navy mt-3 text-[15px] leading-[1.75] whitespace-pre-wrap">
            {displayMessage.message}
          </p>
        </div>

        <div className="flex flex-wrap gap-3 border-t border-[#f0f1f5] bg-[#fafafa] px-8 py-5">
          <a
            href={mailtoHref}
            className="bg-brand hover:bg-brand-dark inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-[14px] font-semibold text-white transition-colors"
          >
            <Mail size={16} />
            Reply via Email
          </a>

          {displayMessage.status !== 'replied' && displayMessage.status !== 'archived' && (
            <button
              onClick={() => void handleStatusUpdate('replied')}
              disabled={updateStatusMutation.isPending}
              className="inline-flex items-center gap-2 rounded-xl border border-green-200 bg-green-50 px-5 py-2.5 text-[14px] font-semibold text-[#00c853] transition-colors hover:bg-green-100"
            >
              <CheckCircle size={16} />
              Mark as Replied
            </button>
          )}

          {displayMessage.status !== 'archived' && (
            <button
              onClick={() => void handleStatusUpdate('archived')}
              disabled={updateStatusMutation.isPending}
              className="inline-flex items-center gap-2 rounded-xl border border-[#e5e7eb] bg-white px-5 py-2.5 text-[14px] font-semibold text-[#6b7280] transition-colors hover:bg-[#f5f7fa]"
            >
              <Archive size={16} />
              Archive
            </button>
          )}

          {(displayMessage.status === 'replied' || displayMessage.status === 'archived') && (
            <button
              onClick={() => void handleDelete()}
              disabled={deleteMessageMutation.isPending}
              className="inline-flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-5 py-2.5 text-[14px] font-semibold text-red-600 transition-colors hover:bg-red-100"
            >
              <Trash2 size={16} />
              {deleteMessageMutation.isPending ? 'Deleting…' : 'Delete'}
            </button>
          )}
        </div>

        {displayMessage.replied_at && (
          <div className="border-t border-[#f0f1f5] px-8 py-4">
            <p className="text-[12px] text-[#9ca3af]">
              Marked as replied on{' '}
              {new Date(displayMessage.replied_at).toLocaleString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
                hour: 'numeric',
                minute: '2-digit',
              })}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
