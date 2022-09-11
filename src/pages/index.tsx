import Head from 'next/head';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { PlaceHolder } from '../components/PlaceHolder';

export default function Home() {
	return (
		<>
			<Head>
				<title>{'defaang: recently-asked interview questions at FAANG+, collected & curated'}</title>
			</Head>

			<Header />
			<main className='flex min-h-screen flex-col items-center justify-center px-[5%] text-center lg:px-[20%]'>
				<PlaceHolder />
			</main>
			<Footer />
		</>
	);
}
