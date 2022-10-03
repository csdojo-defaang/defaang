import { PageProps } from '@/lib/types';
import Head from 'next/head';
import { CallToAction } from '../components/CallToAction';
import { CallToAction2 } from '../components/CallToAction2';
import { Features } from '../components/Features';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';

export default function Home({ session }: PageProps) {
  return (
    <>
      <Head>
        <title>Defaang</title>
        <meta name='title' content='Defaang' />
        <meta
          name='description'
          content='A website that will curate recently-asked interview questions from FAANG+ to help people practice and prep!'
        />

        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://defaang.io/' />
        <meta property='og:title' content='Defaang' />
        <meta
          property='og:description'
          content='A website that will curate recently-asked interview questions from FAANG+ to help people practice and prep!'
        />
        <meta
          property='og:image'
          content='https://user-images.githubusercontent.com/1811651/190090988-bd062b3d-635b-4ce1-ac15-81d3c9edcb91.png'
        />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://defaang.io/' />
        <meta property='twitter:title' content='Defaang' />
        <meta
          property='twitter:description'
          content='A website that will curate recently-asked interview questions from FAANG+ to help people practice and prep!'
        />
        <meta
          property='twitter:image'
          content='https://user-images.githubusercontent.com/1811651/190090988-bd062b3d-635b-4ce1-ac15-81d3c9edcb91.png'
        />
      </Head>

      <div className="bg-[url('/hero-background.jpg')] bg-top">
        <Header session={session} />
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
