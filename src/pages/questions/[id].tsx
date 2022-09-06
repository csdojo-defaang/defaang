import Head from 'next/head';
import { useRouter } from 'next/router';

// TODO: use this page to show a question using its id
export default function ViewQuestion() {
	const router = useRouter();
	const { id } = router.query;

	return (
		<>
			<Head>
				<title>Question · defaang</title>
			</Head>

			<main>
				<p>Question Id: {id}</p>;
			</main>
		</>
	);
}
