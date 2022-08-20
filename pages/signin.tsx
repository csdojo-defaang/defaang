import { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { type NextPage } from 'next';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { supabase } from '../utils/supabaseClient';
import Link from 'next/link';

const SignIn: NextPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const handleSignIn = async () => {
		const { user, error } = await supabase.auth.signIn({ email, password });
		if (error) alert(error.message);
		else {
			alert(`Success Login in ${user?.email}`);
			setEmail('');
			setPassword('');
		}
	};
	return (
		<>
			<Head>
				<title>Defaang / Welcome</title>
			</Head>
			<main className='flex h-full min-h-screen'>
				{/* Left section - main login  */}

				<div className='flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
					<div className='mx-auto w-full max-w-sm lg:w-96'>
						<div>
							<h2 className='mt-6 text-start text-3xl font-bold tracking-tight text-gray-900'>
								Sign in to your account
							</h2>
						</div>
						<div className='mt-6'>
							<p className='text-sm text-gray-700'>Sign in with</p>
							<div className='my-2 grid grid-cols-2 gap-4'>
								<div>
									<a
										href='#'
										className='inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50'
									>
										<span className='sr-only'>Sign in with Google</span>
										<FaGoogle className='text-xl text-gray-500' />
									</a>
								</div>

								<div>
									<a
										href='#'
										className='inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50'
									>
										<span className='sr-only'>Sign in with GitHub</span>
										<FaGithub className='text-xl text-gray-500' />
									</a>
								</div>
							</div>
							<div className='relative mt-6'>
								<div className='absolute inset-0 flex items-center' aria-hidden='true'>
									<div className='w-full border-t border-gray-300' />
								</div>
								<div className='relative flex justify-center text-sm'>
									<span className='bg-white px-2 text-gray-500'>Or continue with</span>
								</div>
							</div>
						</div>

						<form
							className='mt-4 space-y-4'
							onSubmit={e => {
								e.preventDefault();
								handleSignIn();
							}}
						>
							<div className='flex w-full flex-col space-y-3'>
								<label htmlFor='email-address' className='text-sm text-gray-600'>
									Email address
								</label>
								<input
									type='text'
									id='email-address'
									placeholder='example@gmail.com'
									required
									className='relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
									value={email}
									onChange={e => setEmail(e.target.value)}
								/>
							</div>
							<div className='flex w-full flex-col space-y-2 '>
								<label htmlFor='password' className='text-sm text-gray-600'>
									password
								</label>
								<input
									type='password'
									id='password'
									required
									className='relative flex w-full appearance-none justify-center rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
									placeholder='*****'
									value={password}
									onChange={e => setPassword(e.target.value)}
								/>
							</div>
							{/*TODO: REMEMBER ME AND FORGOT PASSWORD FUNCTIONALITY */}
							{/* <div className='flex items-center justify-between'>
								<div className='flex items-center'>
									<input
										id='remember-me'
										name='remember-me'
										type='checkbox'
										className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
									/>
									<label htmlFor='remember-me' className='ml-2 block text-sm text-gray-900'>
										{' '}
										Remember me{' '}
									</label>
								</div>

								<div className='text-sm'>
									<a href='#' className='font-medium text-indigo-600 hover:text-indigo-500'>
										{' '}
										Forgot your password?{' '}
									</a>
								</div>
							</div> */}
							<button
								type='submit'
								className='group relative my-4 flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
							>
								<span className='absolute inset-y-0 left-0 flex items-center pl-3'>
									<svg
										className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 20 20'
										fill='currentColor'
										aria-hidden='true'
									>
										<path
											fillRule='evenodd'
											d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z'
											clipRule='evenodd'
										/>
									</svg>
								</span>
								Sign in
							</button>
						</form>

						<p className='my-2 flex w-full justify-center text-sm text-gray-700'>
							Not registered yet?{' '}
							<Link className='cursor-pointer font-bold' href={'/signup'}>
								<a className='mx-1 text-blue-600 hover:underline'> Sign up</a>
							</Link>
						</p>
					</div>
				</div>
				<div className='relative hidden w-0 flex-1 lg:block'>
					<Image
						className='absolute inset-0 h-full w-full object-cover'
						src='https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80'
						alt=''
						layout='fill'
					/>
				</div>
			</main>
		</>
	);
};

export default SignIn;
