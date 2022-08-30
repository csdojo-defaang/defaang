import type { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../components/Header';
import type { UserProps } from '../lib/types';

const Home: NextPage<UserProps> = ({ user }) => {
	return (
		<div>
			<Head>
				<title>{'defaang: recently-asked interview questions at FAANG+, collected & curated'}</title>
			</Head>
			<Header user={user} />
			<main className='flex h-[calc(100vh-4rem)] w-full flex-col items-center justify-center px-[5%]  text-center lg:h-[calc(100vh-6rem)] lg:px-[20%]'>
				<h1 className='text-3xl font-bold text-gray-800 lg:text-5xl'>Welcome to defaang 🎉</h1>
				<h3 className='mt-8 text-xl font-normal leading-7 text-gray-600 lg:text-3xl lg:leading-10'>
					A website that will curate recently-asked interview questions from FAANG+ to help people practice & prep!
				</h3>
				<p className='text-md my-8 font-medium text-teal-600 lg:text-xl'>
					This is a brand new website and it something that is being created on the Go
				</p>
				<p className='lg:text-md text-sm font-medium text-gray-900'>
					If you have any idea about something you want to see in the website, feel free to start an issue or discussion
					around that on our discord server or github discussions.
				</p>
			</main>
		</div>
	);
};

export default Home;
