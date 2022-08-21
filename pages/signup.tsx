import { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { type NextPage } from 'next';
import { supabase } from '../utils/supabaseClient';
import Link from 'next/link';
const SignUp: NextPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassowrd] = useState('');
	const handleSignup = async () => {
		const { user, error } = await supabase.auth.signUp({ email, password });
		if (error) alert(error.message);
		else {
			alert(`Success Register in ${user?.email}`);
			setEmail('');
			setPassowrd('');
		}
	};
	return (
		<>
			<Head>
				<title>Defaang / Welcome</title>
			</Head>
			<main className='flex h-full min-h-screen'>
				<div className='flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
					<div className='mx-auto w-full max-w-sm lg:w-96'>
						<div>
							<h2 className='mt-6 text-start text-3xl font-bold tracking-tight text-gray-900'>Create an account</h2>
						</div>
						{/* TODO: Social signup options */}
						{/* <div className='mt-6'>
							<p className='text-sm text-gray-700'>Sign up with</p>
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
						</div> */}
						<form
							onSubmit={e => {
								e.preventDefault();
								handleSignup();
							}}
							className='mt-4 flex flex-col space-y-4'
						>
							<div className='flex w-full flex-col space-y-2'>
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
									Password
								</label>
								<input
									type='password'
									id='password'
									required
									className='relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
									placeholder='*****'
									value={password}
									onChange={e => setPassowrd(e.target.value)}
								/>
							</div>
							<button
								type='submit'
								onClick={handleSignup}
								className='group relative my-4 flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
							>
								Sign up
							</button>
						</form>
						<p className='my-2 flex w-full justify-center text-sm text-gray-700'>
							Already have an account?{' '}
							<Link className='cursor-pointer font-bold' href={'/signin'}>
								<a className='mx-1 text-blue-600 hover:underline'>Sign in</a>
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

export default SignUp;
