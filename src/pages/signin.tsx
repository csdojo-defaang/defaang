import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { type NextPage } from 'next';
import { SignInForm } from '../components/SignIn/Form';
// import { SignInSocial } from '../components/SignIn/Social';

const SignIn: NextPage = () => {
	return (
		<>
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
