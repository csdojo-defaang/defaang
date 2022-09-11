import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { QuestionSubmissionForm } from '../../components/QuestionSubmissionForm';
import { useTypedSelector } from '../../store';

export default function SubmitQuestion() {
	const router = useRouter();
	const { session } = useTypedSelector(state => state.auth);

	// If the user is not logged in, redirect them to the signin page
	useEffect(() => {
		if (!session?.user) {
			router.push('/signin');
		}
	});

	return (
		<>
			<Head>
				<title>New Question · defaang</title>
			</Head>

			<main className='flex justify-center py-10 px-4 pt-10 sm:px-12'>
				<QuestionSubmissionForm />
			</main>
		</>
	);
}
