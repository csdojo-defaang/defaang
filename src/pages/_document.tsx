import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <link rel='stylesheet' href='https://rsms.me/inter/inter.css' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Lexend:wght@400;500&display=swap'
        />
        <meta
          name='description'
          content='A website that will curate recently-asked interview questions from FAANG+ to help people practice and prep!'
        />
        {/* Open Graph Meta Tags */}
        <meta property='og:title' content='defaang' />
        <meta
          property='og:description'
          content='A website that will curate recently-asked interview questions from FAANG+ to help people practice and prep!'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://defaang.io/' />
        <meta
          property='og:image'
          content='https://user-images.githubusercontent.com/1811651/190090988-bd062b3d-635b-4ce1-ac15-81d3c9edcb91.png'
        />
        {/* Theme Color Meta Tags */}
        <meta name='theme-color' content='#2d7af0' />
        {/* Twitter Meta Tags  */}
        <meta property='twitter:title' content='defaang' />
        <meta
          property='twitter:description'
          content='A website that will curate recently-asked interview questions from FAANG+ to help people practice and prep!'
        />
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://defaang.io/' />
        <meta
          property='twitter:image'
          content='https://user-images.githubusercontent.com/1811651/190090988-bd062b3d-635b-4ce1-ac15-81d3c9edcb91.png'
        />
      </Head>
      <body className='flex h-full flex-col bg-gray-100'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
