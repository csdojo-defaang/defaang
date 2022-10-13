import { ReactNode, Fragment } from 'react';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import clsx from 'clsx';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { NavLink } from '@/components/NavLink';
import { Session } from '@supabase/supabase-js';

function MobileNavLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Popover.Button as={Link} href={href} className='block w-full p-2'>
      {children}
    </Popover.Button>
  );
}

function MobileNavIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden='true'
      className='h-3.5 w-3.5 overflow-visible stroke-slate-700'
      fill='none'
      strokeWidth={2}
      strokeLinecap='round'
    >
      <path d='M0 1H14M0 7H14M0 13H14' className={clsx('origin-center transition', open && 'scale-90 opacity-0')} />
      <path d='M2 2L12 12M12 2L2 12' className={clsx('origin-center transition', !open && 'scale-90 opacity-0')} />
    </svg>
  );
}

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className='relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none'
        aria-label='Toggle Navigation'
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter='duration-150 ease-out'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='duration-150 ease-in'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Popover.Overlay className='fixed inset-0 bg-slate-300/50' />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter='duration-150 ease-out'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='duration-100 ease-in'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <Popover.Panel
            as='div'
            className='absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5'
          >
            <MobileNavLink href='#join-conversation'>Join conversation</MobileNavLink>
            <MobileNavLink href='#how-it-works'>How it works</MobileNavLink>
            <MobileNavLink href='/signin'>Sign in</MobileNavLink>
            <MobileNavLink href='/signup'>Sign up</MobileNavLink>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
}

export function Header({ session }: { session: Session | null | undefined }) {
  return (
    <header className='py-10'>
      <Container>
        <nav className='relative z-50 flex justify-between'>
          <div className='flex items-center md:gap-x-12'>
            <Link href='#' aria-label='Home'>
              <span className='font-serif text-xl font-medium text-blue-600'>defaang</span>
            </Link>
            <div className='hidden md:flex md:gap-x-6'>
              <NavLink href='#join-conversation'>Join conversation</NavLink>
              <NavLink href='#how-it-works'>How it works</NavLink>
              <NavLink href='#submit-question'>Submit question</NavLink>
            </div>
          </div>
          <div className='flex items-center gap-x-2'>
            {session ? (
              <Button href='/questions/new' color='blue'>
                <span>Submit a question</span>
              </Button>
            ) : (
              <div className='hidden items-center gap-x-2 xxs:flex'>
                <NavLink href='/signin'>
                  <span>Sign in</span>
                </NavLink>
                <Button href='/signup' color='blue'>
                  <span>
                    Sign up <span className='hidden lg:inline'>today</span>
                  </span>
                </Button>
              </div>
            )}
            <div className='-mr-1 md:hidden'>
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}
