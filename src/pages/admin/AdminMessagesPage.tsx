import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Archive, Eye, AlertCircle, Inbox, RefreshCw, Trash2 } from 'lucide-react'
import { useContactMessages } from '../../hooks/queries/useContactMessageQueries'
import {
  useDeleteContactMessage,
  useUpdateMessageStatus,
} from '../../hooks/mutations/useContactMessageMutations'
import { useToastStore } from '../../stores/uiStore'
import type { ContactMessage, ContactMessageStatus } from '../../lib/database.types'

type FilterTab = 'all' | ContactMessageStatus

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

export function AdminMessagesPage() {
  const { data: messages = [], isLoading: loading, error, refetch, isFetching } =
    useContactMessages()
  const updateStatusMutation = useUpdateMessageStatus()
  const deleteMessageMutation = useDeleteContactMessage()
  const showToast = useToastStore((s) => s.showToast)

  const [filter, setFilter] = useState<FilterTab>('all')

  const loadError = error?.message ?? null
  const updatingId = updateStatusMutation.isPending ? updateStatusMutation.variables?.id : null
  const deletingId = deleteMessageMutation.isPending ? deleteMessageMutation.variables : null

  const handleStatusUpdate = async (id: string, status: ContactMessageStatus) => {
    try {
      await updateStatusMutation.mutateAsync({ id, status })
      showToast('Status updated.', 'success')
    } catch {
      showToast('Failed to update status.', 'error')
    }
  }

  const handleDelete = async (msg: ContactMessage) => {
    if (!window.confirm(`Delete message from ${msg.name}? This cannot be undone.`)) {
      return
    }

    try {
      await deleteMessageMutation.mutateAsync(msg.id)
      showToast('Message deleted.', 'success')
    } catch {
      showToast('Failed to delete message.', 'error')
    }
  }

  const filtered = filter === 'all' ? messages : messages.filter((m) => m.status === filter)

  const counts = {
    all: messages.length,
    new: messages.filter((m) => m.status === 'new').length,
    read: messages.filter((m) => m.status === 'read').length,
    replied: messages.filter((m) => m.status === 'replied').length,
    archived: messages.filter((m) => m.status === 'archived').length,
  }

  const tabs: { key: FilterTab; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'new', label: 'New' },
    { key: 'read', label: 'Read' },
    { key: 'replied', label: 'Replied' },
    { key: 'archived', label: 'Archived' },
  ]

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-navy text-[28px] font-extrabold">Messages</h1>
          <p className="mt-1 text-[14px] text-[#6b7280]">
            {counts.new} new · {counts.replied} replied · {counts.all} total
          </p>
        </div>
        <button
          onClick={() => void refetch()}
          disabled={isFetching}
          className="hover:text-brand flex items-center gap-2 rounded-xl border border-[#e5e7eb] bg-white px-4 py-2.5 text-[14px] font-medium text-[#6b7280] transition-colors hover:bg-[#f5f7fa] disabled:opacity-50"
        >
          <RefreshCw size={16} className={isFetching ? 'animate-spin' : ''} />
          Refresh
        </button>
      </div>

      {loadError && (
        <div className="mb-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-[14px] text-red-700">
          <AlertCircle size={18} className="mt-0.5 shrink-0" />
          <div>
            <p className="font-semibold">Could not load messages</p>
            <p className="mt-1 text-[13px]">{loadError}</p>
            <p className="mt-2 text-[12px] text-red-600">
              If the table is missing, run section 7 in SUPABASE_SETUP.md. If messages save but
              don&apos;t appear here, run the policy fix SQL in that same section.
            </p>
          </div>
        </div>
      )}

      <div className="mb-6 flex flex-wrap gap-2">
        {tabs.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={[
              'rounded-lg px-4 py-2 text-[13px] font-semibold transition-colors',
              filter === key ? 'bg-brand text-white' : 'bg-white text-[#6b7280] hover:bg-[#f5f7fa]',
            ].join(' ')}
          >
            {label}
            {counts[key] > 0 && (
              <span
                className={[
                  'ml-1.5 rounded-full px-1.5 py-0.5 text-[11px]',
                  filter === key ? 'bg-white/20' : 'bg-[#f0f1f5]',
                ].join(' ')}
              >
                {counts[key]}
              </span>
            )}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex justify-center py-20">
          <div className="border-brand size-8 animate-spin rounded-full border-4 border-t-transparent" />
        </div>
      ) : filtered.length === 0 ? (
        <div className="flex flex-col items-center gap-4 rounded-2xl bg-white py-20 text-center shadow-sm">
          <Inbox size={40} className="text-[#e5e7eb]" />
          <p className="text-navy text-[18px] font-semibold">No messages</p>
          <p className="text-[14px] text-[#6b7280]">
            {filter === 'all'
              ? 'Contact form submissions will appear here.'
              : `No ${filter} messages.`}
          </p>
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#f0f1f5]">
                <th className="px-6 py-4 text-left text-[12px] font-semibold tracking-wider text-[#9ca3af] uppercase">
                  From
                </th>
                <th className="px-4 py-4 text-left text-[12px] font-semibold tracking-wider text-[#9ca3af] uppercase">
                  Subject
                </th>
                <th className="px-4 py-4 text-left text-[12px] font-semibold tracking-wider text-[#9ca3af] uppercase">
                  Status
                </th>
                <th className="px-4 py-4 text-left text-[12px] font-semibold tracking-wider text-[#9ca3af] uppercase">
                  Date
                </th>
                <th className="px-6 py-4 text-right text-[12px] font-semibold tracking-wider text-[#9ca3af] uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f5f7fa]">
              {filtered.map((msg) => (
                <tr key={msg.id} className="group transition-colors hover:bg-[#fafafa]">
                  <td className="px-6 py-4">
                    <Link to={`/admin/messages/${msg.id}`} className="block">
                      <p className="text-navy text-[14px] font-semibold">{msg.name}</p>
                      <p className="mt-0.5 text-[12px] text-[#9ca3af]">{msg.email}</p>
                    </Link>
                  </td>
                  <td className="px-4 py-4">
                    <Link
                      to={`/admin/messages/${msg.id}`}
                      className="text-navy hover:text-brand line-clamp-1 text-[14px]"
                    >
                      {msg.subject}
                    </Link>
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={[
                        'inline-flex rounded-full px-2.5 py-1 text-[12px] font-semibold',
                        STATUS_STYLES[msg.status],
                      ].join(' ')}
                    >
                      {STATUS_LABELS[msg.status]}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-[13px] text-[#6b7280]">
                    {new Date(msg.created_at).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      {msg.status === 'new' && (
                        <button
                          onClick={() => void handleStatusUpdate(msg.id, 'read')}
                          disabled={updatingId === msg.id}
                          title="Mark as read"
                          className="hover:text-brand rounded-lg p-2 text-[#9ca3af] transition-colors hover:bg-blue-50"
                        >
                          <Eye size={16} />
                        </button>
                      )}
                      <a
                        href={`mailto:${msg.email}?subject=${encodeURIComponent(`Re: ${msg.subject}`)}`}
                        title="Reply via email"
                        className="rounded-lg p-2 text-[#9ca3af] transition-colors hover:bg-green-50 hover:text-[#00c853]"
                      >
                        <Mail size={16} />
                      </a>
                      {msg.status !== 'archived' && (
                        <button
                          onClick={() => void handleStatusUpdate(msg.id, 'archived')}
                          disabled={updatingId === msg.id}
                          title="Archive"
                          className="rounded-lg p-2 text-[#9ca3af] transition-colors hover:bg-orange-50 hover:text-[#ff6b35]"
                        >
                          <Archive size={16} />
                        </button>
                      )}
                      {(msg.status === 'replied' || msg.status === 'archived') && (
                        <button
                          onClick={() => void handleDelete(msg)}
                          disabled={deletingId === msg.id}
                          title="Delete"
                          className="rounded-lg p-2 text-[#9ca3af] transition-colors hover:bg-red-50 hover:text-red-500"
                        >
                          {deletingId === msg.id ? (
                            <span className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                          ) : (
                            <Trash2 size={16} />
                          )}
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
