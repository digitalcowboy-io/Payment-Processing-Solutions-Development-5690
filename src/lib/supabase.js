import { createClient } from '@supabase/supabase-js'

// Project details will be auto-injected during deployment
const SUPABASE_URL = 'https://riiuaeurktudmlncnaks.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpaXVhZXVya3R1ZG1sbmNuYWtzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE5MzkyNDksImV4cCI6MjA2NzUxNTI0OX0.8WPG4fHVZPDLOjUsDfct8xZVR1wHJqNGMfwLPPJ4y6s'

if(SUPABASE_URL == 'https://<PROJECT-ID>.supabase.co' || SUPABASE_ANON_KEY == '<ANON_KEY>' ){
  throw new Error('Missing Supabase variables');
}

export default createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true
  }
})