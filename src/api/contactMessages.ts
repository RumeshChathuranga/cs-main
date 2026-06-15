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
  const { error } = await supabase.from('contact_messages').insert([data] as object[])
  if (error) return { error: error.message }
  return { error: null }
}

export async function fetchContactMessages(): Promise<ContactMessage[]> {
  const { data, error } = await supabase
    .from('contact_messages')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) throw new Error(error.message)
  return (data ?? []) as ContactMessage[]
}

export async function fetchContactMessage(id: string): Promise<ContactMessage> {
  const { data, error } = await supabase.from('contact_messages').select('*').eq('id', id).single()

  if (error) throw new Error(error.message)
  return data as ContactMessage
}

export async function updateMessageStatus(id: string, status: ContactMessageStatus): Promise<void> {
  const updates: { status: ContactMessageStatus; replied_at?: string | null } = { status }

  if (status === 'replied') {
    updates.replied_at = new Date().toISOString()
  }

  const { error } = await supabase
    .from('contact_messages')
    .update(updates as object)
    .eq('id', id)
  if (error) throw new Error(error.message)
}

export async function deleteContactMessage(id: string): Promise<void> {
  const { error } = await supabase.from('contact_messages').delete().eq('id', id)
  if (error) throw new Error(error.message)
}

export async function getUnreadCount(): Promise<number> {
  const { count, error } = await supabase
    .from('contact_messages')
    .select('*', { count: 'exact', head: true })
    .eq('status', 'new')

  if (error) throw new Error(error.message)
  return count ?? 0
}
