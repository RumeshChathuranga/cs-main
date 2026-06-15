import { supabase } from '../lib/supabase'
import type {
  ContactMessage,
  ContactMessageInsert,
  ContactMessageStatus,
} from '../lib/database.types'

export async function submitContactMessage(
  data: ContactMessageInsert,
): Promise<{ error: string | null }> {
  // Do not chain .select() here — anon users can INSERT but not SELECT,
  // which would make a successful insert look like a failure.
  const { error } = await supabase.from('contact_messages').insert(data)
  if (error) return { error: error.message }
  return { error: null }
}

export async function fetchContactMessages(): Promise<{
  data: ContactMessage[]
  error: string | null
}> {
  const { data, error } = await supabase
    .from('contact_messages')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) return { data: [], error: error.message }
  return { data: (data ?? []) as ContactMessage[], error: null }
}

export async function fetchContactMessage(id: string): Promise<{
  data: ContactMessage | null
  error: string | null
}> {
  const { data, error } = await supabase.from('contact_messages').select('*').eq('id', id).single()

  if (error) return { data: null, error: error.message }
  return { data: data as ContactMessage, error: null }
}

export async function updateMessageStatus(
  id: string,
  status: ContactMessageStatus,
): Promise<{ error: string | null }> {
  const updates: { status: ContactMessageStatus; replied_at?: string | null } = { status }

  if (status === 'replied') {
    updates.replied_at = new Date().toISOString()
  }

  const { error } = await supabase.from('contact_messages').update(updates).eq('id', id)
  return { error: error?.message ?? null }
}

export async function deleteContactMessage(id: string): Promise<{ error: string | null }> {
  const { error } = await supabase.from('contact_messages').delete().eq('id', id)
  return { error: error?.message ?? null }
}

export async function getUnreadCount(): Promise<number> {
  const { count, error } = await supabase
    .from('contact_messages')
    .select('*', { count: 'exact', head: true })
    .eq('status', 'new')

  if (error) return 0
  return count ?? 0
}
