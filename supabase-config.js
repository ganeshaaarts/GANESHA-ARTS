// Supabase Configuration File
// Note: Isme apni Supabase URL aur Anon Key replace kar dena

const SUPABASE_URL = "https://nojhnduyzjielryljtch.supabase.co/rest/v1/"; // e.g. https://xyz.supabase.co
const SUPABASE_ANON_KEY = "sb_publishable_yrsM7YmUA2X1qvbYUCXUpw_pAUb6VVq"; 

// Supabase Client Initialize
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Export/Global Access
window.supabaseClient = supabase;
console.log("Supabase connected successfully!");
