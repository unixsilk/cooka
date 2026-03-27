const SUPABASE_URL = "";
const SUPABASE_ANON_KEY = "";

function supabaseConfigured() {
  return SUPABASE_URL.trim() !== "" && SUPABASE_ANON_KEY.trim() !== "";
}

function getSupabaseClient() {
  if (!supabaseConfigured() || !window.supabase) {
    return null;
  }
  return window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

