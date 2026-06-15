import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  Mail,
  Archive,
  CheckCircle,
  AlertCircle,
  Clock,
  User,
  Trash2,
} from 'lucide-react'
import {
  fetchContactMessage,
  updateMessageStatus,
  deleteContactMessage,
} from '../../hooks/useContactMessages'
import type { ContactMessage, ContactMessageStatus } from '../../lib/database.types'

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

function Toast({ message, type }: { message: string; type: 'success' | 'error' }) {
  return (
    <div
      className={[
        'fixed right-6 bottom-6 z-50 flex items-center gap-3 rounded-xl px-5 py-3 text-[14px] font-medium text-white shadow-lg',
        type === 'success' ? 'bg-[#00c853]' : 'bg-red-500',
      ].join(' ')}
    >
      {type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
      {message}
    </div>
  )
}

export function AdminMessageDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [message, setMessage] = useState<ContactMessage | null>(null)
  const [loading, setLoading] = useState(true)
  const [updating, setUpdating] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null)

  const showToast = (msg: string, type: 'success' | 'error') => {
    setToast({ message: msg, type })
    setTimeout(() => setToast(null), 3000)
  }

  useEffect(() => {
    if (!id) return

    async function load() {
      if (!id) return
      setLoading(true)
      const { data, error } = await fetchContactMessage(id)
      if (error || !data) {
        showToast('Message not found.', 'error')
        setLoading(false)
        return
      }
      setMessage(data)

      // Auto-mark as read when opening a new message
      if (data.status === 'new') {
        const { error: updateError } = await updateMessageStatus(data.id, 'read')
        if (!updateError) setMessage({ ...data, status: 'read' })
      }

      setLoading(false)
    }

    void load()
  }, [id])

  const handleStatusUpdate = async (status: ContactMessageStatus) => {
    if (!message) return
    setUpdating(true)
    const { error } = await updateMessageStatus(message.id, status)
    if (error) {
      showToast('Failed to update status.', 'error')
    } else {
      setMessage({
        ...message,
        status,
        replied_at: status === 'replied' ? new Date().toISOString() : message.replied_at,
      })
      showToast(`Marked as ${STATUS_LABELS[status].toLowerCase()}.`, 'success')
    }
    setUpdating(false)
  }

  const handleDelete = async () => {
    if (!message) return
    if (!window.confirm(`Delete message from ${message.name}? This cannot be undone.`)) return

    setDeleting(true)
    const { error } = await deleteContactMessage(message.id)
    if (error) {
      showToast('Failed to delete message.', 'error')
      setDeleting(false)
      return
    }
    navigate('/admin/messages')
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

  if (!message) {
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

  return (
    <div className="mx-auto max-w-2xl">
      {toast && <Toast message={toast.message} type={toast.type} />}

      <Link
        to="/admin/messages"
        className="hover:text-brand mb-6 inline-flex items-center gap-2 text-[14px] font-medium text-[#6b7280] transition-colors"
      >
        <ArrowLeft size={16} />
        Back to inbox
      </Link>

      <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
        {/* Header */}
        <div className="border-b border-[#f0f1f5] px-8 py-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-navy text-[22px] font-extrabold">{message.subject}</h1>
              <p className="mt-2 flex items-center gap-2 text-[13px] text-[#9ca3af]">
                <Clock size={14} />
                {new Date(message.created_at).toLocaleString('en-US', {
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
                STATUS_STYLES[message.status],
              ].join(' ')}
            >
              {STATUS_LABELS[message.status]}
            </span>
          </div>
        </div>

        {/* Sender info */}
        <div className="space-y-4 border-b border-[#f0f1f5] px-8 py-6">
          <div className="flex items-center gap-3">
            <div className="bg-brand/10 flex size-10 items-center justify-center rounded-full">
              <User size={18} className="text-brand" />
            </div>
            <div>
              <p className="text-navy text-[15px] font-semibold">{message.name}</p>
              <a
                href={`mailto:${message.email}`}
                className="text-brand text-[13px] hover:underline"
              >
                {message.email}
              </a>
            </div>
          </div>
        </div>

        {/* Message body */}
        <div className="px-8 py-6">
          <p className="text-[11px] font-bold tracking-[1.1px] text-[#9ca3af] uppercase">Message</p>
          <p className="text-navy mt-3 text-[15px] leading-[1.75] whitespace-pre-wrap">
            {message.message}
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 border-t border-[#f0f1f5] bg-[#fafafa] px-8 py-5">
          <a
            href={mailtoHref}
            className="bg-brand hover:bg-brand-dark inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-[14px] font-semibold text-white transition-colors"
          >
            <Mail size={16} />
            Reply via Email
          </a>

          {message.status !== 'replied' && message.status !== 'archived' && (
            <button
              onClick={() => handleStatusUpdate('replied')}
              disabled={updating}
              className="inline-flex items-center gap-2 rounded-xl border border-green-200 bg-green-50 px-5 py-2.5 text-[14px] font-semibold text-[#00c853] transition-colors hover:bg-green-100"
            >
              <CheckCircle size={16} />
              Mark as Replied
            </button>
          )}

          {message.status !== 'archived' && (
            <button
              onClick={() => handleStatusUpdate('archived')}
              disabled={updating}
              className="inline-flex items-center gap-2 rounded-xl border border-[#e5e7eb] bg-white px-5 py-2.5 text-[14px] font-semibold text-[#6b7280] transition-colors hover:bg-[#f5f7fa]"
            >
              <Archive size={16} />
              Archive
            </button>
          )}

          {(message.status === 'replied' || message.status === 'archived') && (
            <button
              onClick={() => void handleDelete()}
              disabled={deleting}
              className="inline-flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-5 py-2.5 text-[14px] font-semibold text-red-600 transition-colors hover:bg-red-100"
            >
              <Trash2 size={16} />
              {deleting ? 'Deleting…' : 'Delete'}
            </button>
          )}
        </div>

        {message.replied_at && (
          <div className="border-t border-[#f0f1f5] px-8 py-4">
            <p className="text-[12px] text-[#9ca3af]">
              Marked as replied on{' '}
              {new Date(message.replied_at).toLocaleString('en-US', {
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
