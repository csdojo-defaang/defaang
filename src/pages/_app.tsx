import '../styles/globals.css';
import type { AppProps } from 'next/app';
import type { PageProps } from '../lib/types';
import { UserProvider } from '@supabase/auth-helpers-react';
import { supabaseClient } from '@supabase/auth-helpers-nextjs';

// reference: https://supabase.com/docs/guides/with-nextjs
export default function MyApp({ Component, pageProps }: AppProps<PageProps>) {
  return (
    <UserProvider supabaseClient={supabaseClient}>
      <Component {...pageProps} />
    </UserProvider>
  );
}
