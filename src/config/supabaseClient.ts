import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseApiKey = import.meta.env.VITE_SUPABASE_KEY

console.log(import.meta.env)
const supabase = createClient(supabaseUrl, supabaseApiKey)

export default supabase