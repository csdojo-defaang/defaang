import { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { type NextPage } from 'next';
import { supabase } from '../utils/supabaseClient';
import { FaTwitter, FaFacebook, FaGithub } from 'react-icons/fa';
import Link from 'next/link';
const SignUp: NextPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassowrd] = useState('');
	const [confirmPass, setConfirmPass] = useState('');
	const [username, setUsername] = useState('');
	const handleSignup = async () => {
		const { user, error } = await supabase.auth.signUp({ email, password });
		if (error) alert(error.message);
		else {
			alert(`Success Register in ${user?.email}`);
			setEmail('');
			setPassowrd('');
			setConfirmPass('');
			setUsername('');
		}
	};
	return (
		<>
			<Head>
				<title>Defaang / Welcome</title>
			</Head>
			<main className='flex h-max w-screen'>
				<div className='flex w-[100%] flex-col items-center justify-center bg-gray-50 lg:w-[40%]'>
					{/* Now you can decide different login ways - primarily I am giving google and twiiter for more add it yourself. */}
					<div className='h-full max-w-md p-4 lg:h-[650px] lg:w-[450px]'>
						{/* <h1 className='p-2 text-3xl font-semibold'>Create an Account ⚡</h1> */}
						<div>
							<h2 className='mt-6 text-start text-3xl font-bold tracking-tight text-gray-900'>Create an Account</h2>
						</div>
						<div className='mt-6'>
							<p className='text-sm text-gray-700'>sign up with</p>
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
							<div className='flex w-full flex-col space-y-2'>
								<label htmlFor='username' className='text-sm text-gray-600'>
									Username
								</label>
								<input
									type='text'
									id='username'
									placeholder='example'
									required
									className='relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
									value={username}
									onChange={e => setUsername(e.target.value)}
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
							<div className='flex w-full flex-col space-y-2 '>
								<label htmlFor='confirm-password' className='text-sm text-gray-600'>
									Confirm Password
								</label>
								<input
									type='password'
									id='confirm-password'
									required
									className='relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
									placeholder='*****'
									value={confirmPass}
									onChange={e => setConfirmPass(e.target.value)}
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
							Already have an account?
							<Link className='cursor-pointer font-bold' href={'/signin'}>
								<a className=' text-blue-600 hover:underline'> Sign in</a>
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

export default SignUp;
