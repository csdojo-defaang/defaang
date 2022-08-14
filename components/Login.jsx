import React, { useState } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import { supabase } from '../utils/supabaseClient';
import Image from 'next/image';

const Login = ({ setchangeComponent }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const handleSignIn = async () => {
		const { user, error } = await supabase.auth.signIn({ email, password });
		if (error) alert(error.message);
		else alert(`Success Login in ${user?.email}`);
	};
	return (
		<div className='flex h-screen  w-[100%] flex-col items-center justify-center bg-gray-100 lg:w-[50%]'>
			{/* Now you can decide different login ways - primarily I am giving google and twiiter for more add it yourself. */}
			<div className='w-full  bg-white p-4 md:shadow-lg lg:h-[500px] lg:w-[400px]'>
				<h1 className='p-2 text-3xl font-semibold'>Login ⚡</h1>
				<p className='p-2 py-4 text-lg font-medium'>See your growth and get consulting support.</p>
				<div className='flex w-max cursor-pointer items-center space-x-2 rounded-md bg-blue-600 px-5 py-2 text-white hover:bg-blue-500'>
					<GoogleIcon className='h-5 w-5' color='inherit' />

					<button>Sign in with Google</button>
				</div>
				<form
					className='mt-4'
					onSumbit={e => {
						e.preventDefault();
						handleSignIn();
					}}
				>
					<div className='flex w-[90%] flex-col space-y-2'>
						<p>Email</p>
						<input
							type='text'
							placeholder='dojo@gmaill.com'
							required
							className='input-field'
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
					<div className='flex w-[90%] flex-col space-y-2 '>
						<p>Password</p>
						<input
							type='text'
							required
							className='input-field'
							placeholder='*****'
							value={password}
							onChange={e => setPassword(e.target.value)}
						/>
					</div>
				</form>
				<button
					className='my-4 flex  w-[90%] cursor-pointer items-center  justify-center rounded-md bg-blue-600 py-2 font-semibold text-white hover:bg-blue-500'
					onClick={() => handleSignIn}
				>
					Login
				</button>
				<p className='py-2 font-semibold'>
					Not registered yet ?{' '}
					<span
						className='cursor-pointer font-bold text-blue-600 hover:underline'
						onClick={() => setchangeComponent(true)}
					>
						Register here
					</span>
				</p>
			</div>
		</div>
	);
};

export default Login;
