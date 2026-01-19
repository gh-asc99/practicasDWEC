import { createClient } from "@supabase/supabase-js"
const supabase = createClient(
    "https://ocesinvsalvmeprkpqbr.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9jZXNpbnZzYWx2bWVwcmtwcWJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg4MDA5MjEsImV4cCI6MjA4NDM3NjkyMX0.AreGsLolGqqkj89ypV3RIAIQ6-h5ghDVQdfsKd_AFz4"
);

export { supabase };