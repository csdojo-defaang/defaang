import Head from 'next/head';
import { useRouter } from 'next/router';

// TODO: use this page to show a question using its id
export default function Question() {
	const router = useRouter();
	const { id } = router.query;

	return (
		<>
			<Head>
				<title>Browse Questions · defaang</title>
			</Head>

			<main>
				<p>Question Id: {id}</p>;
			</main>
		</>
	);
}
