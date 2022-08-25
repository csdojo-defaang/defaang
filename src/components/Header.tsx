import Link from 'next/link';
import { FaDiscord, FaGithub, FaTwitter } from 'react-icons/fa';

export function Header() {
	return (
		<nav className='flex items-center justify-between py-4 shadow-[rgba(17,17,26,0.1)_0px_1px_0px] lg:pl-[20%] lg:pr-[20%]'>
			<Link href='/'>
				<a>
					<span className='cursor-pointer px-5 text-3xl font-bold text-gray-700'>defaang</span>
				</a>
			</Link>
			<div className='mx-5 flex w-1/3 items-center justify-between lg:w-1/6'>
				<Link href='https://github.com/ykdojo/defaang'>
					<a target='_blank' rel='noopener noreferrer'>
						<FaGithub className='h-8 w-8' title='GitHub' />
					</a>
				</Link>
				<Link href='https://discord.gg/aJp6Fypb'>
					<a target='_blank' rel='noopener noreferrer'>
						<FaDiscord className='h-8 w-8' title='Discord' />
					</a>
				</Link>
				<Link href='https://twitter.com/ykdojo'>
					<a target='_blank' rel='noopener noreferrer'>
						<FaTwitter className='h-8 w-8' title='Twitter' />
					</a>
				</Link>
			</div>
		</nav>
	);
}
