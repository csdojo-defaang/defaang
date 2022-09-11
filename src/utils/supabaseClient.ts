import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl) throw new Error('Supabase URL not found.');
if (!supabaseAnonKey) throw new Error('Supabase Anon key not found.');

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
