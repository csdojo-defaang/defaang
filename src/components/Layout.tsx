import { useEffect } from 'react';
import { useTypedDispatch } from '../store';
import { setSession } from '../store/AuthSlice';
import { supabase } from '../utils/supabaseClient';

export interface LayoutProps {
	// TODO: type this more strictly
	children: any;
}

export function Layout({ children }: LayoutProps) {
	const dispatch = useTypedDispatch();

	useEffect(() => {
		let mounted = true;

		const getInitialSession = () => {
			const supabaseSession = supabase.auth.session();
			if (mounted && supabaseSession) {
				dispatch(setSession(supabaseSession));
			}
		};

		getInitialSession();

		const data = supabase.auth.onAuthStateChange((_event, session) => {
			dispatch(setSession(session));
		}).data;

		return () => {
			mounted = false;
			data?.unsubscribe();
		};
	});

	return <>{children}</>;
}
