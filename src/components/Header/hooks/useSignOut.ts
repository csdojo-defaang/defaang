import { supabase } from '../../../utils/supabaseClient';

export function useSignOut() {
	async function signOut() {
		const { error } = await supabase.auth.signOut();
		if (error) alert(error.message);
	}

	return signOut;
}
