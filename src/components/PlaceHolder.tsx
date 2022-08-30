import Link from 'next/link';

export function PlaceHolder() {
	return (
		<>
			<h1 className='text-3xl font-bold text-gray-800 lg:text-5xl'>Welcome to defaang 🎉</h1>
			<h3 className='mt-8 text-xl font-normal leading-7 text-gray-600 lg:text-3xl lg:leading-10'>
				{'A website that will curate recently-asked interview questions from FAANG+ to help people practice & prep!'}
			</h3>
			<p className='text-md my-8 font-medium text-teal-600 lg:text-xl'>
				This is a brand new website and it is something that is being created on the Go
			</p>
			<p className='lg:text-md text-sm font-medium text-gray-900'>
				If you have any idea about something you want to see in the website, feel free to start an issue or discussion
				around that on our
				<Link href='https://discord.gg/VjrAf3N7Yn'>
					<a target='_blank' rel='noopener noreferrer' className='text-blue-900'>
						{' discord '}
					</a>
				</Link>
				server or
				<Link href='https://github.com/ykdojo/defaang/discussions'>
					<a target='_blank' rel='noopener noreferrer' className='text-blue-900'>
						{' github discussions'}
					</a>
				</Link>
			</p>
		</>
	);
}
