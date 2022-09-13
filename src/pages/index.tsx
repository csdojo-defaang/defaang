import Head from 'next/head';
import { Header2 } from '../components/Header2';
// import { PlaceHolder } from '../components/PlaceHolder';
// import { Footer } from '../components/Footer';

export default function Home() {
	return (
		<>
			<Head>
				<title>{'defaang: recently-asked interview questions at FAANG+, collected & curated'}</title>
			</Head>

			<Header2 />
			{/* <main className='flex min-h-screen flex-col items-center justify-center px-[5%] text-center lg:px-[20%]'>
				<PlaceHolder />
			</main>
			<Footer /> */}
		</>
	);
}
