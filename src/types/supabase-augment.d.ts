// Type augmentation to allow any table name in supabase.from()
// This is needed because many tables exist in the database but aren't in the auto-generated types yet.
import '@supabase/supabase-js';

declare module '@supabase/supabase-js' {
  interface SupabaseClient {
    from(relation: string): any;
  }
}
