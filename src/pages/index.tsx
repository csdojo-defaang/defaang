import type { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../components/Header';
import type { UserProps } from '../lib/types';
import { PlaceHolder } from '../components/PlaceHolder';
import { Footer } from '../components/Footer';

const Home: NextPage<UserProps> = ({ user }) => {
	return (
		<>
			<Head>
				<title>{'defaang: recently-asked interview questions at FAANG+, collected & curated'}</title>
			</Head>

			<Header user={user} />
			<main className='flex min-h-screen flex-col items-center justify-center px-[5%] text-center lg:px-[20%]'>
				<PlaceHolder />
			</main>
			<Footer />
		</>
	);
};

export default Home;
