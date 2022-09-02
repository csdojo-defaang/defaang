import { useState } from 'react';
import { supabase } from '../../utils/supabaseClient';
import { HiEye, HiEyeOff } from 'react-icons/hi';

export function SignInForm() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);

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
		<form
			className='mt-4 flex flex-col space-y-4'
			onSubmit={e => {
				e.preventDefault();
				handleSignIn();
			}}
		>
			{/* TODO: allow both username and email in this input */}
			<div className='flex w-full flex-col space-y-2'>
				<label htmlFor='email' className='text-sm text-gray-600'>
					Email address
				</label>
				<input
					type='email'
					id='email'
					autoComplete='email'
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
				<div className='flex'>
					<input
						type={showPassword ? 'text' : 'password'}
						id='password'
						autoComplete='current-password'
						required
						className='relative block w-full appearance-none rounded-l-md border border-r-0 border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
					<button
						className='rounded-r-md border border-l-0 border-gray-300 px-2 focus:outline-none'
						type='button'
						onClick={() => setShowPassword(!showPassword)}
					>
						{showPassword ? (
							<HiEye className='h-4 w-4 fill-gray-500' title='hide password' />
						) : (
							<HiEyeOff className='h-4 w-4 fill-gray-500' title='show password' />
						)}
					</button>
				</div>
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
				Sign in
			</button>
		</form>
	);
}
