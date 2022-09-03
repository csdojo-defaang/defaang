import Link from 'next/link';
import { HiBell, HiMenu, HiX } from 'react-icons/hi';
import { Disclosure } from '@headlessui/react';

import type { UserProps } from '../../lib/types';
import { UserMenu } from './UserMenu';
import { useSignOut } from './hooks';

export function Header({ user }: UserProps) {
	const userName = user?.email?.split('@')[0];
	const signOut = useSignOut();

	return (
		<Disclosure as='nav' className='bg-gray-800'>
			{({ open }) => (
				<>
					<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
						<div className='flex h-16 items-center justify-between'>
							<div className='flex items-center'>
								<div className='flex-shrink-0'>
									<img
										className='block h-8 w-auto lg:hidden'
										src='https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=500'
										alt='Workflow'
									/>
									<img
										className='hidden h-8 w-auto lg:block'
										src='https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=500'
										alt='Workflow'
									/>
								</div>
								<div className='hidden sm:ml-6 sm:block'>
									<div className='flex space-x-4'>
										<a href='#' className='rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white'>
											Dashboard
										</a>
										<a
											href='#'
											className='rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
										>
											Team
										</a>
										<a
											href='#'
											className='rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
										>
											Projects
										</a>
										<a
											href='#'
											className='rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
										>
											Calendar
										</a>
									</div>
								</div>
							</div>
							{user ? (
								<>
									{/* Mobile View */}
									<div className='-mr-2 flex sm:hidden'>
										<Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
											<span className='sr-only'>Open main menu</span>
											{open ? (
												<HiX className='block h-6 w-6' aria-hidden='true' />
											) : (
												<HiMenu className='block h-6 w-6' aria-hidden='true' />
											)}
										</Disclosure.Button>
									</div>

									{/* Desktop View */}
									<div className='hidden sm:ml-6 sm:block'>
										<div className='flex items-center'>
											<button
												type='button'
												className='rounded-full bg-gray-800 p-2 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
											>
												<span className='sr-only'>View notifications</span>
												<HiBell className='h-6 w-6' aria-hidden='true' />
											</button>
											<UserMenu user={user} className='relative ml-2' />
										</div>
									</div>
								</>
							) : (
								<Link href='/signin'>
									<a className='rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white'>
										Sign In
									</a>
								</Link>
							)}
						</div>
					</div>

					<Disclosure.Panel className='sm:hidden'>
						<div className='space-y-1 px-2 pt-2 pb-3'>
							<Disclosure.Button
								as='a'
								href='#'
								className='block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white'
							>
								Dashboard
							</Disclosure.Button>
							<Disclosure.Button
								as='a'
								href='#'
								className='block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
							>
								Team
							</Disclosure.Button>
							<Disclosure.Button
								as='a'
								href='#'
								className='block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
							>
								Projects
							</Disclosure.Button>
							<Disclosure.Button
								as='a'
								href='#'
								className='block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
							>
								Calendar
							</Disclosure.Button>
						</div>
						<div className='border-t border-gray-700 pt-4 pb-3'>
							<div className='flex items-center px-5'>
								<div className='ml-3'>
									<div className='text-base font-medium text-white'>{userName}</div>
									<div className='text-sm font-medium text-gray-400'>{user?.email}</div>
								</div>
								<button
									type='button'
									className='ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
								>
									<span className='sr-only'>View notifications</span>
									<HiBell className='h-6 w-6' aria-hidden='true' />
								</button>
							</div>
							<div className='mt-3 space-y-1 px-2'>
								<Disclosure.Button
									as='a'
									href='#'
									className='block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white'
								>
									Your Profile
								</Disclosure.Button>
								<Disclosure.Button
									as='a'
									href='#'
									className='block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white'
								>
									Settings
								</Disclosure.Button>
								<Disclosure.Button
									onClick={signOut}
									as='button'
									className='block w-full rounded-md px-3 py-2 text-left text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white'
								>
									Sign out
								</Disclosure.Button>
							</div>
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
