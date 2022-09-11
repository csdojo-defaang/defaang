import Image from 'next/future/image';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import bg_img from '../../public/bg_img.webp';
import { SignInForm } from '../components/SignIn/Form';
import { useTypedSelector } from '../store';

export default function SignIn() {
	const router = useRouter();
	const { session } = useTypedSelector(state => state.auth);

	// If the user is already logged in, redirect them to home page
	useEffect(() => {
		if (session?.user) {
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
					<div className='mx-auto w-full max-w-sm lg:w-96'>
						<div>
							<h2 className='mt-6 text-start text-3xl font-bold tracking-tight text-gray-900'>Sign in</h2>
						</div>
						{/* TODO: social sign in options */}
						{/* <SignInSocial /> */}
						<SignInForm />
						<p className='my-2 flex w-full justify-center text-sm text-gray-700'>
							Not registered yet?{' '}
							<Link className='cursor-pointer font-bold' href={'/signup'}>
								<a className='mx-1 text-blue-600 hover:underline'>Sign up</a>
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
