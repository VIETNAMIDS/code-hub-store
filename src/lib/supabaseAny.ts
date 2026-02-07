// Helper for querying tables that exist in the database but aren't yet in the generated types.
// This avoids TypeScript errors when using supabase.from('table_not_in_types').
import { supabase } from '@/integrations/supabase/client';

export const supabaseAny = supabase as any;
