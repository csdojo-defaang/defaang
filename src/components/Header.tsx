import { NextPage } from 'next/types';
import Image from 'next/image';
import Link from 'next/link';

export const Header: NextPage = () => {
	return (
		<nav className='flex items-center justify-between py-4 shadow-[rgba(17,17,26,0.1)_0px_1px_0px] lg:pl-[20%] lg:pr-[20%]'>
			<Link href='/' rel='noreferrer'>
				<a>
					<span className='cursor-pointer px-5 text-3xl font-bold text-gray-700'>defaang</span>
				</a>
			</Link>
			<div className='mx-5 flex w-1/3 items-center justify-between lg:w-1/6'>
				<Link href='https://github.com/ykdojo/defaang' rel='noreferrer'>
					<a>
						<Image src='/github.svg' className='cursor-pointer' height={30} width={30} alt='github' />
					</a>
				</Link>
				<Link href='https://discord.gg/aJp6Fypb' rel='noreferrer'>
					<a>
						<Image src='/discord.svg' className='cursor-pointer' height={30} width={30} alt='discord' />
					</a>
				</Link>
				<Link href='https://twitter.com/ykdojo' rel='noreferrer'>
					<a>
						<Image src='/twitter.svg' className='cursor-pointer' height={30} width={30} alt='twitter' />
					</a>
				</Link>
			</div>
		</nav>
	);
};
