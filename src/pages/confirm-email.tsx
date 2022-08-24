import Head from 'next/head';
import Image from 'next/image';
import { type NextPage } from 'next';

<<<<<<< HEAD
<<<<<<< HEAD
const ConfirmEmail: NextPage = () => {
=======
const confirmEmail: NextPage = () => {
>>>>>>> bcd78f7 (feat: better signup flow)
=======
const ConfirmEmail: NextPage = () => {
>>>>>>> f4d1bc6 (fix: use pascal case for page component)
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
<<<<<<< HEAD
<<<<<<< HEAD
export default ConfirmEmail;
=======
export default confirmEmail;
>>>>>>> bcd78f7 (feat: better signup flow)
=======
export default ConfirmEmail;
>>>>>>> f4d1bc6 (fix: use pascal case for page component)
