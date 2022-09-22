import Head from 'next/head';
import { Header2 } from '../components/Header2';
import { CallToAction } from '../components/CallToAction';
import { CallToAction2 } from '../components/CallToAction2';
import { Features } from '../components/Features';
import { Hero } from '../components/Hero';

export default function Home() {
	return (
		<>
			<Head>
				<title>{'defaang: recently-asked interview questions at FAANG+, collected & curated'}</title>
			</Head>

			<div className="bg-[url('/hero-background.jpg')] bg-top">
				<Header2 />
				<main>
					<Hero />
					<CallToAction />
					<Features />
					<CallToAction2 />
				</main>
			</div>
		</>
	);
}
