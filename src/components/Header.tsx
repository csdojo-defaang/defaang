import { Disclosure } from '@headlessui/react';
import { HiBell, HiMenu, HiX } from 'react-icons/hi';
import Link from 'next/link';

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ');
}

export function Header() {
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
							<div className='hidden sm:ml-6 sm:block'>
								<div className='flex items-center'>
									<Link href='/signin'>
										<a className='text-white' target='_blank' rel='noopener noreferrer'>
											Sign In
										</a>
									</Link>
								</div>
							</div>
							<div className='-mr-2 flex sm:hidden'>
								{/* Mobile menu button */}
								<Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
									<span className='sr-only'>Open main menu</span>
									{open ? (
										<HiX className='block h-6 w-6' aria-hidden='true' />
									) : (
										<HiMenu className='block h-6 w-6' aria-hidden='true' />
									)}
								</Disclosure.Button>
							</div>
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
									<div className='text-base font-medium text-white'>Tom Cook</div>
									<div className='text-sm font-medium text-gray-400'>tom@example.com</div>
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
									as='a'
									href='#'
									className='block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white'
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
