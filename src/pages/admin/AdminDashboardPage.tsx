import { Link } from 'react-router-dom'
import { PenLine, Trash2, Eye, EyeOff, Plus, FileText } from 'lucide-react'
import { useAdminBlogPosts } from '../../hooks/queries/useBlogQueries'
import { useDeleteBlogPost, useToggleBlogPublish } from '../../hooks/mutations/useBlogMutations'
import { useToastStore } from '../../stores/uiStore'
import type { BlogPost } from '../../lib/database.types'

const CATEGORY_COLORS: Record<string, string> = {
  'Exchange Experiences': '#00bfa5',
  Leadership: '#037ef3',
  'Personal Development': '#7b2fbe',
  'Events & Announcements': '#ff6b35',
  'Member Stories': '#00c853',
  'Global Impact': '#3d5afe',
}

export function AdminDashboardPage() {
  const { data: posts = [], isLoading: loading } = useAdminBlogPosts()
  const togglePublishMutation = useToggleBlogPublish()
  const deletePostMutation = useDeleteBlogPost()
  const showToast = useToastStore((s) => s.showToast)

  const togglePublish = async (post: BlogPost) => {
    try {
      const newStatus = await togglePublishMutation.mutateAsync(post)
      showToast(
        newStatus === 'published' ? 'Post published!' : 'Post moved to drafts.',
        'success',
      )
    } catch {
      showToast('Failed to update status.', 'error')
    }
  }

  const deletePost = async (id: string) => {
    if (!window.confirm('Are you sure you want to permanently delete this post?')) return
    try {
      await deletePostMutation.mutateAsync(id)
      showToast('Post deleted.', 'success')
    } catch {
      showToast('Failed to delete post.', 'error')
    }
  }

  const published = posts.filter((p) => p.status === 'published')
  const drafts = posts.filter((p) => p.status === 'draft')
  const togglingId = togglePublishMutation.isPending ? togglePublishMutation.variables?.id : null
  const deletingId = deletePostMutation.isPending ? deletePostMutation.variables : null

  return (
    <div className="mx-auto max-w-5xl">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-navy text-[28px] font-extrabold">Blog Posts</h1>
          <p className="mt-1 text-[14px] text-[#6b7280]">
            {published.length} published · {drafts.length} drafts
          </p>
        </div>
        <Link
          to="/admin/posts/new"
          className="bg-brand hover:bg-brand-dark flex items-center gap-2 rounded-xl px-5 py-2.5 text-[14px] font-semibold text-white transition-colors"
        >
          <Plus size={18} />
          New Post
        </Link>
      </div>

      {/* Stats */}
      <div className="mb-8 grid grid-cols-3 gap-4">
        {[
          { label: 'Total Posts', value: posts.length, color: 'text-navy' },
          { label: 'Published', value: published.length, color: 'text-[#00c853]' },
          { label: 'Drafts', value: drafts.length, color: 'text-[#ff6b35]' },
        ].map(({ label, value, color }) => (
          <div key={label} className="rounded-xl bg-white p-5 shadow-sm">
            <p className="text-[13px] text-[#9ca3af]">{label}</p>
            <p className={`mt-1 text-[32px] font-extrabold ${color}`}>{value}</p>
          </div>
        ))}
      </div>

      {/* Posts list */}
      {loading ? (
        <div className="flex justify-center py-20">
          <div className="border-brand size-8 animate-spin rounded-full border-4 border-t-transparent" />
        </div>
      ) : posts.length === 0 ? (
        <div className="flex flex-col items-center gap-4 rounded-2xl bg-white py-20 text-center shadow-sm">
          <FileText size={40} className="text-[#e5e7eb]" />
          <p className="text-navy text-[18px] font-semibold">No posts yet</p>
          <p className="text-[14px] text-[#6b7280]">Create your first post to get started.</p>
          <Link
            to="/admin/posts/new"
            className="bg-brand hover:bg-brand-dark mt-2 flex items-center gap-2 rounded-xl px-5 py-2.5 text-[14px] font-semibold text-white transition-colors"
          >
            <Plus size={16} />
            Create Post
          </Link>
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#f0f1f5]">
                <th className="px-6 py-4 text-left text-[12px] font-semibold tracking-wider text-[#9ca3af] uppercase">
                  Title
                </th>
                <th className="px-4 py-4 text-left text-[12px] font-semibold tracking-wider text-[#9ca3af] uppercase">
                  Category
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
              {posts.map((post) => (
                <tr key={post.id} className="group transition-colors hover:bg-[#fafafa]">
                  <td className="px-6 py-4">
                    <div className="flex items-start gap-3">
                      {post.cover_image_url && (
                        <img
                          src={post.cover_image_url}
                          alt=""
                          className="mt-0.5 size-10 shrink-0 rounded-lg object-cover"
                        />
                      )}
                      <div>
                        <p className="text-navy line-clamp-1 text-[14px] font-semibold">
                          {post.title}
                        </p>
                        <p className="mt-0.5 text-[12px] text-[#9ca3af]">
                          {post.author_name} · {post.read_time} min read
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-4 py-4">
                    <span
                      className="inline-block rounded-full px-2.5 py-1 text-[11px] font-semibold text-white"
                      style={{ backgroundColor: CATEGORY_COLORS[post.category] ?? '#037ef3' }}
                    >
                      {post.category}
                    </span>
                  </td>

                  <td className="px-4 py-4">
                    <span
                      className={[
                        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[12px] font-semibold',
                        post.status === 'published'
                          ? 'bg-green-50 text-[#00c853]'
                          : 'bg-orange-50 text-[#ff6b35]',
                      ].join(' ')}
                    >
                      <span
                        className={[
                          'size-1.5 rounded-full',
                          post.status === 'published' ? 'bg-[#00c853]' : 'bg-[#ff6b35]',
                        ].join(' ')}
                      />
                      {post.status === 'published' ? 'Published' : 'Draft'}
                    </span>
                  </td>

                  <td className="px-4 py-4 text-[13px] text-[#6b7280]">
                    {new Date(post.created_at).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => void togglePublish(post)}
                        disabled={togglingId === post.id}
                        title={post.status === 'published' ? 'Move to draft' : 'Publish'}
                        className={[
                          'rounded-lg p-2 transition-colors',
                          post.status === 'published'
                            ? 'text-[#9ca3af] hover:bg-orange-50 hover:text-[#ff6b35]'
                            : 'text-[#9ca3af] hover:bg-green-50 hover:text-[#00c853]',
                        ].join(' ')}
                      >
                        {togglingId === post.id ? (
                          <span className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        ) : post.status === 'published' ? (
                          <EyeOff size={16} />
                        ) : (
                          <Eye size={16} />
                        )}
                      </button>

                      <Link
                        to={`/admin/posts/${post.id}/edit`}
                        className="hover:bg-brand/10 hover:text-brand rounded-lg p-2 text-[#9ca3af] transition-colors"
                        title="Edit"
                      >
                        <PenLine size={16} />
                      </Link>

                      <button
                        onClick={() => void deletePost(post.id)}
                        disabled={deletingId === post.id}
                        className="rounded-lg p-2 text-[#9ca3af] transition-colors hover:bg-red-50 hover:text-red-500"
                        title="Delete"
                      >
                        {deletingId === post.id ? (
                          <span className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        ) : (
                          <Trash2 size={16} />
                        )}
                      </button>
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
