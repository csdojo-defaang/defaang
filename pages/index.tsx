import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Defaang</title>
      </Head>

      <main className="w-full  px-20 text-center">
        <h1 className="text-5xl font-medium">
        Hello There!  Welcome to Defaang. <br />
        A website that will curate recently-asked interview questions from FAANG+ to help people practice & prep!
        </h1>
        <br />
        <p className='font-medium text-teal-500'>This is a brand new website and it something that is being created on the Go</p>
        <br />
<p className='font-medium'> If you have any idea about something you want to see in the website, feel free to start an issue or discussion around that <a className='text-red-400' href="https://github.com/ykdojo/defaang"><i>here.</i></a></p>
      
      </main>

    
    </div>
  )
}

export default Home
