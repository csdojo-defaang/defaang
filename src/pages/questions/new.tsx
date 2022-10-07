import Head from 'next/head';
import { QuestionSubmissionForm } from '../../components/QuestionSubmissionForm';
import { withPageAuth } from '@supabase/auth-helpers-nextjs';

export default function SubmitQuestion() {
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

export const getServerSideProps = withPageAuth({ redirectTo: '/signup' });
