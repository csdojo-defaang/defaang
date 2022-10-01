import Head from 'next/head';
import Link from 'next/link';

// TODO: this will list questions and will have a link to submit a new question page
export default function BrowseQuestions() {
  return (
    <>
      <Head>
        <title>Browse Questions · defaang</title>
      </Head>

      <main>
        <Link href='/questions/new'>
          <a>New</a>
        </Link>
      </main>
    </>
  );
}
