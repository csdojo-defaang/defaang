import Head from 'next/head';
import Image from 'next/image';
import { type NextPage } from 'next';

const confirmEmail: NextPage = () => {
	return (
		<>
			<Head>
				<title>defaang | Confirm email</title>
			</Head>
			<main className='flex h-full min-h-screen items-center justify-center bg-gray-50'>
				<div className='grid w-full max-w-xs items-center justify-center rounded-lg bg-white p-6 shadow-lg sm:max-w-md'>
					<div className='relative mx-auto aspect-square w-full max-w-xs '>
						<Image src='/welcome.svg' alt='envelope' layout='fill' className='object-cover object-center'></Image>
					</div>
					<div className='text-center text-gray-700'>
						<p>Thanks for signing up! We&#39;ve sent you an email to confirm your account.</p>
					</div>
				</div>
			</main>
		</>
	);
};
export default confirmEmail;
