import GoogleIcon from '@mui/icons-material/Google';
import Login from '../components/Login';
import Register from '../components/Register';
import { useState } from 'react';
import Image from 'next/image';

function Welcome() {
	const [changeComponent, setChangeComponent] = useState<boolean>(false);
	return (
		<main className='flex h-screen w-screen'>
			{/* Left section - main login  */}
			{!changeComponent ? (
				<Login setchangeComponent={setChangeComponent} />
			) : (
				<Register setchangeComponent={setChangeComponent} />
			)}
			{/* Right Section - Image and just for UI. */}

			<div className='relative hidden w-[50%] lg:inline-flex'>
				<div className='absolute top-0 left-0 h-[100%] w-[100%] bg-black opacity-[0.5]'></div>
				<Image
					src='https://images.unsplash.com/photo-1608306448197-e83633f1261c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
					alt='right-side-image'
					layout='fill'
					className='object-cover'
				/>
			</div>
		</main>
	);
}

export default Welcome;
