import Head from 'next/head';
import { useRouter } from 'next/router';
import type { PageProps } from '../../lib/types';
import { QuestionSubmissionForm } from '../../components/QuestionSubmissionForm';

export default function SubmitQuestion(pageProps: PageProps) {
	const router = useRouter();

	// If the user is not logged in, redirect them to the signin page
	if (typeof localStorage !== 'undefined' && !localStorage['supabase.auth.token']) {
		router.push('/signin');
	}

	return (
		<>
			<Head>
				<title>New Question · defaang</title>
			</Head>

			<main className='flex justify-center py-10 px-4 pt-10 sm:px-12'>
				<QuestionSubmissionForm {...pageProps} />
			</main>
		</>
	);
}
