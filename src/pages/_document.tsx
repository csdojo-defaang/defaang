import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<link rel='icon' href='/favicon.ico' />
				<meta name='description' content='// TODO: website description' />
				{/* Open Graph Meta Tags */}
				<meta property='og:title' content='Defaang' />
				<meta property='og:description' content='// TODO: website description' />
				<meta property='og:type' content='website' />
				<meta property='og:image' content='// TODO: logo.png' />
				{/* Theme Color Meta Tags */}
				<meta name='theme-color' content='// TODO: color' />
				{/* Twitter Meta Tags  */}
				<meta name='twitter:title' content='Defaang' />
				<meta name='twitter:description' content='// TODO: website description' />
				<meta name='twitter:image' content='// TODO: https://root-domain-name/logo.png' />
				<meta name='twitter:card' content='summary' />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
