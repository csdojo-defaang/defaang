import { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { type NextPage } from 'next';
import { supabase } from '../utils/supabaseClient';
import { FaFacebook, FaTwitter, FaGithub } from 'react-icons/fa';
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
			<main className='flex h-screen w-screen'>
				{/* Left section - main login  */}

				<div className='flex h-screen  w-[100%] flex-col items-center justify-center bg-gray-50 lg:w-[40%]'>
					{/* Now you can decide different login ways - primarily I am giving google and twiiter for more add it yourself. */}
					<div className='max-w-md p-4 lg:h-[500px] lg:w-[400px]'>
						{/* <h1 className='p-2 text-3xl font-semibold'>Sign in ⚡</h1> */}
						<div>
							<h2 className='mt-6 text-start text-3xl font-bold tracking-tight text-gray-900'>
								Sign in to your account
							</h2>
						</div>
						<div className='mt-6'>
							<p className='text-sm text-gray-700'>sign in with</p>
							<div className='my-2 grid grid-cols-3 gap-4'>
								<button className='group w-full rounded-md border border-gray-300 py-1 shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-2'>
									<FaFacebook className='mx-auto h-6 w-6 text-gray-500 group-hover:text-white' />
								</button>

								<button className='group w-full rounded-md border border-gray-300 py-1 shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-2'>
									<FaTwitter className='mx-auto h-6 w-6 text-gray-500 group-hover:text-white' />
								</button>

								<button className='group w-full rounded-md border border-gray-300 py-1 shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-2'>
									<FaGithub className='mx-auto h-6 w-6 text-gray-500 group-hover:text-white' />
								</button>
							</div>
						</div>

						<div className='mt-6'>
							<div className='my-2 grid grid-cols-3 items-center gap-1'>
								<hr />
								<p className='space-between text-md text-center text-gray-600'>Or continue with</p>
								<hr />
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
							<div className='flex items-center justify-between'>
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
							</div>
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
							Not registered yet?
							<Link className='cursor-pointer font-bold' href={'/signup'}>
								<a className=' text-blue-600 hover:underline'> Sign up</a>
							</Link>
						</p>
					</div>
				</div>
				{/* Right Section - Image and just for UI. */}

				<div className='relative hidden w-[60%] lg:inline-flex'>
					<div className='absolute top-0 left-0 h-[100%] w-[100%] bg-black opacity-[0.5]'></div>
					<Image src='/sidebar.jpg' alt='right-side-image' layout='fill' className='object-cover' />
				</div>
			</main>
		</>
	);
};

export default SignIn;
