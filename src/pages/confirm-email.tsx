import Head from 'next/head';
import Link from 'next/link';
import { MdOutlineMarkEmailRead } from 'react-icons/md';
import type { PageProps } from '../lib/types';

export default function ConfirmEmail({}: PageProps) {
  return (
    <>
      <Head>
        <title>Confirm Email · defaang</title>
      </Head>

      <main className='flex h-full min-h-screen items-center justify-center bg-gray-50'>
        <div className='grid w-full max-w-xs grid-cols-1 justify-items-center gap-y-4 rounded-lg bg-white p-6 shadow-lg sm:max-w-md'>
          <MdOutlineMarkEmailRead title='Envelope' className='h-28 w-28 fill-blue-500' />
          <p className='text-center text-gray-700'>
            Thanks for signing up! We&#39;ve sent you an email to confirm your account.
          </p>
          <Link
            href='/signin'
            className='rounded-md bg-blue-500 py-2 px-4 text-sm font-medium text-white hover:bg-blue-700'
          >
            Go to Sign in
          </Link>
        </div>
      </main>
    </>
  );
}
