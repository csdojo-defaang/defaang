import { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { type NextPage } from 'next';
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
	const handleSignInWithGoogle = async () => {
		const { user, error } = await supabase.auth.signIn({ provider: 'google' });
		if (error) {
			alert(error.message);
		}
		if (user) {
			alert(`Sucess Login with Google`);
		}
	};
	const handleSignInWithGithub = async () => {
		const { user, error } = await supabase.auth.signIn({ provider: 'github' });
		if (error) {
			alert(error.message);
		}
		if (user) {
			alert(`Sucess Login with Github`);
		}
	};
	return (
		<>
			<Head>
				<title>Defaang / Welcome</title>
			</Head>
			<main className='flex h-screen w-screen'>
				{/* Left section - main login  */}

				<div className='flex h-screen  w-[100%] flex-col items-center justify-center bg-gray-100 lg:w-[50%]'>
					{/* Now you can decide different login ways - primarily I am giving google and twiiter for more add it yourself. */}
					<div className='w-full  bg-white p-4 md:shadow-lg lg:h-[500px] lg:w-[400px]'>
						<h1 className='p-2  text-3xl font-semibold'>Sign in ⚡</h1>
						<form
							className='mt-4 space-y-4 pl-2'
							onSubmit={e => {
								e.preventDefault();
								handleSignIn();
							}}
						>
							<div className='flex w-[90%] flex-col space-y-2'>
								<p>Email</p>
								<input
									type='text'
									placeholder='example@gmail.com'
									className='input-field outline-none'
									value={email}
									onChange={e => setEmail(e.target.value)}
								/>
							</div>
							<div className='flex w-[90%] flex-col space-y-2 '>
								<p>Password</p>
								<input
									type='password'
									required
									className='input-field outline-none'
									placeholder='*****'
									value={password}
									onChange={e => setPassword(e.target.value)}
								/>
							</div>
						</form>
						<button
							type='submit'
							className='my-4 flex  w-[90%] cursor-pointer items-center  justify-center rounded-md bg-blue-600 py-2 font-semibold text-white hover:bg-blue-500'
							onClick={handleSignIn}
						>
							Login
						</button>
						<p className=' font-semibold'>
							Not registered yet?
							<Link className='cursor-pointer font-bold' href={'/signup'}>
								<a className=' text-blue-600 hover:underline'> Sign up</a>
							</Link>
						</p>
						<div className=' mt-2 flex items-center space-x-4  '>
							<div className='h-[1px] w-[40%] bg-black' /> <span>or</span>
							<div className='h-[1px] w-[40%] bg-black' />
						</div>
						<p className='my-2 mr-[2rem] text-center font-semibold '>Sign In using other social networks</p>
						<div className='my-2 mr-[2rem] flex justify-center space-x-[3rem]'>
							<div onClick={handleSignInWithGoogle} className='cursor-pointer'>
								<Image src={'/google.svg'} alt='google-logo' width={30} height={30} />
							</div>
							<div onClick={handleSignInWithGithub} className='cursor-pointer'>
								<Image src={'/github.svg'} alt='github-logo' width={30} height={30} />
							</div>
						</div>
					</div>
				</div>
				{/* Right Section - Image and just for UI. */}

				<div className='relative hidden w-[50%] lg:inline-flex'>
					<div className='absolute top-0 left-0 h-[100%] w-[100%] bg-black opacity-[0.5]'></div>
					<Image src='/sidebar.jpg' alt='right-side-image' layout='fill' className='object-cover' />
				</div>
			</main>
		</>
	);
};

export default SignIn;
