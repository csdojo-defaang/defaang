import GoogleIcon from '@mui/icons-material/Google';
import { useState } from 'react';
import { supabase } from '../utils/supabaseClient';

function Register({ setchangeComponent }) {
	const [email, setEmail] = useState('');
	const [password, setPassowrd] = useState('');
	const [confirmPass, setConfirmPass] = useState('');
	const [username, setUsername] = useState('');
	const handleSignup = async () => {
		const { user, error } = await supabase.auth.signUp({ email, password, username });
		if (error) alert(error.message);
		else alert(`Success Register in ${user?.email}`);
	};
	return (
		<div className='flex h-screen  w-[100%] flex-col items-center justify-center bg-gray-100 lg:w-[50%]'>
			{/* Now you can decide different login ways - primarily I am giving google and twiiter for more add it yourself. */}
			<div className='h-full w-full  bg-white p-4 md:shadow-lg lg:h-[650px] lg:w-[450px]'>
				<h1 className='p-2 text-3xl font-semibold'>Create Account ⚡</h1>
				<p className='p-2 py-4 text-lg font-medium'>See your growth and get consulting support.</p>
				<div className='flex w-max cursor-pointer items-center space-x-2 rounded-md bg-blue-600 px-5 py-2 text-white hover:bg-blue-500'>
					<GoogleIcon className='h-5 w-5' color='inherit' />
					<button>Create account with Google</button>
				</div>
				<form
					onSubmit={e => {
						e.preventDefault();
						handleSignup();
					}}
					className='mt-4 flex flex-col space-y-4'
				>
					<div className='flex w-[90%] flex-col space-y-2'>
						<p>Email</p>
						<input
							type='text'
							placeholder='dojo@gmaill.com'
							required
							className='input-field outline-none'
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
					<div className='flex w-[90%] flex-col space-y-2'>
						<p>Username</p>
						<input
							type='text'
							placeholder='Dojo'
							required
							className='input-field outline-none'
							value={username}
							onChange={e => setUsername(e.target.value)}
						/>
					</div>
					<div className='flex w-[90%] flex-col space-y-2 '>
						<p>Password</p>
						<input
							type='text'
							required
							className='input-field outline-none'
							placeholder='*****'
							value={password}
							onChange={e => setPassowrd(e.target.value)}
						/>
					</div>
					<div className='flex w-[90%] flex-col space-y-2 '>
						<p>Confirm Password</p>
						<input
							type='text'
							required
							className='input-field outline-none'
							placeholder='*****'
							value={confirmPass}
							onChange={e => setConfirmPass(e.target.value)}
						/>
					</div>
				</form>
				<button className='my-4 flex  w-[90%] cursor-pointer items-center  justify-center rounded-md bg-blue-600 py-2 font-semibold text-white hover:bg-blue-500'>
					Login
				</button>
				<p className='py-2 font-semibold'>
					Already has an account ?{' '}
					<span
						className='cursor-pointer font-bold text-blue-600 hover:underline'
						onClick={() => changeComponent(false)}
					>
						Sign in
					</span>
				</p>
			</div>
		</div>
	);
}

export default Register;
