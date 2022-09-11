import { type User, type Session } from '@supabase/gotrue-js/src/lib/types';

export interface PageProps {
	user: User | null | undefined;
	session: Session | null | undefined;
}
