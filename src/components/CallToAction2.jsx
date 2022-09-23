import Image from 'next/future/image';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import backgroundImage from '@/images/background-call-to-action.jpg';

export function CallToAction2() {
	return (
		<section id='submit-question' className='relative overflow-hidden bg-blue-600 py-32'>
			<Image
				className='absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2'
				src={backgroundImage}
				alt=''
				width={2347}
				height={1244}
				unoptimized
			/>
			<Container className='relative'>
				<div className='mx-auto max-w-lg text-center'>
					<h2 className='font-display text-3xl tracking-tight text-white sm:text-4xl'>
						Submit a recently asked interview question
					</h2>
					<p className='mt-4 text-lg tracking-tight text-white'>
						Feel free to submit a recently asked interview question - anonymously if you&apos;d like.
					</p>
					<Button href='/questions/new' color='white' className='mt-10'>
						<span className='text-blue-600'>Submit Question</span>
					</Button>
				</div>
			</Container>
		</section>
	);
}
