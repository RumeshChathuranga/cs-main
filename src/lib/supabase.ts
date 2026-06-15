import { createClient } from '@supabase/supabase-js'
import type { Database } from './database.types'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string

if (!supabaseUrl || supabaseUrl === 'https://your-project-id.supabase.co') {
  console.warn(
    '[Supabase] VITE_SUPABASE_URL is not configured. ' +
      'Create a project at https://supabase.com and update .env.local',
  )
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)
