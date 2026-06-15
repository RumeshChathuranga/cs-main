import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, Save, Eye, EyeOff, CheckCircle, AlertCircle } from 'lucide-react'
import { supabase } from '../../lib/supabase'
import { useAuth } from '../../contexts/AuthContext'
import { RichTextEditor } from '../../components/admin/RichTextEditor'
import { ImageUploader } from '../../components/admin/ImageUploader'
import type { BlogPostCategory } from '../../lib/database.types'

const CATEGORIES: BlogPostCategory[] = [
  'Exchange Experiences',
  'Leadership',
  'Personal Development',
  'Events & Announcements',
  'Member Stories',
  'Global Impact',
]

interface FormData {
  title: string
  excerpt: string
  content: string
  category: BlogPostCategory
  cover_image_url: string
  author_name: string
  author_avatar_url: string
  read_time: number
  status: 'draft' | 'published'
}

const EMPTY_FORM: FormData = {
  title: '',
  excerpt: '',
  content: '',
  category: 'Exchange Experiences',
  cover_image_url: '',
  author_name: '',
  author_avatar_url: '',
  read_time: 5,
  status: 'draft',
}

function Toast({ message, type }: { message: string; type: 'success' | 'error' }) {
  return (
    <div
      className={[
        'fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-xl px-5 py-3 shadow-lg text-[14px] font-medium text-white',
        type === 'success' ? 'bg-[#00c853]' : 'bg-red-500',
      ].join(' ')}
    >
      {type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
      {message}
    </div>
  )
}

function Field({
  label,
  hint,
  children,
}: {
  label: string
  hint?: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label className="mb-1.5 block text-[13px] font-semibold text-navy">{label}</label>
      {hint && <p className="mb-1.5 text-[12px] text-[#9ca3af]">{hint}</p>}
      {children}
    </div>
  )
}

const inputCls =
  'h-[44px] w-full rounded-xl border border-[#e5e7eb] bg-[#fafafa] px-4 text-[14px] text-navy placeholder:text-[#9ca3af] focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20'

export function AdminPostEditorPage() {
  const { id } = useParams<{ id: string }>()
  const isEditing = Boolean(id)
  const navigate = useNavigate()
  const { user } = useAuth()

  const [form, setForm] = useState<FormData>(EMPTY_FORM)
  const [loadingPost, setLoadingPost] = useState(isEditing)
  const [saving, setSaving] = useState(false)
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null)

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type })
    setTimeout(() => setToast(null), 3500)
  }

  // Load existing post when editing
  useEffect(() => {
    if (!id) return
    async function load() {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', id)
        .single()
      if (!error && data) {
        setForm({
          title: data.title,
          excerpt: data.excerpt ?? '',
          content: data.content,
          category: data.category as BlogPostCategory,
          cover_image_url: data.cover_image_url ?? '',
          author_name: data.author_name,
          author_avatar_url: data.author_avatar_url ?? '',
          read_time: data.read_time,
          status: data.status as 'draft' | 'published',
        })
      }
      setLoadingPost(false)
    }
    load()
  }, [id])

  const set = <K extends keyof FormData>(key: K, value: FormData[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }))

  const save = async (publishNow?: boolean) => {
    if (!form.title.trim() || !form.author_name.trim()) {
      showToast('Title and Author name are required.', 'error')
      return
    }

    setSaving(true)
    const now = new Date().toISOString()
    const status = publishNow ? 'published' : form.status
    const payload = {
      ...form,
      status,
      published_at: status === 'published' ? now : null,
      updated_at: now,
      created_by: user?.id ?? null,
    }

    let error
    if (isEditing) {
      ;({ error } = await supabase.from('blog_posts').update(payload).eq('id', id!))
    } else {
      ;({ error } = await supabase
        .from('blog_posts')
        .insert({ ...payload, created_at: now }))
    }

    if (error) {
      showToast('Failed to save post. Please try again.', 'error')
    } else {
      showToast(
        publishNow
          ? 'Post published!'
          : isEditing
          ? 'Changes saved.'
          : 'Post saved as draft.',
        'success'
      )
      setTimeout(() => navigate('/admin/dashboard'), 1200)
    }
    setSaving(false)
  }

  if (loadingPost) {
    return (
      <div className="flex justify-center py-20">
        <div className="size-8 animate-spin rounded-full border-4 border-brand border-t-transparent" />
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-5xl">
      {toast && <Toast message={toast.message} type={toast.type} />}

      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/admin/dashboard')}
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-[14px] text-[#6b7280] hover:bg-white hover:text-navy transition-colors"
          >
            <ArrowLeft size={16} />
            Back
          </button>
          <div>
            <h1 className="text-[24px] font-extrabold text-navy">
              {isEditing ? 'Edit Post' : 'New Post'}
            </h1>
            <p className="text-[13px] text-[#9ca3af]">
              {form.status === 'published' ? 'Published' : 'Draft'}
            </p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => save(false)}
            disabled={saving}
            className="flex items-center gap-2 rounded-xl border border-[#e5e7eb] bg-white px-4 py-2.5 text-[14px] font-semibold text-navy hover:bg-[#f5f7fa] disabled:opacity-60 transition-colors"
          >
            <Save size={16} />
            Save Draft
          </button>
          <button
            onClick={() => save(true)}
            disabled={saving}
            className="flex items-center gap-2 rounded-xl bg-brand px-5 py-2.5 text-[14px] font-semibold text-white hover:bg-brand-dark disabled:opacity-60 transition-colors"
          >
            {form.status === 'published' ? (
              <>
                <EyeOff size={16} />
                Unpublish
              </>
            ) : (
              <>
                <Eye size={16} />
                Publish
              </>
            )}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-[1fr_320px] gap-6">
        {/* Left: main content */}
        <div className="flex flex-col gap-5">
          {/* Title */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <Field label="Post Title *">
              <input
                type="text"
                value={form.title}
                onChange={(e) => set('title', e.target.value)}
                placeholder="Enter an engaging title…"
                className={inputCls}
              />
            </Field>
            <div className="mt-4">
              <Field
                label="Excerpt"
                hint="A short summary shown on the blog listing page (2–3 sentences)."
              >
                <textarea
                  value={form.excerpt}
                  onChange={(e) => set('excerpt', e.target.value)}
                  rows={3}
                  placeholder="A brief description of what this post is about…"
                  className="w-full resize-none rounded-xl border border-[#e5e7eb] bg-[#fafafa] px-4 py-3 text-[14px] text-navy placeholder:text-[#9ca3af] focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                />
              </Field>
            </div>
          </div>

          {/* Rich text editor */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <label className="mb-3 block text-[13px] font-semibold text-navy">
              Article Content *
            </label>
            <RichTextEditor
              content={form.content}
              onChange={(html) => set('content', html)}
              placeholder="Start writing your story…"
            />
          </div>
        </div>

        {/* Right: metadata sidebar */}
        <div className="flex flex-col gap-5">
          {/* Cover image */}
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <ImageUploader
              label="Cover Image"
              value={form.cover_image_url}
              onChange={(url) => set('cover_image_url', url)}
            />
          </div>

          {/* Category */}
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <Field label="Category">
              <select
                value={form.category}
                onChange={(e) => set('category', e.target.value as BlogPostCategory)}
                className={`${inputCls} cursor-pointer`}
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          {/* Author */}
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="mb-4 text-[13px] font-semibold text-navy">Author Details</p>
            <div className="flex flex-col gap-4">
              <Field label="Author Name *">
                <input
                  type="text"
                  value={form.author_name}
                  onChange={(e) => set('author_name', e.target.value)}
                  placeholder="e.g. Dilini Perera"
                  className={inputCls}
                />
              </Field>
              <ImageUploader
                label="Author Avatar"
                value={form.author_avatar_url}
                onChange={(url) => set('author_avatar_url', url)}
              />
              <Field label="Read Time (minutes)">
                <input
                  type="number"
                  min={1}
                  max={60}
                  value={form.read_time}
                  onChange={(e) => set('read_time', Number(e.target.value))}
                  className={inputCls}
                />
              </Field>
            </div>
          </div>

          {/* Publish status */}
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="mb-3 text-[13px] font-semibold text-navy">Visibility</p>
            <div className="flex flex-col gap-2">
              {(['draft', 'published'] as const).map((s) => (
                <label
                  key={s}
                  className={[
                    'flex cursor-pointer items-center gap-3 rounded-xl border p-3 transition-colors',
                    form.status === s
                      ? 'border-brand bg-brand/5'
                      : 'border-[#e5e7eb] hover:border-[#d1d5db]',
                  ].join(' ')}
                >
                  <input
                    type="radio"
                    name="status"
                    value={s}
                    checked={form.status === s}
                    onChange={() => set('status', s)}
                    className="accent-brand"
                  />
                  <div>
                    <p className="text-[13px] font-semibold capitalize text-navy">{s}</p>
                    <p className="text-[11px] text-[#9ca3af]">
                      {s === 'draft'
                        ? 'Only visible to admins'
                        : 'Visible to everyone on the blog'}
                    </p>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
