// lib/supabase.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://exggfeypqucbibabxodx.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4Z2dmZXlwcXVjYmliYWJ4b2R4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM5Mzk0OTIsImV4cCI6MjA0OTUxNTQ5Mn0.nK-mDPglDIuQenvgSVm1vCtu8op5TDUNGletBOwInZw";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
