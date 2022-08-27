import { type User, Session } from '@supabase/gotrue-js/src/lib/types';

export type UserProps = {
	user: User;
	session: Session;
};
