import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className='min-h-screenpy-2'>
      <Head>
        <title>defaang</title>
      </Head>
      <div className='flex items-center justify-between py-4 shadow-[rgba(17,17,26,0.1)_0px_1px_0px] lg:pl-[20%] lg:pr-[20%]'>
        <div className='cursor-pointer px-5 text-3xl font-bold text-gray-700'>defaang</div>
        <div className='mx-5 flex w-1/3 items-center justify-between lg:w-1/6'>
          <Link href='https://github.com' rel='noreferrer'>
            <Image src='/github.svg' className='cursor-pointer' height={30} width={30} alt='github' />
          </Link>
          <Link href='https://discord.gg/aJp6Fypb' rel='noreferrer'>
            <Image src='/discord.svg' className='cursor-pointer' height={30} width={30} alt='discord' />
          </Link>
          <Link href='https://twitter.com/ykdojo' rel='noreferrer'>
            <Image src='/twitter.svg' className='cursor-pointer' height={30} width={30} alt='twitter' />
          </Link>
        </div>
      </div>
      <main className='flex h-[calc(100vh-4rem)] w-full flex-col items-center justify-center px-[5%]  text-center lg:h-[calc(100vh-6rem)] lg:px-[20%]'>
        <h3 className='text-3xl font-bold text-gray-800 lg:text-5xl'>Welcome to defaang 🎉</h3>
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
