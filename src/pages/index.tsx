import { PageProps } from '@/lib/types';
import Head from 'next/head';
import { ProgressBarSection } from '@/components/ProgressBarSection';
import { CallToAction } from '../components/CallToAction';
import { CallToAction2 } from '../components/CallToAction2';
import { Features } from '../components/Features';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';

export default function Home({ session }: PageProps) {
  return (
    <>
      <Head>
        <title>{'defaang: recently-asked interview questions at FAANG+, collected & curated'}</title>
      </Head>

      <div className="bg-[url('/hero-background.jpg')] bg-top">
        <Header session={session} />
        <main>
          <Hero />
          <CallToAction />
          <Features />
          <CallToAction2 />
          <ProgressBarSection />
        </main>
      </div>
    </>
  );
}
