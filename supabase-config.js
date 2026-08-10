(function () {
  'use strict';

  // Guard against re-initialization
  if (window.supabaseClient) {
    return;
  }

  // Check if Supabase JS library is loaded
  if (typeof supabase === 'undefined') {
    console.error('Supabase CDN library is missing. Please load it before supabase-config.js');
    return;
  }

  const SUPABASE_URL = 'https://nojhnduyzjielryljtch.supabase.co';
  const SUPABASE_ANON_KEY = 'sb_publishable_yrsM7YmUA2X1qvbYUCXUpw_pAUb6VVq';

  window.supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  console.log('Ganesha Arts: Supabase connected successfully.');
})();
window.RAZORPAY_KEY_ID = "rzp_test_TOBioCARZN1zJd";
