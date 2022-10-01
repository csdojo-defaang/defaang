import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';
import { type Session } from '@supabase/gotrue-js/src/lib/types';
import type { PageProps } from '../lib/types';

// reference: https://supabase.com/docs/guides/with-nextjs
export default function MyApp({ Component, pageProps }: AppProps<PageProps>) {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    // for testing - log out the user.
    // supabase.auth.signOut();

    let mounted = true;

    const getInitialSession = () => {
      const supabaseSession = supabase.auth.session();
      // only update the react state if the component is still mounted
      if (mounted && supabaseSession) {
        setSession(supabaseSession);
      }
    };

    getInitialSession();

    const data = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    }).data;

    return () => {
      mounted = false;
      data?.unsubscribe();
    };
  }, []);

  return <Component {...pageProps} session={session} user={session?.user} />;
}
