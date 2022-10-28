import Image from 'next/future/image';
import Head from 'next/head';
import Link from 'next/link';
import { SignInForm } from '../components/SignIn/Form';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import type { PageProps } from '../lib/types';
import bg_img from '../../public/bg_img.webp';

export default function SignIn({ user }: PageProps) {
  const router = useRouter();

  // If the user is already logged in, redirect them to home page
  useEffect(() => {
    if (user) {
      router.push('/');
    }
  });

  return (
    <>
      <Head>
        <title>Sign in to defaang · defaang</title>
      </Head>

      <main className='flex h-full min-h-screen bg-white'>
        <div className='flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
					<span className='relative whitespace-nowrap text-blue-600'>
            <svg
              aria-hidden='true'
              viewBox='0 0 418 42'
              className='absolute top-2/4 left-0 h-[0.58em] w-fit fill-blue-300/70 mt-3'
              preserveAspectRatio='none'
            >
              <path d='M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z' />
            </svg>
            <Link href='/' aria-label='Home'>
              <span className='font-serif text-xl font-medium text-blue-600'>defaang</span>
            </Link>
          </span>
          <div className='mx-auto w-full max-w-sm lg:w-96'>
            <div>
              <h2 className='mt-6 text-start text-3xl font-bold tracking-tight text-gray-900'>Sign in</h2>
            </div>
            {/* TODO: social sign in options */}
            {/* <SignInSocial /> */}
            <SignInForm />
            <p className='my-2 flex w-full justify-center text-sm text-gray-700'>
              Not registered yet?{' '}
              <Link className='mx-1 cursor-pointer font-bold text-blue-600 hover:underline' href={'/signup'}>
                Sign up
              </Link>
            </p>
          </div>
        </div>
        <div className='relative hidden w-0 flex-1 lg:block'>
          <Image
            className='absolute inset-0 h-full w-full object-cover'
            src={bg_img}
            alt='signin page background'
            placeholder='blur'
          />
        </div>
      </main>
    </>
  );
}
