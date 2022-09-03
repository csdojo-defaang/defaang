import { Fragment } from 'react';
import { HiUser } from 'react-icons/hi';
import { Menu, Transition } from '@headlessui/react';
import { type User } from '@supabase/gotrue-js/src/lib/types';
import cn from 'classnames';

import { useSignOut } from './hooks';

export type UserMenuPros = {
	user: User;
	className?: string;
};

type MenuLink = {
	label: string;
	to: string;
};

const itemDefaultClassName = 'block px-4 py-2 text-sm text-gray-700';
const menuLinks: MenuLink[] = [
	{ label: 'Profile', to: '#' },
	{ label: 'Settings', to: '#' },
];

export function UserMenu({ user, className = '' }: UserMenuPros) {
	const signOut = useSignOut();

	return (
		<Menu as='div' className={className}>
			<Menu.Button className='rounded-full bg-gray-800 p-2 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
				<span className='sr-only'>Open user menu</span>
				<HiUser className='h-6 w-6' aria-hidden='true' />
			</Menu.Button>
			<Transition
				as={Fragment}
				enter='transition ease-out duration-100'
				enterFrom='transform opacity-0 scale-95'
				enterTo='transform opacity-100 scale-100'
				leave='transition ease-in duration-75'
				leaveFrom='transform opacity-100 scale-100'
				leaveTo='transform opacity-0 scale-95'
			>
				<Menu.Items className='absolute right-0 mt-2 w-48 origin-top-right divide-y rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
					<Menu.Items>
						<Menu.Item>
							<span className={cn(itemDefaultClassName, 'cursor-default')}>
								Signed in as <b>{user.email}</b>
							</span>
						</Menu.Item>
					</Menu.Items>
					<Menu.Items>
						{menuLinks.map(({ label, to }: MenuLink) => (
							<Menu.Item key={`${label}-${to}`}>
								{({ active }) => (
									<a href={to} className={cn(itemDefaultClassName, { 'bg-gray-100': active })}>
										{label}
									</a>
								)}
							</Menu.Item>
						))}
					</Menu.Items>
					<Menu.Items>
						<Menu.Item>
							{({ active }) => (
								<button
									onClick={signOut}
									className={cn(itemDefaultClassName, 'w-full text-left', { 'bg-gray-100': active })}
								>
									Sign out
								</button>
							)}
						</Menu.Item>
					</Menu.Items>
				</Menu.Items>
			</Transition>
		</Menu>
	);
}
