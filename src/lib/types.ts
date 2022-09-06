import { type User } from '@supabase/gotrue-js/src/lib/types';

export interface PageProps {
	user: User | null | undefined;
}
