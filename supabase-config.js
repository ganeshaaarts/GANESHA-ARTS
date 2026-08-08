// Supabase Config
const SUPABASE_URL = "https://nojhnduyzjielryljtch.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5vamhuZHV5emppZWxyeWxqdGNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE4OTc4OTYsImV4cCI6MjAzNzQ3Mzg5Nn0.aY66P6n0G_a08892_4u-i1N7n544u0O-hO4zP-xY";

// Initialize Globally
window.supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
console.log("Supabase initialized!");
